"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center bg-dark px-6"
    >
      <div className="animate-fade-in-up text-center">
        <Image
          src="/logo.jpg"
          alt="Luminardia.inc"
          width={400}
          height={150}
          priority
          className="mx-auto mb-10 h-auto w-64 md:w-80"
        />
        <h1 className="font-heading text-3xl font-bold tracking-tight text-text-light md:text-5xl lg:text-[3.5rem]">
          金融の未来を、テクノロジーで再定義する
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-text-muted md:text-lg">
          金融基幹システム開発 × AI × クラウドインフラ
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            お問い合わせ
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-text-muted transition-colors hover:text-text-light"
        aria-label="会社紹介へスクロール"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
