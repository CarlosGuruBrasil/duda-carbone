"use client";

import React from "react";
import Image from "next/image";
import { Play, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";

export default function Videos() {
  const { videos, news } = contentData;

  return (
    <section className="relative py-24 bg-[#f7f6f4] overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── VÍDEOS ── */}
        <div id="videos" className="mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#c8384e] text-[10px] font-bold uppercase tracking-wider mb-5">
              Registros em Vídeo
            </div>
            <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
              Momentos<br />
              <span className="text-[#c8384e]">Icônicos</span>
            </h2>
            <p className="text-sm md:text-base text-black/45 max-w-xl">
              Matérias de transmissões esportivas e bastidores da carreira internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid, idx) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-black/7 rounded-2xl overflow-hidden group flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] transition-all duration-300"
              >
                <a
                  href={vid.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video block overflow-hidden bg-gray-100"
                >
                  <Image
                    src={vid.src}
                    alt={vid.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 380px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-black/15 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={18} className="fill-[#c8384e] text-[#c8384e] ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[8px] font-bold tracking-wider text-white bg-black/60 px-2.5 py-1 rounded-md">
                    {vid.tag}
                  </span>
                </a>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-[#c8384e]/80 uppercase">
                      {vid.portal}
                    </span>
                    <h3 className="font-space text-sm font-black tracking-wide text-[#111] uppercase mt-1 mb-2 leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-black/40 leading-relaxed mb-4">{vid.desc}</p>
                  </div>
                  <a
                    href={vid.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-black/35 hover:text-[#c8384e] uppercase transition-colors self-start"
                  >
                    Assistir Matéria <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── NA MÍDIA ── */}
        <div id="midia">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-5">
              Cobertura de Imprensa
            </div>
            <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
              O Brasil falando sobre<br />
              <span className="text-[#c8384e]">Duda Carbone</span>
            </h2>
            <p className="text-sm md:text-base text-black/45 max-w-xl">
              Reportagens e editoriais comprovando a ascensão da atleta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="bg-white border border-black/7 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col md:grid md:grid-cols-[160px_1fr] h-full"
              >
                <div className="relative h-40 md:h-full w-full min-h-[140px] bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 160px) 100vw, 160px"
                  />
                  <span className="absolute top-3 left-3 text-[8px] font-bold tracking-widest text-white bg-black/60 px-2 py-0.5 rounded">
                    {item.pub}
                  </span>
                </div>

                <div className="p-5 flex flex-col justify-between items-start">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-black/30 mb-2">
                      <Calendar size={10} />
                      {item.date}
                    </span>
                    <h3 className="font-space text-xs md:text-sm font-black tracking-wide text-[#111] uppercase leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-black/40 leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-black/35 hover:text-[#c8384e] uppercase transition-colors"
                  >
                    Ler Reportagem <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
