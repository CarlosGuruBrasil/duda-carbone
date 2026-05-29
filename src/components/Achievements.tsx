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
    accent: "oklch(0.75 0.15 85)",
    accentBg: "oklch(0.75 0.15 85 / 0.08)",
    accentBorder: "oklch(0.75 0.15 85 / 0.25)",
  },
  {
    medal: "🥈",
    title: "Vice-Campeã · ITF J200 Assunção",
    where: "Pascuas Bowl · Paraguai · Abril 2026",
    desc: "Maior final da carreira juvenil. Derrubou a cabeça de chave nº1 (57ª do ranking mundial) e somou 140 pontos ITF.",
    link: "https://tenisbrasil.uol.com.br/duda-carbone-e-vice-em-assuncao-e-tera-seu-melhor-ranking/",
    accent: "oklch(0.75 0.008 260)",
    accentBg: "oklch(0.75 0.008 260 / 0.06)",
    accentBorder: "oklch(1 0 0 / 0.12)",
  },
  {
    medal: "🎾",
    title: "Roland Garros Junior Series",
    where: "Paris, França · Abril 2026",
    desc: "Vitória na estreia nas sagradas quadras de saibro de Roland Garros. Atuação marcante no templo do tênis mundial.",
    link: null,
    accent: "oklch(0.84 0.22 130)",
    accentBg: "oklch(0.84 0.22 130 / 0.07)",
    accentBorder: "oklch(0.84 0.22 130 / 0.25)",
  },
  {
    medal: "🏆",
    title: "Campeã · ITF J30 Bruxelas",
    where: "Bélgica · Julho 2025",
    desc: "Primeiro título internacional juvenil de simples em solo europeu, consolidando sua primeira gira na Europa.",
    link: null,
    accent: "oklch(0.70 0.12 55)",
    accentBg: "oklch(0.70 0.12 55 / 0.07)",
    accentBorder: "oklch(0.70 0.12 55 / 0.25)",
  },
  {
    medal: "⭐",
    title: "1ª Vitória Profissional WTA",
    where: "Criciúma Open · W15 · Nov 2025",
    desc: "Estreou no ranking mundial profissional feminino com apenas 15 anos, avançando às quartas de final.",
    link: "https://tenisbrasil.uol.com.br/duda-carbone-marca-1a-vitoria-profissional-aos-15-anos-em-criciuma/",
    accent: "oklch(0.65 0.15 290)",
    accentBg: "oklch(0.65 0.15 290 / 0.07)",
    accentBorder: "oklch(0.65 0.15 290 / 0.25)",
  },
  {
    medal: "🌎",
    title: "#1 Ranking COSAT Sul-Americano",
    where: "Confederação Sul-Americana · 2025–2026",
    desc: "Liderança no ranking continental da COSAT, consagrando-se como a atleta mais dominante de sua categoria na América do Sul.",
    link: null,
    accent: "oklch(0.65 0.14 160)",
    accentBg: "oklch(0.65 0.14 160 / 0.07)",
    accentBorder: "oklch(0.65 0.14 160 / 0.25)",
  },
];

export default function Achievements() {
  return (
    <section
      id="conquistas"
      className="relative py-28 overflow-hidden section-divider"
      style={{ background: "oklch(0.12 0.04 260)", borderBottom: "1px solid oklch(1 0 0 / 0.07)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.84 0.22 130 / 0.04) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="lime-dot" />
            <span className="font-display text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: "oklch(0.84 0.22 130)" }}>
              Palmarés
            </span>
          </div>
          <h2
            className="font-display font-black uppercase leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "oklch(0.97 0.005 85)", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            A Ascensão de uma<br />
            <span style={{ color: "oklch(0.84 0.22 130)" }}>Futura Campeã</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "oklch(0.55 0.008 260)" }}>
            Medalhas e vitórias expressivas no circuito juvenil mundial e estreia precoce no profissional da WTA.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {achievements.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.04 * idx, ease: "easeOut" }}
              className="relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden card-hover"
              style={{
                background: item.accentBg,
                border: `1px solid ${item.accentBorder}`,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl z-10"
                style={{ background: item.accent }}
              />

              <div>
                <div className="text-4xl mb-4" aria-hidden>{item.medal}</div>
                <h3
                  className="font-display text-sm font-black tracking-tight leading-snug mb-1.5"
                  style={{ color: "oklch(0.95 0.005 85)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[10px] font-bold tracking-wider uppercase mb-3"
                  style={{ color: item.accent }}
                >
                  {item.where}
                </p>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "oklch(0.58 0.008 260)" }}>
                  {item.desc}
                </p>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase self-start"
                  style={{ color: "oklch(0.50 0.010 260)", transition: "color 150ms ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.50 0.010 260)"; }}
                >
                  Ver notícia <ExternalLink size={11} aria-hidden />
                </a>
              ) : (
                <span className="text-[10px] font-bold tracking-wider uppercase self-start" style={{ color: item.accent }}>
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
