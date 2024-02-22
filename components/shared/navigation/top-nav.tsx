'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import OSHCopy from '../content/osh-copy';
import OSHBrand from './brand';


const TopNav = () => {
 
  return (
    <div className=" sticky top-0 w-full bg-[hsl(240,3.7%,15.9%)] hidden lg:block   z-40">
      <div className="flex items-center justify-center  w-full">
        <div className='flex items-center  h-[64px]'>
          <Link
            href="/"
            className="flex space-x-2 px-3 mr-4 items-center justify-center "
          >
            <OSHBrand />
            <OSHCopy className='font-bold text-white' />
          </Link>
        </div>
        <div className="flex space-x-1  ">
          {NAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
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
            className={`  flex flex-row items-center p-2 rounded-lg hover-bg-black  w-full justify-between text-[hsl(240,5%,64.9%)] hover:bg-[#3c3c3f] hover:text-white ${subMenuOpen ? 'bg-[#3c3c3f] rounded-bl-none rounded-br-none' : ''} ${pathname.includes(item.path) ? 'bg-[#3c3c3f] ' : ''
              }`}
          >
            <div className="flex flex-row space-x-2 items-center">
              <span className={`${item.path === pathname ? ' text-[#E9C31E]' : ''
                }`}>{item.icon}</span>
              <span className={`${pathname.includes(item.path) ? 'bg-[#3c3c3f] text-white' : ''
                }`}>{item.title}</span>
            </div>
            <div className={`ml-2 ${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="18" height="18" />
            </div>
          </button>
  
          {subMenuOpen && (
            <div className={ `absolute flex flex-col px-6 py-4 space-y-3 w-[220px] bg-[#3c3c3f] left-0`}>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`text-[hsl(240,5%,64.9%)] hover:text-white ${subItem.path === pathname ? 'text-white' : ''
                      }`}
                  >
                    <span className={` ${subItem.path === pathname ? ' text-white' : ''
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
          
          className={`flex flex-row items-center px-4 py-2 rounded-lg text-[hsl(240,5%,64.9%)] hover:bg-[#3c3c3f] hover:text-white  ${item.path === pathname ? 'text-white bg-[#3c3c3f]' : ''
            }`}
        >
          <span className={` mr-2 ${item.path === pathname ? ' text-[#E9C31E]' : ''
            }`}>{item.icon}</span>
          <span className={`${item.path === pathname ? 'text-white' : ''
            }`}>{item.title}</span>
        </Link>
      )}
    </div>
  );
};