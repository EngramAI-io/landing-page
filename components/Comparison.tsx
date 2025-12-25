"use client";
import { motion } from "framer-motion";

const rows = [
  {
    feature: "Primary Use",
    official: "Isolated tool testing",
    sentinel: "Observing a live agent using tools",
  },
  {
    feature: "Integration",
    official: "Separate web UI",
    sentinel: "Transparent sidecar in your workflow",
  },
  {
    feature: "Ordering",
    official: "Implicit / undefined",
    sentinel: "Canonical, monotonic event ordering",
  },
  {
    feature: "Correlation",
    official: "Per-request only",
    sentinel: "Session, trace, and span continuity",
  },
  {
    feature: "Auditability",
    official: "None",
    sentinel: "Append-only, signed, optional encrypted logs",
  },
  {
    feature: "Failure Mode",
    official: "Stops visibility",
    sentinel: "Fail-open: execution continues",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Sentinel vs Official MCP Inspector
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            The Inspector helps you test tools in isolation. Sentinel is built to
            observe real agent behavior in the wild — with ordering, correlation,
            and verifiable audit trails.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-brand-gray/50 border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="p-5 text-white/70 font-medium">Feature</div>
            <div className="p-5 text-white/70 font-medium border-l border-white/10">
              Official MCP Inspector
            </div>
            <div className="p-5 text-white/70 font-medium border-l border-white/10">
              Sentinel
            </div>
          </div>

          {rows.map((r) => (
            <div key={r.feature} className="grid grid-cols-3 border-b border-white/5">
              <div className="p-5 text-white/65">{r.feature}</div>
              <div className="p-5 text-white/65 border-l border-white/10">
                {r.official}
              </div>
              <div className="p-5 text-white/50 border-l border-white/10">
                <span className="text-brand-accent">{r.sentinel}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
