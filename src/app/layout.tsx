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
  title: "Luminardia.inc | テクノロジーで、未来を切り拓く",
  description:
    "Luminardia.incは、IT戦略コンサルティング、AIによるシステム開発、アグリテック事業を通じて、テクノロジーで未来を切り拓く企業です。",
  keywords: ["Luminardia", "IT戦略", "AIシステム開発", "アグリテック", "コンサルティング"],
  openGraph: {
    title: "Luminardia.inc | テクノロジーで、未来を切り拓く",
    description:
      "IT戦略コンサルティング、AIによるシステム開発、アグリテック事業を展開。",
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
      "IT戦略コンサルティング、AIによるシステム開発、アグリテック事業を展開する企業です。",
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
