"use client";

import React from "react";
import { motion } from "framer-motion";

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
    desc: "Desenvolvimento técnico na Escola Guga de Tênis do Lagoa Iate Clube. Domínio das categorias juvenis em Santa Catarina.",
    highlight: false,
  },
  {
    year: "2023–2024",
    title: "Dominando a América do Sul",
    desc: "Conquistas expressivas no circuito COSAT. Classificação para a Gira Europeia via Banana Bowl e Brasil Juniors Cup.",
    highlight: false,
  },
  {
    year: "2025",
    title: "🏆 Título Europeu & Estreia WTA",
    desc: "Primeiro título ITF Junior em Bruxelas. Em novembro, soma os primeiros pontos profissionais no ranking WTA em Criciúma.",
    highlight: true,
  },
  {
    year: "2026",
    title: "🥇 Ouro, Roland Garros & #1 COSAT",
    desc: "Ouro nos Jogos Sul-Americanos. Finalista J200 Assunção. Vitória histórica em Roland Garros Junior Series. #1 COSAT.",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-28 overflow-hidden z-20"
      style={{
        background: "oklch(1 0 0)",
        borderTop: "1px solid oklch(0.88 0.004 260)",
        borderBottom: "1px solid oklch(0.88 0.004 260)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            className="font-space font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "oklch(0.12 0.008 260)",
              letterSpacing: "-0.04em",
              textWrap: "balance",
            }}
          >
            A Escalada para<br />
            <span style={{ color: "oklch(0.82 0.22 130)" }}>a Glória</span>
          </h2>
          <p
            className="text-base leading-relaxed max-w-lg"
            style={{ color: "oklch(0.45 0.006 260)" }}
          >
            A jornada de Duda, desde as primeiras rebatidas em Florianópolis até as vitórias nas principais quadras internacionais.
          </p>
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[5.5rem] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "oklch(0.88 0.004 260)" }}
            aria-hidden
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, transform: "translateX(-12px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.06 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex gap-6 md:gap-10 items-start pb-10 last:pb-0"
              >
                {/* Year */}
                <div
                  className="flex-shrink-0 w-20 text-right font-space font-black text-sm leading-tight pt-0.5"
                  style={{
                    color: step.highlight
                      ? "oklch(0.62 0.18 130)"
                      : "oklch(0.55 0.006 260)",
                  }}
                >
                  {step.year}
                </div>

                {/* Dot – z above the vertical line */}
                <div className="relative flex-shrink-0 hidden md:flex items-start justify-center w-3 mt-1.5 z-10">
                  <div
                    className="w-3 h-3 rounded-full border-2 transition-colors"
                    style={{
                      background: step.highlight
                        ? "oklch(0.82 0.22 130)"
                        : "oklch(1 0 0)",
                      borderColor: step.highlight
                        ? "oklch(0.82 0.22 130)"
                        : "oklch(0.78 0.006 260)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-1">
                  <h3
                    className="font-space text-sm font-black tracking-tight mb-1.5"
                    style={{
                      color: step.highlight
                        ? "oklch(0.12 0.008 260)"
                        : "oklch(0.25 0.008 260)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.48 0.006 260)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
