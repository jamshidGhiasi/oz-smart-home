// scripts/buildSearchIndex.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PageContent } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");
const searchIndexPath = path.join(process.cwd(), "public", "searchIndex.json");

function getAllMarkdownFiles(directory: string): string[] {
  const files: string[] = [];

  function walkDirectory(currentPath: string) {
    const contents = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const item of contents) {
      const itemPath = path.join(currentPath, item.name);
      if (item.isDirectory()) {
        walkDirectory(itemPath);
      } else if (item.isFile() && item.name.endsWith(".md")) {
        files.push(itemPath);
      }
    }
  }

  walkDirectory(directory);
  return files;
}

function buildSearchIndex(): PageContent[] {
  const files = getAllMarkdownFiles(contentDirectory);

  const searchIndex: PageContent[] = files.map((filePath) => {
    const relativePath = path
      .relative(contentDirectory, filePath)
      .replace(/\\/g, "/");
    const slug = relativePath.replace(/\/index\.md$|\.md$/, "");
    const pathParts = relativePath.split("/");

    // 🔁 Map knowledge-hub content as "blog" type for consistency
    const type: "page" | "blog" = pathParts.includes("knowledge-hub")
      ? "blog"
      : "page";

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const coverImageRelative = data.coverImage?.replace("./", "") || "";
    const coverImage = coverImageRelative
      ? `/content/${slug}/${coverImageRelative}`
      : undefined;

    return {
      slug,
      title: data.title ?? slug,
      subtitle: data.subtitle ?? "",
      shortTitle: data.shortTitle ?? "",
      intro: data.intro ?? "",
      introAction: data.introAction ?? "",
      date: data.date ?? null,
      excerpt: data.excerpt ?? content.slice(0, 160),
      coverImage,
      content,
      type,
      metadata: data,
    };
  });

  fs.writeFileSync(searchIndexPath, JSON.stringify(searchIndex, null, 2));
  console.log(`✅ searchIndex.json built with ${searchIndex.length} items`);

  return searchIndex;
}

// Run it
buildSearchIndex();
