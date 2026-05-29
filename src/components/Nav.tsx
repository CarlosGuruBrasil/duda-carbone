"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Atleta",     id: "sobre" },
  { label: "Conquistas", id: "conquistas" },
  { label: "Agenda",     id: "eventos" },
  { label: "Galeria",    id: "galeria" },
  { label: "Vídeos",     id: "videos" },
  { label: "Patrocínio", id: "patrocinio" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        padding: isScrolled ? "0.6rem 1.5rem" : "1.25rem 1.5rem",
        background: isScrolled ? "oklch(0.10 0.04 260 / 0.92)" : "transparent",
        borderBottom: isScrolled ? "1px solid oklch(1 0 0 / 0.07)" : "1px solid transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
        transition: "padding 300ms cubic-bezier(0.16,1,0.3,1), background 300ms ease, border-color 300ms ease",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollTo(e, "home")} className="flex items-center gap-3">
          <div className="relative h-10 w-40">
            <Image src="/logo_xrl_letras.png" alt="XRL Sports" fill className="object-contain object-left" sizes="160px" />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollTo(e, link.id)} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-lime text-xs"
            style={{ padding: "0.5rem 1.25rem" }}
          >
            Seja Patrocinador
          </a>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "oklch(0.70 0.008 260)" }}
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden absolute top-full left-0 right-0 py-5 px-6 flex flex-col gap-1"
        style={{
          background: "oklch(0.10 0.04 260 / 0.98)",
          borderBottom: "1px solid oklch(1 0 0 / 0.07)",
          backdropFilter: "blur(24px)",
          opacity: isMobileOpen ? 1 : 0,
          transform: isMobileOpen ? "scaleY(1)" : "scaleY(0.96)",
          transformOrigin: "top",
          pointerEvents: isMobileOpen ? "auto" : "none",
          transition: "opacity 200ms ease, transform 200ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollTo(e, link.id)}
            className="font-display text-sm font-bold uppercase tracking-wider py-3 px-4 rounded-xl"
            style={{ color: "oklch(0.70 0.008 260)", letterSpacing: "0.1em" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5548996671987"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime justify-center mt-2"
        >
          Seja Patrocinador
        </a>
      </div>
    </nav>
  );
}
