"use client";

import React, { useState, useCallback } from "react";

type ContentData = {
  hero: {
    quote: string;
    mainPhoto: string;
    badge: string;
    description: string;
    socialLinks: { icon: string; label: string; href: string }[];
    highlights: { icon: string; title: string; sub: string }[];
  };
  videos: {
    id: string;
    src: string;
    tag: string;
    portal: string;
    title: string;
    desc: string;
    link: string;
  }[];
  news: {
    id: string;
    src: string;
    pub: string;
    date: string;
    title: string;
    desc: string;
    link: string;
  }[];
  mapPins: {
    id: string;
    name: string;
    flag: string;
    cx: number;
    cy: number;
    type: string;
    sublabel: string;
  }[];
  sponsorContact: {
    email: string;
    whatsapp: string;
    pdfLink: string;
  };
};

const SECTIONS = ["Hero", "Vídeos", "Notícias", "Mapa", "Patrocínio"] as const;
type Section = (typeof SECTIONS)[number];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [content, setContent] = useState<ContentData | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("Hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async (pwd: string) => {
    setLoading(true);
    const res = await fetch("/api/admin", {
      headers: { "x-admin-password": pwd },
    });
    setLoading(false);
    if (!res.ok) {
      setAuthError(true);
      return;
    }
    setContent(await res.json());
    setAuthed(true);
    setAuthError(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchContent(password);
  };

  const handleSave = async () => {
    if (!content) return;
    setSaving(true);
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify(content),
    });
    setSaving(false);
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }
  };

  const updateNested = (path: string[], value: unknown) => {
    setContent((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev) as Record<string, unknown>;
      let cur = next as Record<string, unknown>;
      for (let i = 0; i < path.length - 1; i++) {
        cur = cur[path[i]] as Record<string, unknown>;
      }
      cur[path[path.length - 1]] = value;
      return next as ContentData;
    });
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#080812] flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="glass-card rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">🎾</div>
              <h1 className="text-xl font-bold text-white mb-1">Área Administrativa</h1>
              <p className="text-sm text-white/40">Duda Carbone · XRL Sports</p>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-400/50 text-sm"
                autoFocus
              />
              {authError && (
                <p className="text-rose-400 text-xs text-center">Senha incorreta.</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Entrando…" : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#080812] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#080812]/90 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎾</span>
          <div>
            <h1 className="font-bold text-sm text-white">Admin · Duda Carbone</h1>
            <p className="text-[10px] text-white/40">XRL Sports</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="text-xs text-white/40 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
          >
            Ver site ↗
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? "Salvando…" : saved ? "✓ Salvo!" : "Salvar alterações"}
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-65px)]">
        {/* Sidebar */}
        <nav className="w-52 shrink-0 border-r border-white/8 p-4 flex flex-col gap-1">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                activeSection === s
                  ? "bg-white/10 text-white font-semibold"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {s === "Hero" && "🌟 "}
              {s === "Vídeos" && "🎥 "}
              {s === "Notícias" && "📰 "}
              {s === "Mapa" && "🗺️ "}
              {s === "Patrocínio" && "💎 "}
              {s}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === "Hero" && <HeroSection content={content} update={updateNested} />}
          {activeSection === "Vídeos" && <VideosSection content={content} update={updateNested} setContent={setContent} />}
          {activeSection === "Notícias" && <NewsSection content={content} update={updateNested} setContent={setContent} />}
          {activeSection === "Mapa" && <MapSection content={content} update={updateNested} />}
          {activeSection === "Patrocínio" && <SponsorSection content={content} update={updateNested} />}
        </main>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-rose-400/40 transition-colors";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-white/50 uppercase tracking-wider">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card rounded-2xl p-5 mb-4">
      <h3 className="text-sm font-semibold text-white/70 mb-4 border-b border-white/8 pb-3">{title}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function HeroSection({
  content,
  update,
}: {
  content: ContentData;
  update: (path: string[], value: unknown) => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-4">Hero · Seção Principal</h2>
      <SectionCard title="Textos">
        <Field label="Frase de destaque" value={content.hero.quote} onChange={(v) => update(["hero", "quote"], v)} />
        <Field label="Badge / Status" value={content.hero.badge} onChange={(v) => update(["hero", "badge"], v)} />
        <Field label="Descrição" value={content.hero.description} onChange={(v) => update(["hero", "description"], v)} multiline />
        <Field label="Foto principal (caminho ou URL)" value={content.hero.mainPhoto} onChange={(v) => update(["hero", "mainPhoto"], v)} placeholder="/foto_duda_patrocinio.jpeg" />
      </SectionCard>

      <SectionCard title="Links das Redes Sociais">
        {content.hero.socialLinks.map((s, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <Field label={`${s.icon} Ícone`} value={s.icon} onChange={(v) => {
              const arr = [...content.hero.socialLinks];
              arr[i] = { ...arr[i], icon: v };
              update(["hero", "socialLinks"], arr);
            }} />
            <Field label="Label" value={s.label} onChange={(v) => {
              const arr = [...content.hero.socialLinks];
              arr[i] = { ...arr[i], label: v };
              update(["hero", "socialLinks"], arr);
            }} />
            <Field label="Link URL" value={s.href} onChange={(v) => {
              const arr = [...content.hero.socialLinks];
              arr[i] = { ...arr[i], href: v };
              update(["hero", "socialLinks"], arr);
            }} />
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Conquistas em Destaque">
        {content.hero.highlights.map((h, i) => (
          <div key={i} className="p-3 rounded-xl border border-white/8 flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-2">
              <Field label="Ícone" value={h.icon} onChange={(v) => {
                const arr = [...content.hero.highlights];
                arr[i] = { ...arr[i], icon: v };
                update(["hero", "highlights"], arr);
              }} />
              <Field label="Título (2 cols)" value={h.title} onChange={(v) => {
                const arr = [...content.hero.highlights];
                arr[i] = { ...arr[i], title: v };
                update(["hero", "highlights"], arr);
              }} />
              <Field label="Subtítulo" value={h.sub} onChange={(v) => {
                const arr = [...content.hero.highlights];
                arr[i] = { ...arr[i], sub: v };
                update(["hero", "highlights"], arr);
              }} />
            </div>
          </div>
        ))}
      </SectionCard>
    </div>
  );
}

function useFetchMeta() {
  const [fetching, setFetching] = useState<string | null>(null);

  const fetchMeta = useCallback(
    async (url: string, onResult: (data: { title: string; image: string; description: string; siteName: string }) => void) => {
      if (!url.startsWith("http")) return;
      setFetching(url);
      try {
        const res = await fetch(`/api/fetch-meta?url=${encodeURIComponent(url)}`);
        if (res.ok) {
          const data = await res.json();
          onResult(data);
        }
      } finally {
        setFetching(null);
      }
    },
    [],
  );

  return { fetching, fetchMeta };
}

function LinkField({
  value,
  onChange,
  onFetched,
  fetching,
  placeholder = "https://...",
}: {
  value: string;
  onChange: (v: string) => void;
  onFetched: (url: string) => void;
  fetching: string | null;
  placeholder?: string;
}) {
  const isFetching = fetching === value && value.startsWith("http");

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").trim();
    if (pasted.startsWith("http")) {
      setTimeout(() => onFetched(pasted), 50);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-white/50 uppercase tracking-wider flex items-center gap-2">
        🔗 URL
        {isFetching && (
          <span className="text-[10px] text-rose-300/70 font-normal normal-case tracking-normal animate-pulse">
            Buscando metadados…
          </span>
        )}
        {!isFetching && value.startsWith("http") && (
          <button
            type="button"
            onClick={() => onFetched(value)}
            className="text-[10px] text-white/30 hover:text-rose-300 transition-colors font-normal normal-case tracking-normal"
          >
            ↺ Recarregar
          </button>
        )}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPaste={handlePaste}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-rose-400/40 transition-colors"
      />
    </div>
  );
}

function VideosSection({
  content,
  update,
  setContent,
}: {
  content: ContentData;
  update: (path: string[], value: unknown) => void;
  setContent: React.Dispatch<React.SetStateAction<ContentData | null>>;
}) {
  const { fetching, fetchMeta } = useFetchMeta();

  const addVideo = () => {
    setContent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        videos: [
          ...prev.videos,
          { id: Date.now().toString(), src: "", tag: "", portal: "", title: "", desc: "", link: "" },
        ],
      };
    });
  };

  const removeVideo = (id: string) => {
    setContent((prev) => {
      if (!prev) return prev;
      return { ...prev, videos: prev.videos.filter((v) => v.id !== id) };
    });
  };

  const handleAutoFill = (i: number, url: string) => {
    fetchMeta(url, ({ title, image, description, siteName }) => {
      setContent((prev) => {
        if (!prev) return prev;
        const arr = [...prev.videos];
        arr[i] = {
          ...arr[i],
          link: url,
          title: title || arr[i].title,
          src: image || arr[i].src,
          desc: description || arr[i].desc,
          portal: siteName || arr[i].portal,
        };
        return { ...prev, videos: arr };
      });
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Vídeos · Matérias</h2>
        <button onClick={addVideo} className="text-xs px-3 py-1.5 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all">
          + Adicionar
        </button>
      </div>
      {content.videos.map((vid, i) => (
        <SectionCard key={vid.id} title={`Vídeo ${i + 1} — ${vid.title || "sem título"}`}>
          <LinkField
            value={vid.link}
            onChange={(v) => {
              const arr = [...content.videos];
              arr[i] = { ...arr[i], link: v };
              update(["videos"], arr);
            }}
            onFetched={(url) => handleAutoFill(i, url)}
            fetching={fetching}
          />
          <Field label="Foto / Thumb (URL ou caminho)" value={vid.src} onChange={(v) => {
            const arr = [...content.videos];
            arr[i] = { ...arr[i], src: v };
            update(["videos"], arr);
          }} placeholder="https://... ou /foto.jpg" />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tag / Badge" value={vid.tag} onChange={(v) => {
              const arr = [...content.videos];
              arr[i] = { ...arr[i], tag: v };
              update(["videos"], arr);
            }} />
            <Field label="Portal / Fonte" value={vid.portal} onChange={(v) => {
              const arr = [...content.videos];
              arr[i] = { ...arr[i], portal: v };
              update(["videos"], arr);
            }} />
          </div>
          <Field label="Título" value={vid.title} onChange={(v) => {
            const arr = [...content.videos];
            arr[i] = { ...arr[i], title: v };
            update(["videos"], arr);
          }} />
          <Field label="Descrição" value={vid.desc} onChange={(v) => {
            const arr = [...content.videos];
            arr[i] = { ...arr[i], desc: v };
            update(["videos"], arr);
          }} multiline />
          <button
            onClick={() => removeVideo(vid.id)}
            className="self-start text-xs text-red-400/60 hover:text-red-400 transition-colors mt-1"
          >
            Remover este vídeo
          </button>
        </SectionCard>
      ))}
    </div>
  );
}

