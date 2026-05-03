"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Clock, Users, Zap, Shield } from "lucide-react";

const comparisons = [
  {
    feature: "Execution Speed",
    traditional: { value: "Days to weeks", icon: Clock, negative: true },
    yali: { value: "Hours to days", icon: Zap, positive: true },
  },
  {
    feature: "Coverage",
    traditional: { value: "Single attack path", icon: AlertCircle, negative: true },
    yali: { value: "Multi-path exploration", icon: CheckCircle, positive: true },
  },
  {
    feature: "Cost",
    traditional: { value: "$15-50K per engagement", icon: AlertCircle, negative: true },
    yali: { value: "Fixed model + compute", icon: CheckCircle, positive: true },
  },
  {
    feature: "Expertise Required",
    traditional: { value: "Senior red-teamers", icon: AlertCircle, negative: true },
    yali: { value: "Automated expertise", icon: CheckCircle, positive: true },
  },
  {
    feature: "Repeatability",
    traditional: { value: "Manual, variable", icon: AlertCircle, negative: true },
    yali: { value: "Deterministic replay", icon: CheckCircle, positive: true },
  },
  {
    feature: "Attack Quality",
    traditional: { value: "Human-dependent", icon: Users, negative: false },
    yali: { value: "Consistent + evolving", icon: Shield, positive: true },
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description: "Execute comprehensive red-teaming campaigns in hours, not weeks.",
  },
  {
    icon: Shield,
    title: "Consistency",
    description: "Every campaign follows the same high standards, every time.",
  },
  {
    icon: Users,
    title: "Scalability",
    description: "Run multiple campaigns in parallel without additional headcount.",
  },
];

export default function Comparison() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs sm:text-sm font-medium mb-4">
            Why Yali?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Traditional vs
            <span className="text-brand-accent"> AI-Red Teaming</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            See how Yali&apos;s autonomous approach compares to manual red-teaming engagements.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-brand-gray/40 border border-white/10 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-brand-black/50 border-b border-white/10">
              <div className="p-4 sm:p-6 text-white/50 text-xs sm:text-sm font-medium text-center">Feature</div>
              <div className="p-4 sm:p-6 text-white/50 text-xs sm:text-sm font-medium text-center border-l border-white/10">
                Traditional
              </div>
              <div className="p-4 sm:p-6 text-brand-accent text-xs sm:text-sm font-medium text-center border-l border-white/10">
                Yali
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => {
              const TraditionalIcon = row.traditional.icon;
              const YaliIcon = row.yali.icon;
              return (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}
                >
                  <div className="p-4 sm:p-6 flex items-center">
                    <span className="text-white font-medium text-sm">{row.feature}</span>
                  </div>
                  <div className="p-4 sm:p-6 flex items-center justify-center border-l border-white/10">
                    <div className="flex items-center gap-2">
                      <TraditionalIcon className={`w-4 h-4 ${row.traditional.negative ? 'text-red-400/60' : 'text-white/40'}`} />
                      <span className={`text-sm ${row.traditional.negative ? 'text-red-400/60' : 'text-white/50'}`}>
                        {row.traditional.value}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex items-center justify-center border-l border-white/10">
                    <div className="flex items-center gap-2">
                      <YaliIcon className="w-4 h-4 text-brand-accent" />
                      <span className="text-sm text-brand-accent/80">
                        {row.yali.value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-gray/30 border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}