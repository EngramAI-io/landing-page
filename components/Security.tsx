"use client";

import { motion } from "framer-motion";
import { Lock, KeyRound, EyeOff, Waves, Shield } from "lucide-react";

const cards = [
  {
    title: "WebSocket Token Authentication",
    icon: KeyRound,
    body:
      "Protect the observability endpoint with token-based auth. Use SENTINEL_WS_TOKEN to avoid leaking tokens in shell history.",
    code: 'sentinel run --ws-token "$SENTINEL_WS_TOKEN" -- <your-mcp-server>',
  },
  {
    title: "Configurable Network Binding",
    icon: Lock,
    body:
      "Bind to localhost by default. Expose remotely only with authentication. Control interface + port via --ws-bind.",
    code: 'sentinel run --ws-bind "127.0.0.1:3000" -- <your-mcp-server>',
  },
  {
    title: "Built-in PII Redaction",
    icon: EyeOff,
    body:
      "Sensitive fields are scrubbed only in observability outputs. Original MCP traffic is never modified.",
    code: "api_key / bearer tokens / emails / sk-*",
  },
  {
    title: "Fail-open by Design",
    icon: Waves,
    body:
      "If the UI crashes or the WebSocket drops, your MCP pipeline continues unfazed. Observe, never decide.",
    code: "Fail open, not closed",
  },
  {
    title: "Cryptographic Audit Logging",
    icon: Shield,
    body:
      "Hash-chained append-only logs with Ed25519 signatures and optional encryption at rest. Verify offline.",
    code: "sentinel verify --log ./audit.jsonl --pubkey-b64-path ./keys/signing_pubkey.b64",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Security & Design Philosophy
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Observe, never decide. Record, never enforce. Fail open, not closed.
            Trust comes from visibility, not control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.03 }}
                className="bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-brand-accent" />
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                </div>

                <p className="text-white/50 mb-6 leading-relaxed">{c.body}</p>

                <div className="bg-brand-black/50 rounded-lg p-4 border border-white/5">
                  <code className="text-brand-accent text-xs md:text-sm font-mono break-all">
                    {c.code}
                  </code>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-8 bg-brand-gray/50 border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Architecture (Transparent Sidecar / “T-Tap”)
          </h3>
          <p className="text-white/50 leading-relaxed">
            Sentinel sits between an LLM client and MCP tools, pass-throughing
            JSON-RPC while emitting a canonical event stream to the UI and durable
            audit logs. It’s designed to be non-invasive: telemetry is secured,
            execution is untouched.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
              <p className="text-white/70 font-medium mb-1">Pattern</p>
              <p className="text-white/40 text-sm">Transparent Sidecar (T-Tap)</p>
            </div>
            <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
              <p className="text-white/70 font-medium mb-1">Philosophy</p>
              <p className="text-white/40 text-sm">Fail Open</p>
            </div>
            <div className="bg-brand-black/40 border border-white/5 rounded-lg p-4">
              <p className="text-white/70 font-medium mb-1">Stack</p>
              <p className="text-white/40 text-sm">
                Rust (Tokio) • TypeScript • React • React Flow • WebSockets
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
