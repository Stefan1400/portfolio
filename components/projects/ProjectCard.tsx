import Image from "next/image";
import type { ProjectTypes } from "../sections/ProjectsGrid";

export default function ProjectCard({ imageUrl }: ProjectTypes) {
  return (
    <div className="flex flex-col items-center gap-3 hover:cursor-pointer p-15">
         <Image
            className="rounded-[5px]"
            src={imageUrl}
            alt="ATO project preview"
            width={300}
            height={300}
         />

         <h2 className="text-7xl font-bold">ato</h2>
      </div>
  )
}