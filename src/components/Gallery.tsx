"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/foto_duda_vencedora.jpeg",  alt: "Duda Carbone vibrando na vitória", span: "col-span-2 row-span-2" },
  { src: "/foto_real_duda_ouro.jpg",   alt: "Duda Carbone com a medalha de ouro", span: "col-span-1 row-span-1" },
  { src: "/foto_duda_principal.jpeg",  alt: "Duda Carbone com Guga Kuerten no LIC", span: "col-span-1 row-span-1" },
  { src: "/foto_duda_patrocinio.jpeg", alt: "Duda Carbone em ação", span: "col-span-1 row-span-1" },
  { src: "/img_training.png",          alt: "Duda Carbone em treino", span: "col-span-1 row-span-1" },
  { src: "/img_roland.png",            alt: "Duda Carbone em Roland Garros", span: "col-span-1 row-span-1" },
  { src: "/foto_duda_floripa.jpeg",    alt: "Duda posando em Florianópolis", span: "col-span-1 row-span-1" },
  { src: "/foto_duda_midia1.jpeg",     alt: "Duda Carbone em jogo oficial", span: "col-span-2 row-span-2" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => (s !== null ? (s - 1 + photos.length) % photos.length : null));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % photos.length : null));

  return (
    <section
      id="galeria"
      className="relative py-28 section-divider"
      style={{ background: "oklch(0.12 0.04 260)", borderBottom: "1px solid oklch(1 0 0 / 0.07)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="lime-dot" />
            <span className="font-display text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: "oklch(0.84 0.22 130)" }}>Galeria</span>
          </div>
          <h2
            className="font-display font-black uppercase leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "oklch(0.97 0.005 85)", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            Momentos que definem<br />
            <span style={{ color: "oklch(0.84 0.22 130)" }}>uma Campeã</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, transform: "scale(0.97)" }}
              whileInView={{ opacity: 1, transform: "scale(1)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.04 * idx, ease: "easeOut" }}
              className={`relative ${photo.span} rounded-xl overflow-hidden cursor-pointer group`}
              style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
              onClick={() => setSelected(idx)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "oklch(0.10 0.04 260 / 0.5)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.84 0.22 130 / 0.9)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(0.10 0.04 260)" strokeWidth="2.5"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "oklch(0.05 0.02 260 / 0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "oklch(1 0 0 / 0.1)", color: "oklch(0.97 0.005 85)" }}
              onClick={() => setSelected(null)}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "oklch(1 0 0 / 0.1)", color: "oklch(0.97 0.005 85)" }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "oklch(1 0 0 / 0.1)", color: "oklch(0.97 0.005 85)" }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Próxima"
            >
              <ChevronRight size={20} />
            </button>
            <motion.div
              key={selected}
              initial={{ opacity: 0, transform: "scale(0.95)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-h-[85vh] max-w-[90vw] aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={photos[selected].src} alt={photos[selected].alt} fill className="object-contain" sizes="90vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
