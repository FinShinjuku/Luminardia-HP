"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Shield, Lock, Eye } from "lucide-react";

const certifications = [
  { label: "FISC安全対策基準", sub: "金融情報システムセンター" },
  { label: "ISO 27001", sub: "情報セキュリティマネジメント" },
  { label: "SOC 2 Type II", sub: "セキュリティ・可用性" },
];

const metrics = [
  { icon: Shield, value: "99.99%", label: "SLA稼働率" },
  { icon: Lock, value: "Multi-AZ", label: "冗長構成" },
  { icon: Eye, value: "24/365", label: "セキュリティ監視" },
];

export function Security() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="security" className="bg-dark py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-2xl font-bold text-text-light md:text-3xl">
          Security & Compliance
        </h2>
        <div className="mt-2 h-1 w-12 bg-brand" />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent2">
              認証・準拠
            </p>
            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="rounded-lg border border-border-dark bg-surface px-6 py-4"
                >
                  <p className="font-heading text-base font-semibold text-text-light">
                    {cert.label}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent2">
              インフラ指標
            </p>
            <div className="mt-6 space-y-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-5 rounded-lg border border-border-dark bg-surface px-6 py-4"
                >
                  <metric.icon size={28} className="shrink-0 text-text-muted" strokeWidth={1.5} />
                  <div>
                    <p className="font-heading text-xl font-bold text-text-light">
                      {metric.value}
                    </p>
                    <p className="text-xs text-text-muted">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
