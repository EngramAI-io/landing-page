"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Shield, 
  GitBranch,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  Network
} from "lucide-react";

const bogFeatures = [
  {
    icon: Network,
    title: "Byzantine Fault Tolerance",
    description: "Weighted BFT consensus ensures no single rogue agent can execute unauthorized actions."
  },
  {
    icon: GitBranch,
    title: "Intent Extraction",
    description: "Parse agent actions into structured intents for validation against the action catalog."
  },
  {
    icon: Shield,
    title: "Risk Gate Enforcement",
    description: "Bayesian inference calculates risk scores. High-risk actions require additional approval."
  },
  {
    icon: Users,
    title: "Peer Validation",
    description: "Agents validate each other's actions through encrypted peer-to-peer communication."
  }
];

export default function BOGSection() {
  return (
    <section id="bog" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6"
          >
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Behavioral Orchestration Graph</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-blue-400">BOG</span> Consensus Engine
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Multi-agent consensus validation using Weighted Byzantine Fault Tolerance. 
            Prevent unauthorized actions through distributed agreement.
          </p>
        </motion.div>

        {/* Consensus Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              Consensus Validation Flow
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                  <Zap className="w-10 h-10 text-blue-400" />
                </div>
                <span className="text-white font-medium text-sm">Agent Action</span>
                <span className="text-white/40 text-xs mt-1">Intent Extraction</span>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-blue-500/50 to-blue-400/50" />

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                  <Network className="w-10 h-10 text-blue-400" />
                </div>
                <span className="text-white font-medium text-sm">Peer Query</span>
                <span className="text-white/40 text-xs mt-1">WBFT Consensus</span>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-300/50" />

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                  <Shield className="w-10 h-10 text-blue-400" />
                </div>
                <span className="text-white font-medium text-sm">Risk Scoring</span>
                <span className="text-white/40 text-xs mt-1">Bayesian Inference</span>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-blue-300/50 to-brand-accent/50" />

              {/* Decision */}
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <div className="w-16 h-16 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-brand-accent" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <XCircle className="w-8 h-8 text-red-400" />
                  </div>
                </div>
                <span className="text-white font-medium text-sm mt-3">Decision</span>
                <span className="text-white/40 text-xs mt-1">Approve / Review / Block</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bogFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-brand-gray/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "200ms", label: "P95 Latency" },
            { value: "5,000", label: "Requests/sec" },
            { value: "f+1", label: "Fault Tolerance" },
            { value: "Ed25519", label: "Signed Votes" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-brand-gray/30 border border-white/5 rounded-xl">
              <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
