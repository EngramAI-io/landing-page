"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const vendors = [
  { name: "CrowdStrike Falcon", phase: "L1 · Live", color: "#e02020" },
  { name: "SentinelOne Singularity", phase: "L2 · Built", color: "#7c3aed" },
  { name: "Palo Alto Cortex XDR", phase: "L3 · Planned", color: "#f97316" },
  { name: "Microsoft Defender", phase: "L3 · Planned", color: "#2563eb" },
];

export default function EDRIntegrationStrip() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <span className="text-white/30 text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap">
            Integrates on top of
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {vendors.map((v, i) => (
              <div key={v.name} className="flex items-center gap-2">
                {i > 0 && <ArrowRight className="w-3 h-3 text-white/10 hidden sm:block" />}
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-black/60 border border-white/10 hover:border-white/20 transition-colors">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: v.color, opacity: 0.8 }}
                  />
                  <span className="text-xs sm:text-sm text-white/70 font-medium whitespace-nowrap">{v.name}</span>
                  <span
                    className="text-[10px] font-medium px-1.5 py-0.5 rounded-full hidden sm:inline"
                    style={{ color: v.color, backgroundColor: `${v.color}15` }}
                  >
                    {v.phase}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <span className="text-white/30 text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap hidden sm:block">
            + Splunk HEC · Langfuse
          </span>
        </motion.div>
      </div>
    </section>
  );
}
