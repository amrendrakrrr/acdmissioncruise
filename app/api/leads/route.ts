import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, course, message } = await req.json();

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        course,
        message,
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}