function NewsSection({
  content,
  update,
  setContent,
}: {
  content: ContentData;
  update: (path: string[], value: unknown) => void;
  setContent: React.Dispatch<React.SetStateAction<ContentData | null>>;
}) {
  const { fetching, fetchMeta } = useFetchMeta();

  const addNews = () => {
    setContent((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        news: [
          ...prev.news,
          { id: Date.now().toString(), src: "", pub: "", date: "", title: "", desc: "", link: "" },
        ],
      };
    });
  };

  const removeNews = (id: string) => {
    setContent((prev) => {
      if (!prev) return prev;
      return { ...prev, news: prev.news.filter((n) => n.id !== id) };
    });
  };

  const handleAutoFill = (i: number, url: string) => {
    fetchMeta(url, ({ title, image, description, siteName }) => {
      setContent((prev) => {
        if (!prev) return prev;
        const arr = [...prev.news];
        arr[i] = {
          ...arr[i],
          link: url,
          title: title || arr[i].title,
          src: image || arr[i].src,
          desc: description || arr[i].desc,
          pub: siteName || arr[i].pub,
        };
        return { ...prev, news: arr };
      });
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Notícias · Na Mídia</h2>
        <button onClick={addNews} className="text-xs px-3 py-1.5 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all">
          + Adicionar
        </button>
      </div>
      {content.news.map((item, i) => (
        <SectionCard key={item.id} title={`Notícia ${i + 1} — ${item.title || "sem título"}`}>
          <LinkField
            value={item.link}
            onChange={(v) => {
              const arr = [...content.news];
              arr[i] = { ...arr[i], link: v };
              update(["news"], arr);
            }}
            onFetched={(url) => handleAutoFill(i, url)}
            fetching={fetching}
          />
          <Field label="Foto / Imagem (URL ou caminho)" value={item.src} onChange={(v) => {
            const arr = [...content.news];
            arr[i] = { ...arr[i], src: v };
            update(["news"], arr);
          }} placeholder="https://... ou /foto.jpg" />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Portal" value={item.pub} onChange={(v) => {
              const arr = [...content.news];
              arr[i] = { ...arr[i], pub: v };
              update(["news"], arr);
            }} />
            <Field label="Data" value={item.date} onChange={(v) => {
              const arr = [...content.news];
              arr[i] = { ...arr[i], date: v };
              update(["news"], arr);
            }} placeholder="24 Abr 2026" />
          </div>
          <Field label="Título" value={item.title} onChange={(v) => {
            const arr = [...content.news];
            arr[i] = { ...arr[i], title: v };
            update(["news"], arr);
          }} />
          <Field label="Descrição" value={item.desc} onChange={(v) => {
            const arr = [...content.news];
            arr[i] = { ...arr[i], desc: v };
            update(["news"], arr);
          }} multiline />
          <button
            onClick={() => removeNews(item.id)}
            className="self-start text-xs text-red-400/60 hover:text-red-400 transition-colors mt-1"
          >
            Remover esta notícia
          </button>
        </SectionCard>
      ))}
    </div>
  );
}

