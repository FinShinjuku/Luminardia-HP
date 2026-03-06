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
  title: "Luminardia.inc | IT戦略・AI開発・農業DX",
  description:
    "金融基幹システムとAWSクラウドの経験を持つIT戦略コンサルティング・AI開発・農業DX企業。中小企業のDX推進から大企業のシステム刷新まで、戦略立案から実装までを一貫支援します。",
  keywords: [
    "IT戦略コンサルティング",
    "AI開発",
    "農業DX",
    "DX推進",
    "システム開発",
    "アグリテック",
    "Luminardia",
  ],
  openGraph: {
    title: "Luminardia.inc | IT戦略・AI開発・農業DX",
    description:
      "金融基幹システムとAWSクラウドの経験を活かし、IT戦略コンサルティング・AI開発・農業DXを展開。",
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
    founder: {
      "@type": "Person",
      name: "神原 一晃",
    },
    address: {
      "@type": "PostalAddress",
      postalCode: "160-0023",
      addressRegion: "東京都",
      addressLocality: "新宿区",
      streetAddress: "西新宿3丁目3番13号西新宿水間ビル2F",
      addressCountry: "JP",
    },
    memberOf: {
      "@type": "Organization",
      name: "特定非営利活動法人 金融IT協会（FITA）",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "サービス一覧",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT戦略コンサルティング",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AIによるシステム開発",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "アグリテック",
          },
        },
      ],
    },
    description:
      "金融基幹システムとAWSクラウドの経験を活かし、IT戦略コンサルティング・AI開発・農業DXを展開する企業です。",
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
