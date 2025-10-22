import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    // In a real application, this could fetch from a database or external service
    // For now, returning static data that can be easily updated
    const clientAppData = {
      url: "/apps/lubeck-digital.apk", // Update this URL when you have a new APK
      version: "1.2.0" // Update this version when you release a new version
    };

    return NextResponse.json(clientAppData, { status: 200 });
  } catch (error) {
    console.error('Error fetching client app data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch client app data' },
      { status: 500 }
    );
  }
}
