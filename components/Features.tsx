"use client";

import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Large Item - Live Cognitive Topology */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Live Cognitive Topology</h3>
            <p className="text-white/50 text-lg mb-6">See the exact path of tool execution.</p>
            
            {/* Node Graph SVG */}
            <div className="relative h-64 w-full">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connections */}
                <line
                  x1="50"
                  y1="150"
                  x2="150"
                  y2="80"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="50"
                  y1="150"
                  x2="150"
                  y2="150"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="50"
                  y1="150"
                  x2="150"
                  y2="220"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="150"
                  y1="80"
                  x2="250"
                  y2="100"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="150"
                  y1="150"
                  x2="250"
                  y2="150"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="150"
                  y1="220"
                  x2="250"
                  y2="200"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="250"
                  y1="100"
                  x2="350"
                  y2="150"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="250"
                  y1="150"
                  x2="350"
                  y2="150"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <line
                  x1="250"
                  y1="200"
                  x2="350"
                  y2="150"
                  stroke="#00FF94"
                  strokeWidth="2"
                  opacity="0.4"
                />

                {/* Nodes */}
                <circle cx="50" cy="150" r="12" fill="#00FF94" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
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
                <circle cx="350" cy="150" r="12" fill="#00FF94" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="1s"
                  />
                </circle>
              </svg>
            </div>
          </motion.div>

          {/* Small Item - Zero Config */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Zero Config</h3>
            <p className="text-white/50 mb-6">Wraps standard MCP commands.</p>
            
            {/* Code snippet */}
            <div className="bg-brand-black/50 rounded-lg p-4 border border-white/5">
              <code className="text-brand-accent text-sm font-mono">
                sentinel run npx server
              </code>
            </div>
          </motion.div>

          {/* Small Item - PFI Security */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-gray/50 border border-white/10 rounded-xl p-8 hover:border-brand-accent/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-brand-accent" />
              <Lock className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">PFI Security</h3>
            <p className="text-white/50">
              Active Privilege Flow Integrity monitoring.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
