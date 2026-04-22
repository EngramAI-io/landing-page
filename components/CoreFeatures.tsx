"use client";

import { motion } from "framer-motion";
import {
  Layers,
  ScanSearch,
  ShieldCheck,
  Gavel,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Intent Ingestion",
    description:
      "Pulls LLM reasoning, tool calls, and system prompts from Langfuse (or OpenTelemetry GenAI). Normalises everything into a typed AgentRun keyed by trace ID.",
    color: "#4fd1c5",
    tags: ["Langfuse REST API", "OTel GenAI", "TraceID propagation"],
  },
  {
    icon: ScanSearch,
    title: "EDR Attribution",
    description:
      "Joins kernel events from your existing EDR to the right AgentRun via process-tree lineage and LINEAGE_TRACE_ID env propagation. Fallback eBPF sensor for agent-only hosts.",
    color: "#d8a24b",
    tags: ["Zero new sensor footprint", "LINEAGE_TRACE_ID", "Process tree join", "eBPF fallback"],
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Policy Engine",
    description:
      "12-step deterministic evaluation across rule categories like privilege escalation, secret access, exfil shape, and effect conformance. Policy decisions remain authoritative.",
    color: "#4fd1c5",
    tags: ["RULE_PRIV_ESC_001", "RULE_SECRET_004", "RULE_EXFIL_007", "Immutable audit log"],
  },
  {
    icon: Gavel,
    title: "LLM Judge (3 Tiers)",
    description:
      "Schema-constrained JSON verdict via a configurable judge backend. Fast (<500ms) inline gate, Standard (2-8s) for ambiguous cases, Deep (10-60s) for analyst review. Fail-closed.",
    color: "#4fd1c5",
    tags: ["JSON schema enforced", "Fail-closed", "3 latency tiers", "Configurable backend"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function CoreFeatures() {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Three Capabilities.{" "}
            <span className="text-brand-accent">Nothing More.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Lineage adds exactly one thing on top of your existing EDR stack: it tells you which LLM agent intent caused each kernel event, scores the semantic gap, and writes the verdict back into the console you already use.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: pillar.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{pillar.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-brand-black/40 border border-white/10 text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What it is NOT strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-gray/30 border border-white/5 rounded-xl p-4 sm:p-6 mb-10 sm:mb-16"
        >
          <p className="text-center text-white/40 text-xs sm:text-sm mb-3 uppercase tracking-wider">What Lineage is not</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            {[
              "Not a replacement for Falcon / Singularity / Cortex / Defender",
              "Not a prompt firewall",
              "Not an identity product",
              "Not a SIEM",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-white/30">
                <span className="text-red-500/60 font-bold">×</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical specs row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { label: "Fast Judge Tier", value: "< 500ms target" },
            { label: "Judge Backend", value: "OpenRouter" },
            { label: "Replay", value: "Deterministic mode" },
            { label: "Benchmark Corpus", value: "NDA-gated" },
          ].map((item, i) => (
            <div key={i} className="text-center p-3 sm:p-4 bg-brand-gray/30 border border-white/5 rounded-lg sm:rounded-xl">
              <div className="text-brand-accent font-bold text-sm sm:text-lg mb-0.5 sm:mb-1 whitespace-nowrap">{item.value}</div>
              <div className="text-white/50 text-[10px] sm:text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
