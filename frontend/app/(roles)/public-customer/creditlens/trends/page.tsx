"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CreditRiskBarChart from "../components/CreditRiskBarChart";
import TrendSummaryCard from "../components/TrendSummaryCard";
import { Button } from "@/src/components/ui/button";
import CreditLensHeader from "@/src/components/ui/Creditlens-header";

export default function TrendsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-4 overflow-x-hidden px-1 sm:space-y-5 sm:px-2 lg:px-4">
      <CreditLensHeader title="Trends" subtitle="" name="John Doe" role="Public Customer" />

      <div className="pb-0 pt-1">
        <div className="grid min-w-0 items-start gap-4 md:gap-6 xl:grid-cols-[1.8fr_1fr] xl:gap-7">
          <div className="min-w-0 self-start rounded-2xl border border-slate-200/70 bg-white/90 px-4 pb-5 pt-4 shadow-[0_40px_80px_-35px_rgba(2,44,67,0.35)] sm:px-5 sm:pb-7 sm:pt-5 md:rounded-[26px]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm text-slate-500">6 Month Only</div>
                <div className="mt-1 truncate text-base font-semibold text-slate-900 sm:text-lg">
                  Credit Risk Score
                </div>
              </div>

              <Button variant="outline" className="shrink-0 rounded-full border-slate-300 bg-white px-4 sm:px-6">
                Month
              </Button>
            </div>

            <div className="mt-4 min-w-0">
              <CreditRiskBarChart />
            </div>
          </div>

          <TrendSummaryCard />
        </div>

        <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,#0b3a5a,#0a6ea5)] p-4 text-white shadow-lg sm:p-6 md:rounded-[26px] md:p-7">
          <div className="flex min-w-0 flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="break-words text-lg font-semibold leading-tight sm:text-xl md:text-2xl">
                Decrease your Credit Score
              </div>
              <p className="mt-2 max-w-3xl text-sm text-white/85">
                Understand the key factors increasing your credit risk and how they affect your
                overall score. Follow practical steps to reduce liabilities, improve payment
                behavior, and strengthen your financial profile.
              </p>
            </div>

            <div className="md:shrink-0">
              <Button
                onClick={() => router.push("/public-customer/creditlens/insight")}
                className="h-11 rounded-xl bg-white px-6 text-[#0b2447] hover:bg-white/90 sm:h-12 sm:px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
