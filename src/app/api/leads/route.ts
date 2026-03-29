import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo. In production, replace with:
// - Vercel KV / Postgres
// - Google Sheets API
// - Supabase
// - Or any database
const leads: Record<string, unknown>[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, role, teamSize, frameworks } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    // Reject personal emails
    const personal = /(gmail|yahoo|hotmail|outlook|aol|icloud|mail)\./i;
    if (personal.test(email)) {
      return NextResponse.json(
        { error: "Please use a work email address." },
        { status: 400 }
      );
    }

    const lead = {
      name,
      email,
      company,
      role: role || "",
      teamSize: teamSize || "",
      frameworks: frameworks || "",
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);

    // Log to Vercel server logs (visible in Vercel dashboard → Logs)
    console.log("[LEAD]", JSON.stringify(lead));

    return NextResponse.json({ success: true, message: "Lead received." });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

// GET endpoint to view leads (protect this in production)
export async function GET() {
  return NextResponse.json({ leads, count: leads.length });
}
