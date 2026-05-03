"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, ArrowRight, Lock, Crosshair, ShieldCheck } from "lucide-react";

export default function Hero() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-x-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,148,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,148,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] lg:w-[1100px] lg:h-[1100px] rounded-full bg-brand-accent/8 blur-[150px] sm:blur-[200px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl lg:max-w-7xl mx-auto relative z-10"
      >
        {/* Mythos badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6 sm:mb-8">
            <Crosshair className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">
              The threat: autonomous AI agents that compress weeks of attacks into minutes
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent leading-[1.1]">
            Fight Machine-Speed Threats
            <br />
            <span className="bg-gradient-to-r from-brand-accent via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              With Machine-Speed Defense.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-2 max-w-4xl mx-auto leading-relaxed px-4">
            Yali deploys autonomous red-teaming agents that think like adversaries — in your <span className="text-brand-accent font-semibold">airtight sandbox</span>, with <span className="text-brand-accent font-semibold">kernel-level verification</span>.
          </p>
        </motion.div>

        {/* Key differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-brand-gray/50 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Think Like the Adversary */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">
                  Multi-Agent Strategy
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  Planner decomposes attack goals. Executor runs campaigns. Verifier confirms exploits. No human speed limits.
                </p>
              </motion.div>

              {/* Airtight Environment */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center lg:text-left"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">
                  Airtight Execution
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  Firecracker microVMs isolate every campaign. Your sensitive data never leaves your VPC.
                </p>
              </motion.div>

              {/* Kernel Verification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center lg:text-left"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">
                  Kernel-Level Truth
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  eBPF telemetry proves exploitation at the kernel level. Not LLM self-report — ground truth.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <Button size="lg" className="text-base sm:text-lg px-8 sm:px-12 bg-brand-accent text-brand-black hover:bg-brand-accent/90 w-full sm:w-auto" onClick={scrollToDemo}>
            Request Early Access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
            <a href="https://github.com/EngramAI-io" target="_blank" rel="noopener noreferrer">
              <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "<200ms", label: "Fast path verdict" },
            { value: "0", label: "LLM self-report" },
            { value: "100%", label: "Kernel telemetry" },
            { value: "VPC", label: "Your data stays home" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 sm:p-4 bg-brand-gray/30 border border-white/5 rounded-xl">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-accent mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
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