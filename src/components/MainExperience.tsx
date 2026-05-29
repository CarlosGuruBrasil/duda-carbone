"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import Nav from "./Nav";
import Hero from "./Hero";
import InfiniteTicker from "./InfiniteTicker";
import About from "./About";
import Achievements from "./Achievements";
import Timeline from "./Timeline";
import Calendar from "./Calendar";
import WorldMap from "./WorldMap";
import JerseySimulator from "./JerseySimulator";
import Gallery from "./Gallery";
import Videos from "./Videos";
import SponsorCta from "./SponsorCta";
import Footer from "./Footer";

export default function MainExperience() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <InfiniteTicker />
        <About />
        <Achievements />
        <Timeline />
        <Calendar />
        <WorldMap />
        <JerseySimulator />
        <Gallery />
        <Videos />
        <SponsorCta />
      </main>
      <Footer />
    </div>
  );
}
