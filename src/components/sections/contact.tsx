"use client";

import { useIntersection } from "@/hooks/use-intersection";

export function Contact() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-light md:text-3xl">
          Contact
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-6"
          aria-label="お問い合わせフォーム"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-text-light"
              >
                会社名
              </label>
              <input
                id="company-name"
                type="text"
                className="mt-1 w-full rounded-md border border-border-dark bg-dark px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-brand"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-light"
              >
                お名前 <span className="text-brand">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-border-dark bg-dark px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-light"
              >
                メールアドレス <span className="text-brand">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-border-dark bg-dark px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-brand"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text-light"
              >
                電話番号
              </label>
              <input
                id="phone"
                type="tel"
                className="mt-1 w-full rounded-md border border-border-dark bg-dark px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-light"
            >
              お問い合わせ内容 <span className="text-brand">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-border-dark bg-dark px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-brand"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled
              className="inline-flex items-center gap-2 rounded-md bg-brand px-8 py-3 text-sm font-medium text-white opacity-60 cursor-not-allowed"
            >
              送信（準備中）
            </button>
            <p className="mt-2 text-xs text-text-muted">
              送信機能は現在準備中です。お急ぎの方は直接ご連絡ください。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
