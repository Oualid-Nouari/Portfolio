"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import { flushSync } from "react-dom";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

type TransitionContextType = {
  navigate: (href: string, title: string | string[]) => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

function typingDuration(text: string): number {
  return Math.min(1.45, Math.max(0.55, text.length * 0.018));
}

const ROUTE_TRANSITIONS: Record<string, string[]> = {
  "/": ["Bienvenue"],
  "/about": ["À propos de moi"],
  "/contact": ["Contact"],
  "/experiences": ["Mes expériences"],
  "/experiences/hb-development": [
    "Mon rôle : Développeur Odoo junior",
    "Entreprise : HB Development",
    "Durée : 6 mois",
  ],
  "/experiences/cmc-nador": [
    "Mon rôle : Développeur Front-end",
    "Établissement : Cité des Métiers et des Compétences, Nador",
    "Durée : 3 mois",
  ],
  "/experiences/chp-guercif": [
    "Mon rôle : Développeur Full Stack",
    "Établissement : Centre Hospitalier Provincial, Guercif",
    "Durée : 2 mois",
  ],
  "/club-dexcellence": [
    "Rôle : Responsable Média",
    "Club d'Excellence, FSJES, Oujda",
    "Période : 2024 — 2025",
  ],
  "/hackchrono-48": [
    "Rôle : Membre Média & Marketing",
    "Hack'Chrono 48, FSJES, Oujda",
    "Période : Octobre — Décembre 2025",
  ],
};

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [lineLayout, setLineLayout] = useState<"single" | "multi">("single");
  const [multiLineCount, setMultiLineCount] = useState(3);

  const isTransitioningRef = useRef(false);
  const targetHrefRef = useRef("");
  const ctxRef = useRef<gsap.Context | null>(null);
  const hasRunInitialAnimation = useRef(false);

  const [scrollLocked, setScrollLocked] = useState(true);

  const clearLineSpans = useCallback(() => {
    [line1Ref, line2Ref, line3Ref].forEach((r) => {
      if (r.current) r.current.textContent = "";
    });
  }, []);

  const disableScroll = useCallback(() => {
    setScrollLocked(true);
    if (typeof window !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      const lenis = (window as any).lenis;
      if (lenis) lenis.stop();
    }
  }, []);

  const enableScroll = useCallback(() => {
    setScrollLocked(false);
    if (typeof window !== "undefined") {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      // Poll for Lenis in case it hasn't mounted yet
      const tryStart = () => {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.start();
        } else {
          requestAnimationFrame(tryStart);
        }
      };
      tryStart();
    }
  }, []);

  useEffect(() => {
    if (hasRunInitialAnimation.current) return;
    hasRunInitialAnimation.current = true;

    disableScroll();

    const lines = ROUTE_TRANSITIONS[pathname] || [];
    if (lines.length > 0) {
      const isMulti = lines.length > 1;
      setLineLayout(isMulti ? "multi" : "single");
      if (isMulti) setMultiLineCount(Math.min(3, Math.max(2, lines.length)));

      const ctx = gsap.context(() => {
        gsap.set(overlayRef.current, { autoAlpha: 1 });
        gsap.set([layer1Ref.current, layer2Ref.current], { yPercent: 0 });
        gsap.set(textContainerRef.current, { opacity: 1 });
        clearLineSpans();

        const tl = gsap.timeline();

        if (isMulti) {
          lines.forEach((line, i) => {
            const el = [line1Ref.current, line2Ref.current, line3Ref.current][i];
            if (!el || !line) return;
            const dur = typingDuration(line);
            tl.to(
              el,
              {
                duration: dur,
                ease: "none",
                text: { value: line, delimiter: "" },
              },
              i === 0 ? 0.5 : ">"
            );
          });
        } else {
          const line = lines[0] ?? "";
          tl.to(
            line1Ref.current,
            {
              duration: typingDuration(line),
              ease: "none",
              text: { value: line, delimiter: "" },
            },
            0.5
          );
        }

        tl.to(textContainerRef.current, { opacity: 0, duration: 0.45, ease: "expo.out" }, "+=1.5");
        tl.to(layer2Ref.current, { yPercent: 100, duration: 1.8, ease: "expo.out" }, "<");
        tl.to(layer1Ref.current, { yPercent: 100, duration: 1.8, ease: "expo.out" }, "<0.15");
        tl.set(overlayRef.current, { autoAlpha: 0 });
        tl.call(() => enableScroll());
      });

      ctxRef.current = ctx;
    } else {
      const ctx = gsap.context(() => {
        gsap.set(overlayRef.current, { autoAlpha: 0 });
        gsap.set([layer1Ref.current, layer2Ref.current], { yPercent: -100 });
        gsap.set(textContainerRef.current, { opacity: 0 });
        clearLineSpans();
        enableScroll();
      });

      ctxRef.current = ctx;
    }

    // No cleanup — we don't want to revert the overlay state on re-render
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const animateOut = useCallback(() => {
    // Create a standalone timeline (not dependent on ctxRef)
    const tlOut = gsap.timeline({
      onComplete: () => {
        gsap.set([layer1Ref.current, layer2Ref.current], { yPercent: -100 });
        gsap.set(overlayRef.current, { autoAlpha: 0 });
        gsap.set(textContainerRef.current, { opacity: 0 });
        clearLineSpans();
        setLineLayout("single");
        setMultiLineCount(3);
        isTransitioningRef.current = false;
        enableScroll();
      },
    });

    tlOut.to(textContainerRef.current, { opacity: 0, duration: 0.3, ease: "expo.out" }, 0);
    tlOut.to(layer2Ref.current, { yPercent: 100, duration: 1.8, ease: "expo.out" }, 0.2);
    tlOut.to(layer1Ref.current, { yPercent: 100, duration: 1.8, ease: "expo.out" }, 0.35);
  }, [clearLineSpans, enableScroll]);

  useEffect(() => {
    if (isTransitioningRef.current && pathname === targetHrefRef.current) {
      animateOut();
    }
  }, [pathname, animateOut]);

  const navigate = (href: string, newText: string | string[]) => {
    if (isTransitioningRef.current) return;

    // Parse hash from href
    const [path, hash] = href.split("#");
    const targetPath = path || "/";

    // If already on this page (no hash or same page), don't transition
    if (targetPath === pathname && !hash) return;

    // If it's a hash on the current page, just scroll
    if (targetPath === pathname && hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const configLines = ROUTE_TRANSITIONS[targetPath];
    const lines = configLines || (Array.isArray(newText) ? newText : [newText]).filter((s) => s.length > 0);
    const isMulti = lines.length > 1;

    isTransitioningRef.current = true;
    targetHrefRef.current = targetPath;
    
    disableScroll();

    flushSync(() => {
      setLineLayout(isMulti ? "multi" : "single");
      if (isMulti) setMultiLineCount(Math.min(3, Math.max(2, lines.length)));
    });

    gsap.set(overlayRef.current, { autoAlpha: 1 });
    gsap.set([layer1Ref.current, layer2Ref.current], { yPercent: -100 });
    gsap.set(textContainerRef.current, { opacity: 0 });
    clearLineSpans();

    const tl = gsap.timeline();

    tl.to(layer1Ref.current, { yPercent: 0, duration: 2.0, ease: "expo.out" }, 0);
    tl.to(layer2Ref.current, { yPercent: 0, duration: 1.6, ease: "expo.out" }, 0.4);

    tl.to(textContainerRef.current, { opacity: 1, duration: 0.05, ease: "none" }, 2);

    if (isMulti) {
      lines.forEach((line, i) => {
        const el = [line1Ref.current, line2Ref.current, line3Ref.current][i];
        if (!el || !line) return;
        const dur = typingDuration(line);
        tl.to(
          el,
          {
            duration: dur,
            ease: "none",
            text: { value: line, delimiter: "" },
          },
          i === 0 ? 2 : ">"
        );
      });
    } else {
      const line = lines[0] ?? "";
      tl.to(
        line1Ref.current,
        {
          duration: typingDuration(line),
          ease: "none",
          text: { value: line, delimiter: "" },
        },
        2
      );
    }

    tl.to(
      textContainerRef.current,
      {
        opacity: 0,
        duration: 0.45,
        ease: "expo.out",
        onComplete: () => {
          router.push(targetPath);
          // Scroll to hash after navigation if needed
          if (hash) {
            setTimeout(() => {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }
        },
      },
      "+=2.6"
    );
  };

  // Block ALL scroll input at the capture phase (before Lenis can process it)
  useEffect(() => {
    if (!scrollLocked) return;

    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    };

    const preventKeys = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", " ", "PageDown", "PageUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    // Use capture phase + stopImmediatePropagation to block before Lenis sees it
    window.addEventListener("wheel", preventScroll, { passive: false, capture: true });
    window.addEventListener("touchmove", preventScroll, { passive: false, capture: true });
    window.addEventListener("keydown", preventKeys as EventListener, { capture: true });

    // Also stop Lenis if it somehow started
    const lenis = (window as any).lenis;
    if (lenis) lenis.stop();

    return () => {
      window.removeEventListener("wheel", preventScroll, { capture: true });
      window.removeEventListener("touchmove", preventScroll, { capture: true });
      window.removeEventListener("keydown", preventKeys as EventListener, { capture: true });
    };
  }, [scrollLocked]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <div ref={overlayRef} data-transition-overlay className="fixed inset-0 z-[9999]">
        <div
          ref={layer1Ref}
          className="absolute inset-0 z-40 bg-[#017E84] will-change-transform"
          style={{ transform: "translateY(0%)" }}
        />

        <div
          ref={layer2Ref}
          className="absolute inset-0 z-50 bg-black will-change-transform"
          style={{ transform: "translateY(0%)" }}
        />

        <div
          ref={textContainerRef}
          className="absolute inset-0 z-60 flex items-center justify-center opacity-0 will-change-[opacity] px-5"
        >
          <div className="flex max-w-[min(92vw,40rem)] flex-col items-center gap-2 text-center md:gap-3">
            <p
              className={
                lineLayout === "multi"
                  ? "font-outfit text-lg font-semibold leading-snug tracking-tight text-white md:text-2xl"
                  : "font-outfit text-base font-semibold uppercase tracking-widest text-white md:text-lg"
              }
            >
              <span ref={line1Ref} />
              {lineLayout === "single" && (
                <span className="transition-caret inline-block font-light select-none" aria-hidden="true">
                  |
                </span>
              )}
            </p>
            <p
              className={
                lineLayout === "multi"
                  ? "font-outfit text-sm font-medium leading-snug text-white/90 md:text-base"
                  : "hidden"
              }
              aria-hidden={lineLayout !== "multi"}
            >
              <span ref={line2Ref} />
              {lineLayout === "multi" && multiLineCount === 2 && (
                <span className="transition-caret ml-0.5 inline-block font-light select-none" aria-hidden="true">
                  |
                </span>
              )}
            </p>
            <p
              className={
                lineLayout === "multi" && multiLineCount >= 3
                  ? "font-outfit text-sm font-medium leading-snug text-white/90 md:text-base"
                  : "hidden"
              }
              aria-hidden={lineLayout !== "multi" || multiLineCount < 3}
            >
              <span ref={line3Ref} />
              {lineLayout === "multi" && multiLineCount >= 3 && (
                <span className="transition-caret ml-0.5 inline-block font-light select-none" aria-hidden="true">
                  |
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("usePageTransition must be used within PageTransitionProvider");
  return context;
};
