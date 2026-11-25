import Navbar from "@/components/layout/Navbar";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "../components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <FloatingActions />
      <Hero />
      <ProjectsGrid />
      <Contact />
    </div>
  );
}
