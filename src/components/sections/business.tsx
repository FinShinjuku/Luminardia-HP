import Link from "next/link";
import { Monitor, Brain, Sprout, Wheat, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT戦略コンサルティング",
    description:
      "ビジネス課題を分析し、最適なIT戦略を立案。DX推進からシステム刷新まで、事業成長を支援します。",
  },
  {
    icon: Brain,
    title: "AIによるシステム開発",
    description:
      "業務プロセスの自動化・効率化システムを設計・開発。機械学習・自然言語処理を活用し、実用的なシステムを構築します。",
  },
  {
    icon: Sprout,
    title: "アグリテック",
    description:
      "IoT・AI・データ分析を農業分野に応用し、農業現場のデジタル化を実現。生産性向上と持続可能な農業を支援します。",
  },
  {
    icon: Wheat,
    title: "たばね - 農業DX SaaS",
    description:
      "農業生産者向けのロット管理・需要予測プラットフォーム。在庫管理と生産計画を最適化し、農協・取引先との連携をデジタル化します。",
    href: "/tabane",
  },
];

export function Business() {
  return (
    <section id="business" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
          Business
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const content = (
              <>
                <service.icon
                  size={40}
                  className="text-text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                {service.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text-primary">
                    詳しく見る
                    <ArrowRight size={14} />
                  </span>
                )}
              </>
            );

            return service.href ? (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                {content}
              </Link>
            ) : (
              <article
                key={service.title}
                className="rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
