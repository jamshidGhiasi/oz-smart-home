import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { search } from "@/utils/content-search";
import { PageContent } from "@/types";

const searchIndexPath = path.join(process.cwd(), "public", "searchIndex.json");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "";

  if (!q || q.length < 2) return NextResponse.json([]);

  const raw = fs.readFileSync(searchIndexPath, "utf8");
  const index: PageContent[] = JSON.parse(raw);

  const results = search(q, index);

  return NextResponse.json(results);
}
