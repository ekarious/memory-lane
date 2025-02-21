import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const events = await prisma.event.findMany({
      include: {
        user: true,
        Attachments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ events }, { status: 200 });
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
    console.log("body", body);

    const resEvent = await prisma.event.create({
      data: {
        ...body.event,
        userId: body.user.id,
      }
    });

    // Attachement save database
    const resAtta = await prisma.attachment.create({
      data: {
        ...body.attachment,
        eventId: resEvent.id
      }
    })

    return NextResponse.json({resEvent, resAtta});
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
