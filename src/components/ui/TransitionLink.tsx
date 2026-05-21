"use client";

import React, { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/components/providers/PageTransitionProvider";

interface TransitionLinkProps {
  href: string;
  /** Shown for accessibility and used as transition text when `transitionLines` is omitted */
  title: string;
  /** If set, the page transition types these lines sequentially (first line is the primary line) */
  transitionLines?: string[];
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function TransitionLink({
  href,
  title,
  transitionLines,
  children,
  className,
  style,
  onClick,
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    // Parse the href to determine behavior
    const isHashOnly = href.startsWith("#");
    const hasHash = href.includes("#");
    const [path, hash] = href.split("#");
    const targetPath = path || "/";

    // Same-page hash link: just scroll
    if (isHashOnly || (hasHash && targetPath === pathname)) {
      const el = document.getElementById(hash || "");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Cross-page navigation (with or without hash): use transition
    navigate(href, transitionLines ?? title);
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style} title={title}>
      {children}
    </a>
  );
}
