// lib/search.ts
import { PageContent } from "@/types";

export function search(query: string, searchIndex: PageContent[]) {
  const lowercaseQuery = query.toLowerCase();

  return searchIndex.filter((page) => {
    const matchText = [
      page.title,
      page.subtitle,
      page.shortTitle,
      page.intro,
      page.content,
      ...(page.tags ?? []),
      ...(page.categories ?? []),
      ...Object.values(page.metadata || {}),
    ]
      .filter(Boolean) // remove undefined/null
      .map((v) => String(v).toLowerCase())
      .join(" ");

    return matchText.includes(lowercaseQuery);
  });
}
