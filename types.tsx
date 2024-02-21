export type SideNavItem = {
    title: string;
    path: string;
    order?: number;
    visibility?: boolean;
    icon?:JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };
  export type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
  };