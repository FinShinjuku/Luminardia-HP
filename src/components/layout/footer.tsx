export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-heading text-lg font-semibold text-text-primary">
            Luminardia.inc
          </p>
          <address className="text-sm not-italic text-text-muted">
            〒160-0023 東京都新宿区西新宿3丁目3番13号西新宿水間ビル2F
          </address>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Luminardia.inc All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
