"use client";

type MenuDropdownProps = {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
  activeSection: string;
};

export default function MenuDropdown({ menuOpen, toggleMenuOpen, activeSection }: MenuDropdownProps) {
   return (
    <div
      className={`
        flex md:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)]  backdrop-blur-md bg-[#131313]
        transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
    >

      <ul className="w-full h-full flex flex-col gap-6 px-6 py-8 text-lg justify-center items-center">
        
        <li onClick={toggleMenuOpen}>
          <a href="#hero" className={`${activeSection === 'hero' ? 'text-white' : 'text-gray-400'}`}>
            Hero
          </a>
        </li>

        <li onClick={toggleMenuOpen}>
          <a href="#projects" className={`${activeSection === 'projects' ? 'text-white' : 'text-gray-400'}`}>
            Project 01
          </a>
        </li>

        <li onClick={toggleMenuOpen}>
          <a href="#about" className={`${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`}>
            About me
          </a>
        </li>

        <li onClick={toggleMenuOpen}>
          <a href="#contact" className={`${activeSection === 'contact' ? 'text-white' : 'text-gray-400'}`}>
            Contact
          </a>
        </li>
        
      </ul>
    </div>
  );
}