"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Distance Education", href: "/distance-education" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            <span className="text-[#0B1E3E]">Simpli</span>
            <span className="text-[#FBBF24]">distance</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-[#FBBF24] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="rounded-xl bg-[#FBBF24] px-6 py-3 font-semibold text-slate-900 hover:bg-[#F59E0B] transition">
              Enquire Now
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button className="mt-2 rounded-xl bg-[#FBBF24] py-3 font-semibold text-slate-900">
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}