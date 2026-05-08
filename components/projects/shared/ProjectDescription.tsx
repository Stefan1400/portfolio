type ProjectDescriptionTypes = {
   projectDescription: string;
}

export default function ProjectDescription({ projectDescription }: ProjectDescriptionTypes) {
  return (
    <section className="w-full h-100 flex flex-col items-center justify-start">
      <h4 className="text-center font-semibold text-white px-[15%] text-[clamp(1.5rem,5vw,6rem)]">
         {projectDescription}
      </h4>
   </section>
  )
}