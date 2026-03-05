"use client";

import { useIntersection } from "@/hooks/use-intersection";

export function About() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="about" className="bg-dark py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-text-light md:text-3xl">
              About Us
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted md:text-lg">
              <p>
                Luminardia.incは、金融業界出身の技術集団です。
                ミッションクリティカルなシステム開発で培った堅牢性と、
                最新AIテクノロジーの革新性を融合させ、
                企業の成長を支えるソリューションを提供します。
              </p>
              <p>
                金融基幹システムの構築実績に裏打ちされた品質基準と、
                AWS上での高可用性インフラ設計力を武器に、
                お客様のビジネスに確かな信頼と新たな価値を創造します。
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border-dark bg-surface p-8 md:p-10">
            <p className="font-heading text-lg font-semibold text-accent2">Mission</p>
            <p className="mt-4 font-heading text-2xl font-bold leading-snug text-text-light md:text-3xl">
              堅牢性と革新性の融合
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              金融グレードの信頼性を基盤に、AIとクラウドの力で
              ビジネスの可能性を拡張する。それが私たちの使命です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
