"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: isScrolled ? "0.75rem 1.5rem" : "1.25rem 1.5rem",
        background: isScrolled
          ? "oklch(0.96 0.008 260 / 0.95)"
          : "transparent",
        borderBottom: isScrolled
          ? "1px solid oklch(0.88 0.004 260)"
          : "1px solid transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        boxShadow: isScrolled
          ? "0 1px 24px oklch(0.12 0.008 260 / 0.05)"
          : "none",
        transition: "padding 300ms cubic-bezier(0.16, 1, 0.3, 1), background 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease, box-shadow 300ms ease",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex items-center gap-2 group"
          aria-label="XRL Sports – início"
        >
          <div className="relative h-7 w-32">
            <Image
              src="/logo_xrl_letras.png"
              alt="XRL Sports"
              fill
              className="object-contain object-left"
              sizes="128px"
            />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="nav-link"
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
            className="hidden md:inline-flex btn-primary"
            style={{ padding: "0.5rem 1.25rem" }}
          >
            Patrocínio
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "oklch(0.45 0.008 260)" }}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden absolute top-full left-0 right-0 py-5 px-6 flex flex-col gap-1 transition-all duration-200 origin-top"
        style={{
          background: "oklch(1 0 0 / 0.98)",
          borderBottom: "1px solid oklch(0.88 0.004 260)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 8px 32px oklch(0.12 0.008 260 / 0.08)",
          opacity: isMobileMenuOpen ? 1 : 0,
          transform: isMobileMenuOpen ? "scaleY(1)" : "scaleY(0.96)",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleLinkClick(e, link.id)}
            className="font-space text-sm font-semibold uppercase tracking-wider py-3 px-4 rounded-xl transition-all"
            style={{ color: "oklch(0.45 0.008 260)" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#patrocinio"
          onClick={(e) => handleLinkClick(e, "patrocinio")}
          className="btn-primary justify-center mt-2"
        >
          Patrocínio
        </a>
      </div>
    </nav>
  );
}
