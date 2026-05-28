"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const links = [
    { label: "Atleta",     id: "sobre" },
    { label: "Conquistas", id: "conquistas" },
    { label: "Agenda",     id: "eventos" },
    { label: "Mapa",       id: "worldmap" },
    { label: "Galeria",    id: "galeria" },
    { label: "Vídeos",     id: "videos" },
    { label: "Mídia",      id: "midia" },
  ];

  return (
    <footer className="relative bg-[#111111] border-t border-white/8 pt-14 pb-8 z-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="relative h-9 w-28 bg-white/5 rounded-lg overflow-hidden mb-4">
              <Image src="/logo_xrl_letras.png" alt="XRL Sports" fill className="object-contain p-1.5" sizes="112px" />
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs mb-5">
              Gestão esportiva de alta performance. Representando Maria Eduarda Carbone nos circuitos ITF e WTA.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: "📸", href: "https://www.instagram.com/mduda_carbone/", label: "Instagram" },
                { icon: "▶️", href: "#", label: "YouTube" },
                { icon: "🎥", href: "#", label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-sm hover:bg-white/10 hover:border-white/15 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => handleLinkClick(e, l.id)}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">WhatsApp</div>
                <a href="https://wa.me/5548996671987" className="hover:text-white transition-colors">
                  (48) 99667-1987
                </a>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">E-mail</div>
                <a href="mailto:contato@xrlsports.com.br" className="hover:text-white transition-colors">
                  contato@xrlsports.com.br
                </a>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/20 mb-1">Sede</div>
                <span>Florianópolis, SC · Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">
            © 2026 XRL Sports · Todos os direitos reservados
          </p>
          <p className="text-[11px] text-white/20">
            Maria Eduarda Carbone dos Santos · Atleta Profissional ITF/WTA
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-6 w-10 h-10 bg-[#c8384e] text-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(200,56,78,0.4)] hover:bg-[#b02f43] transition-all z-50 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
