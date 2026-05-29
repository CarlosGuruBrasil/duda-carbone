"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/logo_cob.svg",           alt: "Comitê Olímpico Brasileiro" },
  { src: "/logo_cbt.png",           alt: "Confederação Brasileira de Tênis" },
  { src: "/logo_itf.png",           alt: "ITF" },
  { src: "/logo_odesur.png",        alt: "ODESUR" },
  { src: "/logo_roland_garros.png", alt: "Roland Garros" },
  { src: "/logo_wta.png",           alt: "WTA" },
];

const track = [...logos, ...logos, ...logos];

export default function InfiniteTicker() {
  return (
    <div
      className="relative overflow-hidden py-7 section-divider"
      style={{ background: "oklch(0.12 0.04 260)", borderBottom: "1px solid oklch(1 0 0 / 0.07)" }}
    >
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, oklch(0.12 0.04 260), oklch(0.12 0.04 260 / 0))" }}
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, oklch(0.12 0.04 260), oklch(0.12 0.04 260 / 0))" }}
        aria-hidden
      />

      <p
        className="text-center font-display text-[9px] font-bold tracking-[0.28em] uppercase mb-5"
        style={{ color: "oklch(0.40 0.008 260)" }}
      >
        Chancelas Oficiais & Filiações
      </p>

      <div className="flex overflow-hidden" aria-label="Logos de filiações oficiais">
        <div
          className="ticker-track flex items-center gap-16 md:gap-24 whitespace-nowrap"
          style={{ minWidth: "300%" }}
        >
          {track.map((logo, idx) => (
            <div
              key={idx}
              className="ticker-logo relative h-8 md:h-10 w-24 md:w-32 flex-shrink-0 flex items-center justify-center"
            >
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="128px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
