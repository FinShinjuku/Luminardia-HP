"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-light"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-surface/98 backdrop-blur-sm shadow-lg shadow-black/20">
          <nav className="flex flex-col px-6 py-4" aria-label="モバイルナビゲーション">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border-dark py-3 text-sm font-medium text-text-muted transition-colors hover:text-text-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
