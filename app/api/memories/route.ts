import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const memories = await prisma.event.findMany();
    return NextResponse.json({ memories }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to fetch events",
        details: error.message,
      },
      { status: 400 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();

    // You can now use the data from the body
    // For example, sending it back in the response
    return NextResponse.json(
      {
        message: "New memory added !",
        receivedData: body,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle any errors
    return NextResponse.json(
      {
        error: "Error adding a new memory...",
        details: error.message,
      },
      { status: 400 }
    );
  }
}
