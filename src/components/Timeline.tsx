"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  const steps = [
    {
      year: "2010",
      title: "O Começo de Tudo",
      desc: "Maria Eduarda nasce na Barra da Lagoa, Florianópolis — a mesma ilha que formou Guga Kuerten, tricampeão de Roland Garros.",
      highlight: false,
    },
    {
      year: "2013",
      title: "Primeiros Passos na Quadra",
      desc: "Aos 3 anos, já empunhava a raquete do pai, Ednaldo Leonel. A paixão pelo esporte e pela quadra de tênis foi imediata e inabalável.",
      highlight: false,
    },
    {
      year: "2016–2022",
      title: "Formação no LIC",
      desc: "Desenvolvimento técnico na Escola Guga de Tênis do Lagoa Iate Clube. Domínio absoluto das categorias juvenis no estado de Santa Catarina.",
      highlight: false,
    },
    {
      year: "2023–2024",
      title: "Dominando a América do Sul",
      desc: "Conquistas expressivas no circuito COSAT. Conquista de vaga na Gira Europeia através do Banana Bowl e Brasil Juniors Cup.",
      highlight: false,
    },
    {
      year: "2025",
      title: "🏆 Título Europeu & Estreia WTA",
      desc: "Primeiro título ITF Junior em Bruxelas (Bélgica). Em novembro, soma seus primeiros pontos profissionais no ranking WTA em Criciúma.",
      highlight: true,
    },
    {
      year: "2026",
      title: "🥇 Ouro, Roland Garros & #1 COSAT",
      desc: "Medalha de ouro nos Jogos Sul-Americanos. Finalista J200 Assunção. Vitória histórica em Roland Garros Junior Series. #1 COSAT.",
      highlight: true,
    },
  ];

  return (
    <section id="timeline" className="relative py-24 bg-white border-y border-black/7 overflow-hidden z-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f6f4] border border-black/8 text-black/50 text-[10px] font-bold uppercase tracking-wider mb-5">
            Trajetória Histórica
          </div>
          <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
            A Escalada para<br />
            <span className="text-[#8ad300]">a Glória</span>
          </h2>
          <p className="text-sm md:text-base text-black/45 max-w-lg">
            A jornada de dedicação da Duda, desde as primeiras rebatidas em Florianópolis até as vitórias nas principais quadras internacionais.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0 md:flex md:flex-col md:items-center">

          {/* Vertical line */}
          <div className="absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#8ad300]/30 via-black/10 to-transparent md:-translate-x-1/2" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative mb-10 last:mb-0 w-full md:flex md:justify-between items-start group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[-26px] md:left-1/2 top-3 w-[14px] h-[14px] rounded-full border-2 md:-translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-125 ${
                  step.highlight
                    ? "bg-[#8ad300] border-[#8ad300]"
                    : "bg-white border-black/20 group-hover:border-[#8ad300]"
                }`} />

                {/* Year label */}
                <div className={`hidden md:flex w-[45%] font-space text-base font-black tracking-tight text-black/30 group-hover:text-[#8ad300] transition-colors duration-300 pt-2 ${
                  isEven ? "justify-end pr-8" : "order-last justify-start pl-8"
                }`}>
                  {step.year}
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`w-full md:w-[45%] p-5 rounded-2xl border text-left relative overflow-hidden transition-all duration-300 ${
                    step.highlight
                      ? "bg-[#f3fae5] border-[#c0e770]"
                      : "bg-[#f7f6f4] border-black/7 hover:border-black/14"
                  }`}
                >
                  {step.highlight && (
                    <span className="absolute top-0 right-0 bg-[#8ad300] text-[#0c1530] text-[8px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl-xl">
                      Destaque
                    </span>
                  )}

                  <span className="block md:hidden font-space text-xs font-black tracking-widest text-[#8ad300] mb-1">
                    {step.year}
                  </span>

                  <h4 className="font-space text-xs md:text-sm font-black tracking-wide text-[#111] uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-black/45 leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
