"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    let ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll('.reveal-element');

      if (elements) {
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden border-t border-white/10"
    >
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#017E84]/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#114b4f]/30 blur-[100px] mix-blend-screen" />
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className="flex-grow flex flex-col justify-center w-full max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 z-10"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-16 w-full">

          {/* Left Side: Massive Typography & Avatar */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
            <div className="reveal-element flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10 w-full">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(1,126,132,0.3)] flex-shrink-0">
                <Image
                  src="/images/g_can.png"
                  alt="Oualid Nouari"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#017E84] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#017E84]"></span>
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-widest text-[#017E84] font-bold">Travaillons ensemble</span>
                </div>
                <span className="text-white/50 text-sm mt-1">Oualid Nouari</span>
              </div>
            </div>

            <h2 className="reveal-element text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter uppercase font-outfit leading-[0.9] text-white">
              Prêt pour<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#017E84] to-white/80">septembre</span>
            </h2>
          </div>

          {/* Right Side: Info & Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-10 lg:pb-6 lg:max-w-md w-full">
            <p className="reveal-element text-sm md:text-base text-foreground/60 font-light leading-relaxed">
              Disponible à partir de <span className="text-white font-medium">septembre 2026</span>. N'hésitez pas à me contacter pour discuter de vos projets.
            </p>

            <div className="reveal-element flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Magnetic>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#017E84] hover:bg-white hover:text-[#017E84] text-white rounded-full flex flex-col items-center justify-center transition-colors duration-300 gap-1 md:gap-2 shadow-[0_0_40px_rgba(1,126,132,0.4)] group backdrop-blur-md"
                  >
                    <span className="font-medium text-[10px] sm:text-xs md:text-sm uppercase tracking-widest">Mon CV</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-y-1">
                      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </Magnetic>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <a
                  href="mailto:oualidnouari0@gmail.com"
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white truncate pr-2">oualidnouari0@gmail.com</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-white/40 group-hover:text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="tel:+212644388175"
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white truncate pr-2">+212 644 388 175</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-white/40 group-hover:text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-8 md:px-10 border-t border-white/10 z-10 bg-black/20 backdrop-blur-sm">
        <p className="text-xs text-foreground/40 mb-4 md:mb-0 font-medium">
          © {new Date().getFullYear()} Oualid Nouari. Tous droits réservés.
        </p>
        <div className="flex items-center gap-8">
          <Magnetic>
            <a href="https://www.linkedin.com/in/oualidnouari/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-foreground/50 hover:text-white transition-colors font-bold">
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://github.com/Oualid-Nouari" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-foreground/50 hover:text-white transition-colors font-bold">
              GitHub
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
