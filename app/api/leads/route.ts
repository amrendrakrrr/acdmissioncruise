import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Student enquiries are private. Never expose them through a public GET endpoint.
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405, headers: { Allow: "POST", "Cache-Control": "no-store" } }
  );
}

export async function POST(req: Request) {
  try {
    // Reject cross-origin browser submissions without blocking server-side clients
    // that omit the Origin header.
    const origin = req.headers.get("origin");
    if (origin && new URL(origin).host !== new URL(req.url).host) {
      return NextResponse.json({ success: false, error: "Invalid origin" }, { status: 403 });
    }

    const body: unknown = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: "Invalid form data" }, { status: 400 });
    }
    const values = body as Record<string, unknown>;
    const field = (key: string) => typeof values[key] === "string" ? (values[key] as string).trim() : "";
    const name = field("name");
    const email = field("email");
    const phone = field("phone");
    const course = field("course");
    const message = field("message");

    if (
      name.length < 2 || name.length > 120 ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length > 20 || !/^\+?[0-9\s()-]{8,20}$/.test(phone) ||
      course.length < 2 || course.length > 150 ||
      message.length > 2000
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter valid contact and course details." },
        { status: 400 }
      );
    }

    await prisma.lead.create({ data: { name, email, phone, course, message } });
    // Do not return student personal information or database IDs to the browser.
    return NextResponse.json({ success: true }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
