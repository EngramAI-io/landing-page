"use client";

import { motion } from "framer-motion";
import { AlertTriangle, KeyRound, Fingerprint, Radiation } from "lucide-react";

const risks = [
  {
    icon: AlertTriangle,
    title: "Broad Permissions",
    description: "Agents operate with permanent credentials and system-wide access",
  },
  {
    icon: KeyRound,
    title: "Long Lived Credentials",
    description: "Static keys persist indefinitely — no automatic rotation",
  },
  {
    icon: Fingerprint,
    title: "No Verified Identity",
    description: "No cryptographic attribution for agent actions",
  },
  {
    icon: Radiation,
    title: "Full System Blast Radius",
    description: "One compromised agent cascades across entire infrastructure",
  },
];

const stats = [
  { value: "$4.9M", label: "Avg breach cost when AI agents are compromised" },
  { value: "90%", label: "Blast radius reduction with task-scoped identity" },
  { value: "70%", label: "Security review automation via trust scoring" },
];

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4 sm:mb-6"
          >
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-xs sm:text-sm text-red-400 font-medium">The Problem</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            AI Agents Are Operating
            <br />
            <span className="text-red-400">Without a Trust Framework</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Enterprise AI deployments suffer a critical governance gap: agents are granted sweeping, 
            long-lived permissions far exceeding any single task — and there&apos;s no way to verify 
            who they are, what they&apos;re allowed to do, or if they&apos;re doing what they were told.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-brand-gray/40 border border-white/10 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-accent mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-white/50 text-xs sm:text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <div
                key={risk.title}
                className="group bg-brand-gray/50 border border-red-500/10 rounded-xl p-4 sm:p-6 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{risk.title}</h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{risk.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            <span className="text-brand-accent font-semibold">Without EngramAI:</span> Companies deploy AI agents with permanent credentials, 
            no identity verification, and no way to know if an agent is doing what it was told. 
            One compromised agent equals full system breach.
          </p>
        </motion.div>
      </div>
    </section>
  );
}