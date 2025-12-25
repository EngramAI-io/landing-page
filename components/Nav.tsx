import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Guarantees", href: "#guarantees" },
  { label: "What it is", href: "#what-is" },
  { label: "Security", href: "#security" },
  { label: "Install", href: "#install" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.jpg"
          alt="EngramAI Logo"
          width={64}
          height={64}
          className="h-16 w-auto"
          priority
        />
        <span className="text-xl font-semibold text-white">EngramAI</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-white/70 hover:text-brand-accent transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
