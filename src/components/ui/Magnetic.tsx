"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export default function Magnetic({ children, strength = 0.35 }: MagneticProps) {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = magneticRef.current;
    if (!element) return;

    // We use a quickTo for performant mouse following
    const xTo = gsap.quickTo(element, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Give it a subtle pull, scaling down the displacement
      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      // Reset back to center
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={magneticRef} className="inline-block relative cursor-pointer">
      {children}
    </div>
  );
}
