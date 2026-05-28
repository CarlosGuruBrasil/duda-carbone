"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Atleta",     id: "sobre" },
    { label: "Conquistas", id: "conquistas" },
    { label: "Agenda",     id: "eventos" },
    { label: "Mapa",       id: "worldmap" },
    { label: "Galeria",    id: "galeria" },
    { label: "Vídeos",     id: "videos" },
    { label: "Mídia",      id: "midia" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/7 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex items-center gap-2 group"
        >
          <div className="relative h-9 w-28 bg-[#111111] rounded-lg overflow-hidden flex items-center justify-center p-1.5">
            <Image
              src="/logo_xrl_letras.png"
              alt="XRL Sports"
              fill
              className="object-contain p-1"
              sizes="112px"
            />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-space text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? "text-black/55 hover:text-black hover:bg-black/5"
                  : "text-black/50 hover:text-black hover:bg-black/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#patrocinio"
            onClick={(e) => handleLinkClick(e, "patrocinio")}
            className="hidden md:inline-flex items-center font-space text-[11px] font-bold uppercase tracking-wider text-white bg-[#c8384e] hover:bg-[#b02f43] px-5 py-2.5 rounded-full transition-colors shadow-[0_4px_14px_rgba(200,56,78,0.25)] hover:shadow-[0_6px_20px_rgba(200,56,78,0.35)]"
          >
            Patrocínio
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              isScrolled ? "text-black/60 hover:bg-black/5" : "text-black/50 hover:bg-black/5"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-black/7 py-5 px-6 flex flex-col gap-2 shadow-lg transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleLinkClick(e, link.id)}
            className="font-space text-sm font-semibold uppercase tracking-wider text-black/55 hover:text-black hover:bg-black/4 py-3 px-4 rounded-xl transition-all"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#patrocinio"
          onClick={(e) => handleLinkClick(e, "patrocinio")}
          className="font-space text-center font-bold uppercase tracking-wider text-white bg-[#c8384e] py-3.5 rounded-full mt-2 active:scale-95 transition-all"
        >
          Patrocínio
        </a>
      </div>
    </nav>
  );
}
