import Image from "next/image";
import type { ProjectTypes } from "../sections/ProjectsGrid";

export default function ProjectCard({ imageUrl }: ProjectTypes) {
  return (
    <div className="flex flex-col items-center gap-3 hover:cursor-pointer p-15">
         <Image
            className="rounded-[5px] md:w-100 lg:w-125"
            src={imageUrl}
            alt="ATO project preview"
            width={300}
            height={300}
         />

         <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">ato</h2>
      </div>
  )
}