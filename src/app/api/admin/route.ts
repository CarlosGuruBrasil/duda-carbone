import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const CONTENT_PATH = join(process.cwd(), "src/data/content.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "dudacarbone2026";

function readContent() {
  return JSON.parse(readFileSync(CONTENT_PATH, "utf-8"));
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(readContent());
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  writeFileSync(CONTENT_PATH, JSON.stringify(body, null, 2), "utf-8");
  return NextResponse.json({ ok: true });
}
