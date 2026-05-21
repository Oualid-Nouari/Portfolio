"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const words = textRef.current.querySelectorAll('.word');

    let ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0.1,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const aboutText = "Passionné par l'écosystème Odoo, je combine un Master d'excellence en systèmes d'information intelligents avec un intérêt marqué pour le management. Cette double compétence me permet d'écrire du code qui améliore concrètement les processus métier, pas juste des fonctionnalités, mais de vraies solutions aux problèmes opérationnels des entreprises.";

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-16 md:py-24 px-4 md:px-8 min-h-[100vh] flex flex-col justify-center border-t border-white/10 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#017E84]/10 blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-[#114b4f]/20 blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Headline */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 w-full">
            <span className="w-8 md:w-12 h-[1px] bg-[#017E84]"></span>
            <h2 className="text-sm uppercase tracking-widest text-[#017E84] font-bold whitespace-nowrap">À propos de moi</h2>
            <span className="w-8 h-[1px] bg-[#017E84] lg:hidden"></span>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase font-outfit leading-[1.05] mb-6">
            L'humain<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#017E84] to-[#114b4f]">derrière</span><br/>
            le code.
          </h3>
          
          <div className="mt-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#017E84] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#017E84]"></span>
              </span>
              <span className="text-sm text-foreground/80 font-medium">Disponible pour de nouveaux défis</span>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Card with Text */}
        <div className="lg:col-span-7">
          <div className="relative p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#050505]/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group overflow-hidden">
            {/* Subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <p 
              ref={textRef}
              className="relative z-10 text-xl md:text-3xl font-semibold leading-relaxed tracking-tight font-syne text-white/90"
            >
              {aboutText.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-[0.3em] mt-2">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
