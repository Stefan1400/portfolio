type ProjectHeroTypes = {
   projectNumber: string;
   projectName: string;
}

export default function ProjectHero({ projectNumber, projectName }: ProjectHeroTypes) {
  return (
    <div>
      <section className="w-full h-screen flex flex-col items-center justify-center">
         <h3 className="text-md font-light text-[#717171] md:text-lg">PROJECT {projectNumber}</h3>
         <h1 className="text-9xl font-bold text-white">{projectName}</h1>
      </section>
    </div>
  )
}