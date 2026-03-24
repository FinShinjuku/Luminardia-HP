"use client";

import { useIntersection } from "@/hooks/use-intersection";

export function Contact() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
          Contact
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const companyName = (form.elements.namedItem("company-name") as HTMLInputElement).value;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
            const subject = `【お問い合わせ】${companyName ? companyName + " " : ""}${name}様`;
            const body = `会社名: ${companyName || "未記入"}\nお名前: ${name}\nメール: ${email}\n電話番号: ${phone || "未記入"}\n\nお問い合わせ内容:\n${message}`;
            window.location.href = `mailto:k.kanbara@luminordia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}
          className="mt-8 space-y-6"
          aria-label="お問い合わせフォーム"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-text-primary"
              >
                会社名
              </label>
              <input
                id="company-name"
                type="text"
                className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-primary"
              >
                お名前 <span className="text-brand">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary"
              >
                メールアドレス <span className="text-brand">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text-primary"
              >
                電話番号
              </label>
              <input
                id="phone"
                type="tel"
                className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-primary"
            >
              お問い合わせ内容 <span className="text-brand">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-brand"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
