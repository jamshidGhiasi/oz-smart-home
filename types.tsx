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

export interface PageContent {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  intro?: string;
  introAction?: string;
  content: string;
  metadata: Record<string, any>;
}

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