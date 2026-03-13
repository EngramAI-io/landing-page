"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const badges = [
  "SOC2 Ready",
  "ISO 27001",
  "IETF JWT",
  "Google A2A",
  "MCP-I",
];

export default function ComplianceBadges() {
  return (
    <section className="py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-gray/50 border border-white/10 rounded-full"
            >
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span className="text-sm text-white/70 font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
