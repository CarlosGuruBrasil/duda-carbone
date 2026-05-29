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
      className="relative py-28 overflow-hidden z-20"
      style={{ background: "oklch(0.18 0.06 260)" }}
    >
      {/* Ambient glow – subtle, not decorative glassmorphism */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% -10%, oklch(0.82 0.22 130 / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            className="font-space font-black uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.97 0.004 85)",
              letterSpacing: "-0.04em",
              textWrap: "balance",
            }}
          >
            Pronto para entrar<br />
            em quadra com<br />
            <span style={{ color: "oklch(0.82 0.22 130)" }}>a Duda?</span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-lg mx-auto mb-12"
            style={{ color: "oklch(0.65 0.006 260)" }}
          >
            Sua marca exposta globalmente na carreira da maior promessa do tênis brasileiro. Fale diretamente com Roger Lorenzatto, CEO da XRL Sports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone. Vi o site e gostaria de conversar sobre as cotas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              <MessageSquare size={16} aria-hidden />
              WhatsApp: (48) 99667-1987
            </a>

            <a
              href="mailto:contato@xrlsports.com.br"
              className="inline-flex items-center justify-center gap-2.5 font-space text-xs font-semibold uppercase tracking-wider rounded-full"
              style={{
                padding: "0.875rem 2rem",
                border: "1px solid oklch(1 0 0 / 0.2)",
                color: "oklch(0.97 0.004 85)",
                transition: "border-color 150ms cubic-bezier(0.16,1,0.3,1), background 150ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.45)";
                (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Mail size={16} aria-hidden />
              contato@xrlsports.com.br
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
            style={{
              paddingTop: "2.5rem",
              borderTop: "1px solid oklch(1 0 0 / 0.08)",
            }}
          >
            {trustBadges.map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-xl" aria-hidden>{b.emoji}</span>
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "oklch(0.55 0.006 260)" }}
                >
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
