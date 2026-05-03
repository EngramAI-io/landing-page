"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ShieldAlert, Calendar, Brain, Target, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-white">Yali</span>
              <span className="text-xs text-brand-accent uppercase tracking-widest">by EngramAI</span>
            </div>
            <p className="text-white/50 mb-6 max-w-md leading-relaxed">
              Autonomous AI red-teaming platform with specialized SLMs for Planner, Executor, and Verifier roles.
              End-to-end campaign execution with 104K+ synthetic training samples.
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
              <motion.a
                href="https://www.linkedin.com/company/engramai-ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-brand-gray/50 border border-white/10 rounded-lg text-white/70 hover:text-brand-accent hover:border-brand-accent/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#architecture" className="text-white/50 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  Planner SLM
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-white/50 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  Executor SLM
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-white/50 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-400" />
                  Verifier SLM
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
                  Request Early Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 EngramAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">AI Red-Teaming Platform</span>
            <span className="text-white/20">|</span>
            <a
              href="https://github.com/EngramAI-io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline text-sm transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}