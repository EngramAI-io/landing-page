"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  KeyRound,
  Fingerprint,
  Radiation,
} from "lucide-react";

const risks = [
  {
    icon: AlertTriangle,
    title: "Broad Permissions",
    description: "System-wide access regardless of task",
  },
  {
    icon: KeyRound,
    title: "Long Lived Credentials",
    description: "Static keys persist indefinitely",
  },
  {
    icon: Fingerprint,
    title: "No Verified Identity",
    description: "No cryptographic attribution",
  },
  {
    icon: Radiation,
    title: "Full System Blast Radius",
    description: "One compromised agent cascades across infrastructure",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProblemSection() {
  return (
    <section className="py-32 px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">The Problem</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AI Agents Are Operating
            <br />
            <span className="text-red-400">Without a Trust Framework</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-4">
            Enterprise AI deployments suffer a critical governance gap: agents are granted sweeping,
            long-lived permissions far exceeding any single task.
          </p>
          <p className="text-lg text-white/50 max-w-3xl mx-auto">
            The industry average cost of a breach involving AI agents has reached{" "}
            <span className="text-red-400 font-semibold">$4.9M per incident</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.title}
                variants={itemVariants}
                className="group bg-brand-gray/50 border border-red-500/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{risk.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{risk.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
