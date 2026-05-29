"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stats = [
  { v: "15", l: "Anos" },
  { v: "#1", l: "COSAT" },
  { v: "10+", l: "Torneios" },
  { v: "3", l: "Continentes" },
];

const achievements = [
  "🥇 Ouro Jogos Sul-Americanos · Panamá 2026",
  "🎾 Roland Garros Junior Series · Paris 2026",
  "🏆 ITF J30 Bruxelas · Europa 2025",
];

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  // Animated border scan effect on the stats line
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    let start: number;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = ((ts - start) % 4000) / 4000;
      el.style.backgroundPosition = `${progress * 200}% 0`;
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "oklch(0.10 0.04 260)" }}
    >
      {/* Background image — full bleed, dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto_duda_patrocinio.jpeg"
          alt="Duda Carbone — tenista profissional brasileira"
          fill
          priority
          className="object-cover object-[62%_top]"
          sizes="100vw"
        />
        {/* Multi-layer gradient for cinematic depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right,
                oklch(0.10 0.04 260) 0%,
                oklch(0.10 0.04 260 / 0.88) 30%,
                oklch(0.10 0.04 260 / 0.5) 55%,
                oklch(0.10 0.04 260 / 0.15) 75%,
                oklch(0.10 0.04 260 / 0.05) 100%
              ),
              linear-gradient(to top,
                oklch(0.10 0.04 260) 0%,
                oklch(0.10 0.04 260 / 0.6) 20%,
                oklch(0.10 0.04 260 / 0) 50%
              )
            `,
          }}
        />
        {/* Lime glow on athlete */}
        <div
          className="absolute bottom-0 right-[20%] w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, oklch(0.84 0.22 130 / 0.08) 0%, transparent 70%)",
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-12px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-4 pt-28 md:pt-32"
        >
          <div className="lime-dot" />
          <span
            className="font-display text-[11px] font-700 tracking-[0.22em] uppercase"
            style={{ color: "oklch(0.84 0.22 130)", fontWeight: 700 }}
          >
            Brasil · Tênis Profissional
          </span>
          <div
            className="h-px flex-1 max-w-[80px]"
            style={{ background: "oklch(0.84 0.22 130 / 0.4)" }}
          />
          <span
            className="font-display text-[10px] tracking-widest uppercase"
            style={{ color: "oklch(0.55 0.010 260)", fontWeight: 600 }}
          >
            Temporada 2026
          </span>
        </motion.div>

        {/* Hero name — massive, condensed, sport energy */}
        <div className="flex-1 flex flex-col justify-center py-8 max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          >
            {/* Overline */}
            <p
              className="font-display text-[13px] font-700 tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.84 0.22 130)", fontWeight: 700 }}
            >
              Maria Eduarda Carbone
            </p>

            {/* Big name */}
            <h1
              className="font-display font-black uppercase leading-[0.85] tracking-[-0.02em] mb-6"
              style={{
                fontSize: "clamp(5rem, 14vw, 9rem)",
                color: "oklch(0.97 0.005 85)",
                textWrap: "balance",
              }}
            >
              Duda<br />
              <span style={{ color: "oklch(0.84 0.22 130)" }}>Carbone</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-[480px]"
              style={{ color: "oklch(0.68 0.010 260)", textWrap: "pretty" } as React.CSSProperties}
            >
              A maior promessa do tênis feminino brasileiro. 15 anos, 3 continentes, 
              conquistas que estão reescrevendo a história do esporte nacional.
            </p>

            {/* Achievement chips */}
            <motion.div
              initial={{ opacity: 0, transform: "translateY(14px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-2 mb-10"
            >
              {achievements.map((a) => (
                <div
                  key={a}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 self-start"
                  style={{
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span className="text-sm">{a}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, transform: "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <a href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone." target="_blank" rel="noopener noreferrer" className="btn-lime">
                Seja Patrocinador
              </a>
              <a href="#sobre" className="btn-ghost-light" onClick={(e) => { e.preventDefault(); document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" }); }}>
                Conhecer a Atleta
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <div
            ref={lineRef}
            className="h-px w-full mb-6"
            style={{
              background: "linear-gradient(90deg, oklch(0.84 0.22 130 / 0), oklch(0.84 0.22 130 / 0.6), oklch(0.84 0.22 130 / 0))",
              backgroundSize: "200% 100%",
            }}
          />
          <div className="grid grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, transform: "translateY(12px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.06, ease: "easeOut" }}
              >
                <div
                  className="font-display font-black text-3xl md:text-4xl leading-none mb-1"
                  style={{ color: "oklch(0.84 0.22 130)" }}
                >
                  {s.v}
                </div>
                <div
                  className="font-display text-[10px] font-600 tracking-widest uppercase"
                  style={{ color: "oklch(0.50 0.010 260)", fontWeight: 600 }}
                >
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <ArrowDown
          size={14}
          style={{
            color: "oklch(0.84 0.22 130)",
            animation: "scrollBounce 2s ease-in-out infinite",
          }}
        />
        <div
          className="w-px h-14"
          style={{ background: "linear-gradient(to bottom, oklch(0.84 0.22 130 / 0.5), oklch(0.84 0.22 130 / 0))" }}
        />
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-10px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
        className="absolute left-5 bottom-16 hidden lg:flex flex-col gap-3 z-10"
      >
        {[
          { label: "Instagram", href: "https://www.instagram.com/mduda_carbone/",
            svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              color: "oklch(0.55 0.010 260)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.84 0.22 130 / 0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.010 260)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
          >
            {s.svg}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
