import { NextRequest, NextResponse } from "next/server";
import { getComments, addComment } from "@/lib/comment-store";
import { auth } from "@/auth";

export async function GET() {
  const comments = await getComments();
  return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Harus login untuk berkomentar" }, { status: 401 });
  }
  const { message } = await req.json();
  if (!message?.trim()) {
    return NextResponse.json({ error: "Pesan harus diisi" }, { status: 400 });
  }
  const comment = {
    id: Date.now().toString(),
    userId: (session.user.id as string) || "",
    userName: session.user.name || "Anonymous",
    userImage: session.user.image || "",
    message: message.trim(),
    timestamp: Date.now(),
  };
  await addComment(comment);
  return NextResponse.json(comment, { status: 201 });
}