function MapSection({
  content,
  update,
}: {
  content: ContentData;
  update: (path: string[], value: unknown) => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-4">Mapa · Pins de Destinos</h2>
      <p className="text-xs text-white/40 mb-4">
        Ajuste os pinos do mapa-múndi. As coordenadas X e Y estão em pixels dentro do SVG (1000×480).
      </p>
      {content.mapPins.map((pin, i) => (
        <SectionCard key={pin.id} title={`${pin.flag} ${pin.name}`}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Nome" value={pin.name} onChange={(v) => {
              const arr = [...content.mapPins];
              arr[i] = { ...arr[i], name: v };
              update(["mapPins"], arr);
            }} />
            <Field label="Bandeira (emoji)" value={pin.flag} onChange={(v) => {
              const arr = [...content.mapPins];
              arr[i] = { ...arr[i], flag: v };
              update(["mapPins"], arr);
            }} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Posição X (0–1000)" value={String(pin.cx)} onChange={(v) => {
              const arr = [...content.mapPins];
              arr[i] = { ...arr[i], cx: Number(v) };
              update(["mapPins"], arr);
            }} placeholder="368" />
            <Field label="Posição Y (0–480)" value={String(pin.cy)} onChange={(v) => {
              const arr = [...content.mapPins];
              arr[i] = { ...arr[i], cy: Number(v) };
              update(["mapPins"], arr);
            }} placeholder="310" />
            <Field label="Tipo" value={pin.type} onChange={(v) => {
              const arr = [...content.mapPins];
              arr[i] = { ...arr[i], type: v };
              update(["mapPins"], arr);
            }} placeholder="home / international / grandslam / tour" />
          </div>
          <Field label="Sub-rótulo" value={pin.sublabel} onChange={(v) => {
            const arr = [...content.mapPins];
            arr[i] = { ...arr[i], sublabel: v };
            update(["mapPins"], arr);
          }} />
        </SectionCard>
      ))}
    </div>
  );
}

function SponsorSection({
  content,
  update,
}: {
  content: ContentData;
  update: (path: string[], value: unknown) => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-4">Patrocínio · Contatos</h2>
      <SectionCard title="Informações de Contato">
        <Field label="E-mail" value={content.sponsorContact.email} onChange={(v) => update(["sponsorContact", "email"], v)} placeholder="contato@xrlsports.com.br" />
        <Field label="WhatsApp (com DDI)" value={content.sponsorContact.whatsapp} onChange={(v) => update(["sponsorContact", "whatsapp"], v)} placeholder="+5548999999999" />
        <Field label="PDF do Plano de Patrocínio (caminho)" value={content.sponsorContact.pdfLink} onChange={(v) => update(["sponsorContact", "pdfLink"], v)} placeholder="/PLANO DE PATROCÍNIO DUDA.pdf" />
      </SectionCard>
    </div>
  );
}
