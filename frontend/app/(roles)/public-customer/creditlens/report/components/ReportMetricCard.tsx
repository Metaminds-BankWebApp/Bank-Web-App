"use client";

import React from "react";

type Tone = "green" | "orange" | "blue" | "violet";

const toneStyles: Record<Tone, { ring: string; iconBg: string; icon: string }> = {
  green: { ring: "border-emerald-200", iconBg: "bg-emerald-50", icon: "text-emerald-600" },
  orange: { ring: "border-amber-200", iconBg: "bg-amber-50", icon: "text-amber-600" },
  blue: { ring: "border-sky-200", iconBg: "bg-sky-50", icon: "text-sky-600" },
  violet: { ring: "border-violet-200", iconBg: "bg-violet-50", icon: "text-violet-600" },
};

export default function ReportMetricCard({
  title,
  value,
  subValue,
  icon,
  tone = "blue",
}: {
  title: string;
  value: string;
  subValue?: string;
  icon: React.ReactNode;
  tone?: Tone;
}) {
  const t = toneStyles[tone];

  return (
    <div
      className={`rounded-2xl border ${t.ring} bg-white/80 p-5 shadow-[0_14px_45px_-35px_rgba(2,44,67,0.40)]`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${t.iconBg} ${t.icon}`}>
          {icon}
        </div>

        <div className="flex-1">
          <div className="text-sm font-medium text-slate-600">{title}</div>

          <div className="mt-2 flex items-end justify-between gap-3">
            <div className="text-xl font-bold text-slate-900">{value}</div>
            {subValue ? (
              <div className="text-xs text-slate-500 text-right leading-tight">
                {subValue}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
