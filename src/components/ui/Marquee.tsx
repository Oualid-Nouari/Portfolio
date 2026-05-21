"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Grab all the children
    const textNodes = Array.from(container.children);
    if (!textNodes.length) return;

    // Calculate total width of one set of items
    let totalWidth = 0;
    textNodes.forEach((node) => {
      totalWidth += (node as HTMLElement).offsetWidth;
    });

    // Animate the container using GSAP
    gsap.to(container, {
      x: -totalWidth / 2, // Animate half the duplicated content
      ease: "none",
      duration: 25, // Adjust duration for speed
      repeat: -1,
    });
  }, []);

  // We duplicate the items so the loop is seamless
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden w-full py-8 border-y border-white/10 bg-[#101010]/50 backdrop-blur-sm">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform gap-16"
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
