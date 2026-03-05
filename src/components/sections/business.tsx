"use client";

import { Monitor, Brain, Sprout, Wheat } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const services = [
  {
    icon: Monitor,
    title: "IT戦略コンサルティング",
    description:
      "お客様のビジネス課題を分析し、最適なIT戦略を立案。DX推進からシステム刷新まで、テクノロジーによる事業成長を包括的にサポートします。",
  },
  {
    icon: Brain,
    title: "AIによるシステム開発",
    description:
      "最新のAI技術を活用したシステム開発で、業務プロセスの自動化・効率化を実現。機械学習・自然言語処理を駆使した高度なソリューションを提供します。",
  },
  {
    icon: Sprout,
    title: "アグリテック",
    description:
      "IoT・AI・データ分析を農業分野に応用し、生産性向上と持続可能な農業の実現を支援。スマート農業による次世代の食料生産に貢献します。",
  },
  {
    icon: Wheat,
    title: "たばね - 農業DX SaaS",
    description:
      "農業生産者向けのロット管理・需要予測プラットフォーム。在庫管理と生産計画を最適化し、農協・取引先との連携をデジタル化。シンプルな操作性で現場の負担を軽減します。",
  },
];

export function Business() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="business" className="py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
          Business
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <service.icon
                size={40}
                className="text-brand"
                strokeWidth={1.5}
              />
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
