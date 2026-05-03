"use client";

import { motion } from "framer-motion";
import { Target, Search, Shield, GitBranch, Zap, CheckCircle, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Campaign Decomposition",
    description: "Breaks complex security objectives into executable attack steps with clear success criteria.",
    color: "#00d4ff",
    tags: ["Goal-oriented", "Multi-stage", "Adaptive planning"],
  },
  {
    icon: Target,
    title: "Autonomous Execution",
    description: "Runs attack campaigns with deterministic tooling and precise tool-call sequencing.",
    color: "#22c55e",
    tags: ["Zero human delay", "Reproducible", "Speed-optimized"],
  },
  {
    icon: Shield,
    title: "Evidence-Based Verification",
    description: "Confirms exploitation through kernel telemetry, not model responses — eliminating false positives.",
    color: "#f97316",
    tags: ["Ground truth", "No LLM trust", "Audit-ready"],
  },
];

const phases = [
  {
    step: "01",
    title: "Discover Shadow Agents",
    description: "Scan your infrastructure for undocumented AI endpoints and agentic systems.",
    icon: "radar",
  },
  {
    step: "02",
    title: "Attack MCP Surface",
    description: "Probe tool poisoning, prompt injection, and privilege escalation vectors.",
    icon: "target",
  },
  {
    step: "03",
    title: "Exploit Reasoning Models",
    description: "Test CoT hijacking, puzzle-padding bypasses, and overthink DoS vectors.",
    icon: "brain",
  },
  {
    step: "04",
    title: "Report & Remediate",
    description: "Generate OWASP ASI01-10 mapped findings with CVSS scores and remediation guidance.",
    icon: "report",
  },
];

const owaspCoverage = [
  { tag: "ASI01", name: "Prompt Injection", covered: true },
  { tag: "ASI02", name: "Sensitive Disclosure", covered: true },
  { tag: "ASI03", name: "Tool Misuse", covered: true },
  { tag: "ASI04", name: "Privilege Escalation", covered: true },
  { tag: "ASI05", name: "Identity Failures", covered: true },
  { tag: "ASI06", name: "Memory Poisoning", covered: true },
  { tag: "ASI07", name: "Inter-Agent Trust", covered: true },
  { tag: "ASI08", name: "Excessive Autonomy", covered: true },
  { tag: "ASI09", name: "Data Exfiltration", covered: true },
  { tag: "ASI10", name: "Shadow Agents", covered: true },
];

export default function AgentArchitecture() {
  return (
    <section id="architecture" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-medium mb-4">
            End-to-End VulnOps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Five-Phase Attack
            <span className="text-brand-accent"> Campaign</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            From shadow agent discovery to kernel-verified exploitation — every phase maps to OWASP Top 10 for Agentic Applications 2026.
          </p>
        </motion.div>

        {/* Capability pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-brand-gray/50 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  style={{ backgroundColor: `${cap.color}15`, border: `1px solid ${cap.color}30` }}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: cap.color }} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: cap.color }}>
                  {cap.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-4 sm:mb-6">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-brand-black/40 border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Attack flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">The Attack Flow</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-4 w-7 h-7 rounded-full bg-brand-black border border-brand-accent/50 flex items-center justify-center z-10">
                  <span className="text-brand-accent text-xs font-bold">{phase.step}</span>
                </div>

                <div className="bg-brand-gray/40 border border-white/10 rounded-xl p-4 sm:p-5 pt-6">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{phase.title}</h4>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* OWASP Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-gray/30 border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">Complete OWASP ASI Coverage</h3>
            <div className="flex items-center gap-2 text-brand-accent text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>All 10 risks covered</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {owaspCoverage.map((item) => (
              <div
                key={item.tag}
                className="bg-brand-black/40 border border-white/10 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="text-brand-accent font-bold text-xs sm:text-sm mb-1">{item.tag}</div>
                <div className="text-white/50 text-[10px] sm:text-xs">{item.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}