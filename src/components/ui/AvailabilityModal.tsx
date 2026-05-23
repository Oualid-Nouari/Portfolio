"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function AvailabilityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"info" | "greeting">("info");
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If we've scrolled down more than 300px
      if (window.scrollY > 300) {
        const hasSeen = sessionStorage.getItem("availabilityModalSeen");
        if (!hasSeen && !isOpen) {
          setIsOpen(true);
          sessionStorage.setItem("availabilityModalSeen", "true");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Disable scroll while modal is open
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.stop();
      }

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, backdropFilter: "blur(0px)" },
        { opacity: 1, backdropFilter: "blur(12px)", duration: 0.5, ease: "power2.out" }
      );

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)", delay: 0.1 }
        );
      }
    } else {
      // Re-enable scroll when closed
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }
  }, [isOpen]);

  const handleOkay = () => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setStep("greeting");
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );

          // Auto close after 3 seconds
          setTimeout(() => {
            closeModal();
          }, 3500);
        },
      });
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505]/80 p-8 md:p-10 text-center shadow-[0_0_60px_rgba(1,126,132,0.15)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#017E84]/10 to-transparent pointer-events-none" />

        {step === "info" ? (
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#017E84]/20 border border-[#017E84]/50 text-[#017E84]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h2 className="mb-4 text-2xl md:text-3xl font-bold font-outfit uppercase tracking-wide text-white">
              Une petite précision
            </h2>
            
            <p className="mb-8 text-sm md:text-base leading-relaxed text-white/80 font-syne">
              Actuellement, je suis en stage <strong className="text-white">PFE</strong> chez <span className="text-[#017E84] font-semibold">HB Development</span>. 
              Cependant, ce stage n'est pas une "pré-embauche". C'est pourquoi je reste pleinement <strong className="text-white">ouvert aux opportunités</strong> à partir du <strong className="text-[#017E84]">1er septembre</strong>.
            </p>

            <button
              onClick={handleOkay}
              className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-[#017E84] px-8 py-4 font-medium text-white transition-all hover:bg-[#01686c] active:scale-95"
            >
              C'est noté !
            </button>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center py-6">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 text-green-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold font-outfit text-white mb-3">
              Merci pour votre temps !
            </h2>
            <p className="text-white/80 font-syne text-center leading-relaxed">
              J'espère que vous apprécierez la navigation sur mon profil. On se retrouve sur la page Contact !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
