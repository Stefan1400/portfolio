'use client';

import { Copy, CheckIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const email = "stefan.besonen783@gmail.com";

  const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
   };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#131313] text-[#f5f5f5] overflow-hidden pt-15"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-50 md:pt-40 lg:pt-40 pb-40">
        <h1 className="text-white/20 mb-2 text-2xl sm:text-3xl md:text-4xl leading-[1.15] font-semibold tracking-tight pointer-events-none select-none">
          get in touch
        </h1>

        <div className="max-w-3xl mt-15">

          {/* EMAIL SECTION */}
          <button type="button" onClick={handleCopy} className="mt-7 hover:cursor-pointer">
            <h2 className="text-white/40 text-start mb-2 text-1xl sm:text-1xl md:text-1xl leading-[1.15] font-normal tracking-tight">
               Contact via email
            </h2>

            <div className="flex items-center gap-4">
               <span
                  className={`group inline-flex items-center text-start gap-4 text-[1.15rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-white transition-colors duration-200 break-all ${!copied ? 'hover:cursor-pointer hover:text-zinc-300' : 'text-zinc-400 transition-none'}`}
               >
                  {copied ? "Copied to clipboard" : email}
               </span>

               <span
                  onClick={handleCopy}
                  aria-label="Copy email"
                  className={` active:scale-[0.98] ${!copied ? 'hover:cursor-pointer hover:text-white' : 'text-zinc-400 transition-none'}`}
               >
                  {copied ? <CheckIcon size={20} /> : <Copy size={20} />}
               </span>
            </div>
         </button>

          {/* SOCIAL SECTION */}
          <div className="mt-10">
            <h2 className="text-white/40 mb-4 text-1xl sm:text-1xl md:text-1xl leading-[1.15] font-normal tracking-tight">
              Other ways to reach me
            </h2>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/stefan-besonen-02a670385/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 pl-0"
              >
                <FaLinkedin
                  size={26}
                  className="text-white transition-colors duration-200 hover:text-zinc-300 break-all"
                />
              </a>

              <a
                href="https://github.com/Stefan1400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2"
              >
                <FaGithub
                  size={26}
                  className="text-white transition-colors duration-200 hover:text-zinc-300 break-all"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}