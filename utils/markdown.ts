import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { ReactNode } from "react";
import { MarkdownPage } from "@/types";
const contentDirectory = path.join(process.cwd(), "content");

export async function getMarkdownPage(
  slug: string
): Promise<MarkdownPage | null> {
  const fileName = `${slug}.md`;
  const filePath = path.join(contentDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string,
    shortTitle: data.shortTitle as string,
    intro: data.intro as string,
    introAction: data.introAction as string,
    content: marked.parse(content),
  };
}
