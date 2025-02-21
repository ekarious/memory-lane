import { NextResponse } from "next/server";
import fs from "fs";
import { sanitizeFileName } from "@/utils/string";
import { promisify } from "util";
import { pipeline } from "stream";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const pump = promisify(pipeline);

    if (file && file instanceof File) {
      const filePath = `./public/images/${sanitizeFileName(file.name)}`;

      // @ts-ignore
      await pump(file.stream(), fs.createWriteStream(filePath));
      return NextResponse.json({ status: "success", data: file.size });
    }

    return NextResponse.json(
      {
        error: "Cannot save. File is not a file.",
      },
      { status: 400 }
    );
  } catch (error: any) {
    // Handle any errors
    return NextResponse.json(
      {
        error: "Error saving file in public/images folder...",
        details: error.message,
      },
      { status: 400 }
    );
  }
}
