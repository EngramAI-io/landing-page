"use client";

import { motion } from "framer-motion";
import { Fingerprint, ListOrdered, ShieldCheck } from "lucide-react";

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

export default function Features() {
  return (
    <section id="guarantees" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Sentinel’s Core Guarantees
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Identity answers <span className="text-white/80">who</span>. Ordering
            answers <span className="text-white/80">in what sequence</span>.
            Integrity answers{" "}
            <span className="text-white/80">can we trust the record</span>.
            Together, they form the minimum foundation for serious observability —
            without enforcing policy or constraining agents.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Large Item — Canonical Ordered Event Stream */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <ListOrdered className="w-8 h-8 text-brand-accent" />
              <h3 className="text-3xl font-bold text-white">
                Canonical, Ordered Event Stream
              </h3>
            </div>

            <p className="text-white/50 text-lg mb-4">
              A single, consistent, replayable history of agent activity — with
              stable event IDs and monotonic ordering derived from observation at
              the Sentinel boundary (not wall-clock timestamps).
            </p>

            {/* Semantic anchor */}
            <p className="text-xs uppercase tracking-wide text-white/40 mb-3">
              Concurrent tool calls observed at the Sentinel boundary
            </p>

            {/* Node Graph SVG */}
            <div className="relative h-56 w-full">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connections */}
                <line x1="50" y1="150" x2="150" y2="80" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="50" y1="150" x2="150" y2="150" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="50" y1="150" x2="150" y2="220" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="150" y1="80" x2="250" y2="100" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="150" y1="150" x2="250" y2="150" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="150" y1="220" x2="250" y2="200" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="250" y1="100" x2="350" y2="150" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="250" y1="150" x2="350" y2="150" stroke="#00FF94" strokeWidth="2" opacity="0.35" />
                <line x1="250" y1="200" x2="350" y2="150" stroke="#00FF94" strokeWidth="2" opacity="0.35" />

                {/* Nodes */}
                <circle cx="50" cy="150" r="12" fill="#00FF94" opacity="0.85">
                  <animate
                    attributeName="opacity"
                    values="0.85;1;0.85"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="150" cy="80" r="10" fill="#00FF94" opacity="0.6" />
                <circle cx="150" cy="150" r="10" fill="#00FF94" opacity="0.6" />
                <circle cx="150" cy="220" r="10" fill="#00FF94" opacity="0.6" />
                <circle cx="250" cy="100" r="10" fill="#00FF94" opacity="0.6" />
                <circle cx="250" cy="150" r="10" fill="#00FF94" opacity="0.6" />
                <circle cx="250" cy="200" r="10" fill="#00FF94" opacity="0.6" />
                <circle cx="350" cy="150" r="12" fill="#00FF94" opacity="0.85">
                  <animate
                    attributeName="opacity"
                    values="0.85;1;0.85"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="1s"
                  />
                </circle>
              </svg>

              {/* Key property callout */}
              <div className="absolute bottom-3 left-3 right-3 bg-brand-black/40 border border-white/5 rounded-lg p-4">
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">
                  Key property: ordering is derived from the sequence of bytes
                  observed crossing the Sentinel boundary — not timestamps —
                  allowing a single, replayable history even when async responses
                  race or clocks drift.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Item — Session Identity & Trace Continuity */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Fingerprint className="w-8 h-8 text-brand-accent" />
              <h3 className="text-2xl font-bold text-white">
                Session Identity & Trace Continuity
              </h3>
            </div>

            <p className="text-white/50 mb-6">
              Stable <span className="text-white/80">session_id</span> and{" "}
              <span className="text-white/80">trace_id</span> for a run, plus{" "}
              <span className="text-white/80">span_id</span> per request with
              request ↔ response correlation — consistent across tools and errors.
            </p>

            <div className="bg-brand-black/50 rounded-lg p-4 border border-white/5">
              <code className="text-brand-accent text-sm font-mono">
                session_id / trace_id / span_id
              </code>
              <div className="mt-2 text-xs text-white/40">
                Without it: logs fragment, attribution breaks, debugging turns
                into guesswork.
              </div>
            </div>
          </motion.div>

          {/* Small Item — Cryptographic Integrity */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-brand-accent" />
              <h3 className="text-2xl font-bold text-white">
                Cryptographic Integrity of Telemetry
              </h3>
            </div>

            <p className="text-white/50 mb-6">
              Hash-chained, append-only audit records with Ed25519 signatures and
              optional encryption at rest — verifiable offline. Cryptography
              applies only to telemetry, never to execution.
            </p>

            <div className="bg-brand-black/50 rounded-lg p-4 border border-white/5">
              <code className="text-brand-accent text-sm font-mono">
                hash-chain + Ed25519 (+ optional encryption)
              </code>
              <div className="mt-2 text-xs text-white/40">
                Without it: the record can be edited after the fact and you’ll
                never know.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
