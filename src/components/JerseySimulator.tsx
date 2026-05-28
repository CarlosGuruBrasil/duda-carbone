"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X, Check, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Tier = "master" | "oficial" | "apoio";
type CbtTab = "opcaoA" | "opcaoB" | "mangas" | "compressao";

export default function JerseySimulator() {
  const [currentTier, setCurrentTier] = useState<Tier>("master");
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [activeCbtTab, setActiveCbtTab] = useState<CbtTab>("opcaoA");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tierData = {
    master: {
      name: "Cota Master",
      label: "A Dona da Camisa",
      price: "R$ 75.000",
      period: "/ano · Exclusivo",
      features: [
        "Exclusividade de mercado total no segmento",
        "Logo de destaque no peito em todos os uniformes oficiais",
        "Photoshoots e campanhas exclusivas com a atleta",
        "Assinatura visual principal nos comunicados de imprensa",
        "Ações offline e presença em eventos da marca",
      ],
      cta: "https://wa.me/5548996671987?text=Olá Roger, tenho interesse na Cota Master da Duda Carbone. Vi o site e quero fechar o patrocínio.",
    },
    oficial: {
      name: "Cota Oficial",
      label: "Força Estrutural",
      price: "R$ 35.000",
      period: "/ano",
      features: [
        "Logo visível nas duas mangas de todos os uniformes de jogo",
        "Conteúdo de mídia mensal colaborado no Instagram da atleta",
        "Presença VIP e convites especiais em eventos locais da CBT",
        "Crescente exposição nos torneios nacionais e sul-americanos",
      ],
      cta: "https://wa.me/5548996671987?text=Olá Roger, tenho interesse na Cota Oficial da Duda Carbone. Vi o site e quero saber mais sobre as mangas.",
    },
    apoio: {
      name: "Cota Apoio",
      label: "Parceiro de Jornada",
      price: "R$ 5.000",
      period: "/ano ou permuta",
      features: [
        "Exposição da marca nas redes sociais da atleta (@mduda_carbone)",
        "Possibilidade de permuta de produtos/serviços esportivos",
        "Auxílio em viagens estratégicas e materiais em torneios",
        "Início de um relacionamento de longo prazo com a equipe",
      ],
      cta: "https://wa.me/5548996671987?text=Olá Roger, tenho interesse na Cota Apoio da Duda Carbone. Vi o site e quero apoiar a jornada.",
    },
  };

  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedLogo(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = () => {
    setIsDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const resetLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedLogo(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="patrocinio" className="relative py-24 bg-[#f7f6f4] overflow-hidden z-20 border-y border-black/7">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[10px] font-bold uppercase tracking-wider mb-5">
            Oportunidade Exclusiva
          </div>
          <h2 className="font-space font-black text-3xl md:text-5xl tracking-tighter text-[#111] uppercase mb-4 leading-none">
            Veja sua marca no<br />
            <span className="text-[#c8384e]">Uniforme da Duda</span>
          </h2>
          <p className="text-sm md:text-base text-black/45 max-w-xl">
            Faça o upload do logotipo da sua empresa e simule instantaneamente a presença da sua marca no uniforme oficial de jogo.
          </p>
        </div>

        {/* Ferramenta do Simulador */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mb-16">
          
          {/* Coluna do Uniforme (Esquerda) */}
          <div className="lg:sticky lg:top-24 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-black/8 bg-gray-100 group">

              {/* Foto da Duda */}
              <Image
                src="/foto_duda_patrocinio.jpeg"
                alt="Duda Carbone no uniforme oficial"
                fill
                className="object-cover object-top"
                sizes="380px"
                priority
              />

              {/* Gradiente sutil no topo para legibilidade das badges */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
              {/* Gradiente na base para o texto */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Badge topo — indica zona ativa */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full transition-all duration-300 ${
                  currentTier === "master"
                    ? "bg-[#c8384e] text-white"
                    : currentTier === "oficial"
                    ? "bg-purple-500 text-white"
                    : "bg-emerald-500 text-white"
                }`}>
                  {currentTier === "master" ? "Peito Principal" : currentTier === "oficial" ? "Mangas" : "Digital"}
                </span>
                <span className="text-[9px] font-bold text-white/80 tracking-wider uppercase bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {tierData[currentTier].price}
                </span>
              </div>

              {/* ── ZONAS DE LOGO INTERATIVAS ── */}

              {/* ZONA MASTER: Peito (centro) */}
              <AnimatePresence>
                {(currentTier === "master" || uploadedLogo) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setCurrentTier("master")}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      currentTier === "master" ? "ring-2 ring-white ring-offset-1 ring-offset-transparent" : ""
                    }`}
                    style={{ top: "42%", left: "38%", width: "28%", height: "11%" }}
                  >
                    {uploadedLogo ? (
                      <div className="w-full h-full bg-white/90 rounded-lg p-1 flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <img src={uploadedLogo} alt="Logo" className="max-w-full max-h-full object-contain" />
                      </div>
                    ) : (
                      <div className={`w-full h-full rounded-lg border-2 border-dashed flex items-center justify-center transition-colors duration-300 ${
                        currentTier === "master" ? "border-white bg-white/15" : "border-white/30 bg-transparent"
                      }`}>
                        <span className="text-[7px] font-bold text-white/70 uppercase tracking-wider text-center leading-tight px-1">
                          {currentTier === "master" ? "Sua\nMarca" : "Master"}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ZONA OFICIAL: Manga esquerda (visualmente direita na foto) */}
              <AnimatePresence>
                {(currentTier === "oficial" || uploadedLogo) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    onClick={() => setCurrentTier("oficial")}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      currentTier === "oficial" ? "ring-2 ring-purple-400 ring-offset-1 ring-offset-transparent" : ""
                    }`}
                    style={{ top: "46%", left: "10%", width: "20%", height: "8%" }}
                  >
                    {uploadedLogo ? (
                      <div className="w-full h-full bg-white/85 rounded-md p-1 flex items-center justify-center shadow-md">
                        <img src={uploadedLogo} alt="Logo manga" className="max-w-full max-h-full object-contain" />
                      </div>
                    ) : (
                      <div className={`w-full h-full rounded-md border-2 border-dashed flex items-center justify-center transition-colors duration-300 ${
                        currentTier === "oficial" ? "border-purple-400 bg-purple-400/15" : "border-white/20 bg-transparent"
                      }`}>
                        <span className="text-[6px] font-bold text-white/60 uppercase tracking-wider">Manga</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Base info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-white font-space font-black text-sm tracking-wide leading-none drop-shadow">DUDA CARBONE</p>
                  <p className="text-white/60 text-[10px] uppercase tracking-wider mt-0.5">Uniforme Oficial de Jogo</p>
                </div>
                <span className="text-[8px] font-bold text-white/50 tracking-widest uppercase">XRL Sports</span>
              </div>

            </div>
            <p className="font-sans text-[10px] text-black/35 italic mt-3 text-center">
              *Preview ilustrativo. Posicionamento contratual final homologado pela CBT.
            </p>
          </div>

          {/* Coluna de Controles (Direita) */}
          <div className="flex flex-col gap-6 text-left">
            
            {/* Upload Area */}
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer ${
                isDragOver
                  ? "border-[#c8384e] bg-rose-50"
                  : "border-black/15 bg-white hover:border-black/25 hover:bg-[#f7f6f4]"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(file);
                }}
                className="hidden"
              />
              
              <div className="flex flex-col items-center justify-center">
                {uploadedLogo ? (
                  <div className="relative h-12 w-32 bg-white rounded-lg p-1.5 flex items-center justify-center border border-black/10 mb-3 shadow-sm">
                    <img src={uploadedLogo} alt="Logo Carregada" className="max-h-full object-contain" />
                    <button
                      onClick={resetLogo}
                      className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                      title="Excluir logo"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <div className="text-black/30 text-3xl mb-3">
                    <Upload size={32} className="mx-auto" />
                  </div>
                )}
                <p className="text-xs md:text-sm font-semibold text-[#111]">
                  {uploadedLogo ? "Logo carregada com sucesso!" : "Arraste o logotipo da sua marca aqui"}
                </p>
                <span className="block text-[10px] text-black/40 mt-2">
                  PNG, JPG ou SVG · Fundos transparentes recomendados
                </span>
                {!uploadedLogo && (
                  <button className="mt-4 font-space text-[10px] font-bold uppercase tracking-wider text-white bg-[#111] px-4 py-2 rounded-full active:scale-95 transition-all">
                    Selecionar Arquivo
                  </button>
                )}
              </div>
            </div>

            {/* Seletor de Cotas */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-space text-[10px] font-bold tracking-widest text-black/40 uppercase mb-1">
                Selecione uma cota para simular
              </h4>
              {[
                { type: "master", label: "Cota Master · Peito", color: "bg-[#c8384e]" },
                { type: "oficial", label: "Cota Oficial · Mangas", color: "bg-purple-500" },
                { type: "apoio", label: "Cota Apoio · Digital", color: "bg-emerald-500" },
              ].map((tier) => (
                <button
                  key={tier.type}
                  onClick={() => setCurrentTier(tier.type as Tier)}
                  className={`flex items-center gap-3 w-full p-4 rounded-xl border transition-all duration-300 font-space text-xs font-bold text-left ${
                    currentTier === tier.type
                      ? "border-[#111] bg-[#111] text-white"
                      : "border-black/8 bg-white text-black/55 hover:text-black hover:border-black/15"
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${tier.color} ${currentTier === tier.type ? "animate-pulse" : ""}`} />
                  {tier.label}
                </button>
              ))}
            </div>

            {/* Cartão de Detalhes da Cota Selecionada */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTier}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-black/8 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-space text-lg font-black tracking-wide text-[#111] leading-none">
                        {tierData[currentTier].name}
                      </h4>
                      <span className="block font-space text-[9px] font-bold tracking-wider text-[#c8384e] uppercase mt-1">
                        {tierData[currentTier].label}
                      </span>
                    </div>
                    <div className="font-space text-right">
                      <div className="text-xl font-black text-[#111] leading-none">
                        {tierData[currentTier].price}
                      </div>
                      <span className="text-[9px] text-black/40 uppercase">
                        {tierData[currentTier].period}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5 my-5 text-xs text-black/50">
                    {tierData[currentTier].features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2.5 items-start">
                        <Check size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={tierData[currentTier].cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-space text-xs font-bold uppercase tracking-wider text-white bg-[#c8384e] hover:bg-[#b02f43] py-3.5 rounded-full shadow-[0_4px_14px_rgba(200,56,78,0.3)] active:scale-95 transition-all mt-2"
                >
                  Garantir Esta Cota
                </a>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* Seção de Diretrizes CBT (Regras do Uniforme) */}
        <div className="border-t border-black/7 pt-14 mt-14 text-left">
          <div className="flex gap-2 items-center mb-4">
            <HelpCircle size={18} className="text-[#c8384e]" />
            <h3 className="font-space text-lg font-black tracking-wide text-[#111] uppercase">
              Diretrizes CBT de Patrocínio nos Uniformes
            </h3>
          </div>
          <p className="text-xs text-black/45 max-w-2xl mb-8">
            Para competições nacionais e estaduais, a Confederação Brasileira de Tênis (CBT) normatiza as áreas máximas de exposição de patrocínios no vestuário das atletas.
          </p>

          {/* Abas CBT */}
          <div className="flex bg-white border border-black/8 p-1 rounded-lg gap-1 mb-6 overflow-x-auto max-w-full shadow-sm [&::-webkit-scrollbar]:hidden">
            {[
              { label: "Opção A (Peito/Costas)", value: "opcaoA" },
              { label: "Opção B (Apenas Peito)", value: "opcaoB" },
              { label: "Mangas", value: "mangas" },
              { label: "Compressão", value: "compressao" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCbtTab(tab.value as CbtTab)}
                className={`font-space text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-md whitespace-nowrap transition-all duration-200 ${
                  activeCbtTab === tab.value
                    ? "bg-[#111] text-white"
                    : "text-black/40 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Painéis CBT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeCbtTab === "opcaoA" && (
              <>
                <div className="bg-white border border-black/8 border-l-2 border-l-emerald-500 rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    PEITO (UM LADO)
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Exposição de marca em apenas um lado do peito (direito ou esquerdo), liberando espaço para logos complementares.
                  </p>
                </div>
                <div className="bg-white border border-black/8 border-l-2 border-l-[#1a6fbf] rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    MANGAS DE COMPETIÇÃO
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Logotipos nas duas mangas do uniforme. Área máxima permitida de até 39 cm² por manga.
                  </p>
                </div>
                <div className="bg-white border border-black/8 border-l-2 border-l-purple-500 rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    COSTAS (INCLUSO)
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Nesta configuração, o patrocinador Master também possui a área traseira superior disponível no uniforme.
                  </p>
                </div>
              </>
            )}

            {activeCbtTab === "opcaoB" && (
              <>
                <div className="bg-white border border-black/8 border-l-2 border-l-emerald-500 rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    PEITO (DOIS LADOS)
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Marcas expostas em ambos os lados do peito (direito e esquerdo). Excelente para simetria visual de marcas.
                  </p>
                </div>
                <div className="bg-white border border-black/8 border-l-2 border-l-[#1a6fbf] rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    MANGAS DE COMPETIÇÃO
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Logs permitidos em ambas as mangas. Até 39 cm² de limite para fixação visual da marca.
                  </p>
                </div>
                <div className="bg-white border border-black/8 border-l-2 border-l-red-400 rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-red-400 uppercase mb-1">
                    COSTAS (NÃO DISPONÍVEL)
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Na Opção B da CBT, a área traseira do uniforme de jogo fica estritamente indisponível para qualquer exposição comercial.
                  </p>
                </div>
              </>
            )}

            {activeCbtTab === "mangas" && (
              <>
                <div className="bg-white border border-black/8 border-l-2 border-l-[#1a6fbf] rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    ÁREA DE EXPOSIÇÃO
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Cada manga do uniforme de jogo possui no máximo 2 posições autorizadas para inserção de logomarcas.
                  </p>
                  <div className="font-space text-lg font-black text-[#c8384e] mt-2">
                    39 cm²
                  </div>
                </div>
                <div className="bg-white border border-black/8 border-l-2 border-l-purple-500 rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    MARCAS POR POSIÇÃO
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Em cada área de 39 cm², é permitida a fixação de no máximo 2 marcas corporativas diferentes.
                  </p>
                  <div className="font-space text-lg font-black text-[#c8384e] mt-2">
                    Máx. 2
                  </div>
                </div>
              </>
            )}

            {activeCbtTab === "compressao" && (
              <>
                <div className="bg-white border border-black/8 border-l-2 border-l-[#1a6fbf] rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    OPÇÃO 1 — DUAS LOGOS
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Mangas internas de compressão podem comportar até 2 logomarcas menores lado a lado.
                  </p>
                  <div className="font-space text-lg font-black text-[#c8384e] mt-2">
                    2 × 13 cm²
                  </div>
                </div>
                <div className="bg-white border border-black/8 border-l-2 border-l-purple-500 rounded-xl p-4 text-xs">
                  <strong className="block font-space text-[10px] font-bold tracking-wider text-[#111] uppercase mb-1">
                    OPÇÃO 2 — UMA LOGO
                  </strong>
                  <p className="text-black/45 leading-relaxed">
                    Permite a inserção de uma única logomarca de compressão expandida, com maior destaque visual.
                  </p>
                  <div className="font-space text-lg font-black text-[#c8384e] mt-2">
                    1 × 26 cm²
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
