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
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={uc.title}
                variants={itemVariants}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-accent" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3">{uc.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{uc.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
