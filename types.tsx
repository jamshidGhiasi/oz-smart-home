import { ReactNode } from "react";

export type SideNavItem = {
  title: string;
  path: string;
  order?: number;
  visibility?: boolean;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};
export type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

export type PageContent = {
  slug: string;
  title: string;
  subtitle?: string;
  shortTitle?: string;
  intro?: string;
  introAction?: string;
  date?: string;
  excerpt?: string;
  coverImage?: string;
  coverImageMime?: string;
  tags?: string[];          // ✅ NEW
  categories?: string[];    // ✅ NEW
  content: string;
  type: "page" | "blog";
  metadata: Record<string, any>;
};

export interface MarkdownPage {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  intro?: string;
  introAction?: string;
  content: ReactNode;
}
export type Message = {
  role: 'user' | 'assistant';
  content: string;
  type?: 'feedback_request'; // optional type for feedback prompts
};