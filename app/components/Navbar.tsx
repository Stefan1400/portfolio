'use client';

import Logo from "./icons/Logo";
import Hamburger from "./icons/Hamburger";
import { useState, useEffect } from "react";
import MenuDropdown from "./MenuDropdown";
import { X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

export type NavItem = {
   id: string;
   label: string;
}

export default function Navbar({}) {
   const [menuOpen, setMenuOpen] = useState(false);

   function toggleMenuOpen() {
      setMenuOpen(prev => !prev);
   };

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
   }, [menuOpen]);

   const activeSection = useActiveSection();

   const navItems = [
      { id: 'hero', label: 'Hero' },
      { id: 'projects', label: 'Project 1' },
      { id: 'about', label: 'About me' },
      { id: 'contact', label: 'Contact' },
   ]
  
   return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#131313]">
      <div className="relative max-w-8xl mx-auto px-5 md:px-10 py-6 flex items-center justify-between">

         {/* MOBILE LOGO */}
         <a onClick={() => setMenuOpen(false)} href="#hero" className="flex md:hidden">
            <Logo />
         </a>

         {/* MOBILE MENU CLOSE / OPEN */}
         <button onClick={toggleMenuOpen} type="button" className="flex md:hidden">
            {menuOpen ? <X size={33} strokeWidth={1} /> : <Hamburger />}
         </button>

         {/* DESKTOP LOGO */}
         <a href="#hero" className="hidden md:flex text-white font-medium">
            Stefan Besonen
         </a>

         {/* DESKTOP NAV */}
         <ul className="hidden md:flex gap-8 text-sm">
            {navItems.map(navItem => (
               <li key={navItem.id}>
                  <a href={`#${navItem.id}`} className={`${activeSection === navItem.id ? 'text-white' : 'text-gray-400'}`}>
                     {navItem.label}
                  </a>
               </li>
            ))}
         </ul>

         {/* MENU DROPDOWN */}
         {menuOpen && (
            <MenuDropdown 
               menuOpen={menuOpen} 
               toggleMenuOpen={toggleMenuOpen} 
               activeSection={activeSection}
               navItems={navItems}
            />
         )}
      
      </div>
    </nav>
  )
}