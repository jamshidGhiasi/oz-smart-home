import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ReactNode } from 'react';

interface MarkdownPage {
  slug: string;
  title: string;
  subtitle: string;
  content: ReactNode;
}

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownPage(slug: string): Promise<MarkdownPage | null> {
  const fileName = `${slug}.md`;
  const filePath = path.join(contentDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string,
    content: marked.parse(content),
  };
}