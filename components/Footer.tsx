"use client";

import Link from "next/link";
import { Github, MessageCircle, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/EngramAI-io",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "https://discord.gg/engramai",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/engramai",
    },
  ];

  return (
    <footer className="py-24 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/50 hover:text-brand-accent transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Email */}
          <motion.a
            href="mailto:hello@engramai.io"
            className="flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">hello@engramai.io</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-white/50 text-sm text-center md:text-right">
            © 2025 EngramAI. Securing the Semantic Web.
          </p>
        </div>
      </div>
    </footer>
  );
}
