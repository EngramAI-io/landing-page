"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-x-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,148,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,148,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[900px] lg:h-[900px] rounded-full bg-brand-accent/5 blur-[100px] sm:blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl lg:max-w-7xl mx-auto relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-brand-accent" />
            <span className="text-xs sm:text-sm text-brand-accent font-medium">
              CrowdStrike-first attribution overlay for AI agents
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 sm:mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[1.1]">
            CrowdStrike Sees the Syscall.
            <br />
            <span className="bg-gradient-to-r from-brand-accent via-brand-accent to-emerald-400 bg-clip-text text-transparent">
              Lineage Attributes the Agent Intent.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-2 max-w-3xl mx-auto leading-relaxed px-2">
            Keep Falcon as the system of record. <span className="text-white">Lineage joins LLM intent to host events</span> and writes policy + risk context back into the queue your SOC already uses.
          </p>
        </motion.div>

        {/* Animated flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <iframe
            src="/engram-trust-hero-v2.html"
            className="w-full max-w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl border border-white/10"
            title="Lineage — AI Agent Attribution"
            loading="lazy"
            style={{ display: 'block', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 bg-brand-accent text-brand-black hover:bg-brand-accent/90 w-full sm:w-auto" onClick={scrollToDemo}>
            Request Design-Partner Slot
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
            <a href="https://github.com/EngramAI-io/lineage" target="_blank" rel="noopener noreferrer">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 max-w-3xl lg:max-w-4xl mx-auto"
        >
          {[
            { value: "L1", label: "CrowdStrike Integration Status", highlight: true },
            { value: "0",      label: "New Sensors on EDR-Covered Hosts" },
            { value: "Replay", label: "Deterministic Demo Mode" },
            { value: "/v1/events", label: "Fallback Sensor Ingest Path" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-2 sm:p-3 lg:p-4 bg-brand-gray/30 border border-white/5 rounded-lg sm:rounded-xl">
              <div className={`text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-0.5 sm:mb-1 ${stat.highlight ? 'text-brand-accent' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
