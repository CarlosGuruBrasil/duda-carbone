"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/logo_cob.svg",           alt: "Comitê Olímpico Brasileiro" },
  { src: "/logo_cbt.png",           alt: "Confederação Brasileira de Tênis" },
  { src: "/logo_itf.png",           alt: "International Tennis Federation" },
  { src: "/logo_odesur.png",        alt: "ODESUR" },
  { src: "/logo_roland_garros.png", alt: "Roland Garros Junior Series" },
  { src: "/logo_wta.png",           alt: "WTA" },
];

// CSS animation ticker – off main thread, interruptible
export default function InfiniteTicker() {
  // Triple for seamless loop
  const trackLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className="relative py-7 overflow-hidden z-20"
      style={{
        background: "oklch(1 0 0)",
        borderTop: "1px solid oklch(0.88 0.004 260)",
        borderBottom: "1px solid oklch(0.88 0.004 260)",
      }}
    >
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, oklch(1 0 0), transparent)" }}
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, oklch(1 0 0), transparent)" }}
        aria-hidden
      />

      <p
        className="text-center text-[9px] font-bold tracking-widest uppercase mb-4"
        style={{ color: "oklch(0.65 0.006 260)" }}
      >
        Chancelas Oficiais & Filiações
      </p>

      {/* Pure CSS animation – no Framer Motion, stays smooth under load */}
      <div className="flex overflow-hidden" aria-label="Logos de filiações oficiais">
        <div
          className="ticker-track flex items-center gap-16 md:gap-24 whitespace-nowrap"
          style={{ minWidth: "300%" }}
        >
          {trackLogos.map((logo, idx) => (
            <div
              key={idx}
              className="ticker-logo relative h-9 md:h-11 w-28 md:w-36 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
