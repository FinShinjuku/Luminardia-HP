"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Database, ShieldCheck, Cpu } from "lucide-react";

const strengths = [
  {
    icon: Database,
    title: "金融基幹グレードの開発力",
    description:
      "ミッションクリティカルな金融基幹システムの構築実績。ゼロダウンタイム、トランザクション整合性、監査証跡を標準装備した開発プロセスで、信頼性の高いシステムを提供します。",
  },
  {
    icon: ShieldCheck,
    title: "AWS金融リファレンス相当の堅牢性",
    description:
      "マルチAZ冗長構成、保存時・転送時の完全暗号化、FISC安全対策基準への準拠。金融機関が求めるセキュリティ水準をクラウドインフラ上で実現します。",
  },
  {
    icon: Cpu,
    title: "最先端AIテクノロジー",
    description:
      "大規模言語モデル(LLM)の活用、業務プロセス自動化、データドリブン意思決定支援。最新のAI技術を実務に適用し、ビジネスの生産性と競争力を飛躍的に向上させます。",
  },
];

export function Strength() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="strength" className="bg-surface py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-light md:text-3xl">
          Strength
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-border-dark bg-dark p-8"
            >
              <item.icon size={36} className="text-accent2" strokeWidth={1.5} />
              <h3 className="mt-5 font-heading text-lg font-semibold text-text-light">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
