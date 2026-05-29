"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const achievements = [
  {
    medal: "🥇",
    title: "Ouro · Jogos Sul-Americanos da Juventude",
    where: "Duplas Mistas · Panamá · Abril 2026",
    desc: "Junto a Leonardo Storck, foi absoluta: 6/2 e 6/0 na semi, duplo 6/1 na grande final. Domínio continental total.",
    link: "https://brasilnotenis.com.br/maria-eduarda-carbone-e-leonardo-storck-conquistam-ouro-nas-duplas-mistas-nos-jogos-sul-americanos-da-juventude/",
    accentOklch: "oklch(0.72 0.15 85)",
    bgOklch: "oklch(0.98 0.02 85)",
    borderOklch: "oklch(0.88 0.08 85)",
  },
  {
    medal: "🥈",
    title: "Vice-Campeã · ITF J200 Assunção",
    where: "Pascuas Bowl · Paraguai · Abril 2026",
    desc: "Maior final da carreira juvenil. Derrubou a cabeça de chave nº1 (57ª do ranking mundial) e somou 140 pontos ITF.",
    link: "https://tenisbrasil.uol.com.br/duda-carbone-e-vice-em-assuncao-e-tera-seu-melhor-ranking/",
    accentOklch: "oklch(0.5 0.006 260)",
    bgOklch: "oklch(0.98 0.002 260)",
    borderOklch: "oklch(0.88 0.004 260)",
  },
  {
    medal: "🎾",
    title: "Roland Garros Junior Series",
    where: "Paris, França · Abril 2026",
    desc: "Vitória na estreia nas sagradas quadras de saibro de Roland Garros. Atuação marcante no templo do tênis mundial.",
    link: null,
    accentOklch: "oklch(0.62 0.18 130)",
    bgOklch: "oklch(0.97 0.04 130)",
    borderOklch: "oklch(0.82 0.22 130 / 0.25)",
  },
  {
    medal: "🏆",
    title: "Campeã · ITF J30 Bruxelas",
    where: "Bélgica · Julho 2025",
    desc: "Primeiro título internacional juvenil de simples em solo europeu, consolidando sua primeira gira na Europa.",
    link: null,
    accentOklch: "oklch(0.55 0.12 55)",
    bgOklch: "oklch(0.98 0.02 55)",
    borderOklch: "oklch(0.85 0.07 55)",
  },
  {
    medal: "⭐",
    title: "1ª Vitória Profissional WTA",
    where: "Criciúma Open · W15 · Nov 2025",
    desc: "Estreou no ranking mundial profissional feminino com apenas 15 anos, avançando às quartas de final.",
    link: "https://tenisbrasil.uol.com.br/duda-carbone-marca-1a-vitoria-profissional-aos-15-anos-em-criciuma/",
    accentOklch: "oklch(0.5 0.18 290)",
    bgOklch: "oklch(0.97 0.03 290)",
    borderOklch: "oklch(0.82 0.1 290 / 0.3)",
  },
  {
    medal: "🌎",
    title: "#1 Ranking COSAT Sul-Americano",
    where: "Confederação Sul-Americana · 2025–2026",
    desc: "Liderança no ranking continental da COSAT, consagrando-se como a atleta mais dominante de sua categoria na América do Sul.",
    link: null,
    accentOklch: "oklch(0.5 0.14 160)",
    bgOklch: "oklch(0.97 0.03 160)",
    borderOklch: "oklch(0.78 0.1 160 / 0.3)",
  },
];

export default function Achievements() {
  return (
    <section
      id="conquistas"
      className="relative py-28 overflow-hidden z-20"
      style={{
        background: "oklch(1 0 0)",
        borderTop: "1px solid oklch(0.88 0.004 260)",
        borderBottom: "1px solid oklch(0.88 0.004 260)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header – no eyebrow on every section */}
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
            A Ascensão de uma<br />
            <span style={{ color: "oklch(0.82 0.22 130)" }}>Futura Campeã</span>
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "oklch(0.45 0.006 260)" }}
          >
            Medalhas e vitórias expressivas no circuito juvenil mundial e estreia precoce no profissional da WTA.
          </p>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {achievements.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: 0.04 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden surface-hover"
              style={{
                background: item.bgOklch,
                border: `1px solid ${item.borderOklch}`,
              }}
            >
              {/* Top accent line — z-index above card bg */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl z-10"
                style={{ background: item.accentOklch }}
              />

              <div>
                <div className="text-4xl mb-4" aria-hidden>{item.medal}</div>

                <h3
                  className="font-space text-sm font-black tracking-tight leading-snug mb-1.5"
                  style={{ color: "oklch(0.12 0.008 260)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[10px] font-bold tracking-wider uppercase mb-3"
                  style={{ color: item.accentOklch }}
                >
                  {item.where}
                </p>

                <p
                  className="text-xs leading-relaxed mb-5"
                  style={{ color: "oklch(0.45 0.006 260)" }}
                >
                  {item.desc}
                </p>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase self-start"
                  style={{
                    color: "oklch(0.55 0.006 260)",
                    transition: "color 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.18 0.06 260)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.006 260)"; }}
                >
                  Ver notícia <ExternalLink size={11} aria-hidden />
                </a>
              ) : (
                <span
                  className="text-[10px] font-bold tracking-wider uppercase self-start"
                  style={{ color: item.accentOklch }}
                >
                  Conquista confirmada ✓
                </span>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
