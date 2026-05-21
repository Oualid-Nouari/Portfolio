"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const aboutCards = [
    {
      title: "Mon Parcours",
      text: "Passionné par l'écosystème Odoo, je combine un Master d'excellence en systèmes d'information intelligents avec un intérêt marqué pour le management."
    },
    {
      title: "Ma Vision",
      text: "Cette double compétence me permet d'écrire du code qui améliore concrètement les processus métier, pas juste des fonctionnalités, mais de vraies solutions aux problèmes opérationnels des entreprises."
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current || !imageRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Image appears first
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        0.2
      );

      // Stagger cards
      const cards = cardsRef.current?.querySelectorAll(".about-card");
      if (cards) {
        tl.fromTo(
          cards,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
          0.4
        );
      }
      
      // Floating animation for the image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-foreground overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#017E84]/15 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-[#114b4f]/20 blur-[150px] mix-blend-screen" />
      </div>

      <Header />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-8 pt-24 md:px-8 lg:pt-24">
        
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Image Presentation */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end order-1">
            <div 
              ref={imageRef}
              className="relative w-full max-w-[300px] lg:max-w-[340px] aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(1,126,132,0.15)] group"
            >
              <div className="absolute inset-0 bg-[#017E84]/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              <Image
                src="/images/g_can.png"
                alt="Oualid Nouari"
                fill
                className="object-cover object-center scale-105 transition-transform duration-1000 group-hover:scale-100"
                priority
              />
              
            </div>
          </div>

          {/* Right Side: Structured Content */}
          <div ref={cardsRef} className="lg:col-span-7 flex flex-col justify-center gap-4 lg:gap-6 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-black tracking-tighter uppercase font-outfit leading-[1.05] text-white text-center lg:text-left mb-2 lg:mb-4">
              L'humain<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#017E84] to-[#114b4f]">
                derrière
              </span> le code.
            </h2>

            {aboutCards.map((card, idx) => (
              <div 
                key={idx}
                className="about-card relative p-5 lg:p-6 rounded-[1.25rem] bg-[#050505]/40 backdrop-blur-xl border border-white/10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h3 className="text-[#017E84] font-bold uppercase tracking-wider text-xs lg:text-sm mb-2">
                  {card.title}
                </h3>
                <p className="relative z-10 text-sm lg:text-base font-light leading-relaxed font-syne text-white/80">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}
