import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lineage | CrowdStrike-First AI Agent Attribution",
  description:
    "Lineage complements CrowdStrike Falcon by attributing Linux host activity to AI agent intent and writing verdict context back into existing SOC workflows.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EngramAI",
  url: "https://engramai.io",
  logo: "https://engramai.io/logo.jpg",
  description:
    "Lineage by EngramAI provides AI agent intent attribution on top of enterprise EDR workflows, starting with CrowdStrike Falcon.",
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
