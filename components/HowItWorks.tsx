"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Key,
  Activity,
  ArrowRight,
} from "lucide-react";

const layers = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Semantic Intent Firewall",
    description: "Verifies why an agent is acting before execution.",
    flow: ["User Request", "Intent Captured", "Engram Validation", "Execute or Block"],
    color: "brand-accent",
  },
  {
    number: "02",
    icon: Key,
    title: "Just-In-Time Credentials",
    description: "Ephemeral cryptographic keys provisioned per task. Keys self destruct after 60 seconds.",
    flow: ["Task Initiated", "Key Generated", "Task Executes", "Key Self-Destructs"],
    color: "brand-accent",
  },
  {
    number: "03",
    icon: Activity,
    title: "Behavioral Credit Score",
    description: "Agent reputation system similar to a FICO score. Continuously updated trust score across agent interactions.",
    flow: ["Agent Action", "Behavior Logged", "Score Updated", "Trust Adjusted"],
    color: "brand-accent",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Three Layers of
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-emerald-400 bg-clip-text text-transparent">
              Zero Trust Agent Security
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8 md:p-10 hover:border-brand-accent/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Layer number + icon */}
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <span className="text-4xl font-bold text-brand-accent/30">{layer.number}</span>
                    <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-brand-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{layer.title}</h3>
                    <p className="text-white/60 text-lg mb-6 leading-relaxed">{layer.description}</p>

                    {/* Flow visualization */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      {layer.flow.map((step, i) => (
                        <div key={step} className="flex items-center gap-2 md:gap-3">
                          <div className="px-4 py-2 bg-brand-black/40 border border-white/10 rounded-lg text-white/70 text-sm font-medium">
                            {step}
                          </div>
                          {i < layer.flow.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-brand-accent/50 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
