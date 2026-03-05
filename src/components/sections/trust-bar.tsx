"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { Shield, Clock, Server, Award } from "lucide-react";

const stats = [
  { icon: Award, label: "金融基幹開発", value: "10年+" },
  { icon: Server, label: "AWS Advanced", value: "Partner" },
  { icon: Shield, label: "FISC準拠", value: "対応" },
  { icon: Clock, label: "運用監視", value: "24/365" },
];

export function TrustBar() {
  const { ref, isVisible } = useIntersection();

  return (
    <section className="bg-surface py-10 md:py-14">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <stat.icon size={28} className="shrink-0 text-text-muted" strokeWidth={1.5} />
              <div>
                <p className="font-heading text-xl font-bold text-text-light md:text-2xl">
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted md:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
