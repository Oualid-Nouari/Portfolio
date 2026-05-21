"use client";

import { useState, useEffect } from "react";
import Magnetic from "@/components/ui/Magnetic";
import StatusBadge from "@/components/ui/StatusBadge";
import TransitionLink from "@/components/ui/TransitionLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/experiences", label: "Expériences", title: "Expériences" },
    { href: "/about", label: "À propos", title: "À propos" },
    { href: "/contact", label: "Contact", title: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="flex items-center gap-4">
          <Magnetic>
            <TransitionLink href="/" title="Accueil" className="text-lg font-bold tracking-tight">
              Oualid Nouari
            </TransitionLink>
          </Magnetic>
        </div>

        <div className="hidden md:block mix-blend-normal">
          <StatusBadge />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          {navLinks.map((link) => (
            <Magnetic key={link.href}>
              <TransitionLink
                href={link.href}
                title={link.title}
                className="hover:text-[#017E84] transition-colors"
              >
                {link.label}
              </TransitionLink>
            </Magnetic>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[70] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-out ${
              isOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-out ${
              isOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile sidebar */}
      <nav
        className={`fixed top-0 right-0 z-[65] h-full w-[75vw] max-w-[320px] bg-[#0a0a0a] border-l border-white/10 flex flex-col justify-between p-8 pt-24 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              title={link.title}
              className={`text-2xl font-bold tracking-tight text-white/90 hover:text-[#017E84] transition-all duration-300 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: isOpen ? `${150 + i * 75}ms` : "0ms" }}
              onClick={handleLinkClick}
            >
              {link.label}
            </TransitionLink>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:oualidnouari0@gmail.com"
            className="text-xs text-foreground/50 hover:text-white transition-colors"
          >
            oualidnouari0@gmail.com
          </a>
          <a
            href="tel:+212644388175"
            className="text-xs text-foreground/50 hover:text-white transition-colors"
          >
            +212 644 388 175
          </a>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/oualidnouari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-foreground/40 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Oualid-Nouari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-foreground/40 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
