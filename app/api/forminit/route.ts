import { NextRequest, NextResponse } from 'next/server';
import { createForminitProxy } from 'forminit/next';

const DEADLINE = new Date('2026-03-15T23:59:59Z');

const RATE_LIMIT = new Map<string, { count: number; resetAt: number }>();
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 300_000; // 5 minutes

const forminit = createForminitProxy({
  apiKey: process.env.FORMINIT_API_KEY!,
});

export async function POST(request: NextRequest) {
  // Server-side deadline check — can't be bypassed by changing client clock
  if (new Date() > DEADLINE) {
    return NextResponse.json(
      { error: 'DEADLINE_PASSED', message: 'Applications are closed.' },
      { status: 403 }
    );
  }

  // Server-side rate limiting by IP
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

  // Clean stale entries
  if (RATE_LIMIT.size > 10000) {
    for (const [key, val] of RATE_LIMIT) {
      if (val.resetAt <= now) RATE_LIMIT.delete(key);
    }
  }

  return forminit.POST(request);
}
