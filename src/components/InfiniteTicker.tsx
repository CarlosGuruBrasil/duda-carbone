"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfiniteTicker() {
  const logos = [
    { src: "/logo_cob.svg",          alt: "Comitê Olímpico Brasileiro (COB)" },
    { src: "/logo_cbt.png",          alt: "Confederação Brasileira de Tênis (CBT)" },
    { src: "/logo_itf.png",          alt: "International Tennis Federation (ITF)" },
    { src: "/logo_odesur.png",       alt: "ODESUR" },
    { src: "/logo_roland_garros.png",alt: "Roland Garros Junior Series" },
    { src: "/logo_wta.png",          alt: "WTA" },
  ];

  const tickerLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative py-8 bg-white border-y border-black/7 overflow-hidden z-20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-3">
        <span className="block text-[9px] md:text-[10px] font-bold tracking-widest text-center text-black/30 uppercase">
          Chancelas Oficiais & Filiações
        </span>
      </div>

      <div className="flex overflow-hidden py-3">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap min-w-full"
        >
          {tickerLogos.map((logo, idx) => (
            <div
              key={idx}
              className="relative h-9 md:h-12 w-28 md:w-36 flex-shrink-0 flex items-center justify-center filter grayscale opacity-35 hover:grayscale-0 hover:opacity-90 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 144px) 100vw, 144px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
