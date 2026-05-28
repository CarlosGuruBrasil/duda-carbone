"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Potência do Forehand",     value: "95%", width: 95 },
    { label: "Velocidade & Movimentação",value: "90%", width: 90 },
    { label: "Foco Mental & Disciplina", value: "98%", width: 98 },
  ];

  return (
    <section id="sobre" className="relative py-24 bg-[#f7f6f4] overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/8 shadow-[0_12px_40px_rgba(0,0,0,0.1)] group"
            >
              <Image
                src="/foto_duda_principal.jpeg"
                alt="Duda Carbone com o pai Ednaldo Leonel e Guga Kuerten no Lagoa Iate Clube"
                fill
                className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 580px) 100vw, 580px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-black/8 p-3.5 rounded-xl shadow">
                <div className="relative h-9 w-9 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0 border border-black/8">
                  <Image src="/logo_lic_principal.png" alt="LIC" fill className="object-contain p-1" sizes="36px" />
                </div>
                <div>
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111]">
                    Escola Guga de Tênis
                  </strong>
                  <span className="block text-[9px] text-black/45">
                    Lagoa Iate Clube · Florianópolis, SC
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-black/7 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-space text-[10px] font-bold tracking-widest text-[#c8384e] uppercase mb-4">
                Ficha da Atleta
              </h3>
              <div className="flex flex-col gap-0">
                {[
                  { label: "Nome completo",    value: "Maria Eduarda Carbone dos Santos" },
                  { label: "Nascimento",       value: "2010 (15 anos) · Florianópolis, SC" },
                  { label: "Circuito",         value: "WTA Profissional / ITF Juvenil" },
                  { label: "Ranking ITF Jr.",  value: "#4 Sul-Americano" },
                  { label: "Treinador",        value: "Ednaldo Leonel (pai)" },
                  { label: "Base",             value: "Lagoa Iate Clube (LIC)" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-4 py-2.5 border-b border-black/5 last:border-b-0 text-xs">
                    <span className="text-black/45 font-medium flex-shrink-0">{item.label}</span>
                    <strong className="text-[#111] font-semibold text-right">{item.value}</strong>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#c8384e] text-[10px] font-bold uppercase tracking-wider mb-5 self-start">
              🇧🇷 A História
            </div>

            <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-6 leading-none">
              De Floripa<br />
              <span className="text-[#c8384e]">Para o Mundo</span>
            </h2>

            <p className="text-sm md:text-base text-black/60 leading-relaxed mb-5">
              Nascida em 2010 na Barra da Lagoa, Florianópolis, Maria Eduarda começou a empunhar a raquete aos 3 anos de idade. Filha do professor e treinador Ednaldo Leonel, Duda cresceu nas quadras do Lagoa Iate Clube — o mesmo celeiro de talentos que formou Guga Kuerten.
            </p>

            <p className="text-sm md:text-base text-black/45 leading-relaxed mb-5">
              Com uma identidade de jogo sólida, forehand fulminante e disciplina de aço, ela chamou atenção do tênis sul-americano ainda muito jovem. Aos 15 anos, Duda coleciona resultados mundiais expressivos, provando ser a maior aposta do futuro do tênis feminino nacional.
            </p>

            <p className="text-sm md:text-base text-black/45 leading-relaxed mb-8">
              Em 2026, viveu o ano mais brilhante de sua carreira: conquistou o ouro nos Jogos Sul-Americanos da Juventude no Panamá, alcançou a grande final do ITF J200 em Assunção, e estreou com vitória emocionante no saibro sagrado de Roland Garros.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-[#c8384e] bg-rose-50 p-5 rounded-r-xl mb-10">
              <blockquote className="text-sm font-medium italic text-[#333] leading-relaxed mb-2">
                &ldquo;O tênis me ensinou que cada ponto conquistado é fruto de horas de dedicação. Não existe atalho para a excelência.&rdquo;
              </blockquote>
              <cite className="block font-space text-[9px] font-bold tracking-wider text-[#c8384e] uppercase">
                — Maria Eduarda Carbone
              </cite>
            </div>

            {/* Attribute bars */}
            <div className="flex flex-col gap-5">
              <h4 className="font-space text-[10px] font-bold tracking-wider text-black/35 uppercase">
                Performance & Atributos
              </h4>
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-black/55">{stat.label}</span>
                    <span className="text-[#c8384e] font-bold">{stat.value}</span>
                  </div>
                  <div className="h-2 w-full bg-black/6 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.width}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#c8384e] to-[#e85c72] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
