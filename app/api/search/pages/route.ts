import { PageContent } from "@/types";
import { search } from "@/utils/content-search";
import searchIndex from "@/public/searchIndex.json";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query || typeof query !== "string") {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const searchIndex = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "public", "searchIndex.json"),
      "utf8"
    )
  ) as PageContent[];

  const results = searchIndex.filter((page) => {
    const lowercaseKeyword = query.toLowerCase();
    return (
      page.title.toLowerCase().includes(lowercaseKeyword) ||
      (page.subtitle &&
        page.subtitle.toLowerCase().includes(lowercaseKeyword)) ||
      page.content.toLowerCase().includes(lowercaseKeyword)
    );
  });

  return NextResponse.json(results as PageContent[], { status: 200 });
}
