"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

type Experience = {
  id: number;
  title: string;
  role: string;
  company: string;
  location: string;
  periode: string;
  summary: string;
  caseStudyHref?: string;
  /** Column label for the date/duration column (default: Période) */
  dateColumnLabel?: string;
  /** Lines typed sequentially on the transition overlay when opening the case study */
  caseStudyTransitionLines?: string[];
  /** Optional stack line shown under the summary */
  stack?: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "DÉVELOPPEUR ODOO",
    role: "Développeur Odoo junior",
    company: "HB Development",
    location: "Tétouan, Maroc",
    periode: "6 mois (Fév 2026 — Présent)",
    dateColumnLabel: "Durée",
    summary:
      "Conception et déploiement d'un système de gestion de tickets sur Odoo 18 Community, en étendant le module OCA Helpdesk à travers un module personnalisé smart_itsm ; automatisations, pipeline de validation, et préparation de l'intégration IA.",
    caseStudyHref: "/experiences/hb-development",
    caseStudyTransitionLines: [
      "Mon rôle : Développeur Odoo junior",
      "Entreprise : HB Development",
      "Durée : 6 mois",
    ],
  },
  {
    id: 2,
    title: "DÉVELOPPEUR FRONT-END",
    role: "Développeur Front-end",
    company: "Cité des Métiers et des Compétences, Nador",
    location: "Nador, Maroc",
    periode: "3 mois (Avril 2024 — Juillet 2024)",
    dateColumnLabel: "Durée",
    stack: "React.js, Next.js 14, TypeScript, TailwindCSS, NextAuth, Git",
    summary:
      "Développement d'une application web qui aide les responsables pédagogiques à suivre l'avancement des heures d'enseignement en temps réel, remplacement d'un processus Excel manuel par un tableau de bord interactif avec gestion des droits d'accès par rôle.",
    caseStudyHref: "/experiences/cmc-nador",
    caseStudyTransitionLines: [
      "Mon rôle : Développeur Front-end",
      "Établissement : Cité des Métiers et des Compétences, Nador",
      "Durée : 3 mois",
    ],
  },
  {
    id: 3,
    title: "DÉVELOPPEUR FULL STACK",
    role: "Développeur Full Stack",
    company: "Centre Hospitalier Provincial, Guercif",
    location: "Guercif, Maroc",
    periode: "2 mois (Avril 2023 — Juin 2023)",
    dateColumnLabel: "Durée",
    stack: "HTML5, CSS3, JavaScript, Node.js, MongoDB",
    summary:
      "Développement d'une application web pour digitaliser la gestion des patients en dialyse, permettant au personnel administratif de vérifier instantanément le statut de couverture AMO d'un patient à partir de son identifiant.",
    caseStudyHref: "/experiences/chp-guercif",
    caseStudyTransitionLines: [
      "Mon rôle : Développeur Full Stack",
      "Établissement : Centre Hospitalier Provincial, Guercif",
      "Durée : 2 mois",
    ],
  },
];

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>('.experience-wrapper');
      const cards = gsap.utils.toArray<HTMLElement>('.experience-card');
      
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
            end: `top ${10 + (index + 1) * 5}%`, // Finishes exactly when the NEXT card sticks (15%, 20%)
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
    <section ref={containerRef} id="work" className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-3 w-full">
          <span className="w-8 md:w-12 h-[1px] bg-[#017E84]"></span>
          <h2 className="text-sm uppercase tracking-widest text-[#017E84] font-bold whitespace-nowrap">Précédentes</h2>
          <span className="w-8 h-[1px] bg-[#017E84] md:hidden"></span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Expériences</h3>
      </div>

      <div className="flex flex-col items-center w-full">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="experience-wrapper sticky w-full flex justify-center"
            style={{ 
              top: `calc(10vh + ${index * 4}vh)`,
              paddingBottom: `calc(${(experiences.length - 1 - index) * 4}vh)`,
            }}
          >
            <div className="experience-card relative flex flex-col rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] p-5 md:p-8 w-full max-w-[100%] md:max-w-[85%] h-auto lg:h-[75vh] bg-[#050505]/80 backdrop-blur-2xl border border-white/20">
              
              {/* Darken overlay for smooth GSAP animation */}
              <div className="darken-overlay absolute inset-0 bg-black opacity-0 z-50 pointer-events-none" />

              {/* Background subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/20 to-transparent pointer-events-none" />

              <div className="relative z-10 mt-2 md:mt-4 flex flex-col gap-2 md:gap-3 w-full max-w-full md:max-w-4xl min-w-0">
                  <h4 className="text-2xl md:text-2xl lg:text-3xl font-bold tracking-tighter uppercase font-outfit leading-[1.1] text-white drop-shadow-md mb-3 md:mb-0">
                    {exp.title}
                  </h4>
                  <p className="text-foreground/70 text-sm md:text-base font-light leading-relaxed">
                    {exp.summary}
                  </p>
                  {exp.stack ? (
                    <p className="text-foreground/50 text-[11px] md:text-xs leading-relaxed mt-1">
                      <span className="font-medium text-foreground/60">Stack :</span> {exp.stack}
                    </p>
                  ) : null}
              </div>

              <div className="relative z-10 mt-auto flex w-full flex-col pt-4 md:pt-6">
                <div className="mb-3 hidden justify-end lg:flex md:mb-4">
                  <Magnetic>
                    <TransitionLink
                      href={exp.caseStudyHref ?? "/experiences"}
                      title={exp.title}
                      transitionLines={exp.caseStudyTransitionLines}
                      className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full bg-[#017E84] text-white shadow-[0_0_30px_rgba(1,126,132,0.4)] backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-[#017E84] group md:h-24 md:w-24 md:gap-1"
                    >
                      <span className="text-[10px] font-medium md:text-xs">Étude de cas</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-[22px] md:w-[22px]"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </TransitionLink>
                  </Magnetic>
                </div>

                <div className="grid grid-cols-2 lg:flex lg:flex-row w-full gap-y-5 gap-x-3 lg:gap-10 border-t border-white/20 pt-4 md:pt-6">
                  {/* Column 1: Mon rôle */}
                  <div className="flex flex-col min-w-0 md:flex-1">
                    <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Mon rôle</h5>
                    <p className="text-sm md:text-base font-medium text-white/95 leading-snug">{exp.role}</p>
                  </div>
                  {/* Column 2: Lieu */}
                  <div className="flex flex-col min-w-0 md:flex-1">
                    <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Lieu</h5>
                    <p className="text-sm md:text-base font-medium text-white/95 leading-snug">{exp.location}</p>
                  </div>
                  {/* Column 3: Entreprise */}
                  <div className="flex flex-col min-w-0 col-span-2 sm:col-span-1 md:flex-1">
                    <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Entreprise</h5>
                    <p className="text-sm md:text-base font-medium text-white/95 leading-snug">{exp.company}</p>
                  </div>
                  {/* Column 4: Durée */}
                  <div className="flex flex-col min-w-0 col-span-2 sm:col-span-1 md:flex-1">
                    <h5 className="text-[10px] md:text-[11px] uppercase tracking-widest text-foreground/60 mb-1">Durée</h5>
                    <p className="text-sm md:text-base font-medium text-white/95 leading-snug">{exp.periode}</p>
                  </div>
                </div>
                
                {/* Mobile & Tablet Button */}
                <div className="mt-8 md:mt-10 flex justify-center lg:hidden w-full">
                  <Magnetic>
                    <TransitionLink
                      href={exp.caseStudyHref ?? "/experiences"}
                      title={exp.title}
                      transitionLines={exp.caseStudyTransitionLines}
                      className="flex py-4 px-4 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#017E84] text-white shadow-[0_0_30px_rgba(1,126,132,0.4)] backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-[#017E84] group"
                    >
                      <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-center whitespace-nowrap">Détails de l'expérience</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </TransitionLink>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer */}
        <div className="w-full h-[5vh] md:h-[10vh]" />
      </div>
    </section>
  );
}
