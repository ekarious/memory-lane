import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: `No user found`,
        details: error.message,
      },
      { status: 400 }
    );
  }
}
