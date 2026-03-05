import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6">
      <h1 className="font-heading text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-lg text-text-muted">
        ページが見つかりませんでした。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
      >
        トップに戻る
      </Link>
    </div>
  );
}
