"use client";

import { motion } from "framer-motion";
import { Shield, ArrowUpRight } from "lucide-react";

const integrations = [
  {
    name: "CrowdStrike Falcon",
    status: "Phase L1 — Production",
    statusColor: "text-brand-accent",
    statusBg: "bg-brand-accent/10 border-brand-accent/30",
    description:
      "Reads the Falcon Streaming API and Data Replay. Writes attributed detections back as Custom IoCs and Falcon Fusion playbook triggers. Listed on Falcon Marketplace (CSTAP application in progress).",
    writes: ["Custom IoC (agent_run_id, intent_score)", "Falcon Fusion auto-contain", "Foundry app"],
    reads: ["Streaming API", "Data Replay"],
  },
  {
    name: "SentinelOne Singularity",
    status: "Phase L2 — Built",
    statusColor: "text-yellow-400",
    statusBg: "bg-yellow-400/10 border-yellow-400/30",
    description:
      "Reads Deep Visibility Power Query events. Writes STAR custom detection rules and Threat Notes that enrich existing incidents. Storyline gets an 'agent intent' node. Marketplace application in progress.",
    writes: ["STAR custom detection rules", "Threat Notes on incidents", "Storyline agent_run_id"],
    reads: ["Deep Visibility API", "Activity stream"],
  },
  {
    name: "Palo Alto Cortex XDR",
    status: "Phase L3 — Planned",
    statusColor: "text-white/50",
    statusBg: "bg-white/5 border-white/10",
    description:
      "Extends the Cortex kill chain one layer upward to LLM intent. BIOCs and XSOAR playbook pack. Kill chain timeline: LLM intent → tool call → process → network. XSOAR Marketplace submission planned.",
    writes: ["BIOCs (agent intent patterns)", "XSOAR playbook pack"],
    reads: ["Cortex XDR API", "XSOAR"],
  },
  {
    name: "Microsoft Defender for Endpoint",
    status: "Phase L3 — Planned",
    statusColor: "text-white/50",
    statusBg: "bg-white/5 border-white/10",
    description:
      "New KQL table AgentIntentEvents in Advanced Hunting. Custom detection rules. Copilot for Security plugin answers 'which agent caused this?' Sentinel Content Hub solution. Azure Marketplace listing planned.",
    writes: ["AgentIntentEvents KQL table", "Copilot for Security plugin", "Sentinel Analytics Rules"],
    reads: ["Advanced Hunting API", "MDE Streaming"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EnterpriseUseCases() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Extends Your EDR.
            <br />
            <span className="text-brand-accent">Never Replaces It.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Our integration-first architecture means your SOC team keeps the tools they know. 
            Lineage adds the one dimension those tools are missing: LLM agent intent attribution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        >
          {integrations.map((intg) => (
            <motion.div
              key={intg.name}
              variants={itemVariants}
              className="group bg-brand-gray/50 border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-brand-accent/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-xl font-bold text-white">{intg.name}</h3>
                <span className={`text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full border ${intg.statusBg} ${intg.statusColor} whitespace-nowrap ml-2`}>
                  {intg.status}
                </span>
              </div>

              <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4">{intg.description}</p>

              {/* Reads / Writes */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">Reads from</p>
                  <div className="space-y-1">
                    {intg.reads.map((r) => (
                      <div key={r} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/50">
                        <ArrowUpRight className="w-3 h-3 text-white/20 shrink-0" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-brand-accent/60 uppercase tracking-wider mb-1.5">Writes back</p>
                  <div className="space-y-1">
                    {intg.writes.map((w) => (
                      <div key={w} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-brand-accent/70">
                        <Shield className="w-3 h-3 shrink-0" />
                        {w}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Splunk note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 sm:mt-8 bg-brand-gray/30 border border-white/5 rounded-xl p-4 sm:p-6 text-center"
        >
          <p className="text-white/40 text-xs sm:text-sm">
            <span className="text-white/60 font-medium">Also ships to Splunk HEC</span> — three sourcetypes (lineage:verdict, lineage:hit, lineage:evidence) for SPL queries.
            Sentinel + Chronicle adapters on the roadmap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
