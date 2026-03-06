import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="text-center">
        <Image
          src="/logo.jpg"
          alt="Luminardia.inc"
          width={400}
          height={150}
          priority
          className="mx-auto mb-8 h-auto w-64 md:w-80"
        />
        <h1 className="font-heading text-2xl font-bold leading-snug tracking-tight text-text-primary md:text-4xl">
          ITの課題を、戦略から実装まで解決する。
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
          金融基幹システム × AWSクラウドの経験を持つ
          <br />
          IT戦略コンサルティング・AI開発・農業DXの会社です。
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#business"
            className="text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-brand"
          >
            中小企業の方へ &rarr;
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-text-primary underline underline-offset-4 transition-colors hover:text-brand"
          >
            大企業・パートナーの方へ &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
