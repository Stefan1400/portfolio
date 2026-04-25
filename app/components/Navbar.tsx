import Logo from "./icons/Logo";
import Hamburger from "./icons/Hamburger";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-5 md:px-10 py-6 flex items-center justify-between">

         {/* MOBILE LOGO */}
         <a href="#hero" className="flex md:hidden">
            <Logo />
         </a>

         {/* MOBILE HAMBURGER */}
         <button type="button" className="flex md:hidden">
            <Hamburger />
         </button>


         {/* DESKTOP LOGO */}
         <a href="#hero" className="hidden md:flex text-white font-medium">
            Stefan Besonen
         </a>

         {/* DESKTOP NAV */}
         <ul className="hidden md:flex gap-8 text-sm">
            <li>
               <a href="#hero" className="text-white">Hero</a>
            </li>
            <li>
               <a href="#projects" className="text-gray-400 hover:text-white transition">
               Project 01
               </a>
            </li>
            <li>
               <a href="#about" className="text-gray-400 hover:text-white transition">
               About me
               </a>
            </li>
            <li>
               <a href="#contact" className="text-gray-400 hover:text-white transition">
               Contact
               </a>
            </li>
         </ul>
      
      </div>
    </nav>
  )
}