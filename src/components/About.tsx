"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, transform: "translateY(16px)" },
  whileInView: { opacity: 1, transform: "translateY(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const stats = [
  { label: "Potência do Forehand",       value: 95 },
  { label: "Velocidade & Movimentação",  value: 90 },
  { label: "Foco Mental & Disciplina",   value: 98 },
];

const profile = [
  { label: "Nome completo",   value: "Maria Eduarda Carbone dos Santos" },
  { label: "Nascimento",      value: "2010 · Florianópolis, SC" },
  { label: "Circuito",        value: "WTA Profissional / ITF Juvenil" },
  { label: "Ranking ITF Jr.", value: "#4 Sul-Americano" },
  { label: "Treinador",       value: "Ednaldo Leonel (pai)" },
  { label: "Base",            value: "Lagoa Iate Clube (LIC)" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-28 overflow-hidden z-20"
      style={{ background: "oklch(0.96 0.008 260)" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* Left – photo + profile card */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, transform: "scale(0.98)" }}
              whileInView={{ opacity: 1, transform: "scale(1)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden photo-frame"
              style={{ border: "1px solid oklch(0.88 0.004 260)" }}
            >
              <Image
                src="/foto_duda_principal.jpeg"
                alt="Duda Carbone com o pai Ednaldo Leonel e Guga Kuerten no Lagoa Iate Clube"
                fill
                className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 580px) 100vw, 580px"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.12 0.008 260 / 0.25), transparent 55%)",
                }}
              />

              {/* Caption */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 p-3.5 rounded-xl"
                style={{
                  background: "oklch(1 0 0 / 0.92)",
                  border: "1px solid oklch(0.88 0.004 260)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="relative h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid oklch(0.88 0.004 260)" }}
                >
                  <Image src="/logo_lic_principal.png" alt="LIC" fill className="object-contain p-1.5" sizes="36px" />
                </div>
                <div>
                  <strong
                    className="block font-space text-[10px] font-bold tracking-wider"
                    style={{ color: "oklch(0.18 0.06 260)" }}
                  >
                    Escola Guga de Tênis
                  </strong>
                  <span
                    className="block text-[9px]"
                    style={{ color: "oklch(0.5 0.006 260)" }}
                  >
                    Lagoa Iate Clube · Florianópolis, SC
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="rounded-2xl p-6"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.88 0.004 260)",
              }}
            >
              <h3
                className="font-space text-[10px] font-bold tracking-widest uppercase mb-5"
                style={{ color: "oklch(0.6 0.006 260)" }}
              >
                Ficha da Atleta
              </h3>
              <dl className="flex flex-col gap-0">
                {profile.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-baseline gap-4 py-2.5 text-xs"
                    style={{ borderBottom: "1px solid oklch(0.93 0.003 260)" }}
                  >
                    <dt style={{ color: "oklch(0.55 0.006 260)", fontWeight: 500, flexShrink: 0 }}>
                      {item.label}
                    </dt>
                    <dd
                      className="font-semibold text-right"
                      style={{ color: "oklch(0.18 0.06 260)" }}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Right – biography */}
          <motion.div initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col">

            <h2
              className="font-space font-black uppercase leading-none mb-8"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "oklch(0.12 0.008 260)",
                letterSpacing: "-0.04em",
                textWrap: "balance",
              }}
            >
              De Floripa<br />
              <span style={{ color: "oklch(0.82 0.22 130)" }}>Para o Mundo</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.32 0.008 260)", maxWidth: "62ch", textWrap: "pretty" } as React.CSSProperties}
            >
              Nascida em 2010 na Barra da Lagoa, Florianópolis, Maria Eduarda começou a empunhar a raquete aos 3 anos de idade. Filha do professor e treinador Ednaldo Leonel, Duda cresceu nas quadras do Lagoa Iate Clube — o mesmo celeiro de talentos que formou Guga Kuerten.
            </p>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.45 0.006 260)", maxWidth: "62ch", textWrap: "pretty" } as React.CSSProperties}
            >
              Com identidade de jogo sólida, forehand fulminante e disciplina de aço, ela chamou atenção do tênis sul-americano ainda muito jovem. Aos 15 anos, coleciona resultados mundiais expressivos, provando ser a maior aposta do futuro do tênis feminino nacional.
            </p>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.45 0.006 260)", maxWidth: "62ch", textWrap: "pretty" } as React.CSSProperties}
            >
              Em 2026, viveu o ano mais brilhante de sua carreira: conquistou o ouro nos Jogos Sul-Americanos da Juventude no Panamá, alcançou a grande final do ITF J200 em Assunção, e estreou com vitória emocionante no saibro sagrado de Roland Garros.
            </p>

            {/* Quote – no side-stripe border */}
            <blockquote
              className="rounded-2xl p-6 mb-12"
              style={{
                background: "oklch(0.95 0.06 130)",
                border: "1px solid oklch(0.82 0.22 130 / 0.25)",
              }}
            >
              <p
                className="text-sm font-medium italic leading-relaxed mb-3"
                style={{ color: "oklch(0.28 0.008 260)" }}
              >
                &ldquo;O tênis me ensinou que cada ponto conquistado é fruto de horas de dedicação. Não existe atalho para a excelência.&rdquo;
              </p>
              <cite
                className="block font-space text-[9px] font-bold tracking-wider uppercase not-italic"
                style={{ color: "oklch(0.5 0.14 130)" }}
              >
                — Maria Eduarda Carbone
              </cite>
            </blockquote>

            {/* Attribute bars */}
            <div>
              <h4
                className="font-space text-[10px] font-bold tracking-wider uppercase mb-6"
                style={{ color: "oklch(0.6 0.006 260)" }}
              >
                Performance & Atributos
              </h4>
              <div className="flex flex-col gap-6">
                {stats.map((stat, idx) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span style={{ color: "oklch(0.45 0.006 260)" }}>{stat.label}</span>
                      <span
                        className="font-bold tabular-nums"
                        style={{ color: "oklch(0.62 0.18 130)" }}
                      >
                        {stat.value}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full rounded-full overflow-hidden"
                      style={{ background: "oklch(0.88 0.004 260)" }}
                    >
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.1,
                          delay: 0.08 * idx,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          width: `${stat.value}%`,
                          background: "oklch(0.82 0.22 130)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
