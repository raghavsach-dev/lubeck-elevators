import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    // In a real application, this could fetch from a database or external service
    // For now, returning static data that can be easily updated
    const teamAppData = {
      url: "/apps/lubeck-team.apk", // Update this URL when you have a new APK
      version: "1.1.5" // Update this version when you release a new version
    };

    return NextResponse.json(teamAppData, { status: 200 });
  } catch (error) {
    console.error('Error fetching team app data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team app data' },
      { status: 500 }
    );
  }
}
