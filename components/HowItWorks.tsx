"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Key, Activity, FileSearch, ArrowRight } from "lucide-react";

const layers = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Agent Identity",
    description: "Every agent receives a unique Ed25519 cryptographic identity (DID). Actions are cryptographically signed and attributable.",
    color: "#4fd1c5",
    details: ["did:engram:<hex> format", "Ed25519 key pairs", "Tamper-proof attribution"],
  },
  {
    number: "02",
    icon: Key,
    title: "Task-Scoped Access",
    description: "Instead of permanent credentials, each task gets an ephemeral identity with a 15-minute TTL. Keys self-destruct when the task completes.",
    color: "#d8a24b",
    details: ["15-min TTL keys", "Least privilege scope", "Self-destructing"],
  },
  {
    number: "03",
    icon: Activity,
    title: "Intent Firewall",
    description: "Before every tool call, EngramAI verifies: 'Is what this agent is about to do aligned with what the user asked?' Fail-closed policy.",
    color: "#4fd1c5",
    details: ["<200ms verification", "Embedding-based similarity", "Fail-closed"],
  },
  {
    number: "04",
    icon: FileSearch,
    title: "Policy & Audit",
    description: "Deterministic rule-based security with immutable audit trails. Every decision is logged with cryptographic proof.",
    color: "#4fd1c5",
    details: ["Immutable audit logs", "MITRE ATT&CK mapping", "Compliance ready"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            How the Trust Chain{" "}
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Every AI action flows through four security layers before execution — 
            identity, scoping, verification, and enforcement.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/60 via-white/10 to-brand-accent/60" />
          
          <div className="space-y-6 sm:space-y-8">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              const isRight = idx % 2 === 1;
              
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative md:flex items-start gap-6 lg:gap-8 ${isRight ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  
                  <div className="absolute left-[17px] sm:left-[21px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-black border-2 border-brand-accent flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                  </div>
                  
                  <div className="ml-10 sm:ml-12 md:ml-0 md:w-1/2">
                    <div className="bg-brand-gray/40 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-brand-accent/20 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: `${layer.color}40` }}>
                          {layer.number}
                        </span>
                        <div 
                          className="w-10 h-10 sm:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${layer.color}15` }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 lg:w-6" style={{ color: layer.color }} />
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{layer.title}</h3>
                      </div>
                      
                      <p className="text-white/60 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{layer.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {layer.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-brand-black/40 border border-white/10 text-white/70"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <p className="text-sm sm:text-base lg:text-lg text-white/50 mb-4 sm:mb-6">
            Result: One compromised agent = one blocked task. System intact. Audit trail complete.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-brand-gray/50 border border-white/10 rounded-full">
            <span className="text-brand-accent font-semibold text-xs sm:text-sm">Without Engram:</span>
            <span className="text-white/70 text-xs sm:text-sm">Full system breach</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/30 hidden sm:block" />
            <span className="text-brand-accent font-semibold text-xs sm:text-sm">With Engram:</span>
            <span className="text-white/70 text-xs sm:text-sm">One task quarantined</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}