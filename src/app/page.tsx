import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/Hero";
import Experiences from "@/components/sections/Experiences";
import Academic from "@/components/sections/Academic";
import Extracurricular from "@/components/sections/Extracurricular";
import Marquee from "@/components/ui/Marquee";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const techStack = [
    "Odoo 18",
    "Python",
    "PostgreSQL",
    "XML/QWeb",
    "JavaScript",
    "React.JS",
    "Next.js",
    "Linux",
  ];

  return (
    <main className="relative bg-background min-h-screen">
      <Header />
      <Hero />
      <Marquee items={techStack} />
      <About />
      <Experiences />
      <Academic />
      <Extracurricular />
      <Contact />
    </main>
  );
}
