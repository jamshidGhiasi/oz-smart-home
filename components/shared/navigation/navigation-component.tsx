import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/ui/button";
import Image from "next/image";
import SearchBar from "../search/search-bar";
import { ModeToggle } from "../theme/mode-toggle";
const navigationItems = [

    {
        name: 'About',
        href: '/about',
        order: 1,
        visibility: true
    },
    {
        name: 'Projects',
        href: '/projects',
        order: 3,
        visibility: true
    },

    {
        name: 'Services',
        href: '/services',
        order: 2,
        visibility: true
    },

    {
        name: 'Contact',
        href: '/contact',
        order: 6,
        visibility: true
    },

    {
        name: 'Knowledge Hub',
        href: '/knowledge-hub',
        order: 5,
        visibility: true
    },
    {
        name: 'Reviews',
        href: '/reviews',
        order: 4,
        visibility: true
    },
]
const SharedNavigation = async ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <nav
            className={className}
            lang="en-AU"
            dir="ltr"
            aria-label="Global"
            {...props}
        >
            <ul className="w-full list-none flex  items-center  ">

                {navigationItems.sort((a, b) => a.order - b.order).map((navItem) => (
                    <li key={navItem.name} className={`${navItem.visibility ? 'inline-flex' : 'hidden'}`}>
                        <Link href={navItem.href} aria-label={navItem.name}
                            className="text-md rounded-md font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800  dark:hover:text-primary  py-2 px-4  ring-offset-white  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 text-white hover:text-slate-900">
                            {navItem.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    );
}
export default SharedNavigation;