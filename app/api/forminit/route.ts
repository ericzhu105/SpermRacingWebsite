import { NextRequest, NextResponse } from 'next/server';
import { createForminitProxy } from 'forminit/next';
import supabase from '@/lib/supabaseClient';

const DEADLINE = new Date('2026-03-15T23:59:59Z');

const RATE_LIMIT = new Map<string, { count: number; resetAt: number }>();
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 300_000; // 5 minutes

const apiKey = process.env.FORMINIT_API_KEY;

const forminit = apiKey
  ? createForminitProxy({ apiKey })
  : null;

function extractEmail(body: any): string | null {
  try {
    const senderBlock = body?.blocks?.find((b: any) => b.type === 'sender');
    const email = senderBlock?.properties?.email;
    if (typeof email === 'string' && email.includes('@')) {
      return email.toLowerCase().trim();
    }
  } catch { /* ignore parse failures */ }
  return null;
}

export async function POST(request: NextRequest) {
  if (new Date() > DEADLINE) {
    return NextResponse.json(
      { error: 'DEADLINE_PASSED', message: 'Applications are closed.' },
      { status: 403 }
    );
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  const now = Date.now();
  const entry = RATE_LIMIT.get(ip);
  if (entry && entry.resetAt > now) {
    if (entry.count >= MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: 'RATE_LIMITED', message: 'Too many submissions. Please wait a few minutes.' },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    RATE_LIMIT.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  if (RATE_LIMIT.size > 10000) {
    for (const [key, val] of RATE_LIMIT) {
      if (val.resetAt <= now) RATE_LIMIT.delete(key);
    }
  }

  if (!forminit) {
    return NextResponse.json(
      { error: 'CONFIG_ERROR', message: 'Server configuration error. FORMINIT_API_KEY is missing.' },
      { status: 500 }
    );
  }

  let email: string | null = null;
  try {
    const clonedBody = await request.clone().json();
    email = extractEmail(clonedBody);
  } catch { /* body parse is non-critical */ }

  const response = await forminit.POST(request);

  if (response.ok && email) {
    supabase
      .from('wc_submissions')
      .insert({ email })
      .then(() => {});
  }

  return response;
}
