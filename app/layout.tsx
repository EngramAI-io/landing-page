import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel - MCP Observability Sidecar by EngramAI",
  description:
    "A transparent, fail-open observability sidecar for Model Context Protocol (MCP). Identity, ordering, and integrity guarantees for agent ↔ tool interactions — without modifying execution.",
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
