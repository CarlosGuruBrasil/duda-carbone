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
      {/* ── ATHLETE PHOTO – wider area, top-anchored so she rises above ── */}
      <div className="absolute inset-y-0 right-0 left-0 md:left-[28%]">
        <Image
          src="/foto_duda_patrocinio.jpeg"
          alt="Duda Carbone – tenista profissional brasileira"
          fill
          priority
          className="object-cover object-[58%_top]"
          sizes="(max-width: 768px) 100vw, 72vw"
        />
        {/* Strong left fade – text stays readable, photo pops on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f4] via-[#f7f6f4]/75 via-30% to-transparent md:via-[#f7f6f4]/40 md:via-20%" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f7f6f4]/80 to-transparent" />
        {/* Top edge micro-fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f7f6f4]/30 to-transparent" />
      </div>

      {/* ── CONTENT: flag top · name + details bottom ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-between pt-10 pb-14">

        {/* TOP – country + live indicator */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 pt-2"
        >
          <span className="text-2xl leading-none select-none">🇧🇷</span>
          <span className="text-[11px] font-bold tracking-[0.22em] text-black/40 uppercase">
            Brasil · Tênis Profissional
          </span>
          <div className="ml-5 flex items-center gap-2 hidden sm:flex">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#c8384e] animate-pulse" />
            <span className="text-[10px] text-black/25 tracking-[0.2em] uppercase">Temporada 2026</span>
          </div>
        </motion.div>

        {/* BOTTOM – big name + supporting content */}
        <div className="max-w-[640px]">

          {/* ── HERO NAME – muito maior, invadindo a área da foto ── */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.07 }}
            className="font-space font-black uppercase leading-[0.85] tracking-[-0.045em] text-[#111111] mb-8"
            style={{ fontSize: "clamp(4.5rem, 11.5vw, 9.5rem)" }}
          >
            Duda<br />Carbone
          </motion.h1>

          {/* Key facts row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-stretch gap-6 mb-8"
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

          {/* Achievement chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
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
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#patrocinio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c8384e] text-white text-sm font-bold tracking-wide hover:bg-[#b02f43] transition-colors shadow-[0_4px_24px_rgba(200,56,78,0.3)]"
            >
              Seja Patrocinador
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-black/20 text-[#111] text-sm font-semibold tracking-wide hover:border-black/40 hover:bg-black/4 transition-all"
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
