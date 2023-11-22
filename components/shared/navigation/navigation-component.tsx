import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const navigation = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Services',
        href: '/services',
    },
    {
        name: 'Reviews',
        href: '/reviews',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]
const SharedNavigation = async ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Button>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </Button>
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} className="text-md font-medium transition-colors hover:text-primary">
                    {item.name}
                </Link>
            ))}

        </nav>
    );
}
export default SharedNavigation;