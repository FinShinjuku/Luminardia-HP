export function About() {
  return (
    <section id="about" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
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
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
            代表の実績
          </h3>
          <ul className="mt-4 space-y-3 text-base text-text-secondary md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-primary" />
              金融機関向け基幹システム開発
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-primary" />
              AWS Japan クラウド技術推進
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-primary" />
              <span>
                FITA（金融IT協会）
                <span className="ml-2 inline-block border border-text-secondary/20 px-2 py-0.5 text-sm text-text-muted">
                  個人会員
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
