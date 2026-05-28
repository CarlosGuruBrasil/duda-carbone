"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plane, Trophy } from "lucide-react";

export default function Calendar() {
  const [activeFilter, setActiveFilter] = useState("all");

  const tabs = [
    { label: "Todos", filter: "all" },
    { label: "Profissional", filter: "pro" },
    { label: "Gira Europeia", filter: "europe" },
    { label: "ITF Juvenil", filter: "itf" },
  ];

  const tournaments = [
    {
      flag: "🇧🇷",
      country: "Brasil",
      badge: "W15 · PRO",
      badgeType: "pro",
      day: "01", month: "JUN",
      title: "W15 Brasília",
      desc: "Circuito Profissional Feminino · Saibro",
      loc: "Brasília, DF",
      filter: "pro",
      featured: false,
    },
    {
      flag: "🇧🇷",
      country: "Brasil",
      badge: "W35 · PRO",
      badgeType: "pro",
      day: "08", month: "JUN",
      title: "W35 Cuiabá",
      desc: "Circuito Profissional Feminino · Saibro",
      loc: "Cuiabá, MT",
      filter: "pro",
      featured: false,
    },
    {
      flag: "🇧🇷",
      country: "Brasil",
      badge: "ITF J200",
      badgeType: "itf",
      day: "06", month: "JUL",
      title: "J200 Londrina / W15 Rio Claro",
      desc: "Circuito Juvenil ITF + Profissional · Saibro",
      loc: "São Paulo, BR",
      filter: "itf",
      featured: false,
    },
    {
      flag: "🇨🇴",
      country: "Colômbia",
      badge: "ITF J200",
      badgeType: "itf",
      day: "13", month: "JUL",
      title: "J200 Bogotá / W35 São Paulo",
      desc: "Circuito Internacional Juvenil / Profissional",
      loc: "Colômbia / Brasil",
      filter: "itf",
      featured: false,
    },
    {
      flag: "🇧🇷",
      country: "Brasil",
      badge: "W75 · GRANDE",
      badgeType: "featured",
      day: "21", month: "JUL",
      title: "W75 Vacaria",
      desc: "Grande torneio profissional feminino · $75K",
      loc: "Vacaria, RS",
      filter: "pro",
      featured: true,
    },
    {
      flag: "🇩🇪",
      country: "Alemanha",
      badge: "ITF J200",
      badgeType: "europe",
      day: "03", month: "AGO",
      title: "J200 Rutesheim",
      desc: "Circuito Internacional Juvenil ITF",
      loc: "Alemanha, Europa",
      filter: "europe",
      featured: false,
    },
    {
      flag: "🇷🇸",
      country: "Sérvia",
      badge: "ITF J300",
      badgeType: "itf",
      day: "17", month: "AGO",
      title: "J300 Pancevo",
      desc: "Circuito Internacional Juvenil ITF",
      loc: "Sérvia, Europa",
      filter: "europe",
      featured: false,
    },
    {
      flag: "🇷🇸",
      country: "Sérvia / Tchéquia",
      badge: "ITF J200",
      badgeType: "europe",
      day: "24", month: "AGO",
      title: "J200 Belgrado / Rakovnik",
      desc: "Sérvia ou República Tcheca · ITF J200",
      loc: "Sérvia / Tchéquia",
      filter: "europe",
      featured: false,
    },
    {
      flag: "🇨🇦",
      country: "Canadá",
      badge: "ITF J200",
      badgeType: "itf",
      day: "SET", month: "2026",
      title: "J200 Montreal",
      desc: "Circuito Internacional Juvenil ITF",
      loc: "Montreal, Canadá",
      filter: "itf",
      featured: false,
    },
    {
      flag: "🏆",
      country: "América do Sul",
      badge: "4º Trimestre",
      badgeType: "tbd",
      day: "OUT", month: "DEZ",
      title: "Finais Nacionais + WTA",
      desc: "Torneios WTA profissionais na América do Sul",
      loc: "Circuito WTA",
      filter: "pro",
      featured: false,
    },
  ];

  const badgeColor: Record<string, string> = {
    pro:      "bg-emerald-50 text-emerald-700 border-emerald-200",
    europe:   "bg-purple-50 text-purple-700 border-purple-200",
    itf:      "bg-blue-50 text-blue-700 border-blue-200",
    featured: "bg-rose-50 text-rose-700 border-rose-200",
    tbd:      "bg-gray-50 text-gray-500 border-gray-200",
  };

  const topBar: Record<string, string> = {
    pro:      "bg-emerald-400",
    europe:   "bg-purple-400",
    itf:      "bg-blue-400",
    featured: "bg-[#c8384e]",
    tbd:      "bg-gray-300",
  };

  const filtered = tournaments.filter(
    (t) => activeFilter === "all" || t.filter === activeFilter
  );

  return (
    <section id="eventos" className="relative py-24 bg-[#f7f6f4] overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#c8384e] text-[10px] font-bold uppercase tracking-wider mb-5">
            <Plane size={12} />
            Calendário 2026
          </div>
          <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
            Próximas<br />
            <span className="text-[#c8384e]">Batalhas</span>
          </h2>
          <p className="text-sm md:text-base text-black/45 max-w-xl">
            Rota internacional da Duda rumo aos principais torneios do mundo.{" "}
            <strong className="text-[#111] font-semibold">
              Sua marca em 4 países e 3 continentes.
            </strong>
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white border border-black/8 p-1 rounded-xl gap-1 shadow-sm overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.filter}
                onClick={() => setActiveFilter(tab.filter)}
                className={`relative font-space text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  activeFilter === tab.filter
                    ? "text-white"
                    : "text-black/45 hover:text-black hover:bg-black/4"
                }`}
              >
                {activeFilter === tab.filter && (
                  <motion.div
                    layoutId="activeTabCal"
                    className="absolute inset-0 bg-[#111] rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((t) => (
              <motion.div
                key={t.title + t.day}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-white border rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] ${
                  t.featured ? "border-[#c8384e]/30 shadow-[0_4px_20px_rgba(200,56,78,0.08)]" : "border-black/7"
                }`}
              >
                {/* Top color stripe */}
                <div className={`h-[3px] w-full ${topBar[t.badgeType]}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Flag + badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl leading-none select-none">{t.flag}</span>
                      <span className="text-xs font-semibold text-black/40">{t.country}</span>
                    </div>
                    <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border ${badgeColor[t.badgeType]}`}>
                      {t.badge}
                    </span>
                  </div>

                  {/* Date + info */}
                  <div className="flex gap-4 items-start mb-4 flex-1">
                    <div className="flex flex-col items-center justify-center border-r border-black/8 pr-4 flex-shrink-0 min-w-[44px]">
                      <span className="font-space font-black text-[1.75rem] tracking-tighter text-[#111] leading-none">
                        {t.day}
                      </span>
                      <span className="font-space text-[10px] font-bold text-black/35 tracking-wider mt-0.5">
                        {t.month}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-space text-sm font-black tracking-wide text-[#111] uppercase leading-snug mb-1">
                        {t.title}
                      </h4>
                      <p className="text-xs text-black/45 leading-relaxed mb-2">{t.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#c8384e]">
                        <MapPin size={10} />
                        {t.loc}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <div className="bg-white border border-black/7 rounded-xl p-5 flex gap-4 items-start">
          <Trophy size={18} className="text-[#c8384e] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-black/45 leading-relaxed">
            <strong className="text-[#111] font-semibold">Atenção Investidores:</strong>{" "}
            O calendário internacional (América do Sul, Europa e América do Norte) exige estrutura sólida de viagens, hospedagem e equipe técnica. Esta rota é a vitrine perfeita para marcas que buscam exposição global qualificada.
          </p>
        </div>

      </div>
    </section>
  );
}
