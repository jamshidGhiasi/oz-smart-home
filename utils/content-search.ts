import { PageContent } from "@/types";
import { marked } from "marked";
export function search(query: string, searchIndex: PageContent[]) {
  const lowercaseQuery = query.toLowerCase();
  return searchIndex.filter(async (page) => {
    const titleMatch = page.title.toLowerCase().includes(lowercaseQuery);
    const subtitleMatch = page.subtitle.toLowerCase().includes(lowercaseQuery);
    const renderedContent = await marked(page.content);
    const contentMatch = renderedContent.toLowerCase().includes(lowercaseQuery);
    const metadataMatch = Object.values(page.metadata).some((value) =>
      String(value).toLowerCase().includes(lowercaseQuery)
    );

    return titleMatch;
  });
}
