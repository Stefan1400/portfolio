import ProjectCard from "../projects/ProjectCard";

export type ProjectTypes = {
   imageUrl: string;
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="w-full h-screen text-[#1b1b1b] bg-[#ededed]">
      
      <h1 className="text-7xl font-bold md:text-6xl lg:text-7xl text-center">MY PROJECTS</h1>

      <div className='flex flex-col mt-50'>
         <ProjectCard imageUrl='/images/ato.png' />
      </div>
    </section>
  )
}