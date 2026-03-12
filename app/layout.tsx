import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "EngramAI — The Trust Layer for Agentic AI",
  description:
    "The industry's first comprehensive security platform to protect AI Agents, RAG Systems, and MCP Servers for the enterprise. Deploy as multi-tenant SaaS or dedicated single-tenant infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistSans.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}
