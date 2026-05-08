import Navbar from "@/components/layout/Navbar";
import ProjectHero from "@/components/projects/shared/ProjectHero";
import ProjectDescription from "@/components/projects/shared/ProjectDescription";
import ProjectShowcase from "@/components/projects/shared/ProjectShowcase";

export default function AtoPage() {
  return (
    <div className="w-full h-auto bg-[#131313] pb-30">
      <Navbar />

      <ProjectHero 
        projectNumber='1' 
        projectName='ato' 
      />

      <ProjectDescription 
        projectDescription="Track real study behavior. Turn it into actionable insights."
      />

      <ProjectShowcase 
        imageSrc='/images/ato.png'
        imageAlt="ATO project preview"
        toolsUsed='React, Tailwind CSS, TypeScript, Express, PostgreSQL' 
      />    
    </div>
  )
}