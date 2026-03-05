"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "#about", label: "会社紹介" },
  { href: "#business", label: "事業内容" },
  { href: "#strength", label: "強み" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Luminardia.inc"
            width={180}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
