"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  const scrollToInstall = () => {
    const el = document.getElementById("install");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          See what your agent
          <br />
          did. Trust the record.
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sentinel is a{" "}
          <span className="text-white/100">transparent, fail-open</span>{" "}
          observability sidecar for{" "}
          <span className="text-white/100">Model Context Protocol (MCP)</span>.
          It provides{" "}
          <span className="text-brand-accent">identity</span>,{" "}
          <span className="text-brand-accent">ordering</span>, and{" "}
          <span className="text-brand-accent">integrity</span> guarantees for
          agent ↔ tool interactions - without modifying execution, gating tools,
          or coupling to agents.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="text-lg px-12" onClick={scrollToInstall}>
            Install Sentinel
          </Button>

          <a
            href="#guarantees"
            className="text-sm text-white/100 hover:text-brand-accent transition-colors"
          >
            Explore the guarantees →
          </a>
        </motion.div>
      </motion.div>

      <HeroVideo />
    </section>
  );
}
