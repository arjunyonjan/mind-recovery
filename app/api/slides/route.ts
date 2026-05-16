import { getSlides } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const slides = await getSlides();
    return NextResponse.json({ success: true, data: slides });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch slides' },
      { status: 500 }
    );
  }
}
