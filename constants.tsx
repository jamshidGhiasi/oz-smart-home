import { Icon } from "@iconify/react/dist/iconify.js"
import { SideNavItem } from "./types"
import { AirVent, Blinds, Cctv, DoorOpen, Lightbulb, Send, Theater, Wifi, Workflow, Calendar, Blocks } from "lucide-react"
export const NAV_ITEMS: SideNavItem[] = [


    {
        title: 'About',
        path: '/about',
        order: 1,
        visibility: true,
        icon: <Icon icon="lucide:library" width="16" height="16" />,
    },
    {
        title: 'Projects',
        path: '/projects',
        order: 3,
        visibility: true,
        icon: <Icon icon="lucide:pencil-ruler" width="16" height="16" />,

    },

    {
        title: 'Services',
        path: '/services',
        order: 2,
        visibility: true,
        icon: <Icon icon="lucide:cog" width="16" height="16" />,
        submenu: true,
        subMenuItems: [
            { title: 'All', path: '/services' },
            { title: 'Smart Lighting', path: '/services/smart-lighting', icon: <Lightbulb className="w-4 h-4 mr-2" /> },
            { title: 'Smart Blinds & Curtains', path: '/services/smart-blinds-and-curtains', icon: <Blinds className="w-4 h-4 mr-2" /> },
            { title: 'Smart Air Conditioning', path: '/services/smart-air-conditioning', icon: <AirVent className="w-4 h-4 mr-2" /> },
            { title: 'Access & Intercom', path: '/services/smart-access-and-intercom', icon: <DoorOpen className="w-4 h-4 mr-2" /> },
            { title: 'CCTV, Security & Alarm', path: '/services/cctv-security-and-alarm', icon: <Cctv className="w-4 h-4 mr-2" /> },
            { title: 'Entertainment & AV', path: '/services/entertainment-and-av', icon: <Theater className="w-4 h-4 mr-2" /> },
            { title: 'Network', path: '/services/network', icon: <Wifi className="w-4 h-4 mr-2" /> },
            { title: 'Home Automation', path: '/services/home-automation', icon: <Workflow className="w-4 h-4 mr-2" /> },
            { title: 'Free Consultation', path: '/services/book-a-free-smart-home-consultation', icon: <Calendar className="w-4 h-4 mr-2" /> },
        ],
    },

    {
        title: 'Contact',
        path: '/contact',
        order: 6,
        visibility: true,
        icon: <Icon icon="lucide:mail" width="16" height="16" />,
    },

    {
        title: 'Knowledge Hub',
        path: '/knowledge-hub',
        order: 5,
        visibility: true,
        icon: <Icon icon="lucide:sparkles" width="16" height="16" />,
    },

    {
        title: 'Packages',
        path: '/smart-home-packages',
        order: 4,
        visibility: true,
        icon: <Icon icon="lucide:blocks" width="16" height="16" />,
    },
    {
        title: 'Reviews',
        path: '/reviews',
        order: 7,
        visibility: true,
        icon: <Icon icon="lucide:star" width="16" height="16" />,
    },
]