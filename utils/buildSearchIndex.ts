import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ReactNode } from "react";

import { PageContent } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");
const searchIndexPath = path.join(process.cwd(), "public", "searchIndex.json");

function buildSearchIndex(): PageContent[] {
  const files = getAllMarkdownFiles(contentDirectory);
  const searchIndex: PageContent[] = files.map((fileName) => {
    const relativePath = path.relative(contentDirectory, fileName);
    const slug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/");
    const fileContent = fs.readFileSync(fileName, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title as string,
      subtitle: data.subtitle as string,
      intro: data.intro as string,
      shortTitle: data.shortTitle as string,
      introAction: data.introAction as string,
      content: content || "",
      metadata: data,
    };
  });

  fs.writeFileSync(searchIndexPath, JSON.stringify(searchIndex));

  return searchIndex;
}

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

buildSearchIndex();
