"use client";

import { motion } from "framer-motion";
import { Building2, Heart, Landmark, Cloud } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "SEC, MiFID II, DORA compliant agent attribution",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA safe agent workflows",
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description: "FedRAMP and CMMC aligned identity verification",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "Governance layer for AI products",
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

export default function EnterpriseUseCases() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Built for Enterprises That
            <br />
            <span className="text-brand-accent">Cannot Afford Failure</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                variants={itemVariants}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-8 text-center hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{uc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{uc.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
