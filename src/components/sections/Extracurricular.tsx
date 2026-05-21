"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    id: 1,
    title: "Club d'excellence",
    summary: "Le premier club étudiant de la FSJES, une initiative pour créer un espace d'échange, d'apprentissage et d'organisation d'événements.",
    role: "Responsable Média",
    taches: "Création du logo du club, management d'une équipe de 6 (social media managers, designers, video editors).",
    periode: "2024 — 2025",
    lieu: "FSJES, Oujda",
    image: "/images/team.jpeg",
    imagePosition: "left",
    buttonPosition: "bottom-left" as const,
    caseStudyHref: "/club-dexcellence",
    transitionLines: [
      "Rôle : Responsable Média",
      "Club d'Excellence , FSJES, Oujda",
      "Période : 2024 — 2025",
    ],
  },
  {
    id: 2,
    title: "Hack'Chrono 48",
    summary: "Organisation d'un Hackathon à la FSJES, Oujda. Un hackathon intense de 48 heures rassemblant des étudiants passionnés pour relever des défis technologiques innovants.",
    role: "Membre Média & Marketing",
    taches: "Création du site web officiel hackchrono48.com, conception des supports visuels, gestion du contenu sur les réseaux sociaux et coordination inter-départements.",
    periode: "Octobre — Décembre 2025",
    lieu: "FSJES, Oujda",
    image: "/images/hackathon_img_card.jpg",
    imagePosition: "right",
    buttonPosition: "top-right" as const,
    caseStudyHref: "/hackchrono-48",
    transitionLines: [
      "Rôle : Membre Média & Marketing",
      "Hack'Chrono 48, FSJES, Oujda",
      "Période : Octobre — Décembre 2025",
    ],
  },
];

