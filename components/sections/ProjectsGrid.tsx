import ProjectCard from "../projects/ProjectCard";
import Reveal from "../Reveal";
import { FaGithub } from "react-icons/fa";

export type ProjectTypes = {
   imageUrl: string;
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="w-full h-auto bg-[#131313] text-[#f5f5f5] py-25">
      
      <Reveal>
         <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-center">MY PROJECTS</h1>
      </Reveal>

      <Reveal delay={100} className="mt-50 flex flex-col items-center">
        <ProjectCard imageUrl="/images/ato.png" />
        <a
          href="https://github.com/Stefan1400/ato"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#131313] px-6 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:cursor-pointer active:scale-[0.99]"
        >
          <span>View GitHub</span>
          <FaGithub
            size={18}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </Reveal>
    </section>
  )
}