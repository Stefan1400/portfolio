import ProjectCard from "../projects/ProjectCard";
import Link from "next/link";

export type ProjectTypes = {
   imageUrl: string;
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="w-full h-auto bg-[#131313] text-[#f5f5f5] py-25">
      
      <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-center">MY PROJECTS</h1>

      <div className='flex flex-col mt-50'>
         <Link href={`/projects/ato`}>
            <ProjectCard imageUrl='/images/ato.png'/>
         </Link>
      </div>
    </section>
  )
}