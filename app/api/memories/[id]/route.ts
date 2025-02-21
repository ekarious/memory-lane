import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const event = await prisma.event.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
        Attachments: true,
      },
    });

    return NextResponse.json({ event }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: `No memory found`,
        details: error.message,
      },
      { status: 400 }
    );
  }
}

// NOTE: The API exists but will not be implemented in the first iteration.
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    // TODO: Add possibility to edit an event

    return NextResponse.json({ event }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Could not edit the memory.",
        details: error.message,
      },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    // This will automatically delete the attachments linked to an event !
    const event = await prisma.event.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ event }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Could not deleting the memory.",
        details: error.message,
      },
      { status: 400 }
    );
  }
}
