import { Icon } from "@iconify/react/dist/iconify.js"
import { SideNavItem } from "./types"
export const NAV_ITEMS: SideNavItem[] = [

    {
        title: 'Home',
        path: '/',
        order: 1,
        visibility: true,
        icon: <Icon icon="lucide:home" width="24" height="24" />,
    },
    {
        title: 'About',
        path: '/about',
        order: 1,
        visibility: true,
        icon: <Icon icon="lucide:library" width="24" height="24" />,
    },
    {
        title: 'Projects',
        path: '/projects',
        order: 3,
        visibility: true,
        icon: <Icon icon="lucide:pencil-ruler" width="24" height="24" />,
   
    },

    {
        title: 'Services',
        path: '/services',
        order: 2,
        visibility: true,
        icon: <Icon icon="lucide:cog" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/services' },
          { title: 'Lighting', path: '/services/smart-lighting' },
          { title: 'Blinds & Curtains', path: '/services/smart-blinds-and-curtains' },
          { title: 'Air Conditioning', path: '/services/smart-air-conditioning' },
          { title: 'Access & Intercom', path: '/services/smart-access-and-intercom' },
          { title: 'Security', path: '/services/security' },
          { title: 'Entertainment Room', path: '/services/entertainment-room' },
          { title: 'Network', path: '/services/network' },
          { title: 'Automation', path: '/services/automation' },
        ],
    },

    {
        title: 'Contact',
        path: '/contact',
        order: 6,
        visibility: true,
        icon: <Icon icon="lucide:phone" width="24" height="24" />,
    },

    {
        title: 'Knowledge Hub',
        path: '/knowledge-hub',
        order: 5,
        visibility: true,
        icon: <Icon icon="lucide:sparkles" width="24" height="24" />,
    },
    {
        title: 'Reviews',
        path: '/reviews',
        order: 4,
        visibility: true,
        icon: <Icon icon="lucide:star" width="24" height="24" />,
    },
]