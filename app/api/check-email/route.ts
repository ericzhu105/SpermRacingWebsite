import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ exists: false });
    }

    const normalized = email.toLowerCase().trim();
    if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json({ exists: false });
    }

    const { data, error } = await supabase
      .from('wc_submissions')
      .select('id')
      .eq('email', normalized)
      .limit(1);

    if (error) {
      return NextResponse.json({ exists: false });
    }

    return NextResponse.json({ exists: data && data.length > 0 });
  } catch {
    return NextResponse.json({ exists: false });
  }
}
