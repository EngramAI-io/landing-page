"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const rows = [
  {
    metric: "Blast Radius",
    traditional: "Entire System ($4.9M Avg Cost)",
    engram: "Single Task (Near Zero)",
  },
  {
    metric: "Security Review",
    traditional: "100% Manual",
    engram: "70% Automated via Credit Score",
  },
  {
    metric: "Compliance",
    traditional: "Non-compliant / High Risk",
    engram: "SOC2 / ISO 27001 Ready",
  },
  {
    metric: "Credential Lifespan",
    traditional: "Permanent Static Keys",
    engram: "60 Second Self Destructing Keys",
  },
];

export default function BusinessValue() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            <TrendingUp className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-brand-accent font-medium">ROI</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Business Value &{" "}
            <span className="text-brand-accent">ROI</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-gray/40 border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-brand-gray/60 border-b border-white/10">
            <div className="text-white/50 text-sm font-medium">Metric</div>
            <div className="text-red-400/70 text-sm font-medium">Traditional Access</div>
            <div className="text-brand-accent text-sm font-medium">Engram Protocol</div>
          </div>

          {/* Rows */}
          {rows.map((row, idx) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-white font-medium">{row.metric}</div>
              <div className="text-white/50 text-sm">{row.traditional}</div>
              <div className="text-brand-accent text-sm font-medium">{row.engram}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
