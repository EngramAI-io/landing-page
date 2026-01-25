"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
  { label: "Platform", href: "#platform" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-brand-black/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/logo.jpg"
              alt="EngramAI Logo"
              width={40}
              height={40}
              className="h-10 w-auto rounded-lg relative"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">EngramAI</span>
            <span className="text-[9px] text-brand-accent uppercase tracking-widest">Defense Layer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-brand-accent transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/EngramAI-io"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm text-white/70 hover:text-brand-accent transition-colors"
          >
            GitHub
          </a>
          <Button size="sm" className="text-sm hidden sm:flex bg-brand-accent text-brand-black hover:bg-brand-accent/90" asChild>
            <a href="#demo">Book Demo</a>
          </Button>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-brand-black/95 border-b border-white/10 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-brand-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-2 bg-brand-accent text-brand-black" asChild>
              <a href="#demo" onClick={() => setMobileMenuOpen(false)}>Book Demo</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
