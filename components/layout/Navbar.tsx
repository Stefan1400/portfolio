'use client';

import Logo from "../icons/Logo";
import Hamburger from "../icons/Hamburger";
import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import MenuDropdown from "./MenuDropdown";
import { X } from "lucide-react";
import { useLenis } from "../smoothScrolling";

export type NavItem = {
   id: string;
   label: string;
}

export default function Navbar({}) {
   const [menuOpen, setMenuOpen] = useState(false);
   const lenisRef = useLenis();

   function toggleMenuOpen() {
      setMenuOpen(prev => !prev);
   };

   function navigateToSection(
      event: MouseEvent<HTMLAnchorElement>,
      sectionId: string,
      closeMenu = false,
   ) {
      if (closeMenu) {
         setMenuOpen(false);
         document.body.style.overflow = "auto";
      }

      if (
         !lenisRef?.current ||
         event.button !== 0 ||
         event.metaKey ||
         event.ctrlKey ||
         event.shiftKey ||
         event.altKey
      ) {
         return;
      }

      event.preventDefault();
      window.history.pushState(null, "", event.currentTarget.href);
      lenisRef.current.scrollTo(`#${sectionId}`);
   }

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
   }, [menuOpen]);

   const navItems = [
      { id: 'hero', label: 'Hero' },
      { id: 'projects', label: 'Work' },
      { id: 'contact', label: 'Contact' },
   ]
  
   return (
    <nav className={`${!menuOpen ? 'bg-[#131313]/80 backdrop-blur-md' : 'bg-[#131313]'} fixed top-0 left-0 w-full z-50`}>
      <div className="relative max-w-8xl mx-auto px-5 md:px-10 py-6 flex items-center justify-between">

         {/* MOBILE LOGO */}
         <Link
            onClick={event => navigateToSection(event, "hero", true)}
            href="/#hero"
            className="flex md:hidden"
         >
            <Logo />
         </Link>

         

         {/* DESKTOP LOGO */}
         <Link
            onClick={event => navigateToSection(event, "hero")}
            href="/#hero"
            className="hidden md:flex text-white font-medium"
         >
            Stefan Besonen
         </Link>

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
                  <Link
                     href={`/#${navItem.id}`}
                     onClick={event => navigateToSection(event, navItem.id)}
                     className='text-gray-400 hover:text-gray-200 transition-colors duration-150 ease-in-out'
                  >
                     {navItem.label}
                  </Link>
               </li>
            ))}
         </ul>

         {/* MENU DROPDOWN */}

         <MenuDropdown 
            menuOpen={menuOpen} 
            onNavigate={(event, sectionId) =>
               navigateToSection(event, sectionId, true)
            }
            navItems={navItems}
         />
      </div>
    </nav>
  )
}