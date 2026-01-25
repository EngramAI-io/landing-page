"use client";

import { motion } from "framer-motion";
import { Target, Users, Rocket, Code2 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe AI agents need a new security paradigm — one built on transparency and trust, not control."
  },
  {
    icon: Code2,
    title: "Open by Design",
    description: "Our core tools are open source. We build in public because security through obscurity isn't security."
  },
  {
    icon: Users,
    title: "Developer-First",
    description: "Built by developers, for developers. Simple APIs, clear documentation, zero friction deployment."
  },
  {
    icon: Rocket,
    title: "Production-Ready",
    description: "Battle-tested in high-stakes environments. Sub-millisecond latency. Enterprise-grade reliability."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Why <span className="text-brand-accent">EngramAI</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            AI agents are autonomous, fast, and increasingly powerful. 
            The tools securing them should be too.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-white/60 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-gray/30 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Built With</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Rust (Tokio)",
              "TypeScript",
              "React",
              "WebSockets",
              "Ed25519",
              "MCP Protocol"
            ].map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-brand-black/40 border border-white/10 rounded-lg text-white/70 text-sm font-mono"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
