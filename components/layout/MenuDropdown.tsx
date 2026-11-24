"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import type { NavItem } from "./Navbar";

type MenuDropdownProps = {
  menuOpen: boolean;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  navItems: NavItem[];
};

export default function MenuDropdown({ menuOpen, onNavigate, navItems }: MenuDropdownProps) {
   return (
    <div
      className={`
        flex md:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)] bg-[#131313]
        transition-all duration-300 ease-initial
        ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >

      <ul className="w-full h-full flex flex-col gap-6 px-6 py-8 pt-0 text-lg justify-center items-center">
          {navItems.map(navItem => (
              <li key={navItem.id}>
                <Link
                  href={`/#${navItem.id}`}
                  onClick={event => onNavigate(event, navItem.id)}
                  className='text-white'
                >
                    {navItem.label}
                </Link>
              </li>
          ))}
      </ul>
    </div>
  );
}