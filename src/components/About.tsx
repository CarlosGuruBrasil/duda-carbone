"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const profile = [
  { label: "Nome completo",   value: "Maria Eduarda Carbone dos Santos" },
  { label: "Nascimento",      value: "2010 · Florianópolis, SC" },
  { label: "Circuito",        value: "WTA Profissional / ITF Juvenil" },
  { label: "Ranking ITF Jr.", value: "#4 Sul-Americano" },
  { label: "Treinador",       value: "Ednaldo Leonel (pai)" },
  { label: "Base",            value: "Lagoa Iate Clube (LIC)" },
];

const attributes = [
  { label: "Potência do Forehand",      value: 95 },
  { label: "Velocidade & Movimentação", value: 90 },
  { label: "Foco Mental & Disciplina",  value: 98 },
];

const inViewProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.10 0.04 260)" }}
    >
      {/* Background subtle gradient */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, oklch(0.84 0.22 130 / 0.04) 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div {...inViewProps()} className="flex items-center gap-4 mb-16">
          <div className="lime-dot" />
          <span
            className="font-display text-[11px] font-bold tracking-[0.25em] uppercase"
            style={{ color: "oklch(0.84 0.22 130)" }}
          >
            A Atleta
          </span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "oklch(1 0 0 / 0.07)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">

          {/* Left — photo + ficha */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, transform: "scale(0.97)" }}
              whileInView={{ opacity: 1, transform: "scale(1)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ border: "1px solid oklch(1 0 0 / 0.1)" }}
            >
              <Image
                src="/foto_duda_principal.jpeg"
                alt="Duda Carbone com o pai Ednaldo Leonel e Guga Kuerten no Lagoa Iate Clube"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 580px) 100vw, 580px"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, oklch(0.10 0.04 260 / 0.6), oklch(0.10 0.04 260 / 0) 50%)" }}
              />
              {/* Lime accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(to right, oklch(0.84 0.22 130), oklch(0.84 0.22 130 / 0))" }}
              />
              {/* Caption */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "oklch(0.10 0.04 260 / 0.85)", border: "1px solid oklch(1 0 0 / 0.1)", backdropFilter: "blur(12px)" }}
              >
                <div className="relative h-8 w-8 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/logo_lic_principal.png" alt="LIC" fill className="object-contain p-1" sizes="32px" />
                </div>
                <div>
                  <strong className="block font-display text-[10px] font-bold tracking-wider" style={{ color: "oklch(0.84 0.22 130)" }}>
                    Escola Guga de Tênis
                  </strong>
                  <span className="block text-[9px]" style={{ color: "oklch(0.50 0.010 260)" }}>
                    Lagoa Iate Clube · Florianópolis, SC
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Profile card */}
            <motion.div
              {...inViewProps(0.1)}
              className="rounded-2xl p-6 card-dark"
            >
              <h3
                className="font-display text-[10px] font-bold tracking-widest uppercase mb-5"
                style={{ color: "oklch(0.84 0.22 130)" }}
              >
                Ficha da Atleta
              </h3>
              <dl className="flex flex-col">
                {profile.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-baseline gap-4 py-2.5 text-xs"
                    style={{ borderBottom: "1px solid oklch(1 0 0 / 0.06)" }}
                  >
                    <dt style={{ color: "oklch(0.50 0.010 260)", flexShrink: 0 }}>{item.label}</dt>
                    <dd className="font-semibold text-right" style={{ color: "oklch(0.90 0.005 85)" }}>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Right — biography */}
          <motion.div {...inViewProps(0)} className="flex flex-col">
            <h2
              className="font-display font-black uppercase leading-none mb-8"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "oklch(0.97 0.005 85)",
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              De Floripa<br />
              <span style={{ color: "oklch(0.84 0.22 130)" }}>Para o Mundo</span>
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.65 0.010 260)", maxWidth: "62ch", textWrap: "pretty" } as React.CSSProperties}>
              Nascida em 2010 na Barra da Lagoa, Florianópolis, Maria Eduarda começou a empunhar a raquete aos 3 anos de idade. Filha do professor e treinador Ednaldo Leonel, Duda cresceu nas quadras do Lagoa Iate Clube — o mesmo celeiro de talentos que formou Guga Kuerten.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.55 0.008 260)", maxWidth: "62ch", textWrap: "pretty" } as React.CSSProperties}>
              Com forehand fulminante e disciplina de aço, ela chamou atenção do tênis sul-americano ainda muito jovem. Aos 15 anos, coleciona resultados mundiais expressivos, provando ser a maior aposta do futuro do tênis feminino nacional.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "oklch(0.55 0.008 260)", maxWidth: "62ch", textWrap: "pretty" } as React.CSSProperties}>
              Em 2026, viveu o ano mais brilhante de sua carreira: ouro nos Jogos Sul-Americanos da Juventude no Panamá, finalista J200 Assunção, e vitória histórica no saibro de Roland Garros.
            </p>

            {/* Blockquote */}
            <blockquote
              className="rounded-2xl p-6 mb-12"
              style={{ background: "oklch(0.84 0.22 130 / 0.08)", border: "1px solid oklch(0.84 0.22 130 / 0.2)", borderLeft: "3px solid oklch(0.84 0.22 130)" }}
            >
              <p className="text-sm font-medium italic leading-relaxed mb-3" style={{ color: "oklch(0.80 0.008 260)" }}>
                &ldquo;O tênis me ensinou que cada ponto conquistado é fruto de horas de dedicação. Não existe atalho para a excelência.&rdquo;
              </p>
              <cite className="block font-display text-[9px] font-bold tracking-wider uppercase not-italic" style={{ color: "oklch(0.84 0.22 130)" }}>
                — Maria Eduarda Carbone
              </cite>
            </blockquote>

            {/* Attribute bars */}
            <div>
              <h4 className="font-display text-[10px] font-bold tracking-wider uppercase mb-6" style={{ color: "oklch(0.50 0.010 260)" }}>
                Performance & Atributos
              </h4>
              <div className="flex flex-col gap-5">
                {attributes.map((attr, idx) => (
                  <div key={attr.label}>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span style={{ color: "oklch(0.65 0.010 260)" }}>{attr.label}</span>
                      <span className="font-bold tabular-nums" style={{ color: "oklch(0.84 0.22 130)" }}>{attr.value}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.07)" }}>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ width: `${attr.value}%`, background: "linear-gradient(to right, oklch(0.74 0.20 130), oklch(0.90 0.22 130))", transformOrigin: "left" }}
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
