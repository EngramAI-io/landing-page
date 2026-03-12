"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  Key,
  Activity,
  Scale,
  Link2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Immutable Agent Identity (A-ID)",
    description: "Unique, cryptographically signed permanent identifier for every agent",
  },
  {
    icon: Key,
    title: "Transient Session Keys",
    description: "Temporary, single-use, self-destructing access credentials",
  },
  {
    icon: Activity,
    title: "Dynamic A2A Behavioral Score",
    description: "Continuous reputation-based monitoring of agent actions",
  },
  {
    icon: Scale,
    title: "Automated Policy Enforcement",
    description: "Central rules engine defines agent capabilities and boundaries",
  },
  {
    icon: Link2,
    title: "Secured Data Provenance",
    description: "Auditable lineage tracking of all data interactions",
  },
  {
    icon: ShieldCheck,
    title: "Semantic Intent Firewall",
    description: "Real-time action validation against user-defined intent",
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
    <section id="products" className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Core Protocol{" "}
            <span className="text-brand-accent">Features</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-6 hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
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
