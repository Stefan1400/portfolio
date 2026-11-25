import ProjectCard from "../projects/ProjectCard";
import Reveal from "../Reveal";

export type ProjectTypes = {
   imageUrl: string;
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="w-full h-auto bg-[#131313] text-[#f5f5f5] py-25">
      
      <Reveal>
         <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-center">MY PROJECTS</h1>
      </Reveal>

      <Reveal delay={100} className='flex flex-col mt-50'>
         <a href="#">
            <ProjectCard imageUrl='/images/ato.png'/>
          </a>
      </Reveal>
    </section>
  )
}