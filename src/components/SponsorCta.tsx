"use client";

import React from "react";
import { MessageSquare, Mail } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { emoji: "🏆", text: "10+ Torneios Internacionais" },
  { emoji: "🌎", text: "3 Continentes de Exposição" },
  { emoji: "📺", text: "Cobertura Nacional de Mídia" },
  { emoji: "⭐", text: "#1 Ranking COSAT" },
];

export default function SponsorCta() {
  return (
    <section
      id="patrocinio"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(0.08 0.04 260)" }}
    >
      {/* Dramatic lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.84 0.22 130 / 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 20% 100%, oklch(0.84 0.22 130 / 0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="lime-dot" />
            <span className="font-display text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: "oklch(0.84 0.22 130)" }}>
              Oportunidade de Patrocínio
            </span>
          </div>

          <h2
            className="font-display font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "oklch(0.97 0.005 85)", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            Pronto para entrar<br />em quadra com<br />
            <span style={{ color: "oklch(0.84 0.22 130)" }}>a Duda?</span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-lg mx-auto mb-12"
            style={{ color: "oklch(0.55 0.008 260)" }}
          >
            Sua marca exposta globalmente na carreira da maior promessa do tênis brasileiro.
            Fale diretamente com Roger Lorenzatto, CEO da XRL Sports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone. Vi o site e gostaria de conversar sobre as cotas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime justify-center"
            >
              <MessageSquare size={16} aria-hidden />
              WhatsApp: (48) 99667-1987
            </a>
            <a
              href="mailto:contato@xrlsports.com.br"
              className="btn-ghost-light justify-center"
            >
              <Mail size={16} aria-hidden />
              contato@xrlsports.com.br
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10"
            style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
          >
            {trustBadges.map((b) => (
              <div key={b.text} className="flex items-center gap-2.5">
                <span className="text-xl" aria-hidden>{b.emoji}</span>
                <span className="text-xs font-medium tracking-wide" style={{ color: "oklch(0.45 0.008 260)" }}>
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
