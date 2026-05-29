"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";

// Importando todos os componentes de seção
import Nav from "./Nav";
import Hero from "./Hero";
import InfiniteTicker from "./InfiniteTicker";
import About from "./About";
import Achievements from "./Achievements";
import Timeline from "./Timeline";
import Calendar from "./Calendar";
import WorldMap from "./WorldMap";
import JerseySimulator from "./JerseySimulator";
import Gallery from "./Gallery";
import Videos from "./Videos";
import SponsorCta from "./SponsorCta";
import Footer from "./Footer";

export default function MainExperience() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. Inicializar o Smooth Scroll com Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Cursor Customizado de Bola de Tênis Cyber
    // Adiciona classe ao HTML para ocultar o cursor nativo do mouse
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorOutlineRef.current) {
        gsap.to(cursorOutlineRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.08,
          ease: "power1.out",
        });
        gsap.to(cursorDotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.02,
          rotation: (e.clientX + e.clientY) * 0.4,
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Cursor customizado — apenas desktop */}
      <div className="hidden lg:block">
        {/* Bola de tênis */}
        <div
          ref={cursorDotRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: isHovering ? "36px" : "26px",
            height: isHovering ? "36px" : "26px",
            transition: "width 150ms cubic-bezier(0.16,1,0.3,1), height 150ms cubic-bezier(0.16,1,0.3,1)",
            willChange: "transform",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          >
            <circle cx="50" cy="50" r="46" fill="oklch(0.82 0.22 130)" stroke="oklch(0.72 0.20 130)" strokeWidth="2.5" />
            <path d="M 28 8 A 45 45 0 0 0 28 92" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M 72 8 A 45 45 0 0 1 72 92" fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Ring externo */}
        <div
          ref={cursorOutlineRef}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: isHovering ? "56px" : "36px",
            height: isHovering ? "56px" : "36px",
            border: isHovering
              ? "1px solid oklch(0.82 0.22 130 / 0.65)"
              : "1px solid oklch(0.82 0.22 130 / 0.25)",
            background: isHovering ? "oklch(0.82 0.22 130 / 0.05)" : "transparent",
            boxShadow: isHovering ? "0 0 12px oklch(0.82 0.22 130 / 0.2)" : "none",
            transition: "width 150ms cubic-bezier(0.16,1,0.3,1), height 150ms cubic-bezier(0.16,1,0.3,1), border-color 150ms ease, box-shadow 150ms ease",
            willChange: "transform",
          }}
        />
      </div>

      {/* Navbar Fixa */}
      <Nav />

      {/* Conteúdo Principal */}
      <main className="relative z-10">
        {/* Seção 1: Hero */}
        <Hero />

        {/* Ticker de Patrocinadores / Marcas */}
        <InfiniteTicker />

        {/* Seção 2: Biografia e Ficha Técnica (Sobre) */}
        <About />

        {/* Seção 3: Conquistas & Títulos */}
        <Achievements />

        {/* Linha do Tempo (Trajetória) */}
        <Timeline />

        {/* Seção 4: Calendário de Jogos e Torneios */}
        <Calendar />

        {/* Seção 5: Mapa-Múndi Reativo (Destinos dos Torneios) */}
        <WorldMap />

        {/* Seção 6: Simulador de Uniforme (Patrocínio Interativo) */}
        <JerseySimulator />

        {/* Seção 7: Galeria de Fotos em Alta Definição */}
        <Gallery />

        {/* Seção 8: Vídeos, Entrevistas e Mídia */}
        <Videos />

        {/* Seção 9: CTA de Captação e Contato */}
        <SponsorCta />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
