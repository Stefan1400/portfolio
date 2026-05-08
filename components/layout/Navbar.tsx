'use client';

import Logo from "../icons/Logo";
import Hamburger from "../icons/Hamburger";
import { useState, useEffect } from "react";
import MenuDropdown from "./MenuDropdown";
import { X } from "lucide-react";

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

   const navItems = [
      { id: 'hero', label: 'Hero' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About me' },
      { id: 'contact', label: 'Contact' },
   ]
  
   return (
    <nav className={`${!menuOpen ? 'bg-[#131313]/80 backdrop-blur-md' : 'bg-[#131313]'} fixed top-0 left-0 w-full z-50`}>
      <div className="relative max-w-8xl mx-auto px-5 md:px-10 py-6 flex items-center justify-between">

         {/* MOBILE LOGO */}
         <a onClick={() => setMenuOpen(false)} href="/#hero" className="flex md:hidden">
            <Logo />
         </a>

         

         {/* DESKTOP LOGO */}
         <a href="/#hero" className="hidden md:flex text-white font-medium">
            Stefan Besonen
         </a>

         {/* MOBILE MENU CLOSE / OPEN */}
         <button
            onClick={toggleMenuOpen}
            type="button"
            className="md:hidden relative flex w-8 h-8 items-center justify-center"
            >
            {/* Hamburger */}
            <span
               className={`
                  absolute transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
               `}
            >
               <Hamburger />
            </span>

            {/* X icon */}
            <span
               className={`
                  absolute transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
               `}
            >
               <X size={33} strokeWidth={1} color="white" />
            </span>
         </button>

         {/* DESKTOP NAV */}
         <ul className="hidden md:flex gap-8 text-sm">
            {navItems.map(navItem => (
               <li key={navItem.id}>
                  <a href={`/#${navItem.id}`} className={`text-gray-400`}>
                     {navItem.label}
                  </a>
               </li>
            ))}
         </ul>

         {/* MENU DROPDOWN */}

         <MenuDropdown 
            menuOpen={menuOpen} 
            toggleMenuOpen={toggleMenuOpen} 
            navItems={navItems}
         />
      </div>
    </nav>
  )
}