"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Hardware-accelerated variants — use transform string, not x/y shorthand (Emil Kowalski / Impeccable)
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, transform: "translateY(20px)" },
  animate: { opacity: 1, transform: "translateY(0px)" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const BG = "oklch(0.96 0.008 260)";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: BG }}
    >
      {/* Athlete photo – right half */}
      <div className="absolute inset-y-0 right-0 left-0 md:left-[32%]">
        <Image
          src="/foto_duda_patrocinio.jpeg"
          alt="Duda Carbone – tenista profissional brasileira"
          fill
          priority
          className="object-cover object-[58%_top]"
          sizes="(max-width: 768px) 100vw, 68vw"
        />
        {/* Left fade – use oklch with explicit alpha steps (avoids Firefox transparent bug) */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${BG} 0%, oklch(0.96 0.008 260 / 0.85) 25%, oklch(0.96 0.008 260 / 0.3) 55%, oklch(0.96 0.008 260 / 0) 100%)`,
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: `linear-gradient(to top, oklch(0.96 0.008 260 / 0.7), oklch(0.96 0.008 260 / 0))`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-between pt-10 pb-16">

        {/* Top row – country + season */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-12px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 pt-2"
        >
          <span className="text-xl leading-none select-none" aria-hidden>🇧🇷</span>
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "oklch(0.45 0.008 260)" }}
          >
            Brasil · Tênis Profissional
          </span>
          <div className="ml-4 hidden sm:flex items-center gap-2">
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.82 0.22 130)", animation: "pulse 2s ease-in-out infinite" }}
              aria-hidden
            />
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "oklch(0.6 0.006 260)" }}
            >
              Temporada 2026
            </span>
          </div>
        </motion.div>

        {/* Bottom content */}
        <div className="max-w-[580px]">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-space font-black uppercase leading-[0.85] tracking-[-0.04em] mb-8"
            style={{
              fontSize: "clamp(4rem, 10vw, 6rem)",
              color: "oklch(0.12 0.008 260)",
              textWrap: "balance",
            }}
          >
            Duda<br />Carbone
          </motion.h1>

          {/* Key facts */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(16px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-stretch gap-6 mb-8"
          >
            {[
              { v: "15", l: "Anos" },
              { v: "#1", l: "Sul-Am. COSAT" },
              { v: "10+", l: "Torneios 2026" },
            ].map((s, i) => (
              <React.Fragment key={s.l}>
                {i > 0 && (
                  <div
                    className="w-px self-stretch"
                    style={{ background: "oklch(0.12 0.008 260 / 0.1)" }}
                  />
                )}
                <div>
                  <div
                    className="font-space font-black text-2xl md:text-3xl leading-none"
                    style={{ color: "oklch(0.12 0.008 260)" }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.14em] uppercase mt-1"
                    style={{ color: "oklch(0.55 0.006 260)" }}
                  >
                    {s.l}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Achievement chips */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(14px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 mb-9"
          >
            {[
              { emoji: "🥇", text: "Ouro Jogos Sul-Am. Juventude · Panamá 2026" },
              { emoji: "🎾", text: "Roland Garros Junior Series 2026" },
            ].map((a) => (
              <div
                key={a.text}
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 self-start"
                style={{
                  background: "oklch(1 0 0 / 0.85)",
                  border: "1px solid oklch(0.88 0.004 260)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-base leading-none" aria-hidden>{a.emoji}</span>
                <span
                  className="text-[11px] font-semibold tracking-wide"
                  style={{ color: "oklch(0.25 0.008 260)" }}
                >
                  {a.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(12px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <a href="#patrocinio" className="btn-primary">
              Seja Patrocinador
            </a>
            <a href="#sobre" className="btn-ghost">
              Conheça a Atleta
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <span
          className="text-[9px] font-bold tracking-[0.22em] uppercase rotate-90 origin-center translate-x-3"
          style={{ color: "oklch(0.6 0.006 260)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: `linear-gradient(to bottom, oklch(0.55 0.006 260 / 0.3), oklch(0.55 0.006 260 / 0))`,
          }}
        />
      </motion.div>

      {/* Floating social */}
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-10px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-5 bottom-16 hidden lg:flex flex-col gap-3"
      >
        {[
          { label: "Instagram", href: "https://www.instagram.com/mduda_carbone/", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
          { label: "YouTube",   href: "#", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg> },
          { label: "TikTok",   href: "#", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg> },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="social-link"
            style={{ color: "oklch(0.45 0.008 260)" }}
          >
            {s.svg}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