export default function Extracurricular() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>('.extra-wrapper');
      const cards = gsap.utils.toArray<HTMLElement>('.extra-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Don't animate the last card
        
        const overlay = card.querySelector('.darken-overlay');

        // Scale down the card
        gsap.to(card, {
          scale: 0.95,
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: wrappers[index + 1],
            start: "top 100%", // Start animating the moment the NEXT card enters the viewport
            end: `top ${10 + (index + 1) * 5}%`, // Finishes exactly when the NEXT card sticks
            scrub: true,
          }
        });

        // Darken the card smoothly using an overlay
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.6,
            scrollTrigger: {
              trigger: wrappers[index + 1],
              start: "top 100%",
              end: `top ${10 + (index + 1) * 5}%`,
              scrub: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="extracurricular" className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-3 w-full">
          <span className="w-8 md:w-12 h-[1px] bg-[#017E84]"></span>
          <h2 className="text-sm uppercase tracking-widest text-[#017E84] font-bold whitespace-nowrap">Leadership</h2>
          <span className="w-8 h-[1px] bg-[#017E84] md:hidden"></span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Activités Parascolaires</h3>
      </div>

      <div className="flex flex-col items-center w-full">
        {activities.map((act, index) => (
          <div
            key={act.id}
            className="extra-wrapper sticky w-full flex justify-center"
            style={{ 
              top: `calc(10vh + ${index * 4}vh)`,
              paddingBottom: `calc(${(activities.length - 1 - index) * 4}vh)`,
            }}
          >
            <div className="extra-card relative flex flex-col lg:flex-row rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-[100%] md:max-w-[85%] h-auto min-h-[60vh] lg:h-[70vh] bg-[#050505]/80 backdrop-blur-2xl border border-white/20">
              
              {/* Darken overlay for smooth GSAP animation */}
              <div className="darken-overlay absolute inset-0 bg-black opacity-0 z-50 pointer-events-none" />

              {/* Button - top right on mobile, original position on desktop */}
              <div className={`absolute z-[60] top-5 right-5 ${act.buttonPosition === "bottom-left" ? "lg:bottom-8 lg:left-8 lg:top-auto lg:right-auto" : "lg:top-8 lg:right-8"}`}>
                <Magnetic>
                  {act.caseStudyHref ? (
                    <TransitionLink
                      href={act.caseStudyHref}
                      title={act.title}
                      transitionLines={act.transitionLines}
                      className="w-16 h-16 lg:w-20 lg:h-20 bg-[#017E84] hover:bg-white hover:text-[#017E84] text-white rounded-full flex flex-col items-center justify-center transition-colors duration-300 gap-1 shadow-[0_0_30px_rgba(1,126,132,0.4)] group backdrop-blur-md"
                    >
                      <span className="font-medium text-[10px] md:text-xs">Détails</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </TransitionLink>
                  ) : (
                    <button className="w-16 h-16 lg:w-20 lg:h-20 bg-[#017E84] hover:bg-white hover:text-[#017E84] text-white rounded-full flex flex-col items-center justify-center transition-colors duration-300 gap-1 shadow-[0_0_30px_rgba(1,126,132,0.4)] group backdrop-blur-md">
                      <span className="font-medium text-[10px] md:text-xs">Détails</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </Magnetic>
              </div>

              {/* Layout Split: Image 50% / Content 50% */}
              {act.imagePosition === "left" ? (
                <>
                  {/* Left Side: Image */}
                  <div className="w-full lg:w-1/2 relative h-[35vh] lg:h-full border-b lg:border-b-0 lg:border-r border-white/10 flex-shrink-0 order-first lg:order-none">
                    <Image 
                      src={act.image} 
                      alt={act.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-[#050505] opacity-90" />
                  </div>

                  {/* Right Side: Content */}
                  <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between relative z-10 h-full overflow-hidden order-last lg:order-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/10 to-transparent pointer-events-none" />
                    
                    <div className="flex flex-col relative z-10 pb-6 lg:pb-0">
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter uppercase font-outfit leading-[1.1] text-white drop-shadow-md mb-3 md:mb-4 max-w-[80%]">
                        {act.title}
                      </h4>
                      {act.summary && (
                        <p className="text-foreground/70 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
                          {act.summary}
                        </p>
                      )}
                    </div>

                    <div className="relative z-10 flex flex-col gap-6 lg:gap-5 mt-auto pt-6 border-t border-white/20">
                      <div className="grid grid-cols-2 gap-6 md:gap-6">
                        <div>
                          <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Rôle</h5>
                          <p className="text-sm md:text-base font-medium text-white/95">{act.role}</p>
                        </div>
                        <div>
                          <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Lieu</h5>
                          <p className="text-sm md:text-base font-medium text-white/95">{act.lieu}</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Période</h5>
                        <p className="text-sm md:text-base font-medium text-white/95">{act.periode}</p>
                      </div>

                      <div>
                        <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Tâches</h5>
                        <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed">{act.taches}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Left Side: Content */}
                  <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between relative z-10 h-full overflow-hidden order-last lg:order-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/10 to-transparent pointer-events-none" />
                    
                    <div className="flex flex-col relative z-10 pb-6 lg:pb-0">
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter uppercase font-outfit leading-[1.1] text-white drop-shadow-md mb-3 md:mb-4 max-w-[80%]">
                        {act.title}
                      </h4>
                      {act.summary && (
                        <p className="text-foreground/70 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
                          {act.summary}
                        </p>
                      )}
                    </div>

                    <div className="relative z-10 flex flex-col gap-6 lg:gap-5 mt-auto pt-6 border-t border-white/20">
                      <div className="grid grid-cols-2 gap-6 md:gap-6">
                        <div>
                          <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Rôle</h5>
                          <p className="text-sm md:text-base font-medium text-white/95">{act.role}</p>
                        </div>
                        <div>
                          <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Lieu</h5>
                          <p className="text-sm md:text-base font-medium text-white/95">{act.lieu}</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Période</h5>
                        <p className="text-sm md:text-base font-medium text-white/95">{act.periode}</p>
                      </div>

                      <div>
                        <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Tâches</h5>
                        <p className="text-xs md:text-sm font-light text-white/80 leading-relaxed">{act.taches}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Image */}
                  <div className="w-full lg:w-1/2 relative h-[35vh] lg:h-full order-first lg:order-none border-b lg:border-b-0 lg:border-l border-white/10 flex-shrink-0">
                    <Image 
                      src={act.image} 
                      alt={act.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#050505] opacity-90" />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        <div className="w-full h-[40vh] md:h-[60vh]" />
      </div>
    </section>
  );
}
