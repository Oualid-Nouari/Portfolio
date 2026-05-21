"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const floatersRef = useRef<HTMLDivElement>(null);

  const descriptionText = "Bientôt diplômé d'un Master en Management des Systèmes d'Information Intelligents, je suis actuellement en stage de fin d'études chez HB Development en tant que développeur Odoo junior";

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title Character Animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: () => gsap.utils.random(-80, 80),
            x: () => gsap.utils.random(-60, 60),
            scale: () => gsap.utils.random(0.5, 1.8),
            rotate: () => gsap.utils.random(-30, 30)
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            stagger: 0.02,
            ease: "expo.out",
            delay: 0.2,
          }
        );
      }

      // Subtitle smooth reveal
      if (subtitleRef.current) {
        const words = subtitleRef.current.querySelectorAll('.word-span');
        gsap.fromTo(
          words,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.015,
            ease: "power4.out",
            delay: 1
          }
        );
      }

      // Float animation for background elements (desktop only)
      if (floatersRef.current && window.innerWidth > 768) {
        const floaters = floatersRef.current.querySelectorAll('.floater');
        floaters.forEach((floater) => {
          gsap.to(floater, {
            y: `+=${gsap.utils.random(15, 35)}`,
            x: `+=${gsap.utils.random(-15, 15)}`,
            rotation: gsap.utils.random(-8, 8),
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }
    }, containerRef);

    // Mouse parallax (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      if (orbsRef.current) {
        const orbs = orbsRef.current.children;
        gsap.to(orbs[0], { x: x * 80, y: y * 80, duration: 2, ease: "power2.out" });
        gsap.to(orbs[1], { x: x * -120, y: y * -120, duration: 2.5, ease: "power2.out" });
        gsap.to(orbs[2], { x: x * 40, y: y * -40, duration: 3, ease: "power2.out" });
      }

      if (floatersRef.current) {
        const floaters = floatersRef.current.querySelectorAll('.floater');
        floaters.forEach((floater, i) => {
          const depth = (i + 1) * 15;
          gsap.to(floater, { x: x * depth, y: y * depth, duration: 1, ease: "power1.out" });
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const wrapChars = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className={`char inline-block ${char === " " ? "w-[0.25em]" : ""}`}>
        {char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] w-full flex flex-col justify-center md:justify-between pt-20 pb-6 px-4 md:px-8 overflow-hidden gap-6 md:gap-0"
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      {/* Background Orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-20%] md:left-[15%] w-[90vw] md:w-[40vw] h-[90vw] md:h-[40vw] rounded-full bg-[#017E84]/20 md:bg-[#017E84]/15 blur-[80px] mix-blend-screen" />
        <div className="absolute top-[45%] right-[-20%] md:right-[5%] w-[80vw] md:w-[35vw] h-[80vw] md:h-[35vw] rounded-full bg-[#114b4f]/30 blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[10%] md:left-[30%] w-[100vw] md:w-[50vw] h-[100vw] md:h-[50vw] rounded-full bg-[#017E84]/15 md:bg-[#017E84]/8 blur-[120px] mix-blend-screen" />
      </div>

      {/* Floating Glass Elements — hidden on mobile */}
      <div ref={floatersRef} className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <div className="floater absolute top-[30%] right-[15%] w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md rotate-12 flex items-center justify-center">
          <span className="text-white/30 font-mono text-[10px]">&lt;odoo/&gt;</span>
        </div>
        <div className="floater absolute top-[60%] left-[10%] w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md -rotate-12" />
        <div className="floater absolute bottom-[20%] right-[30%] w-28 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md rotate-45" />
      </div>

      {/* Center Typography */}
      <div className="flex-none md:flex-grow flex flex-col justify-center items-center z-20 w-full relative px-2">
        <h1
          ref={titleRef}
          className="text-[clamp(2.75rem,11vw,6rem)] leading-[1.05] font-extrabold tracking-tighter font-outfit text-center w-full flex flex-col items-center justify-center cursor-default"
        >
          <div className="flex justify-center overflow-hidden pb-1 md:pb-2 text-white/90">
            {wrapChars("Développeur")}
          </div>
          <div className="flex justify-center overflow-hidden text-white/50">
            {wrapChars("Odoo junior")}
          </div>
        </h1>
      </div>

      {/* Bottom Elements */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:items-end z-20 pb-4 md:pb-2 gap-10 md:gap-5 text-center md:text-left">
        <p
          ref={subtitleRef}
          className="text-sm md:text-base font-light text-neutral-400 max-w-[320px] md:max-w-md leading-relaxed"
        >
          {descriptionText.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
              <span className="inline-block word-span">
                {word}
              </span>
            </span>
          ))}
        </p>

        <Magnetic>
          <div className="w-24 h-24 md:w-[110px] md:h-[110px] bg-[#017E84] hover:bg-white hover:text-[#017E84] text-white rounded-full flex flex-col items-center justify-center transition-colors duration-300 gap-1.5 shadow-[0_0_40px_rgba(1,126,132,0.4)] cursor-pointer group backdrop-blur-md">
            <span className="font-medium text-xs md:text-sm uppercase tracking-widest">Mon CV</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-y-1">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Magnetic>
      </div>

      {/* Scroll Indicator — desktop only */}
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-20 mix-blend-difference">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="[writing-mode:vertical-rl] text-[9px] tracking-[0.4em] text-white/50 uppercase font-bold">
          Scroll
        </span>
      </div>
    </section>
  );
}
