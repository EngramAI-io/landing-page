import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yali | Fight Machine-Speed Threats with Machine-Speed Defense",
  description:
    "Autonomous AI red-teaming platform that simulates Mythos-level threats. Kernel-level verification, airtight VPC execution, complete OWASP ASI coverage.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EngramAI",
  url: "https://engramai.io",
  logo: "https://engramai.io/logo.jpg",
  description:
    "Yali by EngramAI is the VulnOps platform for the post-Mythos enterprise — fighting machine-speed threats at machine speed.",
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