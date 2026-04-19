"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GitBranch } from "lucide-react";

const integrationBadges = [
  { label: "CrowdStrike Falcon", type: "integration" },
  { label: "SentinelOne Singularity", type: "integration" },
  { label: "Palo Alto Cortex XDR", type: "integration" },
  { label: "Microsoft Defender", type: "integration" },
  { label: "Splunk HEC", type: "integration" },
  { label: "Langfuse", type: "integration" },
];

const complianceBadges = [
  { label: "SOC2 Ready", type: "compliance" },
  { label: "HIPAA Safe", type: "compliance" },
  { label: "gosec Clean", type: "security" },
  { label: "govulncheck ✓", type: "security" },
  { label: "go 1.25.9", type: "security" },
  { label: "Apache-2.0", type: "open" },
];

export default function ComplianceBadges() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Integration row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mr-1">Integrates with</span>
          {integrationBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-gray/50 border border-brand-accent/20 rounded-full"
            >
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-brand-accent" />
              <span className="text-xs sm:text-sm text-white/70 font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Security / compliance row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mr-1">Verified</span>
          {complianceBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-gray/50 border border-white/10 rounded-full"
            >
              <GitBranch className="w-3 h-3 sm:w-4 sm:h-4 text-white/30" />
              <span className="text-xs sm:text-sm text-white/50 font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
