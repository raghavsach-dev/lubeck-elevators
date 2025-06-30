import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    return NextResponse.json({ error: 'Airtable configuration is missing.' }, { status: 500 });
  }

  const base = new Airtable({ apiKey }).base(baseId);

  try {
    await base(tableName).create([
      {
        fields: {
          'Name': name,
          'Email': email,
          'Phone': phone,
          'Message': message,
        },
      },
    ]);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to submit to Airtable.' }, { status: 500 });
  }
} 