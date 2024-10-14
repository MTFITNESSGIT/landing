import { NextResponse } from "next/server";
import { getFolderContents } from "../../../utils/getFodlers";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folderPath = searchParams.get("path") || "";

  try {
    const files = await getFolderContents("test");
    return NextResponse.json({ files });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching folder contents" },
      { status: 500 }
    );
  }
}
