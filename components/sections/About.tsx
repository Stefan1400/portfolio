import { Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#131313] text-[#f5f5f5] overflow-hidden">
      <div
         className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-50 md:pt-40 lg:pt-40 pb-40">
         <h1
            className="text-white/20 mb-2 text-2xl sm:text-3xl md:text-4xl leading-[1.15] font-semibold tracking-tight pointer-events-none select-none">
               about me
         </h1>

         <div className="max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl leading-[1.15] font-semibold tracking-tight pointer-events-none select-none">
               I'm a self-taught full-stack developer building
               clean, user-focused web applications.
            </p>

            <p
            className="mt-16 text-2xl sm:text-3xl md:text-4xl leading-[1.15] font-semibold tracking-tight pointer-events-none select-none">
               I'm currently developing real-world projects and
               working toward my first full-time role, focusing
               on simplicity, performance, and usability.
            </p>

            <div className="flex flex-wrap gap-5 mt-16">

            <Link className="group flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-black transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-200 hover:cursor-pointer active:scale-[0.99]" href='/#contact'>
               <span className="text-sm font-semibold tracking-wide pointer-events-none select-none">
                  Contact Me
               </span>

               <Mail
                  size={18}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
               />
            </Link>


               <a 
                  href="https://github.com/Stefan1400/portfolio" 
                  target="_blank" 
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-4 text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:cursor-pointer active:scale-[0.99]">
                  See on GitHub
               </a>

            </div>
         </div>
      </div>

      </section>
  )
}