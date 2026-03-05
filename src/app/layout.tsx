import type { Metadata } from "next";
import { Poppins, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luminardia.inc | 金融の未来を、テクノロジーで再定義する",
  description:
    "Luminardia.incは、金融基幹システム開発・AI・クラウドインフラの技術力で、ミッションクリティカルなシステムを構築するテクノロジー企業です。",
  keywords: ["Luminardia", "金融基幹システム", "AIシステム開発", "AWS", "IT戦略コンサルティング", "アグリテック"],
  openGraph: {
    title: "Luminardia.inc | 金融の未来を、テクノロジーで再定義する",
    description:
      "金融基幹システム開発 × AI × クラウドインフラ。ミッションクリティカルなシステムを構築。",
    type: "website",
    locale: "ja_JP",
    siteName: "Luminardia.inc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Luminardia.inc",
    foundingDate: "2026-03",
    address: {
      "@type": "PostalAddress",
      postalCode: "160-0023",
      addressRegion: "東京都",
      addressLocality: "新宿区",
      streetAddress: "西新宿3丁目3番13号西新宿水間ビル2F",
      addressCountry: "JP",
    },
    description:
      "金融基幹システム開発・AI・クラウドインフラの技術力で、ミッションクリティカルなシステムを構築するテクノロジー企業です。",
  };

  return (
    <html lang="ja" className={`${poppins.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
