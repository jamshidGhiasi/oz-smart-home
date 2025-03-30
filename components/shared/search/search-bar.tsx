import { Copy, Divide, Home, Search, Slash, Users } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useHotkeys } from 'react-hotkeys-hook'
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    File,
    Library
} from "lucide-react"

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"


import { AirVent, Blinds, Cctv, DoorOpen, Lightbulb, Send, Theater, Wifi, Workflow } from "lucide-react"

import React from "react";
import { searchPages } from "@/utils/search-page-content";
import { PageContent } from "@/types";
import { debounce } from '@/utils/debounce';
import { json } from "stream/consumers";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    className?: string
    props?: any
}


// Object mapping slugs to icons
const slugIcons: { [key: string]: React.ElementType } = {
    'about': Library,
    'services/smart-lighting': Lightbulb,
    'services/smart-blinds-and-curtains': Blinds,
    'services/smart-air-conditioning': AirVent,
    'services/smart-access-and-intercom': DoorOpen,
    'services/cctv-security-and-alarm': Cctv,
    'services/entertainment-and-av': Theater,
    'services/network': Wifi,
    'services/home-automation': Workflow,
};

const SearchBar: React.FC<SearchBarProps> = ({
    className,
    ...props
}) => {
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = useState<PageContent[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSearch = useCallback(
        debounce(async (value: string) => {
            if (value.trim() === '') {
                setSearchResults([]);
                return;
            }

            setLoading(true);
            try {

                const response = await fetch(`/api/search/pages?q=${encodeURIComponent(value)}`);
                const results = await response.json();
                sendGAEvent('event', 'searchResultAppeared', { value: results.length })
                setSearchResults(results);
            } catch (error) {
                console.error('Search error:', error);
                setSearchResults([]);
            } finally {
                setLoading(false);
            }
        }, 300),
        []
    );

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
                sendGAEvent('event', 'searchTriggered', { value: 'shortcut' })
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const handleSelect = (slug: string) => {
        router.push(`/${slug}`);
        setOpen(false);
    };

    const handleSearchButtonClick = () => {
        setOpen(true)
        sendGAEvent('event', 'searchTriggered', { value: 'buttonClick' })
    }

    return (
        <>
            <Button variant="outline" onClick={handleSearchButtonClick} className={cn("border-none mr-4 text-xs bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white group", className)}>
                <Search className="w-4 h-4 xl:mr-2" />
                <span className="hidden  xl:block" >Search Services...</span>
                <kbd className="ml-2 pointer-events-none hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>



            <CommandDialog open={open} onOpenChange={setOpen} >

                <CommandInput placeholder="Type a command or search..." onValueChange={handleSearch} />
                <Command shouldFilter={false}>
                    <CommandList>

                        {searchResults.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}

                        {searchResults && searchResults.map((page) => {
                            const IconComponent = slugIcons[page.slug] || File;
                            return <CommandItem key={page.slug} onSelect={() => handleSelect(page.slug)}>
                                <div className="flex items-center justify-start px-4">


                                    <IconComponent className="mr-4" />
                                    {page.shortTitle && <span>{page.shortTitle}</span>}
                                    {!page.shortTitle && <span>{page.title}</span>}
                                </div>
                            </CommandItem>
                        })}

                    </CommandList>
                </Command>


            </CommandDialog>


        </>
    );
}

export default SearchBar;
