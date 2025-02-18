import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;

        return NextResponse.json({
            message: `Just the memory ${id}...`
        },  { status: 200 })

    } catch (error: any) {
        // Handle any errors
        return NextResponse.json({
            error: `No memory found`,
            details: error.message
        }, { status: 400 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;

        return NextResponse.json({
            message: `Memory ${id} modified !`,
        }, { status: 200 });

    } catch (error: any) {
        // Handle any errors
        return NextResponse.json({
            error: "Error editing the memory [id]...",
            details: error.message
        }, { status: 400 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;

        return NextResponse.json({
            message: `Memory ${id} deleted !`,
        }, { status: 200 });

    } catch (error: any) {
        // Handle any errors
        return NextResponse.json({
            error: "Error deleting the memory [id]...",
            details: error.message
        }, { status: 400 });
    }
}
