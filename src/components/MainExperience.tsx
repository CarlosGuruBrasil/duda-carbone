"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";

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
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    // Custom tennis ball cursor
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      if (cursorRingRef.current) {
        gsap.to(cursorRingRef.current, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power1.out" });
      }
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0.02, rotation: (e.clientX + e.clientY) * 0.4 });
      }
    };

    const handleHover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isInteractive = t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Tennis ball cursor */}
      <div className="hidden lg:block">
        <div
          ref={cursorDotRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: isHovering ? "34px" : "24px",
            height: isHovering ? "34px" : "24px",
            transition: "width 150ms cubic-bezier(0.16,1,0.3,1), height 150ms cubic-bezier(0.16,1,0.3,1)",
            willChange: "transform",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <circle cx="50" cy="50" r="46" fill="oklch(0.84 0.22 130)" stroke="oklch(0.74 0.20 130)" strokeWidth="2" />
            <path d="M 28 8 A 45 45 0 0 0 28 92" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.9"/>
            <path d="M 72 8 A 45 45 0 0 1 72 92" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.9"/>
          </svg>
        </div>
        <div
          ref={cursorRingRef}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: isHovering ? "52px" : "36px",
            height: isHovering ? "52px" : "36px",
            border: isHovering ? "1px solid oklch(0.84 0.22 130 / 0.6)" : "1px solid oklch(0.84 0.22 130 / 0.2)",
            background: isHovering ? "oklch(0.84 0.22 130 / 0.05)" : "transparent",
            boxShadow: isHovering ? "0 0 16px oklch(0.84 0.22 130 / 0.2)" : "none",
            transition: "width 150ms cubic-bezier(0.16,1,0.3,1), height 150ms cubic-bezier(0.16,1,0.3,1), border-color 150ms ease, box-shadow 150ms ease",
            willChange: "transform",
          }}
        />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <InfiniteTicker />
        <About />
        <Achievements />
        <Timeline />
        <Calendar />
        <WorldMap />
        <JerseySimulator />
        <Gallery />
        <Videos />
        <SponsorCta />
      </main>

      <Footer />
    </div>
  );
}
