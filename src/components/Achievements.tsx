"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      medal: "🥇",
      title: "Ouro · Jogos Sul-Americanos da Juventude",
      where: "Duplas Mistas · Panamá · Abril 2026",
      desc: "Junto a Leonardo Storck, Duda foi absoluta: 6/2 e 6/0 na semi, duplo 6/1 na grande final. Domínio continental total.",
      link: "https://brasilnotenis.com.br/maria-eduarda-carbone-e-leonardo-storck-conquistam-ouro-nas-duplas-mistas-nos-jogos-sul-americanos-da-juventude/",
      accent: "#d4a500",
      bg: "#fffbeb",
      border: "#fde68a",
    },
    {
      medal: "🥈",
      title: "Vice-Campeã · ITF J200 Assunção",
      where: "Pascuas Bowl · Paraguai · Abril 2026",
      desc: "Maior final da carreira juvenil. Derrubou a cabeça de chave nº1 (57ª do ranking mundial) e somou 140 pontos no ranking ITF.",
      link: "https://tenisbrasil.uol.com.br/duda-carbone-e-vice-em-assuncao-e-tera-seu-melhor-ranking/",
      accent: "#6b7280",
      bg: "#f9fafb",
      border: "#e5e7eb",
    },
    {
      medal: "🎾",
      title: "Roland Garros Junior Series",
      where: "Paris, França · Abril 2026",
      desc: "Vitória na estreia nas sagradas quadras de saibro de Roland Garros. Atuação marcante no templo do saibro mundial.",
      link: null,
      accent: "#c8384e",
      bg: "#fdf3f5",
      border: "#fecdd3",
    },
    {
      medal: "🏆",
      title: "Campeã · ITF J30 Bruxelas",
      where: "Bélgica · Julho 2025",
      desc: "Primeiro título internacional juvenil de simples em solo europeu, consolidando sua primeira gira na Europa.",
      link: null,
      accent: "#b45309",
      bg: "#fffbeb",
      border: "#fde68a",
    },
    {
      medal: "⭐",
      title: "1ª Vitória Profissional WTA",
      where: "Criciúma Open · W15 · Nov 2025",
      desc: "Estreou no ranking mundial profissional feminino com apenas 15 anos de idade, avançando às quartas de final.",
      link: "https://tenisbrasil.uol.com.br/duda-carbone-marca-1a-vitoria-profissional-aos-15-anos-em-criciuma/",
      accent: "#7c3aed",
      bg: "#f5f3ff",
      border: "#ddd6fe",
    },
    {
      medal: "🌎",
      title: "#1 Ranking COSAT Sul-Americano",
      where: "Confederação Sul-Americana · 2025–2026",
      desc: "Liderança no ranking continental da COSAT, consagrando-se como a atleta mais dominante de sua categoria na América do Sul.",
      link: null,
      accent: "#059669",
      bg: "#f0fdf4",
      border: "#bbf7d0",
    },
  ];

  return (
    <section id="conquistas" className="relative py-24 bg-white overflow-hidden z-20 border-y border-black/7">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase tracking-wider mb-5">
            🏆 Palmarés & Conquistas
          </div>
          <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
            A Ascensão de uma<br />
            <span className="text-[#c8384e]">Futura Campeã</span>
          </h2>
          <p className="text-sm md:text-base text-black/45 max-w-xl">
            Medalhas e vitórias expressivas no circuito juvenil mundial e estreia precoce no profissional da WTA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="bg-white border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] group overflow-hidden relative"
              style={{ borderColor: item.border }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: item.accent }}
              />

              <div>
                <div className="text-4xl mb-4">{item.medal}</div>

                <h3 className="font-space text-sm md:text-base font-black tracking-wide text-[#111] mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <div
                  className="text-[10px] font-bold tracking-wider uppercase mb-3"
                  style={{ color: item.accent }}
                >
                  {item.where}
                </div>

                <p className="text-xs text-black/45 leading-relaxed mb-5">{item.desc}</p>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] font-bold tracking-wide text-black/40 hover:text-black uppercase transition-colors self-start gap-1"
                >
                  Ver notícia <ExternalLink size={11} />
                </a>
              ) : (
                <span
                  className="text-[10px] font-bold tracking-wider uppercase self-start"
                  style={{ color: item.accent }}
                >
                  Conquista confirmada ✓
                </span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
