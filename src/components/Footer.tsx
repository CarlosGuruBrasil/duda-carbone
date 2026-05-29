"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const links = [
  { label: "Atleta",     id: "sobre" },
  { label: "Conquistas", id: "conquistas" },
  { label: "Agenda",     id: "eventos" },
  { label: "Galeria",    id: "galeria" },
  { label: "Vídeos",     id: "videos" },
  { label: "Patrocínio", id: "patrocinio" },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-14 pb-8 section-divider"
      style={{ background: "oklch(0.08 0.04 260)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="relative h-8 w-32 mb-5">
              <Image src="/logo_xrl_letras.png" alt="XRL Sports" fill className="object-contain object-left opacity-70" sizes="128px" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "oklch(0.40 0.008 260)" }}>
              Gestão esportiva de alta performance. Representando Maria Eduarda Carbone nos circuitos ITF e WTA.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/mduda_carbone/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all"
                style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.08)", color: "oklch(0.45 0.008 260)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.84 0.22 130 / 0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.45 0.008 260)"; (e.currentTarget as HTMLElement).style.borderColor = "oklch(1 0 0 / 0.08)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Rodapé">
            <h4 className="font-display text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: "oklch(0.84 0.22 130)" }}>
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => scrollTo(e, l.id)}
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.40 0.008 260)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.40 0.008 260)"; }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: "oklch(0.84 0.22 130)" }}>
              Contato
            </h4>
            <div className="flex flex-col gap-4 text-sm" style={{ color: "oklch(0.40 0.008 260)" }}>
              <div>
                <div className="font-display text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "oklch(0.30 0.006 260)" }}>WhatsApp</div>
                <a href="https://wa.me/5548996671987" className="transition-colors" onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.40 0.008 260)"; }}>(48) 99667-1987</a>
              </div>
              <div>
                <div className="font-display text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "oklch(0.30 0.006 260)" }}>E-mail</div>
                <a href="mailto:contato@xrlsports.com.br" className="transition-colors" onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.84 0.22 130)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(0.40 0.008 260)"; }}>contato@xrlsports.com.br</a>
              </div>
              <div>
                <div className="font-display text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "oklch(0.30 0.006 260)" }}>Sede</div>
                <span>Florianópolis, SC · Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
        >
          <p className="text-[11px]" style={{ color: "oklch(0.28 0.005 260)" }}>
            © 2026 XRL Sports · Todos os direitos reservados
          </p>
          <p className="text-[11px]" style={{ color: "oklch(0.22 0.004 260)" }}>
            Maria Eduarda Carbone dos Santos · Atleta Profissional ITF/WTA
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="back-to-top fixed bottom-8 right-6 z-50"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          pointerEvents: isVisible ? "auto" : "none",
          transition: "opacity 200ms ease, transform 200ms cubic-bezier(0.16,1,0.3,1)",
        }}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={16} aria-hidden />
      </button>
    </footer>
  );
}
