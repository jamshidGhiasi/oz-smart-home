'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import OSHCopy from '../content/osh-copy';
import OSHBrand from './brand';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-[hsl(240,3.7%,15.9%)] h-screen flex-1 fixed  hidden md:flex z-40">
      <div className="flex flex-col space-y-6 w-full">
        <div className='flex items-center  h-[64px]'>
        <Link
            href="/"
            className="flex flex-row space-x-2 px-3 items-center justify-center "
          >
                <OSHBrand/>
        <OSHCopy className='font-bold text-white'/>
            </Link>
    
        </div>
      

        <div className="flex flex-col space-y-2  md:px-2 ">
          {NAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-black  w-full justify-between text-[hsl(240,5%,64.9%)] hover:bg-[#3c3c3f] hover:text-white ${
              pathname.includes(item.path) ? 'bg-[#3c3c3f]' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
            <span className={`${
            item.path === pathname ? ' text-[#E9C31E]' : ''
          }`}>{item.icon}</span>
              <span className={`${
              pathname.includes(item.path) ? 'bg-[#3c3c3f] text-white' : ''
            }`}>{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`text-[hsl(240,5%,64.9%)] ${
                      subItem.path === pathname ? 'font-bold  text-white' : ''
                    }`}
                  >
                    <span className={` ${
                      subItem.path === pathname ? ' text-white' : ''
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
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg text-[hsl(240,5%,64.9%)] hover:bg-[#3c3c3f] hover:text-white  ${
            item.path === pathname ? 'text-white bg-[#3c3c3f]' : ''
          }`}
        >
          <span className={`${
            item.path === pathname ? ' text-[#E9C31E]' : ''
          }`}>{item.icon}</span>
          <span className={`${
            item.path === pathname ? 'text-white font-bold' : ''
          }`}>{item.title}</span>
        </Link>
      )}
    </div>
  );
};