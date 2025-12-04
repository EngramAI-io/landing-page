import Image from "next/image";
import Link from "next/link";

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
        />
        <span className="text-xl font-semibold text-white">EngramAI</span>
      </Link>
    </nav>
  );
}
