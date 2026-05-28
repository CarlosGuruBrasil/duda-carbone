"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { motion, useInView } from "framer-motion";

const GEO_URL = "/world-110m.json";

const FEATURED = new Set(["076", "170", "124", "250", "688", "276"]);

const PINS = [
  {
    id: "brasil",
    name: "BRASIL",
    sub: "QG · 5 TORNEIOS",
    flag: "🇧🇷",
    coords: [-48.5, -15.8] as [number, number],
    primary: true,
  },
  {
    id: "colombia",
    name: "COLÔMBIA",
    sub: "J200 PASCUAS BOWL",
    flag: "🇨🇴",
    coords: [-74.1, 4.7] as [number, number],
  },
  {
    id: "canada",
    name: "CANADÁ",
    sub: "J200 MONTREAL",
    flag: "🇨🇦",
    coords: [-73.6, 45.5] as [number, number],
  },
  {
    id: "franca",
    name: "ROLAND GARROS",
    sub: "GRAND SLAM JUNIOR",
    flag: "🇫🇷",
    coords: [2.3, 48.9] as [number, number],
    primary: true,
  },
  {
    id: "europa",
    name: "SÉRVIA · ALEMANHA",
    sub: "GIRA ITF EUROPEIA",
    flag: "🇷🇸",
    coords: [20.5, 44.8] as [number, number],
  },
];

const ROUTES: Array<{ from: [number, number]; to: [number, number]; delay: number }> = [
  { from: [-48.5, -15.8], to: [-74.1, 4.7],  delay: 0.2 },
  { from: [-74.1, 4.7],   to: [2.3, 48.9],   delay: 1.2 },
  { from: [2.3, 48.9],    to: [20.5, 44.8],  delay: 2.6 },
  { from: [2.3, 48.9],    to: [-73.6, 45.5], delay: 3.2 },
  { from: [-73.6, 45.5],  to: [-48.5, -15.8],delay: 4.4 },
];

const STATS = [
  { value: "7",    label: "Países" },
  { value: "3",    label: "Continentes" },
  { value: "10+",  label: "Torneios" },
  { value: "250K+",label: "Prize Money" },
  { value: "40K+", label: "Km Voados" },
];

const FLAGS: Record<string, string> = {
  "076": "🇧🇷",
  "170": "🇨🇴",
  "124": "🇨🇦",
  "250": "🇫🇷",
  "688": "🇷🇸",
  "276": "🇩🇪",
};

export default function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="worldmap"
      ref={ref}
      className="relative bg-white py-24 overflow-hidden border-y border-black/7"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] text-black/30 uppercase mb-3">
            Rota Internacional 2026
          </p>
          <h2 className="font-space font-black uppercase text-4xl md:text-5xl tracking-tighter text-[#111] leading-none mb-3">
            O Mapa das<br />
            <span className="text-[#c8384e]">Batalhas</span>
          </h2>
          <p className="text-sm text-black/45 max-w-md leading-relaxed">
            7 países. 3 continentes. 10+ torneios internacionais.{" "}
            <span className="text-[#111] font-semibold">
              Sua marca viaja com a Duda pelo mundo.
            </span>
          </p>
        </motion.div>

        {/* Countries strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {PINS.map((pin) => (
            <div
              key={pin.id}
              className="flex items-center gap-2 bg-[#f7f6f4] border border-black/7 rounded-full px-4 py-2"
            >
              <span className="text-xl leading-none">{pin.flag}</span>
              <div>
                <div className="text-xs font-bold text-[#111] tracking-wide uppercase">{pin.name}</div>
                <div className="text-[10px] text-black/40 leading-none mt-0.5">{pin.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full rounded-2xl overflow-hidden bg-[#eef1f6] border border-black/7"
          style={{ aspectRatio: "16/7" }}
        >
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 175, center: [0, 10] }}
            style={{ width: "100%", height: "100%" }}
          >
            {/* Ocean */}
            <rect width="800" height="400" fill="#dce6f0" x="-400" y="-200" />

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const id = String(geo.id).padStart(3, "0");
                  const featured = FEATURED.has(id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={featured ? "#b8c8d8" : "#d0d8e4"}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      strokeOpacity={0.9}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          outline: "none",
                          fill: featured ? "#98afc4" : "#bac4d4",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Animated Routes */}
            {inView &&
              ROUTES.map((route, i) => (
                <AnimatedLine
                  key={i}
                  from={route.from}
                  to={route.to}
                  delay={route.delay}
                />
              ))}

            {/* Pins */}
            {PINS.map((pin) => (
              <Marker key={pin.id} coordinates={pin.coords}>
                {pin.primary && (
                  <circle r={16} fill="rgba(200,56,78,0.08)" stroke="rgba(200,56,78,0.25)" strokeWidth={1} />
                )}
                {pin.primary && (
                  <circle r={8} fill="rgba(200,56,78,0.12)">
                    <animate attributeName="r" from="6" to="16" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  r={pin.primary ? 5 : 3.5}
                  fill={pin.primary ? "#c8384e" : "#5a7a9a"}
                />
                <text
                  y={-12}
                  textAnchor="middle"
                  fill="#111111"
                  fontSize={pin.primary ? 7.5 : 6.5}
                  fontWeight={pin.primary ? "700" : "600"}
                  fontFamily="var(--font-space), sans-serif"
                  letterSpacing="0.06em"
                  style={{ textTransform: "uppercase" }}
                >
                  {pin.name}
                </text>
                <text
                  y={-4}
                  textAnchor="middle"
                  fill="rgba(0,0,0,0.45)"
                  fontSize={5}
                  fontFamily="var(--font-sans), sans-serif"
                  letterSpacing="0.08em"
                  style={{ textTransform: "uppercase" }}
                >
                  {pin.sub}
                </text>
              </Marker>
            ))}
          </ComposableMap>

          {/* Legend */}
          <div className="absolute bottom-4 right-5 flex items-center gap-5">
            {[
              { label: "QG Brasil",   color: "#c8384e" },
              { label: "Grand Slam",  color: "#c8384e" },
              { label: "Rota ITF",    color: "#5a7a9a" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                <span className="text-[9px] font-semibold tracking-widest uppercase text-black/40">
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="mt-6 grid grid-cols-5 divide-x divide-black/7 border border-black/7 rounded-xl overflow-hidden bg-white">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.07 }}
              className="py-5 px-4 text-center"
            >
              <div className="font-space font-black text-2xl md:text-3xl text-[#111] tracking-tight">
                {s.value}
              </div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-black/35 mt-1 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function AnimatedLine({
  from, to, delay,
}: {
  from: [number, number];
  to: [number, number];
  delay: number;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  if (!show) return null;

  return (
    <Line
      from={from}
      to={to}
      stroke="rgba(200,56,78,0.5)"
      strokeWidth={1}
      strokeLinecap="round"
      strokeDasharray="4 6"
      style={{ animation: "routeDraw 0.8s ease-out forwards" }}
    />
  );
}
