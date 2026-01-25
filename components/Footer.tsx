"use client";

import Link from "next/link";
import { Github, Mail, ShieldAlert, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-white">EngramAI</span>
              <span className="text-xs text-brand-accent uppercase tracking-widest">Defense Layer</span>
            </div>
            <p className="text-white/50 mb-6 max-w-md">
              The industry's first multi-agent security platform to protect AI agents, 
              RAG systems, and MCP servers for the enterprise.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/EngramAI-io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-brand-gray/50 border border-white/10 rounded-lg text-white/70 hover:text-brand-accent hover:border-brand-accent/30 transition-all"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </motion.a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#bog" className="text-white/50 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  BOG - Consensus
                  <span className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded text-white/40">Enterprise</span>
                </a>
              </li>
              <li>
                <a href="#memguard" className="text-white/50 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  MemGuard - RAG Security
                  <span className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded text-white/40">Enterprise</span>
                </a>
              </li>
              <li>
                <a href="#sentinel" className="text-white/50 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  Sentinel - MCP Observability
                  <span className="text-[10px] px-1.5 py-0.5 bg-brand-accent/20 rounded text-brand-accent">MIT</span>
                </a>
              </li>
              <li>
                <a href="#platform" className="text-white/50 hover:text-brand-accent transition-colors text-sm">
                  Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@engramai.io" 
                  className="flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@engramai.io
                </a>
              </li>
              <li>
                <a 
                  href="mailto:security@engramai.io" 
                  className="flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors text-sm"
                >
                  <ShieldAlert className="w-4 h-4" />
                  security@engramai.io
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  className="flex items-center gap-2 text-brand-accent hover:underline text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 EngramAI. All rights reserved. BOG & MemGuard are proprietary.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">Sentinel is MIT licensed</span>
            <span className="text-white/20">|</span>
            <a 
              href="https://github.com/EngramAI-io/sentinel" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline text-sm transition-colors"
            >
              View Sentinel Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
