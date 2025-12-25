"use client";

import Link from "next/link";
import { Github, Mail, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/EngramAI-io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </motion.a>

            <motion.a
              href="mailto:security@engramai.io"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors"
              aria-label="Security disclosure email"
            >
              <ShieldAlert className="w-5 h-5" />
              <span className="text-sm">security@engramai.io</span>
            </motion.a>
          </div>

          <motion.a
            href="mailto:hello@engramai.io"
            className="flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">hello@engramai.io</span>
          </motion.a>

          <p className="text-white/50 text-sm text-center md:text-right">
            © 2025 EngramAI. Sentinel is MIT licensed.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#install"
            className="text-sm text-white/40 hover:text-brand-accent transition-colors"
          >
            Install Sentinel →
          </Link>
        </div>
      </div>
    </footer>
  );
}
