import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yali | Mythos-Level Autonomous Red-Teaming for AI Systems",
  description:
    "Test your AI Agents, RAG systems, MCPs, and AI Dies against real attack patterns. Kernel-level verification, VPC-isolated execution, complete OWASP ASI + MITRE ATLAS + CWE coverage.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EngramAI",
  url: "https://engramai.io",
  logo: "https://engramai.io/logo.jpg",
  description:
    "Yali by EngramAI is the VulnOps platform for the Mythos era — fighting machine-speed threats at machine speed with autonomous red-teaming for AI systems.",
  sameAs: [
    "https://github.com/EngramAI-io",
    "https://www.linkedin.com/company/engramai-ai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistSans.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}