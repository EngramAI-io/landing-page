"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Layers, Building2, User, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-24 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,148,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,148,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-brand-accent" />
          <span className="text-sm text-brand-accent font-medium">Industry First</span>
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-[1.1]">
          Multi-Agent Security
          <br />
          <span className="bg-gradient-to-r from-brand-accent via-brand-accent to-emerald-400 bg-clip-text text-transparent">
            Platform
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-4xl mx-auto leading-relaxed">
          The industry's first comprehensive security platform to protect{" "}
          <span className="text-white font-semibold">AI Agents</span>,{" "}
          <span className="text-white font-semibold">RAG Systems</span>, and{" "}
          <span className="text-white font-semibold">MCP Servers</span> for the enterprise.
        </p>

        <p className="text-lg text-white/50 mb-8 max-w-3xl mx-auto">
          Deploy as multi-tenant SaaS or dedicated single-tenant infrastructure.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="text-lg px-12 bg-brand-accent text-brand-black hover:bg-brand-accent/90" onClick={scrollToDemo}>
            Book a Demo
          </Button>

          <Button size="lg" variant="outline" className="text-lg px-8" onClick={scrollToProducts}>
            <Shield className="w-5 h-5 mr-2" />
            Explore Products
          </Button>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "100%", label: "Detection Accuracy", highlight: true },
            { value: "<5ms", label: "Detection Latency" },
            { value: "3", label: "Attack Surfaces Covered" },
            { value: "99.99%", label: "Uptime SLA" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.highlight ? 'text-brand-accent' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
