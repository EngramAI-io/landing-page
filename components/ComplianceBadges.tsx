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
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4"
        >
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-brand-gray/50 border border-white/10 rounded-full"
            >
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-brand-accent" />
              <span className="text-xs sm:text-sm text-white/70 font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
