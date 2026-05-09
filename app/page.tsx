import Navbar from "@/components/layout/Navbar";
import Hero from "../components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <About />
      <section id="contact" className="w-full h-screen flex items-center justify-center text-gray-400 bg-[#131313]">contact</section>
    </div>
  );
}
