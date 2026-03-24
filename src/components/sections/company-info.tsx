"use client";

import { useIntersection } from "@/hooks/use-intersection";

const companyData = [
  { label: "会社名", value: "Luminordia.Inc" },
  { label: "設立", value: "2026年3月" },
  {
    label: "所在地",
    value: "〒160-0023 東京都新宿区西新宿3丁目3番13号西新宿水間ビル2F",
  },
  {
    label: "事業内容",
    value: "IT戦略コンサルティング / AIによるシステム開発 / アグリテック",
  },
];

export function CompanyInfo() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="company" className="bg-bg-secondary py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
          Company
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <dl className="mt-8 divide-y divide-border">
          {companyData.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8"
            >
              <dt className="w-32 shrink-0 text-sm font-medium text-text-primary">
                {item.label}
              </dt>
              <dd className="text-sm text-text-secondary">
                {"isEmail" in item && item.isEmail ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="transition-colors hover:text-brand"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
