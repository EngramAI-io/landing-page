"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Search,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Layers
} from "lucide-react";

const detectionLayers = [
  {
    name: "Fast Path",
    time: "<1ms",
    description: "Keyword patterns, cache lookup, entropy check",
    color: "brand-accent"
  },
  {
    name: "Embedding Analysis",
    time: "<5ms",
    description: "Cluster detection, Mahalanobis distance",
    color: "violet"
  },
  {
    name: "Pattern Detection",
    time: "<10ms",
    description: "Perplexity scoring, ML classifier",
    color: "violet"
  },
  {
    name: "Consensus Validation",
    time: "50-100ms",
    description: "Multi-path LLM reasoning divergence",
    color: "violet"
  }
];

export default function MemGuardSection() {
  return (
    <section id="memguard" className="py-32 px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/[0.03] via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6"
          >
            <Brain className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-400 font-medium">Memory Poisoning Detection</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-violet-400">MemGuard</span> Protection
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Protect RAG systems from AgentPoison attacks with 100% detection accuracy. 
            Comparison-based detection finds poisoned embedding clusters.
          </p>
        </motion.div>

        {/* Attack Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              AgentPoison Attack Detection
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Normal embeddings */}
              <div className="text-center">
                <div className="bg-brand-black/40 rounded-xl p-6 mb-4 h-48 flex items-center justify-center relative">
                  <svg viewBox="0 0 200 150" className="w-full h-full max-w-[200px]">
                    {/* Random scattered dots for normal */}
                    <circle cx="30" cy="40" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="80" cy="25" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="140" cy="50" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="50" cy="90" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="170" cy="100" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="100" cy="70" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="25" cy="120" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="160" cy="30" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="90" cy="130" r="6" fill="#00FF94" opacity="0.6" />
                    <circle cx="130" cy="110" r="6" fill="#00FF94" opacity="0.6" />
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span className="text-white font-medium">Normal Embeddings</span>
                </div>
                <p className="text-white/50 text-sm">max_similarity: 0.18</p>
              </div>

              {/* Poisoned embeddings */}
              <div className="text-center">
                <div className="bg-brand-black/40 rounded-xl p-6 mb-4 h-48 flex items-center justify-center relative">
                  <svg viewBox="0 0 200 150" className="w-full h-full max-w-[200px]">
                    {/* Scattered normal dots */}
                    <circle cx="30" cy="40" r="6" fill="#00FF94" opacity="0.4" />
                    <circle cx="170" cy="30" r="6" fill="#00FF94" opacity="0.4" />
                    <circle cx="25" cy="120" r="6" fill="#00FF94" opacity="0.4" />
                    <circle cx="160" cy="110" r="6" fill="#00FF94" opacity="0.4" />
                    
                    {/* Tight poison cluster - red */}
                    <circle cx="100" cy="75" r="25" fill="#EF4444" opacity="0.15" />
                    <circle cx="95" cy="70" r="6" fill="#EF4444" opacity="0.9" />
                    <circle cx="105" cy="72" r="6" fill="#EF4444" opacity="0.9" />
                    <circle cx="100" cy="80" r="6" fill="#EF4444" opacity="0.9" />
                    <circle cx="92" cy="78" r="6" fill="#EF4444" opacity="0.9" />
                    <circle cx="108" cy="78" r="6" fill="#EF4444" opacity="0.9" />
                    
                    {/* Detection indicator */}
                    <circle cx="100" cy="75" r="35" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,4" opacity="0.5">
                      <animate attributeName="r" values="30;38;30" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-white font-medium">Poisoned Cluster Detected</span>
                </div>
                <p className="text-white/50 text-sm">max_similarity: <span className="text-red-400">0.95+</span></p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl text-center">
              <p className="text-violet-300 text-sm">
                <strong>Key Insight:</strong> AgentPoison triggers look NORMAL in text but form tight clusters in embedding space (>0.95 similarity). 
                MemGuard compares embeddings to detect these anomalous clusters.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Detection Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Multi-Layer Detection Pipeline
          </h3>
          
          <div className="space-y-4">
            {detectionLayers.map((layer, idx) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-brand-gray/50 border border-white/10 rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm">
                  {idx + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{layer.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400">
                      {layer.time}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mt-1">{layer.description}</p>
                </div>
                <Zap className="w-5 h-5 text-violet-400/50" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "100%", label: "Detection Rate" },
            { value: "100ms", label: "P95 Latency" },
            { value: "<3%", label: "False Positives" },
            { value: "10K+", label: "Requests/sec" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-brand-gray/30 border border-white/5 rounded-xl">
              <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
