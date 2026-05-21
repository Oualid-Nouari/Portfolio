"use client";

import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export default function CaseStudyIndexPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-foreground overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#017E84]/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-[#114b4f]/20 blur-[150px] mix-blend-screen" />
      </div>
      
      <Header />
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-8 pt-20 md:px-8 md:pt-20">
        
        {/* Header Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-8">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-6 w-full">
            <span className="w-8 md:w-12 h-[1px] bg-[#017E84]"></span>
            <h2 className="text-sm uppercase tracking-widest text-[#017E84] font-bold whitespace-nowrap">Précédentes</h2>
            <span className="w-8 h-[1px] bg-[#017E84] md:hidden"></span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase font-outfit leading-[1.05] text-white">
            Expériences
          </h1>
          <p className="mt-4 text-foreground/70 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
            Découvrez une analyse détaillée de mes expériences professionnelles, des défis relevés et des solutions techniques apportées.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <Magnetic strength={0.1}>
            <TransitionLink
              href="/experiences/hb-development"
              title="HB Development"
              transitionLines={["Analyse", "HB Development", "Tétouan"]}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#050505]/40 p-5 lg:p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#017E84]/40 hover:bg-white/5 h-full min-h-[220px] lg:min-h-[240px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/0 to-[#017E84]/0 group-hover:from-[#017E84]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/80 mb-4 group-hover:border-[#017E84]/30 transition-colors">
                  Smart-ITSM
                </span>
                <h3 className="font-outfit text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  HB Development
                </h3>
                <p className="text-sm text-foreground/60 font-light flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span className="font-medium text-foreground/80">Durée :</span> 6 mois (en cours)
                </p>
                <p className="text-sm text-foreground/60 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span className="font-medium text-foreground/80">Lieu :</span> Tétouan
                </p>
              </div>
              
              <div className="relative z-10 flex items-end justify-between mt-6">
                <p className="text-sm text-white/90 font-medium">Développeur Odoo</p>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-500 group-hover:bg-[#017E84] group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </TransitionLink>
          </Magnetic>

          {/* Card 2 */}
          <Magnetic strength={0.1}>
            <TransitionLink
              href="/experiences/cmc-nador"
              title="CMC Nador"
              transitionLines={["Analyse", "Cités des Métiers et des Compétences", "Suivi pédagogique"]}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#050505]/40 p-5 lg:p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#017E84]/40 hover:bg-white/5 h-full min-h-[220px] lg:min-h-[240px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/0 to-[#017E84]/0 group-hover:from-[#017E84]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/80 mb-4 group-hover:border-[#017E84]/30 transition-colors">
                  Suivi pédagogique
                </span>
                <h3 className="font-outfit text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  Cités des Métiers et des Compétences
                </h3>
                <p className="text-sm text-foreground/60 font-light flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span className="font-medium text-foreground/80">Durée :</span> 3 mois
                </p>
                <p className="text-sm text-foreground/60 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span className="font-medium text-foreground/80">Lieu :</span> Nador
                </p>
              </div>
              
              <div className="relative z-10 flex items-end justify-between mt-6">
                <p className="text-sm text-white/90 font-medium">Développeur Front-end</p>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-500 group-hover:bg-[#017E84] group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </TransitionLink>
          </Magnetic>

          {/* Card 3 */}
          <Magnetic strength={0.1}>
            <TransitionLink
              href="/experiences/chp-guercif"
              title="CHP Guercif"
              transitionLines={["Analyse", "Centre Hospitalier Provincial", "Gestion des patiens"]}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#050505]/40 p-5 lg:p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#017E84]/40 hover:bg-white/5 h-full min-h-[220px] lg:min-h-[240px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/0 to-[#017E84]/0 group-hover:from-[#017E84]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/80 mb-4 group-hover:border-[#017E84]/30 transition-colors">
                  Gestion des patients
                </span>
                <h3 className="font-outfit text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  Centre Hospitalier Provincial
                </h3>
                <p className="text-sm text-foreground/60 font-light flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span className="font-medium text-foreground/80">Durée :</span> 2 mois
                </p>
                <p className="text-sm text-foreground/60 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span className="font-medium text-foreground/80">Lieu :</span> Guercif
                </p>
              </div>
              
              <div className="relative z-10 flex items-end justify-between mt-6">
                <p className="text-sm text-white/90 font-medium">Développeur Full Stack</p>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-500 group-hover:bg-[#017E84] group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </TransitionLink>
          </Magnetic>

        </div>

      </div>
    </main>
  );
}
