"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Register ScrollTrigger if it hasn't been already
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with "heavy" and premium feel settings
    const lenis = new Lenis({
      duration: 1.5, // slightly longer for a heavier, premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing, but slow
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Attach to window for global access
    (window as any).lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's lag smoothing to prevent conflicts with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
