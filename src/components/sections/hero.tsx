"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center px-6"
    >
      <div className="animate-fade-in-up text-center">
        <Image
          src="/luminardia-logo.png"
          alt="Luminordia.Inc"
          width={400}
          height={150}
          priority
          className="mx-auto mb-8 h-auto w-64 md:w-80"
        />
        <h1 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
          テクノロジーで、未来を切り拓く
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-lg">
          IT戦略・AI開発・アグリテックの力で、
          <br className="hidden sm:inline" />
          ビジネスに新たな価値を創造します。
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-text-muted transition-colors hover:text-brand"
        aria-label="会社紹介へスクロール"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
