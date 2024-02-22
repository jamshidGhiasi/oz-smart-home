'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { SideNavItem, MenuItemWithSubMenuProps } from '@/types';
import { motion, useCycle } from 'framer-motion';
import { Icon } from '@iconify/react';
import OSHBrand from './brand';
import OSHCopy from '../content/osh-copy';
const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(0px at 100% 0)',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};
const HeaderMobile = () => {
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <div className='sticky top-0 z-40'>
            <div className={"bg-[hsl(240,3.7%,15.9%)]  lg:hidden"}>
                <div className="flex h-[64px] items-center justify-between ">
                    <Link
                        href="/"
                        className="flex flex-row space-x-2 px-3 items-center justify-center lg:hidden "
                    >
                        <OSHBrand />
                        <OSHCopy className='font-bold text-white' />
                    </Link>
                </div>
            </div>
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                className={`fixed inset-0 z-50 w-full lg:hidden ${isOpen ? '' : 'pointer-events-none'
                    }`}
                ref={containerRef}
            >
                <motion.div
                    className="absolute inset-0 right-0 w-full bg-[hsl(240,3.7%,15.9%)]"
                    variants={sidebar}
                />
                <motion.ul
                    variants={variants}
                    className="absolute w-full flex flex-col  px-10 py-16"
                >
                    {NAV_ITEMS.map((item, idx) => {
                        const isLastItem = idx === NAV_ITEMS.length - 1; // Check if it's the last item
                        return (
                            <div key={idx}>
                                {item.submenu ? (
                                    <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                                ) : (
                                    <MenuItem>
                                        <Link
                                            href={item.path}
                                            onClick={() => toggleOpen()}
                                            className={`flex items-center w-full gap-x-2 text-lg my-3 py-0  text-[hsl(240,5%,64.9%)]  ${item.path === pathname ? 'text-white font-bold' : ''}`}
                                        >
                                            {item.icon}
                                            {item.title}
                                        </Link>
                                    </MenuItem>
                                )}
                                {!isLastItem && (
                                    <MenuItem className=" h-px my-1 w-full  bg-[hsl(240,5%,64.9%)]" />
                                )}
                            </div>
                        );
                    })}
                </motion.ul>
                <MenuToggle toggle={toggleOpen} />
            </motion.nav>
        </div>
    );
};
export default HeaderMobile;
const MenuToggle = ({ toggle }: { toggle: any }) => (
    <button
        onClick={toggle}
        className="pointer-events-auto absolute right-4 top-[9px] z-30  rounded-sm p-3 "
    >
        <svg width="23" height="23" viewBox="0 0 23 23" >
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5', stroke: '#E9C31E' },
                    open: { d: 'M 3 16.5 L 17 2.5', stroke: '#fff' },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1, stroke: '#E9C31E' },
                    open: { opacity: 0, stroke: '#fff' },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346', stroke: '#E9C31E' },
                    open: { d: 'M 3 2.5 L 17 16.346', stroke: '#fff' },
                }}
            />
        </svg>
    </button>
);
const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);
const MenuItem = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.li variants={MenuItemVariants} className={className}>
            {children}
        </motion.li>
    );
};
const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
    item,
    toggleOpen,
}) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    return (
        <>
            <MenuItem>
                <button
                    className="flex items-center w-full my-3 text-lg text-[hsl(240,5%,64.9%)]"
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                >
                    <div className="flex  flex-row justify-between w-full items-center">
                        <span
                            className={`flex items-center gap-x-2 ${pathname.includes(item.path) ? 'font-bold text-white' : ''}`}
                        >
                            {item.icon}
                            {item.title}
                        </span>
                        <div className={`${subMenuOpen && 'rotate-180'}`}>
                            <Icon icon="lucide:chevron-down" width="24" height="24" />
                        </div>
                    </div>
                </button>
            </MenuItem>
           
                {subMenuOpen && (
                    <>
                     <div className="mt-2 ml-2 ">
                        {item.subMenuItems?.map((subItem, subIdx) => {
                            return (
                                <MenuItem key={subIdx}>
                                    <Link
                                        href={subItem.path}
                                        onClick={() => toggleOpen()}
                                        className={`my-2 inline-block text-[hsl(240,5%,64.9%)] ${subItem.path === pathname ? 'text-white font-bold' : ''
                                            }`}
                                    >
                                        {subItem.title}
                                    </Link>
                                </MenuItem>
                            );
                        })}
                        </div>
                    </>
                )}
            
        </>
    );
};
const MenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
            duration: 0.02,
        },
    },
};
const variants = {
    open: {
        transition: { staggerChildren: 0.02, delayChildren: 0.15 },
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 },
    },
};
const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0 });
    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
    return dimensions.current;
};