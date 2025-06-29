'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import { OSHCopy } from '../content/osh-copy';
import OSHBrand from './brand';
import { useMediaQuery } from '@/utils/use-media-query';
import SearchBar from '../search/search-bar';

const TopNav = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <div className="sticky top-0 z-40 hidden xl:block w-full bg-[hsl(240,3.7%,15.9%)]/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-4 h-[64px]">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <OSHBrand />
          <OSHCopy className="font-bold text-white" />
        </Link>

        {/* Main Nav */}
        <div className="flex items-center space-x-1 ml-2">
          {NAV_ITEMS.sort((a, b) => a.order! - b.order!).map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>

        {/* Search */}
        <div className="ml-auto xl:block hidden">
          <SearchBar />
        </div>

      </div>
    </div>
  );
};

export default TopNav;

// Subcomponents
const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);

  useEffect(() => {
    setSubMenuOpen(false);
  }, [pathname]);

  const active = pathname.includes(item.path);

  return (
    <div className="relative">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${active ? 'bg-[#3c3c3f]' : ''
              } hover:bg-[#3c3c3f]`}
          >
            <span className="flex items-center space-x-2">
              <span className={active ? 'text-yellow-400' : 'text-neutral-400'}>{item.icon}</span>
              <span className={active ? 'text-white font-medium' : 'text-neutral-300'}>
                {item.title}
              </span>
            </span>
            <Icon
              icon="lucide:chevron-down"
              className={`ml-2 transition-transform ${subMenuOpen ? 'rotate-180' : ''}`}
              width="18"
              height="18"
            />
          </button>

          {subMenuOpen && (
            <div className="absolute left-0 mt-1 w-[260px] bg-[#3c3c3f] rounded-lg shadow-md px-4 py-3 z-50">
              {item.subMenuItems?.map((subItem, idx) => {
                const subActive = pathname === subItem.path;
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`flex items-center space-x-2 py-1 px-2 rounded-md ${subActive ? 'text-white font-bold' : 'text-neutral-300'
                      } hover:text-white hover:bg-neutral-700/50`}
                  >
                    {subItem.icon && <span>{subItem.icon}</span>}
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${active ? 'bg-[#3c3c3f] text-white' : 'text-neutral-300'
            } hover:bg-[#3c3c3f] hover:text-white`}
        >
          <span className={active ? 'text-yellow-400' : 'text-neutral-400'}>{item.icon}</span>
          <span>{item.title}</span>
        </Link>
      )}
    </div>
  );
};
