"use client";

import { motion } from "framer-motion";

const bulletsYes = [
  "A transparent MCP sidecar",
  "A canonical event recorder",
  "A real-time observability layer",
  "A cryptographically verifiable audit tap",
];

const bulletsNo = [
  "An execution engine",
  "A policy enforcer",
  "A tool broker",
  "A rate limiter",
  "A replay controller",
];

export default function WhatIs() {
  return (
    <section id="what-is" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            What Sentinel Is (and Is Not)
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Sentinel sits invisibly between an LLM client and MCP tools - a passive,
            non-blocking tap into live agent traffic. It does not alter requests.
            It does not gate execution. It does not impose policy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-brand-gray/50 border border-white/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Sentinel is</h3>
            <ul className="space-y-3">
              {bulletsYes.map((b) => (
                <li key={b} className="text-white/70 flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-accent shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="bg-brand-gray/50 border border-white/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Sentinel is not</h3>
            <ul className="space-y-3">
              {bulletsNo.map((b) => (
                <li key={b} className="text-white/70 flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/20 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-brand-black/40 border border-white/5 rounded-lg p-4">
              <p className="text-sm text-white/60 leading-relaxed">
                Agents and tools continue to function exactly the same with or
                without Sentinel.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-8 bg-brand-gray/50 border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Why it exists</h3>
          <p className="text-white/70 leading-relaxed">
            LLM agents reason implicitly. Tool calls happen asynchronously. Failures often
            appear after the cause. Traditional logging breaks down. Sentinel exists to
            provide the observability guarantees agent systems rely on - but rarely formalize.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
              <p className="text-white/70 font-medium mb-1">You get</p>
              <p className="text-white/70 text-sm">
                A single ordered history, request/response correlation, latency + error visibility,
                durable audit logs you can replay and verify, and a real-time graph that makes
                causality visible.
              </p>
            </div>

            <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
              <p className="text-white/70 font-medium mb-1">The mental model</p>
              <p className="text-white/70 text-sm">
                Think “Chrome DevTools” - but for agent toolchains.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
