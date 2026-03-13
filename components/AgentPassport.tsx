"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  FileSearch,
  AlertOctagon,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, label: "SOC2 Compliance" },
  { icon: Fingerprint, label: "Full Attribution" },
  { icon: FileSearch, label: "Incident Forensics" },
  { icon: AlertOctagon, label: "Real-Time Revocation" },
];

export default function AgentPassport() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/[0.03] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6"
            >
              <Fingerprint className="w-4 h-4 text-brand-accent" />
              <span className="text-sm text-brand-accent font-medium">The Engram Answer</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Agent{" "}
              <span className="text-brand-accent">Passport</span>
            </h2>

            <p className="text-xl text-white/60 mb-6 leading-relaxed">
              Every AI agent is issued a cryptographic identity credential.
            </p>

            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Verifiable, tamper-proof identity bound to:
            </p>

            <div className="space-y-3 mb-8">
              {["Agent code signature", "Deployment context", "Authorized scope"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-brand-gray/50 border border-white/10 rounded-xl p-6 text-center hover:border-brand-accent/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-brand-accent" />
                    </div>
                    <span className="text-white font-medium">{cap.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
