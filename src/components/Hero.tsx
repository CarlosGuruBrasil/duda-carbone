"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f6f4]"
    >
      {/* ── PHOTO – fills right portion, edge-to-edge on mobile ── */}
      <div className="absolute inset-0 md:left-[42%]">
        <Image
          src="/foto_duda_patrocinio.jpeg"
          alt="Duda Carbone – tenista profissional brasileira"
          fill
          priority
          className="object-cover object-[center_15%]"
          sizes="100vw"
        />
        {/* left-fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f4] via-[#f7f6f4]/80 to-transparent md:via-[#f7f6f4]/40" />
        {/* subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f6f4]/60 via-transparent to-transparent" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-end pb-16 md:pb-20 pt-32">
        <div className="max-w-lg">

          {/* Country + sport */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 mb-5"
          >
            <span className="text-2xl leading-none select-none">🇧🇷</span>
            <span className="text-[11px] font-bold tracking-[0.22em] text-black/40 uppercase">
              Brasil · Tênis Profissional
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="font-space font-black text-[clamp(3rem,8vw,6rem)] tracking-[-0.04em] text-[#111111] uppercase leading-[0.9] mb-7"
          >
            Duda<br />Carbone
          </motion.h1>

          {/* Key facts row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex items-stretch gap-5 mb-8"
          >
            {[
              { v: "15", l: "Anos" },
              { v: "#1", l: "Sul-Am. COSAT" },
              { v: "10+", l: "Torneios 2026" },
            ].map((s, i) => (
              <React.Fragment key={s.l}>
                {i > 0 && <div className="w-px bg-black/12 self-stretch" />}
                <div>
                  <div className="font-space font-black text-2xl md:text-3xl text-[#111] leading-none">
                    {s.v}
                  </div>
                  <div className="text-[10px] tracking-[0.14em] text-black/40 uppercase mt-1">
                    {s.l}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Achievements chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-col gap-2 mb-9"
          >
            {[
              { emoji: "🥇", text: "Ouro Jogos Sul-Am. Juventude · Panamá 2026" },
              { emoji: "🎾", text: "Roland Garros Junior Series 2026" },
            ].map((a) => (
              <div
                key={a.text}
                className="inline-flex items-center gap-2.5 bg-white/80 border border-black/8 rounded-full px-4 py-2 self-start"
              >
                <span className="text-base leading-none">{a.emoji}</span>
                <span className="text-[11px] font-semibold text-[#333] tracking-wide">
                  {a.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#patrocinio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c8384e] text-white text-sm font-bold tracking-wide hover:bg-[#b02f43] transition-colors shadow-[0_4px_20px_rgba(200,56,78,0.3)]"
            >
              Seja Patrocinador
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-black/20 text-[#111] text-sm font-semibold tracking-wide hover:border-black/40 hover:bg-black/4 transition-all"
            >
              Conheça a Atleta
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] font-bold tracking-[0.25em] text-black/25 uppercase rotate-90 origin-center translate-x-3">
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-black/20 to-transparent" />
      </motion.div>

      {/* ── FLOATING SOCIAL ── */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute left-5 bottom-16 hidden lg:flex flex-col gap-3"
      >
        {[
          { icon: "📸", label: "Instagram", href: "https://www.instagram.com/mduda_carbone/" },
          { icon: "▶️", label: "YouTube", href: "#" },
          { icon: "🎥", label: "TikTok", href: "#" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="w-9 h-9 rounded-full bg-white/80 border border-black/8 flex items-center justify-center text-base hover:scale-110 hover:shadow-md transition-all"
          >
            {s.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
