"use client";

import { motion } from "framer-motion";
import { Lock, Server, Shield, Eye, Database, Zap, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Server,
    title: "Firecracker MicroVMs",
    description: "Lightweight VMs provide hardware-enforced isolation. Each campaign runs in a fresh, ephemeral environment.",
    color: "#8b5cf6",
  },
  {
    icon: Lock,
    title: "Zero Egress of Your Data",
    description: "Training, inference, and reporting all happen inside your VPC. Your sensitive data never touches our infrastructure.",
    color: "#22c55e",
  },
  {
    icon: Eye,
    title: "eBPF Kernel Telemetry",
    description: "We read raw kernel events — process spawns, syscalls, network egress — to prove exploitation happened, not just that the model refused.",
    color: "#f97316",
  },
  {
    icon: Database,
    title: "Append-Only Audit Logs",
    description: "Hash-chained telemetry with Ed25519 signatures. Verifiable offline, tamper-evident, and audit-ready.",
    color: "#00d4ff",
  },
];

const trustIndicators = [
  { label: "Isolation", value: "Hardware-enforced" },
  { label: "Data egress", value: "Zero" },
  { label: "Telemetry", value: "Kernel-level" },
  { label: "Audit trail", value: "Tamper-evident" },
];

const complianceMappings = [
  { standard: "EU AI Act 2026", requirement: "Continuous adversarial testing of high-risk AI systems" },
  { standard: "NIST AI RMF", requirement: "Red-teaming before and during AI deployment" },
  { standard: "SOC 2 Type II", requirement: "AI-specific penetration testing evidence" },
  { standard: "OWASP ASI Top 10", requirement: "De facto standard for AI security audits" },
];

export default function ExecutionSandbox() {
  return (
    <section id="sandbox" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,148,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,148,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
            Air-Gapped Execution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Your Data Never
            <span className="text-brand-accent"> Leaves the Building</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Every Yali campaign runs in Firecracker microVMs inside your VPC. We bring the autonomous red-teaming framework — your security boundary stays intact.
          </p>
        </motion.div>

        {/* Security features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {securityFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-gray/40 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-brand-black/60 border border-brand-accent/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">Security Posture at a Glance</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {trustIndicators.map((item) => (
                <div key={item.label} className="text-center p-4 bg-brand-gray/40 rounded-xl border border-white/5">
                  <div className="text-brand-accent text-xl sm:text-2xl font-bold mb-1">{item.value}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compliance mappings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">You&apos;re Already Required to Do This</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {complianceMappings.map((item, i) => (
              <motion.div
                key={item.standard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-gray/30 border border-white/10 rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">{item.standard}</h4>
                    <p className="text-white/50 text-xs sm:text-sm">{item.requirement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}