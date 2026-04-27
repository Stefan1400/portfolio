'use client';

import Logo from "./icons/Logo";
import Hamburger from "./icons/Hamburger";
import { useState, useEffect } from "react";
import MenuDropdown from "./MenuDropdown";
import { X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar({}) {
   const [menuOpen, setMenuOpen] = useState(false);

   function toggleMenuOpen() {
      setMenuOpen(prev => !prev);
   };

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
   }, [menuOpen]);

   const activeSection = useActiveSection();
  
   return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#131313]">
      <div className="relative max-w-8xl mx-auto px-5 md:px-10 py-6 flex items-center justify-between">

         {/* MOBILE LOGO */}
         <a href="#hero" className="flex md:hidden">
            <Logo />
         </a>

         {/* MOBILE HAMBURGER / X */}
         {!menuOpen ? (
            <button onClick={toggleMenuOpen} type="button" className="flex md:hidden">
               <Hamburger />
            </button>
         ) : (
            <button onClick={toggleMenuOpen} className="fixed top-6 right-4">
               <X size={33} strokeWidth={1} />
            </button>
         )}


         {/* DESKTOP LOGO */}
         <a href="#hero" className="hidden md:flex text-white font-medium">
            Stefan Besonen
         </a>

         {/* DESKTOP NAV */}
         <ul className="hidden md:flex gap-8 text-sm">
            <li>
               <a href="#hero" className={`${activeSection === 'hero' ? 'text-white' : 'text-gray-400'}`}>
                  Hero
               </a>
            </li>
            <li>
               <a href="#projects" className={`${activeSection === 'projects' ? 'text-white' : 'text-gray-400'}`}>
               Project 01
               </a>
            </li>
            <li>
               <a href="#about" className={`${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`}>
               About me
               </a>
            </li>
            <li>
               <a href="#contact" className={`${activeSection === 'contact' ? 'text-white' : 'text-gray-400'}`}>
               Contact
               </a>
            </li>
         </ul>

         {/* MENU DROPDOWN */}
         {menuOpen && (
            <MenuDropdown 
               menuOpen={menuOpen} 
               toggleMenuOpen={toggleMenuOpen} 
               activeSection={activeSection}
            />
         )}
      
      </div>
    </nav>
  )
}