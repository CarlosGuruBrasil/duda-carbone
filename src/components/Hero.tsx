"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { v: "15",  l: "Anos" },
  { v: "#1",  l: "COSAT" },
  { v: "10+", l: "Torneios" },
  { v: "3",   l: "Continentes" },
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
      className="relative min-h-screen overflow-hidden"
      style={{ background: BG }}
    >
      {/* ── FOTO DA DUDA — ancorada na base direita, alta o suficiente para preencher ── */}
      <div
        className="absolute bottom-0 right-0 z-0 h-[72%] md:h-[88%]"
        style={{ width: "62%", maxWidth: "720px" }}
        aria-hidden
      >
        <Image
          src="/duda_hero.png"
          alt=""
          fill
          priority
          className="object-contain object-bottom object-right"
          style={{ filter: "saturate(1.15) contrast(1.05) brightness(1.05)" }}
          sizes="(max-width: 768px) 62vw, 720px"
        />
        {/* Fade esquerda */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to right,
              ${BG} 0%,
              ${BG}BB 14%,
              ${BG}33 38%,
              ${BG}00 70%
            )`,
          }}
        />
        {/* Fade topo */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${BG}AA, ${BG}00)` }}
        />
      </div>

      {/* Lime glow base */}
      <div
        className="absolute bottom-0 right-[8%] w-[320px] h-[320px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, oklch(0.84 0.22 130 / 0.08) 0%, transparent 65%)" }}
        aria-hidden
      />

      {/* ── CONTEÚDO ── */}
      <div className="relative z-10 min-h-screen flex flex-col px-5 md:px-12 w-full max-w-7xl mx-auto">

        {/* Badge topo */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-12px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-2.5 pt-24 md:pt-32"
        >
          <div className="lime-dot" />
          <span
            className="font-display font-bold tracking-[0.18em] uppercase"
            style={{ fontSize: "clamp(0.55rem, 2vw, 0.7rem)", color: "oklch(0.84 0.22 130)" }}
          >
            Brasil · Tênis Profissional
          </span>
        </motion.div>

        {/* Bloco principal — empurrado para baixo, alinhado com a foto */}
        <div className="flex-1 flex flex-col justify-end pb-6 md:justify-center md:pb-0">
          <div style={{ maxWidth: "min(58%, 580px)" }}>
            <motion.div
              initial={{ opacity: 0, transform: "translateY(32px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            >
              {/* Overline */}
              <p
                className="font-display font-bold uppercase mb-2"
                style={{
                  fontSize: "clamp(0.5rem, 1.6vw, 0.75rem)",
                  letterSpacing: "0.2em",
                  color: "oklch(0.84 0.22 130)",
                }}
              >
                Maria Eduarda Carbone
              </p>

              {/* Nome */}
              <h1
                className="font-display font-black uppercase leading-[0.82] tracking-[-0.02em] mb-4 md:mb-6"
                style={{
                  fontSize: "clamp(2.9rem, 11vw, 9rem)",
                  color: "oklch(0.97 0.005 85)",
                }}
              >
                Duda<br />
                <span style={{ color: "oklch(0.84 0.22 130)" }}>Carbone</span>
              </h1>

              {/* Tagline — só desktop */}
              <p
                className="hidden md:block text-base lg:text-lg leading-relaxed mb-6 max-w-[420px]"
                style={{ color: "oklch(0.68 0.010 260)" }}
              >
                A maior promessa do tênis feminino brasileiro. 15 anos,
                3 continentes, conquistas que estão reescrevendo a história do esporte nacional.
              </p>

              {/* Conquistas */}
              <motion.div
                initial={{ opacity: 0, transform: "translateY(14px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
                className="flex flex-col gap-1.5 mb-5 md:mb-8"
              >
                {[
                  "🥇 Ouro Jogos Sul-Am. · 2026",
                  "🎾 Roland Garros Jr. · 2026",
                  "🏆 ITF J30 Bruxelas · 2025",
                ].map((a) => (
                  <div
                    key={a}
                    className="inline-flex items-center rounded-full self-start"
                    style={{
                      padding: "0.28rem 0.7rem",
                      background: "oklch(1 0 0 / 0.05)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                    }}
                  >
                    <span className="leading-snug" style={{ fontSize: "clamp(0.6rem, 1.7vw, 0.72rem)" }}>
                      {a}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, transform: "translateY(12px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" }}
                className="flex flex-col gap-2 sm:flex-row sm:gap-3"
              >
                <a
                  href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime justify-center"
                  style={{ padding: "0.7rem 1.2rem", fontSize: "clamp(0.62rem, 1.6vw, 0.75rem)", letterSpacing: "0.1em" }}
                >
                  Seja Patrocinador
                </a>
                <a
                  href="#sobre"
                  className="btn-ghost-light justify-center"
                  style={{ padding: "0.7rem 1.1rem", fontSize: "clamp(0.62rem, 1.6vw, 0.75rem)", letterSpacing: "0.1em" }}
                  onClick={(e) => { e.preventDefault(); document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  Ver Atleta
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats — fixadas na base */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mb-7 md:mb-12"
        >
          <div
            ref={lineRef}
            className="h-px w-full mb-3 md:mb-6"
            style={{
              background: "linear-gradient(90deg, oklch(0.84 0.22 130 / 0), oklch(0.84 0.22 130 / 0.5), oklch(0.84 0.22 130 / 0))",
              backgroundSize: "200% 100%",
            }}
          />
          <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-md md:max-w-none">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, transform: "translateY(12px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.06, ease: "easeOut" }}
              >
                <div
                  className="font-display font-black leading-none mb-0.5"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", color: "oklch(0.84 0.22 130)" }}
                >
                  {s.v}
                </div>
                <div
                  className="font-display font-semibold tracking-widest uppercase"
                  style={{ fontSize: "clamp(0.5rem, 1.4vw, 0.6rem)", color: "oklch(0.50 0.010 260)" }}
                >
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
