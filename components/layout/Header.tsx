import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#07152F] border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-yellow-500" />
          <span className="text-xl font-bold text-white">
            SimpliDistance
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-300 hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-300 hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            href="/universities"
            className="text-slate-300 hover:text-yellow-400 transition"
          >
            Universities
          </Link>

          <Link
            href="/courses"
            className="text-slate-300 hover:text-yellow-400 transition"
          >
            Courses
          </Link>

          <Link
            href="/contact"
            className="text-slate-300 hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-slate-900 hover:bg-yellow-400 transition">
          Free Counselling
        </button>
      </div>
    </header>
  );
}