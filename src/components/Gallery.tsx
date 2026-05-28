"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Heart } from "lucide-react";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    { src: "/foto_duda_vencedora.jpeg",  alt: "Duda Carbone vibrando na vitória", caption: "Duda Carbone — A força de uma vencedora nata nas quadras.", large: true,  likes: "2.4K" },
    { src: "/foto_real_duda_ouro.jpg",   alt: "Duda Carbone com a medalha de ouro", caption: "Medalha de Ouro — Jogos Sul-Americanos da Juventude, Panamá 2026.", large: false, likes: "3.1K" },
    { src: "/foto_duda_principal.jpeg",  alt: "Duda Carbone ao lado de Guga Kuerten", caption: "Com o ídolo Guga Kuerten e seu pai/treinador Ednaldo Leonel no LIC.", large: false, likes: "5.7K" },
    { src: "/foto_duda_patrocinio.jpeg", alt: "Duda comemorando ponto", caption: "Duda Carbone — Foco, técnica e vibração na quadra de saibro.", large: false, likes: "1.8K" },
    { src: "/img_training.png",          alt: "Duda Carbone em treino", caption: "Rotina de treinos no LIC — A disciplina diária que forja uma futura campeã.", large: false, likes: "4.2K" },
    { src: "/img_roland.png",            alt: "Duda Carbone em Roland Garros", caption: "Duda Carbone nas sagradas quadras de Roland Garros Junior Series 2026.", large: false, likes: "6.8K" },
    { src: "/foto_duda_floripa.jpeg",    alt: "Duda posando em Florianópolis", caption: "Florianópolis, SC — Onde tudo começou e onde treina diariamente.", large: false, likes: "3.3K" },
    { src: "/foto_duda_midia1.jpeg",     alt: "Duda Carbone em jogo oficial", caption: "A garra e determinação que chamam a atenção do circuito nacional.", large: true,  likes: "4.9K" },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % images.length);
  };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setSelectedIdx((selectedIdx + 1) % images.length);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [selectedIdx, images.length]);

  return (
    <section id="galeria" className="relative py-24 bg-white border-y border-black/7 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f6f4] border border-black/8 text-black/45 text-[10px] font-bold uppercase tracking-wider mb-5">
            📸 Galeria
          </div>
          <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
            Momentos que definem<br />
            <span className="text-[#c8384e]">uma Campeã</span>
          </h2>
          <p className="text-sm md:text-base text-black/45 max-w-xl">
            Registros fotográficos da rotina de treinos, competições internacionais e as principais vitórias da Duda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              onClick={() => setSelectedIdx(idx)}
              className={`relative rounded-xl overflow-hidden border border-black/7 bg-gray-100 cursor-pointer group ${
                img.large ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top transition-all duration-500 ease-out group-hover:scale-105"
                sizes={img.large ? "(max-width: 768px) 100vw, 580px" : "(max-width: 768px) 50vw, 290px"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="flex items-center gap-1 text-[10px] font-bold text-white drop-shadow">
                  <Heart size={11} className="fill-white" /> {img.likes}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-10 w-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Maximize2 size={16} className="text-[#c8384e]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 h-11 w-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 h-11 w-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 h-11 w-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center max-w-5xl w-full"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden bg-black border border-white/10">
                <Image
                  src={images[selectedIdx].src}
                  alt={images[selectedIdx].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  preload
                />
              </div>
              <div className="flex items-center gap-4 mt-4">
                <p className="text-xs md:text-sm text-white/60 text-center max-w-2xl leading-relaxed">
                  {images[selectedIdx].caption}
                </p>
                <span className="flex items-center gap-1 text-xs font-bold text-[#c8384e] shrink-0">
                  <Heart size={13} className="fill-[#c8384e]" /> {images[selectedIdx].likes}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
