"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Target,
  Lock,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Layers
} from "lucide-react";

const attackSurfaces = [
  {
    surface: "Multi-Agent Consensus",
    risk: "Rogue agents, cascade failures, unauthorized actions",
    before: "No protection",
    after: "BOG validates every coordinated action",
    icon: Target
  },
  {
    surface: "RAG Memory Poisoning", 
    risk: "Backdoors in knowledge base, data exfiltration",
    before: "~1% detection rate",
    after: "100% detection accuracy",
    icon: AlertTriangle
  },
  {
    surface: "MCP Tool Supply Chain",
    risk: "Malicious tools, no audit trail, blind execution",
    before: "No visibility",
    after: "Complete observability + cryptographic audit",
    icon: Eye
  }
];

const benefits = [
  {
    icon: Target,
    title: "100% Detection Accuracy",
    description: "Validated detection of AgentPoison attacks. Our comparison-based approach catches what others miss.",
    stat: "100%",
    statLabel: "Accuracy"
  },
  {
    icon: Zap,
    title: "Sub-5ms Latency",
    description: "Real-time protection without slowing down your agents. Production-grade performance at scale.",
    stat: "<5ms",
    statLabel: "Latency"
  },
  {
    icon: Shield,
    title: "Three Attack Surfaces",
    description: "The only platform protecting agents, RAG systems, and MCP servers in a unified solution.",
    stat: "3",
    statLabel: "Surfaces"
  },
  {
    icon: Lock,
    title: "Enterprise Ready",
    description: "Multi-tenant SaaS or dedicated single-tenant. SOC2, RBAC, and enterprise SSO included.",
    stat: "99.99%",
    statLabel: "Uptime"
  },
  {
    icon: TrendingUp,
    title: "Proven at Scale",
    description: "Handle 10,000+ requests per second with consistent sub-300ms combined latency.",
    stat: "10K+",
    statLabel: "RPS"
  },
  {
    icon: Layers,
    title: "Unified Platform",
    description: "Single API, unified auth, consolidated observability. Deploy all products or just what you need.",
    stat: "1",
    statLabel: "Platform"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.02] via-transparent to-transparent pointer-events-none" />
      
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
            <span className="text-sm text-brand-accent font-medium">Why EngramAI</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Close Every{" "}
            <span className="text-brand-accent">Gap</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            AI agents have three critical attack surfaces. We protect all of them.
          </p>
        </motion.div>

        {/* Attack Surfaces Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-brand-gray/40 border border-white/10 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-brand-gray/60 border-b border-white/10">
              <div className="text-white/50 text-sm font-medium">Attack Surface</div>
              <div className="text-white/50 text-sm font-medium">Risk</div>
              <div className="text-red-400/70 text-sm font-medium">Before EngramAI</div>
              <div className="text-brand-accent text-sm font-medium">With EngramAI</div>
            </div>

            {/* Rows */}
            {attackSurfaces.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.surface}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid grid-cols-4 gap-4 p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-white font-medium">{item.surface}</span>
                  </div>
                  <div className="text-white/50 text-sm">{item.risk}</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-red-400/80 text-sm">{item.before}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    <span className="text-brand-accent text-sm font-medium">{item.after}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-6 hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-accent">{benefit.stat}</div>
                    <div className="text-[10px] text-white/40">{benefit.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">
            See how EngramAI can protect your AI infrastructure
          </p>
          <a 
            href="#demo"
            className="inline-flex items-center gap-2 text-brand-accent hover:underline font-medium"
          >
            Book a Demo →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
