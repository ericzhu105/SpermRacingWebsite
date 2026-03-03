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

async function geoLookup(ip: string | null) {
  // Primary: ip-api.com (45 req/min, no daily cap, no key needed)
  try {
    const url = ip ? `http://ip-api.com/json/${encodeURIComponent(ip)}` : 'http://ip-api.com/json/';
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success') {
        return {
          ip: data.query || ip || 'unknown',
          city: data.city || '',
          region: data.regionName || '',
          country_name: data.country || '',
          org: data.isp || '',
        };
      }
    }
  } catch { /* fall through */ }

  // Fallback: ipapi.co
  try {
    const url = ip ? `https://ipapi.co/${encodeURIComponent(ip)}/json/` : 'https://ipapi.co/json/';
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (!data.error) {
        return {
          ip: data.ip || ip || 'unknown',
          city: data.city || '',
          region: data.region || '',
          country_name: data.country_name || '',
          org: data.org || '',
        };
      }
    }
  } catch { /* fall through */ }

  return null;
}

export async function GET(request: NextRequest) {
  let clientIP =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    '';

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

  if (RATE_LIMIT.size > 10000) {
    for (const [key, val] of RATE_LIMIT) {
      if (val.resetAt <= now) RATE_LIMIT.delete(key);
    }
  }

  const isLocal = !clientIP || clientIP === '::1' || clientIP === '127.0.0.1';

  if (!isLocal && !isValidIPv4(clientIP) && !isValidIPv6(clientIP)) {
    clientIP = '';
  }

  // Pass null for local dev so the API auto-detects the server's public IP
  const geo = await geoLookup(isLocal ? null : clientIP || null);

  return NextResponse.json({
    ip: geo?.ip || clientIP || 'unknown',
    city: String(geo?.city || '').slice(0, 100),
    region: String(geo?.region || '').slice(0, 100),
    country_name: String(geo?.country_name || '').slice(0, 100),
    org: String(geo?.org || '').slice(0, 200),
  });
}
