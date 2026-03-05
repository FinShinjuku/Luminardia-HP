"use client";

import { useIntersection } from "@/hooks/use-intersection";

export function About() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="about" className="bg-bg-secondary py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
          About Us
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
          <p>
            Luminardia.incは、テクノロジーの力で社会課題を解決し、
            新たなビジネス価値を創造する企業です。
          </p>
          <p>
            創業者は、金融機関向け基幹システム開発で培った堅牢な設計力と、
            AWS
            Japanでのクラウド技術革新の推進経験を併せ持ちます。この「信頼性」と「先進性」の両軸が、Luminardia.incのサービス品質の基盤です。
          </p>
          <p>
            IT戦略コンサルティングによるDX推進支援、AIを活用したシステム開発、
            そしてアグリテック事業を通じた農業のデジタル化と持続可能な食料生産への貢献
            ——三つの事業領域で、お客様の成長を支えます。
          </p>
          <p className="mt-2 inline-flex items-center gap-2 border border-text-secondary/20 px-4 py-2 text-sm text-text-primary">
            <span className="font-semibold">特定非営利活動法人 金融IT協会（FITA）</span>
            <span className="text-text-secondary">個人会員</span>
          </p>
        </div>
      </div>
    </section>
  );
}
