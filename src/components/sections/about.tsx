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
            IT戦略コンサルティングにより、お客様のDX推進を支援し、
            AIを活用したシステム開発で業務効率化と競争力強化を実現します。
            さらに、アグリテック事業を通じて、農業のデジタル化と持続可能な食料生産に貢献します。
          </p>
          <p>
            「テクノロジーで、未来を切り拓く」をミッションに、
            変化の激しい時代において確かな技術力でお客様の事業成長をサポートしてまいります。
          </p>
        </div>
      </div>
    </section>
  );
}
