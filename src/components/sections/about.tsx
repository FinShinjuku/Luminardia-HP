export function About() {
  return (
    <section id="about" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
          About Us
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

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
