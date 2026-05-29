"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const links = [
  { label: "Atleta",     id: "sobre" },
  { label: "Conquistas", id: "conquistas" },
  { label: "Agenda",     id: "eventos" },
  { label: "Mapa",       id: "worldmap" },
  { label: "Galeria",    id: "galeria" },
  { label: "Vídeos",     id: "videos" },
  { label: "Mídia",      id: "midia" },
];

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

  return (
    <footer
      className="relative pt-14 pb-8 z-20"
      style={{
        background: "oklch(0.12 0.008 260)",
        borderTop: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <div
              className="relative h-8 w-28 rounded-lg overflow-hidden mb-5"
              style={{ background: "oklch(1 0 0 / 0.06)" }}
            >
              <Image src="/logo_xrl_letras.png" alt="XRL Sports" fill className="object-contain p-1.5" sizes="112px" />
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "oklch(0.55 0.006 260)" }}
            >
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
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all"
                  style={{
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.08)";
                  }}
                >
                  <span aria-hidden>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Rodapé">
            <h4
              className="text-[10px] font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.45 0.006 260)" }}
            >
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => handleLinkClick(e, l.id)}
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.5 0.006 260)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.9 0.004 260)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.5 0.006 260)";
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.45 0.006 260)" }}
            >
              Contato
            </h4>
            <div className="flex flex-col gap-4 text-sm" style={{ color: "oklch(0.5 0.006 260)" }}>
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: "oklch(0.38 0.005 260)" }}
                >
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/5548996671987"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.9 0.004 260)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.5 0.006 260)")}
                >
                  (48) 99667-1987
                </a>
              </div>
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: "oklch(0.38 0.005 260)" }}
                >
                  E-mail
                </div>
                <a
                  href="mailto:contato@xrlsports.com.br"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.9 0.004 260)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.5 0.006 260)")}
                >
                  contato@xrlsports.com.br
                </a>
              </div>
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: "oklch(0.38 0.005 260)" }}
                >
                  Sede
                </div>
                <span>Florianópolis, SC · Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
        >
          <p className="text-[11px]" style={{ color: "oklch(0.38 0.005 260)" }}>
            © 2026 XRL Sports · Todos os direitos reservados
          </p>
          <p className="text-[11px]" style={{ color: "oklch(0.32 0.005 260)" }}>
            Maria Eduarda Carbone dos Santos · Atleta Profissional ITF/WTA
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 w-10 h-10 rounded-full flex items-center justify-center z-50 transition-all duration-200"
        style={{
          background: "oklch(0.82 0.22 130)",
          color: "oklch(0.18 0.06 260)",
          boxShadow: "0 4px 16px oklch(0.82 0.22 130 / 0.4)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          pointerEvents: isVisible ? "auto" : "none",
        }}
        aria-label="Voltar ao topo"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.74 0.20 130)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "oklch(0.82 0.22 130)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        <ArrowUp size={16} aria-hidden />
      </button>
    </footer>
  );
}
