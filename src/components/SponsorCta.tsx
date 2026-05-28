"use client";

import React from "react";
import { MessageSquare, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function SponsorCta() {
  return (
    <section id="patrocinio" className="relative py-24 bg-[#111111] overflow-hidden z-20">
      {/* Subtle red orb */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#c8384e]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-wider mb-8">
            💎 Oportunidade de Patrocínio
          </div>

          <h2 className="font-space font-black text-4xl md:text-6xl tracking-tighter text-white uppercase leading-none mb-6">
            Pronto para<br />
            <span className="text-[#c8384e]">entrar em quadra</span><br />
            com a Duda?
          </h2>

          <p className="text-sm md:text-base text-white/45 max-w-xl mx-auto mb-10 leading-relaxed">
            Sua marca exposta globalmente na carreira da maior promessa do tênis brasileiro. Fale diretamente com Roger Lorenzatto, CEO da XRL Sports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5548996671987?text=Olá Roger, tenho interesse em patrocinar a Duda Carbone. Vi o site e gostaria de conversar sobre as cotas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 font-space text-sm font-bold uppercase tracking-wider text-white bg-[#c8384e] hover:bg-[#b02f43] px-8 py-4 rounded-full transition-all shadow-[0_4px_20px_rgba(200,56,78,0.35)] hover:shadow-[0_6px_28px_rgba(200,56,78,0.5)] hover:-translate-y-0.5"
            >
              <MessageSquare size={16} />
              WhatsApp: (48) 99667-1987
            </a>

            <a
              href="mailto:contato@xrlsports.com.br"
              className="inline-flex items-center justify-center gap-2.5 font-space text-sm font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              contato@xrlsports.com.br
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            {[
              { emoji: "🏆", text: "10+ Torneios Internacionais" },
              { emoji: "🌎", text: "3 Continentes de Exposição" },
              { emoji: "📺", text: "Cobertura Nacional de Mídia" },
              { emoji: "⭐", text: "#1 Ranking COSAT" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-xl">{b.emoji}</span>
                <span className="text-xs text-white/35 font-medium tracking-wide">{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
