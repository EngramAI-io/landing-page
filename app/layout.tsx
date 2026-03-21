import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "EngramAI - Trust Layer for Agentic AI",
  description:
    "Enterprise security for AI agents, RAG systems, and MCP servers. The industry's first comprehensive trust layer to protect agentic AI for the enterprise.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EngramAI",
  url: "https://engramai.io",
  logo: "https://engramai.io/logo.jpg",
  description:
    "Enterprise security for AI agents, RAG systems, and MCP servers.",
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
