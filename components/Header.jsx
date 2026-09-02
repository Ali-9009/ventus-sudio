"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MoveRight, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Term and Conditions", href: "/term-and-conditions" },
  ];

  return (
    <>
      <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/40 py-3 backdrop-blur-md" : "bg-transparent py-5"}`}>
        <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <Link href="/">
            <h3 className="uppercase font-semibold">Ventus Studio</h3>
          </Link>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="text-xs uppercase tracking-wide text-white"
            >
              ENG / UA
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-8 w-8 flex-col items-end justify-center gap-2 text-white"
              aria-label="Open menu"
            >
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-7 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-100 transition-all duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <aside className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-neutral-950 shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <Link href="/">
              <h3 className="uppercase font-semibold">Ventus Studio</h3>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="h-[calc(100vh-90px)] overflow-y-auto p-6">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 px-1 py-4 text-sm uppercase tracking-wide text-white transition hover:opacity-60"
                >
                  {link.name}
                  <span><MoveRight /></span>
                </Link>
              ))}
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}