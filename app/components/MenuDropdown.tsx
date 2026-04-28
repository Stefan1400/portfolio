"use client";

import type { NavItem } from "./Navbar";

type MenuDropdownProps = {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
  activeSection: string;
  navItems: NavItem[];
};

export default function MenuDropdown({ menuOpen, toggleMenuOpen, activeSection, navItems }: MenuDropdownProps) {
   return (
    <div
      className={`
        flex md:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)]  backdrop-blur-md bg-[#131313]
        transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
    >

      <ul className="w-full h-full flex flex-col gap-6 px-6 py-8 text-lg justify-center items-center">
          {navItems.map(navItem => (
              <li onClick={toggleMenuOpen} key={navItem.id}>
                <a href={`#${navItem.id}`} className={`${activeSection === navItem.id ? 'text-white' : 'text-gray-400'}`}>
                    {navItem.label}
                </a>
              </li>
          ))}
      </ul>
    </div>
  );
}