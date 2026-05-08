import Image from "next/image";
import { ArrowUpRightFromSquare } from "lucide-react";

type ProjectShowcaseTypes = {
   imageSrc: string;
   imageAlt: string;
   toolsUsed: string;
}

export default function ProjectShowcase({ imageSrc, imageAlt, toolsUsed }: ProjectShowcaseTypes) {
  return (
    <div className="flex flex-col items-center px-6 sm:px-8 lg:px-12">


      <div className="w-full max-w-6xl">
        <Image
          className="w-full rounded-xl border border-white/10 shadow-2xl object-cover"
          src={imageSrc}
          alt={imageAlt}
          width={1500}
          height={900}
          priority
        />

        <p className="mt-3 text-right text-xs sm:text-sm text-zinc-400 tracking-wide">
          Fully responsive across all screen sizes
        </p>
      </div>

      <div className="mt-10 flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <div className="flex flex-col gap-2">

          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium">
            Built With
          </p>

          <p className="max-w-2xl text-base sm:text-lg lg:text-xl font-medium text-white leading-relaxed">
            {toolsUsed}
          </p>

        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

          <button className="group flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-black transition-all duration-200 hover:scale-[1.02] hover:bg-zinc-200 hover:cursor-pointer active:scale-[0.99]">

            <span className="text-sm font-semibold tracking-wide">
              Visit Website
            </span>

            <ArrowUpRightFromSquare
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </button>

          <button className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-4 text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:cursor-pointer active:scale-[0.99]">

            <span className="text-sm font-semibold tracking-wide">
              See on GitHub
            </span>

          </button>

        </div>

      </div>
      </div>
  )
}