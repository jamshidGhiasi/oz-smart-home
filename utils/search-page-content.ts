import { PageContent } from "@/types";

export async function searchPages(keyword: string): Promise<PageContent[]> {
  try {
    const response = await fetch(
      `/api/search/pages?q=${encodeURIComponent(keyword)}`
    );
    const allPages = await response.json();

    return allPages;
  } catch (error) {
    console.log(error);
    return [];
  }
}
