import { NextRequest, NextResponse } from "next/server";
import { deleteComment } from "@/lib/comment-store";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { adminKey } = await req.json();
  if (adminKey !== "f1qxzz_") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await deleteComment(id);
  return NextResponse.json({ success: true });
}
