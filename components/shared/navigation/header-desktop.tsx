'use client';
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import OSHCopy from '../content/osh-copy';
import OSHBrand from './brand';
const HeaderDesktop = () => {
    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();
    return (
        <div
            className={cn(
                `sticky inset-x-0 top-0 z-30 w-full transition-all `,
                {
                    '  bg-[hsl(240,3.7%,15.9%)]/75 backdrop-blur-lg': scrolled,
                    ' bg-[hsl(240,3.7%,15.9%)]': selectedLayout,
                },
            )}
        >
            <div className="flex h-[64px] items-center justify-between ">
          
            </div>
        </div>
    );
};
export default HeaderDesktop;