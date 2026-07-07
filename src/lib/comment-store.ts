import fs from "fs";
import path from "path";

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  message: string;
  timestamp: number;
}

const defaultComments: Comment[] = [];

const filePath = path.join(process.cwd(), "data", "comments.json");

function getFromFile(): Comment[] {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(defaultComments, null, 2), "utf-8");
    return defaultComments;
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveToFile(comments: Comment[]) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2), "utf-8");
}

let kv: any;
if (process.env.KV_URL) {
  try {
    kv = require("@vercel/kv").kv;
  } catch {}
}

async function getFromKV(): Promise<Comment[]> {
  if (!kv) return getFromFile();
  let comments = await kv.get("comments") as Comment[] | null;
  if (!comments) {
    await kv.set("comments", defaultComments);
    comments = defaultComments;
  }
  return comments;
}

async function saveToKV(comments: Comment[]) {
  if (kv) {
    await kv.set("comments", comments);
  } else {
    saveToFile(comments);
  }
}

export async function getComments(): Promise<Comment[]> {
  if (kv) return getFromKV();
  return getFromFile();
}

export async function addComment(comment: Comment) {
  const comments = await getComments();
  comments.unshift(comment);
  await saveToKV(comments);
}

export async function deleteComment(id: string) {
  const comments = await getComments();
  const filtered = comments.filter((c) => c.id !== id);
  await saveToKV(filtered);
}
