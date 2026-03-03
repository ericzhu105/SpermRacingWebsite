import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;

function isValidIPv4(ip: string) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) &&
    ip.split('.').every(n => parseInt(n) >= 0 && parseInt(n) <= 255);
}

function isValidIPv6(ip: string) {
  return /^[0-9a-fA-F:]+$/.test(ip) && ip.length <= 45;
}

export async function GET(request: NextRequest) {
  let clientIP =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    '';

  // Rate limit by requester IP
  const rateLimitKey = clientIP || 'unknown';
  const now = Date.now();
  const entry = RATE_LIMIT.get(rateLimitKey);
  if (entry && entry.resetAt > now) {
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    entry.count++;
  } else {
    RATE_LIMIT.set(rateLimitKey, { count: 1, resetAt: now + WINDOW_MS });
  }

  // Clean up stale entries periodically
  if (RATE_LIMIT.size > 10000) {
    for (const [key, val] of RATE_LIMIT) {
      if (val.resetAt <= now) RATE_LIMIT.delete(key);
    }
  }

  const isLocal = !clientIP || clientIP === '::1' || clientIP === '127.0.0.1';

  // Validate IP format to prevent SSRF
  if (!isLocal && !isValidIPv4(clientIP) && !isValidIPv6(clientIP)) {
    clientIP = '';
  }

  let geo: any = {};
  try {
    const url = isLocal || !clientIP
      ? 'https://ipapi.co/json/'
      : `https://ipapi.co/${encodeURIComponent(clientIP)}/json/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      geo = await res.json();
      if (isLocal || !clientIP) clientIP = geo.ip || 'unknown';
    }
  } catch {
    // Geo lookup failed
  }

  return NextResponse.json({
    ip: clientIP || 'unknown',
    city: String(geo.city || '').slice(0, 100),
    region: String(geo.region || '').slice(0, 100),
    country_name: String(geo.country_name || '').slice(0, 100),
    org: String(geo.org || '').slice(0, 200),
  });
}
