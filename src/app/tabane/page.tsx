import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Phone,
  Brain,
  ClipboardList,
  Truck,
  CheckCircle,
  Factory,
  HardHat,
  Store,
  Wheat as WheatIcon,
  BarChart3,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "たばね - 農業DX SaaS | Luminardia.inc",
  description:
    "農家の最小入力で、注文・出荷・在庫がすべて繋がる。ロット管理・需要予測プラットフォーム。",
};

const challenges = [
  {
    icon: Phone,
    title: "注文が電話とFAX",
    description: "毎朝の集計に30分。聞き間違い・伝達ミスが日常的に発生。",
  },
  {
    icon: Brain,
    title: "在庫は頭の中",
    description:
      "正確な数字がない。工場長の経験と勘だけが頼り。引き継ぎもできない。",
  },
  {
    icon: Truck,
    title: "出荷は当日確定",
    description:
      "見込みが立たないから、朝になってから慌てて段取りする。余剰も欠品も起こる。",
  },
];

const philosophies = [
  {
    number: "01",
    title: '在庫は"数"で管理する',
    description:
      "重量は不確実。収穫前のロット数こそが在庫の基礎。数えられるものを数える。",
  },
  {
    number: "02",
    title: '予測は"下限寄り"',
    description:
      "外しても困らない側に倒す。過剰予測より、確実な下限値で計画を立てる。",
  },
  {
    number: "03",
    title: "人間の判断を否定しない",
    description:
      "AIは補助。ロットの終了は人が決める。現場の判断を尊重するシステム設計。",
  },
  {
    number: "04",
    title: "JAを置き換えない",
    description:
      "集出荷はJAの領域。私たちはその前段 ― 生産計画と在庫把握を担う。",
  },
  {
    number: "05",
    title: "単位の翻訳をする",
    description:
      "農家はロット、JAはケース、飲食店はkg。同じデータを、それぞれの言語で届ける。",
  },
];

const threeInputs = [
  {
    icon: ClipboardList,
    title: "注文を受ける",
    description: "納入先がポータルから発注。電話・FAX不要。",
  },
  {
    icon: Truck,
    title: "出荷を記録する",
    description: "出荷したロット数をタップするだけ。",
  },
  {
    icon: CheckCircle,
    title: "ロットを終了する",
    description: "使い切ったロットを閉じる。在庫が自動更新。",
  },
];

const users = [
  {
    icon: Factory,
    title: "工場長（農家）",
    description: "生産計画・全体管理。1日の操作は5分以内。",
  },
  {
    icon: HardHat,
    title: "作業員",
    description: "作業指示を確認するだけ。入力不要。",
  },
  {
    icon: Store,
    title: "納入先",
    description: "発注ポータルから注文。アカウント作成不要。",
  },
  {
    icon: WheatIcon,
    title: "JA職員",
    description: "ケース単位のビューで朝イチの段取りを確認。",
  },
  {
    icon: BarChart3,
    title: "経営者",
    description: "売上・経営分析レポートを週次で確認。",
  },
];

export default function TabanePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-bg-secondary pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/#business"
              className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-brand"
            >
              <ArrowLeft size={16} />
              事業一覧に戻る
            </Link>
            <h1 className="mt-6 font-heading text-3xl font-bold text-text-primary md:text-5xl">
              たばね
            </h1>
            <p className="mt-2 font-heading text-lg text-brand md:text-xl">
              農業DX SaaS
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
              農家の最小入力で、注文・出荷・在庫がすべて繋がる。
            </p>
          </div>
        </section>

        {/* 課題セクション */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              農業の現実
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />
            <p className="mt-6 max-w-2xl text-text-secondary">
              入力が増えるとやめる。複雑になると見ない。
              農家にとってITツールは「使いこなすもの」ではなく「邪魔にならないもの」でなければならない。
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {challenges.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-white p-8"
                >
                  <item.icon
                    size={36}
                    className="text-brand"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 設計思想セクション */}
        <section className="bg-bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              5つの設計思想
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {philosophies.map((item) => (
                <article
                  key={item.number}
                  className="rounded-lg border border-border bg-white p-8"
                >
                  <span className="font-heading text-3xl font-bold text-brand/20">
                    {item.number}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3入力ルール */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              3つの入力だけ
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />
            <p className="mt-6 max-w-2xl text-text-secondary">
              朝5分で、今日やるべきことがすべてわかる。
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {threeInputs.map((item, index) => (
                <article key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <span className="font-heading text-lg font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 対象ユーザー */}
        <section className="bg-bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              対象ユーザー
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {users.map((user) => (
                <article
                  key={user.title}
                  className="rounded-lg border border-border bg-white p-6 text-center"
                >
                  <user.icon
                    size={32}
                    className="mx-auto text-brand"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-3 font-heading text-sm font-semibold text-text-primary">
                    {user.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    {user.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 協業先 */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              協業パートナー
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />
            <p className="mt-6 max-w-2xl text-text-secondary">
              たばねは、地域の農業と食を支えるパートナーとともに歩んでいます。
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <a
                href="https://toyamanome.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  一般社団法人とやまのめ
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  「人と地域をイキイキの連鎖でつなぐ」をミッションに、富山の地域活性化と人的ネットワーク構築を推進する団体。
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                  Webサイト
                  <ExternalLink size={14} />
                </span>
              </a>

              <a
                href="https://farmers-u35.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  Farmers Japan Under 35
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  富山発の35歳以下の若手農家・料理人・食の専門家が集い、「農業はかっこいい」を合言葉に農業の新たな価値を創出するコミュニティ。
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                  Webサイト
                  <ExternalLink size={14} />
                </span>
              </a>

              <a
                href="https://www.i-effortact.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  株式会社effortact
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  IT人材コーディネート・システム開発・ITコンサルティングを通じて、新しい未来を創造するIT企業。DX推進と人材育成を支援。
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                  Webサイト
                  <ExternalLink size={14} />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              お問い合わせ
            </h2>
            <p className="mt-4 text-text-secondary">
              たばねの導入・デモのご相談はお気軽にどうぞ。
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-lg bg-brand px-8 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
