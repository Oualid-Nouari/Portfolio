"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "@/components/navigation/Header";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const contactMethods = [
    { name: "Email", label: "oualidnouari0@gmail.com", href: "mailto:oualidnouari0@gmail.com" },
    { name: "LinkedIn", label: "linkedin.com/in/oualidnouari", href: "https://www.linkedin.com/in/oualidnouari/" },
    { name: "GitHub", label: "github.com/Oualid-Nouari", href: "https://github.com/Oualid-Nouari" },
    { name: "Téléphone", label: "+212 644 388 175", href: "tel:+212644388175" },
  ];

  useEffect(() => {
    if (!containerRef.current || !headlineRef.current || !gridRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Headline split animation
      const lines = headlineRef.current?.querySelectorAll(".line-reveal");
      if (lines) {
        tl.fromTo(
          lines,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
          0.2
        );
      }

      // Stagger contact buttons
      const buttons = gridRef.current?.querySelectorAll(".contact-btn");
      if (buttons) {
        tl.fromTo(
          buttons,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
          0.6
        );
      }

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
        <div className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[#017E84]/15 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-[#114b4f]/20 blur-[150px] mix-blend-screen" />
      </div>

      <Header />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-24 md:px-8 md:pt-28">
        
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          
          <div className="flex items-center justify-center gap-3 mb-8 overflow-hidden">
            <div className="line-reveal flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#017E84] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#017E84]"></span>
              </span>
              <h2 className="text-sm uppercase tracking-widest text-[#017E84] font-bold">
                Disponible en septembre 2026
              </h2>
            </div>
          </div>

          <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase font-outfit leading-[0.9] text-white mb-16 lg:mb-24">
            <div className="overflow-hidden pb-2"><div className="line-reveal">Travaillons</div></div>
            <div className="overflow-hidden pb-2"><div className="line-reveal text-transparent bg-clip-text bg-gradient-to-r from-[#017E84] to-[#114b4f]">Ensemble</div></div>
          </h1>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl">
            {contactMethods.map((method, idx) => (
              <Magnetic strength={0.15} key={idx}>
                <a
                  href={method.href}
                  target={method.name !== "Email" && method.name !== "Téléphone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-btn block relative p-6 md:p-8 rounded-[1.5rem] bg-[#050505]/40 backdrop-blur-xl border border-white/10 group overflow-hidden transition-colors hover:border-[#017E84]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="text-[#017E84] font-bold uppercase tracking-wider text-xs md:text-sm">
                      {method.name}
                    </span>
                    <span className="text-white/90 font-medium text-base md:text-lg">
                      {method.label}
                    </span>
                  </div>
                </a>
              </Magnetic>
            ))}
          </div>

        </div>

        

      </div>
    </main>
  );
}
