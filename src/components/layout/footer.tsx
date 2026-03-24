const footerLinks = [
  { href: "/#about", label: "会社紹介" },
  { href: "/#business", label: "事業内容" },
  { href: "/#company", label: "会社概要" },
  { href: "/#contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-heading text-lg font-semibold text-text-primary">
            Luminordia.Inc
          </p>
          <nav className="flex items-center gap-6" aria-label="フッターナビゲーション">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-4 text-center md:text-left">
          <address className="text-sm not-italic text-text-muted">
            〒160-0023 東京都新宿区西新宿3丁目3番13号西新宿水間ビル2F
          </address>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Luminordia.Inc All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
