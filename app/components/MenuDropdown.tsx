"use client";

type MenuDropdownProps = {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
};

export default function MenuDropdown({ menuOpen, toggleMenuOpen }: MenuDropdownProps) {
  return (
    <div
      className={`
        flex md:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)]  backdrop-blur-md bg-[#131313]
        transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
    >

      <ul className="w-full h-full flex flex-col gap-6 px-6 py-8 text-lg justify-center items-center">
        <li>
          <a href="#hero" className="text-white">
            Hero
          </a>
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
  );
}