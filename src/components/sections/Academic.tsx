"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    id: 1,
    degree: "Master d'excellence en Management des systèmes d'information intelligents",
    school: "La faculté des sciences juridiques économiques et sociales d'Oujda - FSJESO",
    year: "2024 - Présent",
  },
  {
    id: 2,
    degree: "Licence professionnelle en Informatique et gestion des entreprises",
    school: "L'école supérieure de technologie Oujda - ESTO",
    year: "2021 - 2024",
  }
];

export default function Academic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.academic-item');
      
      gsap.fromTo(items, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="academic" className="relative py-16 md:py-20 px-4 md:px-8 border-t border-white/10 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-[#017E84]/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto mb-10 md:mb-16 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4 w-full">
          <span className="w-8 md:w-12 h-[1px] bg-[#017E84]"></span>
          <h2 className="text-sm uppercase tracking-widest text-[#017E84] font-bold whitespace-nowrap">Formation</h2>
          <span className="w-8 h-[1px] bg-[#017E84] md:hidden"></span>
        </div>
        <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter uppercase font-outfit">Parcours Académique</h3>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
        {education.map((edu) => (
          <div 
            key={edu.id}
            className="academic-item relative p-7 md:p-6 rounded-[1.5rem] bg-[#050505]/40 backdrop-blur-xl border border-white/10 hover:border-[#017E84]/40 transition-colors duration-500 group overflow-hidden"
          >
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#017E84]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6 md:gap-6">
              <div className="flex-1">
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-white/95 leading-tight tracking-tight mb-4 md:mb-2">
                  {edu.degree}
                </h4>
                <p className="text-sm md:text-base text-foreground/60 font-light flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#017E84] flex-shrink-0 hidden md:block">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {edu.school}
                </p>
              </div>
              <div className="flex-shrink-0 self-start lg:self-auto">
                <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 font-medium tracking-widest text-[10px] md:text-xs uppercase shadow-inner">
                  {edu.year}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
