"use client";

import { motion } from "framer-motion";
import { 
  Eye, 
  GitBranch, 
  Shield, 
  Github,
  Fingerprint,
  ListOrdered,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  {
    icon: ListOrdered,
    title: "Canonical Ordered Events",
    description: "Single, consistent, replayable history with stable event IDs and monotonic ordering."
  },
  {
    icon: Fingerprint,
    title: "Session Identity",
    description: "Stable session_id, trace_id, and span_id for complete request/response correlation."
  },
  {
    icon: ShieldCheck,
    title: "Cryptographic Integrity",
    description: "Hash-chained, append-only audit records with Ed25519 signatures."
  }
];

export default function SentinelSection() {
  return (
    <section id="sentinel" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6"
          >
            <Github className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-brand-accent font-medium">Open Source</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-brand-accent">Sentinel</span> Observability
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A transparent, fail-open MCP observability sidecar. See every agent-tool interaction 
            with cryptographic audit trails you can verify offline.
          </p>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              Transparent Sidecar Architecture
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* LLM Client */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-3">
                  <Zap className="w-12 h-12 text-violet-400" />
                </div>
                <span className="text-white font-medium">LLM Client</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-8 h-0.5 bg-violet-500/50" />
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-violet-500/50" />
              </div>

              {/* Sentinel */}
              <div className="text-center relative">
                <div className="absolute -inset-2 bg-brand-accent/20 rounded-2xl blur-xl" />
                <div className="relative w-32 h-24 rounded-2xl bg-gradient-to-br from-brand-accent to-emerald-500 flex flex-col items-center justify-center border-2 border-brand-accent">
                  <Eye className="w-8 h-8 text-brand-black mb-1" />
                  <span className="text-brand-black font-bold">Sentinel</span>
                </div>
                <span className="text-white/50 text-sm mt-2 block">Observe & Record</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center">
                <div className="w-8 h-0.5 bg-brand-accent/50" />
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-brand-accent/50" />
              </div>

              {/* MCP Tools */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                  <GitBranch className="w-12 h-12 text-blue-400" />
                </div>
                <span className="text-white font-medium">MCP Tools</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-black/40 border border-brand-accent/20 rounded-xl p-4 text-center">
                <Shield className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-white/80 text-sm">Fail-open by design</p>
              </div>
              <div className="bg-brand-black/40 border border-brand-accent/20 rounded-xl p-4 text-center">
                <Zap className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-white/80 text-sm">&lt;1ms overhead</p>
              </div>
              <div className="bg-brand-black/40 border border-brand-accent/20 rounded-xl p-4 text-center">
                <Eye className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-white/80 text-sm">100% visibility</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {guarantees.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-gray/50 border border-white/10 rounded-xl p-6 hover:border-brand-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{g.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-gray/30 border border-brand-accent/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">The Sentinel Philosophy</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-lg mb-6">
            <span className="text-white/70">Observe, never decide.</span>
            <span className="text-brand-accent">•</span>
            <span className="text-white/70">Record, never enforce.</span>
            <span className="text-brand-accent">•</span>
            <span className="text-white/70">Fail open, not closed.</span>
          </div>
          
          <Button asChild className="bg-brand-accent text-brand-black hover:bg-brand-accent/90">
            <a href="https://github.com/EngramAI-io/sentinel" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
