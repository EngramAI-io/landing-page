"use client";

import { motion } from "framer-motion";
import { Target, Search, Shield, Zap, CheckCircle, Globe, AlertTriangle } from "lucide-react";

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
    title: "Shadow Agent Discovery",
    description: "Scan infrastructure for undocumented AI endpoints, agentic systems, and API exposures.",
  },
  {
    step: "02",
    title: "Attack Surface Testing",
    description: "Probe MCP tool poisoning, prompt injection, privilege escalation, and data exfiltration vectors.",
  },
  {
    step: "03",
    title: "Reasoning Model Exploitation",
    description: "Test CoT hijacking, puzzle-padding bypasses, memory poisoning, and overthink DoS.",
  },
  {
    step: "04",
    title: "Report & Remediate",
    description: "Generate CVSS-scored findings with OWASP/MITRE mapping and actionable remediation.",
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

const mitreAtlas = [
  { id: "AML", name: "Adversarial Machine Learning" },
  { id: "T1021", name: "Remote Services" },
  { id: "T1078", name: "Valid Accounts" },
  { id: "T1195", name: "Supply Chain" },
  { id: "T1499", name: "Endpoint DoS" },
  { id: "T1565", name: "Data Manipulation" },
  { id: "T1592", name: "Gather Host Info" },
];

export default function AgentArchitecture() {
  return (
    <section id="architecture" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Four-Phase Attack
            <span className="text-brand-accent"> Campaign</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            From shadow agent discovery to kernel-verified exploitation — every phase maps to OWASP Agentic AI 2026 and MITRE ATLAS.
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

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* OWASP Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-gray/30 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">OWASP ASI 2026</h3>
                  <p className="text-white/50 text-xs">Agentic AI Security</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand-accent text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>All 10 covered</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {owaspCoverage.map((item) => (
                <div
                  key={item.tag}
                  className="bg-brand-black/40 border border-white/10 rounded-lg p-3 text-center"
                >
                  <div className="text-brand-accent font-bold text-sm mb-1">{item.tag}</div>
                  <div className="text-white/50 text-xs">{item.name}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MITRE ATLAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-gray/30 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">MITRE ATLAS</h3>
                  <p className="text-white/50 text-xs">Adversarial Threat Landscape</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-purple-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>7 technique groups</span>
              </div>
            </div>

            <div className="space-y-3">
              {mitreAtlas.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-brand-black/40 border border-white/10 rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-mono text-sm">{item.id}</span>
                  </div>
                  <span className="text-white/60 text-xs">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CWE Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-brand-gray/30 border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">CWE Mappings</h3>
              <p className="text-white/50 text-xs">Common Weakness Enumeration</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { id: "CWE-20", name: "Input Validation" },
              { id: "CWE-77", name: "Command Injection" },
              { id: "CWE-89", name: "SQL Injection" },
              { id: "CWE-94", name: "Code Injection" },
              { id: "CWE-287", name: "Authentication" },
              { id: "CWE-862", name: "Authorization" },
              { id: "CWE-917", name: "SSRF" },
              { id: "CWE-918", name: "SSRF" },
            ].map((cwe) => (
              <div
                key={cwe.id}
                className="flex items-center gap-2 px-3 py-2 bg-brand-black/40 border border-white/10 rounded-lg"
              >
                <span className="text-blue-400 font-mono text-xs">{cwe.id}</span>
                <span className="text-white/50 text-xs">{cwe.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}