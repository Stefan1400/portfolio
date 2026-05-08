"use client";

import type { NavItem } from "./Navbar";

type MenuDropdownProps = {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
  navItems: NavItem[];
};

export default function MenuDropdown({ menuOpen, toggleMenuOpen, navItems }: MenuDropdownProps) {
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
              <li onClick={() => toggleMenuOpen()} key={navItem.id}>
                <a href={`/#${navItem.id}`} className='text-white'>
                    {navItem.label}
                </a>
              </li>
          ))}
      </ul>
    </div>
  );
}