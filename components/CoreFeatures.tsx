"use client";

import { motion } from "framer-motion";
import { 
  Fingerprint, 
  Key, 
  ShieldCheck,
  Activity,
  Lock,
  FileCheck
} from "lucide-react";

const pillars = [
  {
    icon: Fingerprint,
    title: "Agent Identity (DID)",
    description: "Cryptographically-rooted identity using Ed25519. Every agent gets a unique, unforgeable identifier.",
    color: "#4fd1c5",
  },
  {
    icon: Key,
    title: "Task-Scoped Keys",
    description: "Ephemeral identities bound to single tasks. Keys self-destruct after 15 minutes — zero standing privileges.",
    color: "#d8a24b",
  },
  {
    icon: ShieldCheck,
    title: "Intent Firewall",
    description: "Embedding-based semantic verification. Every action is validated against declared intent before execution.",
    color: "#4fd1c5",
  },
  {
    icon: Lock,
    title: "Policy Engine",
    description: "Deterministic rule-based security. Privilege escalation detection, sequence tracking, immutable audit logs.",
    color: "#4fd1c5",
  },
  {
    icon: Activity,
    title: "Trust Scoring",
    description: "Behavioral FICO score for agents. Continuously updated based on observed behavior across interactions.",
    color: "#4fd1c5",
  },
  {
    icon: FileCheck,
    title: "Verifiable Credentials",
    description: "W3C-compliant VCs for capabilities, provenance, and behavioral scope. Cryptographically signed attestations.",
    color: "#4fd1c5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
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
            The EngramAI{" "}
            <span className="text-brand-accent">Protocol</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Five interlocking security layers that give every AI agent a verifiable identity, 
            scoped permissions, and a behavioral credit score.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{pillar.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { label: "Cryptographic Identity", value: "Ed25519 DID" },
            { label: "Key TTL", value: "15 min" },
            { label: "Compliance", value: "SOC2, HIPAA, PCI-DSS" },
            { label: "Standards", value: "IETF JWT, Google A2A, MCP-I" },
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