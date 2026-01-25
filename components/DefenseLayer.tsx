"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Zap, 
  Lock, 
  Activity,
  AlertTriangle,
  CheckCircle,
  ArrowDown,
  Server,
  Brain,
  Wrench
} from "lucide-react";

const bogFeatures = [
  {
    icon: Eye,
    title: "Observe Everything",
    description: "Complete visibility into every AI agent action, tool call, and memory operation in real-time."
  },
  {
    icon: Activity,
    title: "Detect Anomalies",
    description: "Behavioral analysis identifies threats before they execute — prompt injection, data exfiltration, privilege escalation."
  },
  {
    icon: Shield,
    title: "Protect Instantly",
    description: "Sub-millisecond response time. Threats are flagged and contained without disrupting legitimate operations."
  },
  {
    icon: Lock,
    title: "Audit Cryptographically",
    description: "Every observation is hash-chained with Ed25519 signatures. Tamper-evident logs you can verify offline."
  }
];

export default function DefenseLayer() {
  return (
    <section id="defense" className="py-32 px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/[0.03] via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6"
          >
            <Shield className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-brand-accent font-medium">Behavioral Observation Gateway</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            The <span className="text-brand-accent">BOG</span> Defense Layer
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            A transparent, fail-open observation layer that sits between your AI agents 
            and the tools they use. See everything. Trust the record. Stop threats.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-brand-gray/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              How BOG Protects Your AI Stack
            </h3>

            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* AI Agent */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-3">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <span className="text-white font-semibold">AI Agent</span>
                <span className="text-white/50 text-sm">LLM / Autonomous</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hidden md:flex items-center"
              >
                <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-brand-accent" />
                <ArrowDown className="w-6 h-6 text-brand-accent rotate-[-90deg] -ml-1" />
              </motion.div>

              {/* BOG Layer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-brand-accent/20 rounded-2xl blur-xl" />
                <div className="relative w-40 h-32 rounded-2xl bg-gradient-to-br from-brand-accent to-emerald-500 flex flex-col items-center justify-center border-2 border-brand-accent">
                  <Shield className="w-10 h-10 text-brand-black mb-1" />
                  <span className="text-brand-black font-bold text-lg">BOG</span>
                  <span className="text-brand-black/70 text-xs">Defense Layer</span>
                </div>
                
                {/* Observation indicators */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center"
                >
                  <Eye className="w-3 h-3 text-brand-black" />
                </motion.div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex items-center"
              >
                <div className="w-16 h-0.5 bg-gradient-to-r from-brand-accent to-blue-500" />
                <ArrowDown className="w-6 h-6 text-blue-500 rotate-[-90deg] -ml-1" />
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-3">
                  <Wrench className="w-12 h-12 text-white" />
                </div>
                <span className="text-white font-semibold">MCP Tools</span>
                <span className="text-white/50 text-sm">APIs / Services</span>
              </motion.div>
            </div>

            {/* Key Points */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-black/40 border border-brand-accent/20 rounded-xl p-4 text-center">
                <CheckCircle className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-white/80 text-sm">Every request observed</p>
              </div>
              <div className="bg-brand-black/40 border border-brand-accent/20 rounded-xl p-4 text-center">
                <CheckCircle className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-white/80 text-sm">Zero execution impact</p>
              </div>
              <div className="bg-brand-black/40 border border-brand-accent/20 rounded-xl p-4 text-center">
                <CheckCircle className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                <p className="text-white/80 text-sm">Cryptographic audit trail</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bogFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 via-brand-accent/5 to-brand-accent/10 rounded-2xl" />
          <div className="relative bg-brand-gray/30 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The BOG Philosophy
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-lg md:text-xl">
              <span className="text-white/70">Observe, never decide.</span>
              <span className="text-brand-accent">•</span>
              <span className="text-white/70">Record, never enforce.</span>
              <span className="text-brand-accent">•</span>
              <span className="text-white/70">Fail open, not closed.</span>
            </div>
            <p className="mt-6 text-white/50 max-w-2xl mx-auto">
              Trust comes from visibility, not control. BOG provides the observability guarantees 
              agent systems need — without imposing policy or constraining autonomy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
