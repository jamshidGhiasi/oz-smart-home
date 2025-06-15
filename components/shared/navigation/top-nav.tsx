'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import { OSHCopy } from '../content/osh-copy';
import OSHBrand from './brand';
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv, Search } from 'lucide-react'
import { Button } from '@/components/ui/button';
import SearchBar from '../search/search-bar';
import { useMediaQuery } from '@/utils/use-media-query';


const TopNav = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  return (
    <div className=" sticky top-0 w-full bg-[hsl(240,3.7%,15.9%)]/65 hidden xl:block  backdrop-blur-md   z-40">

      <div className="flex items-center justify-between  w-full">

        <div className='flex items-center  h-[64px] '>
          <Link
            href="/"
            className="flex space-x-2 px-3 items-center justify-center "
          >
            <OSHBrand />
            <OSHCopy className='font-bold text-white' />
          </Link>
        </div>
        <div className="flex space-x-1  mr-auto ">
          {NAV_ITEMS.sort((a, b) => (a.order! - b.order!)).map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        <div className=''>
          {isDesktop && <SearchBar />}

        </div>
      </div>
    </div>
  );
};
export default TopNav;
const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  useEffect(() => {
    setSubMenuOpen(false) // When the dynamic route change reset the state
  }, [pathname])
  return (
    <div className=" relative">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`  flex flex-row items-center p-2 rounded-lg hover-bg-black  w-full justify-between text-[hsl(0,0%,100%)] hover:bg-[#3c3c3f] hover:text-white ${subMenuOpen ? 'bg-[#3c3c3f] rounded-bl-none rounded-br-none' : ''} ${pathname.includes(item.path) ? 'bg-[#3c3c3f] ' : ''
              }`}
          >
            <div className="flex flex-row space-x-2 items-center">
              <span className={`  ${item.path === pathname ? 'text-[hsl(49,82%,52%)]' : 'text-[hsl(0,0%,62%)]'
                }`}>{item.icon}</span>
              <span className={`${pathname.includes(item.path) ? 'bg-[#3c3c3f] text-white' : ''
                }`}>{item.title}</span>
            </div>
            <div className={`ml-2 ${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="18" height="18" />
            </div>
          </button>

          {subMenuOpen && (
            <div className={`absolute flex flex-col px-6 py-4 space-y-3 w-[260px] bg-[#3c3c3f] left-0 `}>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={` flex items-center text-[hsl(240,5%,64.9%)] hover:text-white ${subItem.path === pathname ? 'text-white' : ''
                      }`}
                  >
                    {subItem.icon && subItem.icon}
                    <span className={` text-white ${subItem.path === pathname ? ' text-white font-bold' : ''
                      }`}>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}

          className={`flex flex-row items-center px-4 py-2 rounded-lg  hover:bg-[#3c3c3f] hover:text-white  ${item.path === pathname ? 'text-white bg-[#3c3c3f]' : ''
            }`}
        >
          <span className={` mr-2 ${item.path === pathname ? 'text-[hsl(49,82%,52%)]' : 'text-[hsl(0,0%,62%)]'
            }`}>{item.icon}</span>
          <span className={`${item.path === pathname ? 'text-white' : 'text-[hsl(0,0%,82%)]'
            }`}>{item.title}</span>
        </Link>
      )}
    </div>
  );
};