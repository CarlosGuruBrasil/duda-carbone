"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stats = [
  { v: "15",  l: "Anos" },
  { v: "#1",  l: "COSAT" },
  { v: "10+", l: "Torneios" },
  { v: "3",   l: "Continentes" },
];

const achievements = [
  "🥇 Ouro Jogos Sul-Americanos · Panamá 2026",
  "🎾 Roland Garros Junior Series · Paris 2026",
  "🏆 ITF J30 Bruxelas · Europa 2025",
];

const BG = "oklch(0.10 0.04 260)";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

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
      style={{ background: BG }}
    >
      {/* ── MOBILE: foto no topo, cobrindo metade superior ── */}
      <div className="md:hidden absolute inset-x-0 top-0 h-[55vh] z-0">
        <Image
          src="/duda_hero.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
          style={{ filter: "saturate(1.15) contrast(1.05) brightness(1.05)" }}
          sizes="100vw"
        />
        {/* Fade inferior — funde foto com o conteúdo */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background: `linear-gradient(to top,
              ${BG} 0%,
              ${BG}CC 30%,
              ${BG}00 100%
            )`,
          }}
        />
        {/* Overlay escuro no topo para a nav */}
        <div
          className="absolute inset-x-0 top-0 h-28"
          style={{ background: `linear-gradient(to bottom, ${BG}CC, ${BG}00)` }}
        />
      </div>

      {/* ── DESKTOP: foto à direita, corpo inteiro ── */}
      <div
        className="hidden md:flex absolute inset-y-0 right-0 z-0 items-end justify-end"
        style={{ width: "52%", maxWidth: "680px" }}
        aria-hidden
      >
        <div className="relative w-full h-full">
          <Image
            src="/duda_hero.png"
            alt=""
            fill
            priority
            className="object-contain object-bottom object-right"
            style={{ filter: "saturate(1.15) contrast(1.05) brightness(1.05)" }}
            sizes="680px"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to right,
              ${BG} 0%,
              ${BG}BF 18%,
              ${BG}33 42%,
              ${BG}00 65%
            )`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${BG}CC, ${BG}00)` }}
        />
      </div>

      {/* Lime glow */}
      <div
        className="absolute bottom-0 right-[5%] w-[400px] h-[400px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, oklch(0.84 0.22 130 / 0.07) 0%, transparent 65%)" }}
        aria-hidden
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-5 md:px-12 w-full">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-12px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-3 pt-24 md:pt-32"
        >
          <div className="lime-dot" />
          <span
            className="font-display text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "oklch(0.84 0.22 130)" }}
          >
            Brasil · Tênis Profissional
          </span>
          <div className="h-px w-10 md:max-w-[80px] md:flex-1" style={{ background: "oklch(0.84 0.22 130 / 0.4)" }} />
          <span
            className="hidden sm:block font-display text-[10px] tracking-widest uppercase"
            style={{ color: "oklch(0.55 0.010 260)", fontWeight: 600 }}
          >
            Temporada 2026
          </span>
        </motion.div>

        {/* Name block — empurrado para baixo no mobile pela foto */}
        <div className="flex-1 flex flex-col justify-end md:justify-center pb-0 md:py-8 max-w-[720px]">

          {/* Mobile: conteúdo começa depois da foto (mt-[48vh]) */}
          <div className="mt-[44vh] md:mt-0">
            <motion.div
              initial={{ opacity: 0, transform: "translateY(32px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            >
              {/* Overline */}
              <p
                className="font-display text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase mb-3"
                style={{ color: "oklch(0.84 0.22 130)" }}
              >
                Maria Eduarda Carbone
              </p>

              {/* Nome */}
              <h1
                className="font-display font-black uppercase leading-[0.85] tracking-[-0.02em] mb-4 md:mb-6"
                style={{
                  fontSize: "clamp(3.8rem, 13vw, 9rem)",
                  color: "oklch(0.97 0.005 85)",
                }}
              >
                Duda<br />
                <span style={{ color: "oklch(0.84 0.22 130)" }}>Carbone</span>
              </h1>

              {/* Tagline — oculta no mobile para não poluir */}
              <p
                className="hidden sm:block text-base md:text-lg leading-relaxed mb-6 max-w-[480px]"
                style={{ color: "oklch(0.68 0.010 260)" }}
              >
                A maior promessa do tênis feminino brasileiro. 15 anos, 3 continentes,
                conquistas que estão reescrevendo a história do esporte nacional.
              </p>

              {/* Achievement chips — mobile: compacto, 1 por linha */}
              <motion.div
                initial={{ opacity: 0, transform: "translateY(14px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-1.5 mb-6 md:mb-10"
              >
                {achievements.map((a) => (
                  <div
                    key={a}
                    className="inline-flex items-center gap-2 rounded-full self-start"
                    style={{
                      padding: "0.3rem 0.875rem",
                      background: "oklch(1 0 0 / 0.06)",
                      border: "1px solid oklch(1 0 0 / 0.12)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="text-[11px] md:text-sm leading-tight">{a}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs — full width no mobile */}
              <motion.div
                initial={{ opacity: 0, transform: "translateY(12px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
              >
                <a
                  href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime justify-center"
                >
                  Seja Patrocinador
                </a>
                <a
                  href="#sobre"
                  className="btn-ghost-light justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Conhecer a Atleta
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <div
            ref={lineRef}
            className="h-px w-full mb-4 md:mb-6"
            style={{
              background: "linear-gradient(90deg, oklch(0.84 0.22 130 / 0), oklch(0.84 0.22 130 / 0.6), oklch(0.84 0.22 130 / 0))",
              backgroundSize: "200% 100%",
            }}
          />
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, transform: "translateY(12px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.06, ease: "easeOut" }}
              >
                <div
                  className="font-display font-black text-2xl md:text-4xl leading-none mb-0.5"
                  style={{ color: "oklch(0.84 0.22 130)" }}
                >
                  {s.v}
                </div>
                <div
                  className="font-display text-[9px] md:text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: "oklch(0.50 0.010 260)" }}
                >
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 md:right-12 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <ArrowDown size={14} style={{ color: "oklch(0.84 0.22 130)", animation: "scrollBounce 2s ease-in-out infinite" }} />
        <div className="w-px h-14" style={{ background: "linear-gradient(to bottom, oklch(0.84 0.22 130 / 0.5), oklch(0.84 0.22 130 / 0))" }} />
      </motion.div>

      {/* Social — desktop only */}
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-10px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
        className="absolute left-5 bottom-16 hidden lg:flex flex-col gap-3 z-10"
      >
        <a
          href="https://www.instagram.com/mduda_carbone/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "oklch(1 0 0 / 0.06)",
            border: "1px solid oklch(1 0 0 / 0.12)",
            color: "oklch(0.55 0.010 260)",
            transition: "color 150ms ease, border-color 150ms ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.84 0.22 130 / 0.4)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.010 260)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
      </motion.div>
    </section>
  );
}
