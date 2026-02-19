"use client";

import { useRouter } from "next/navigation";
import CreditRiskGauge from "./components/CreditRiskGauge";
import CreditRiskTrendChart from "./components/CreditRiskTrendChart";
import RiskFactorBars from "./components/RiskFactorBars";
import CreditLensHeader from "@/src/components/ui/Creditlens-header";

export default function PublicCustomerCreditLensPage() {
  const router = useRouter();
  const score = 55;
  const riskLabel = "Medium";

  const factors = [
    { name: "Payment history", value: 18, max: 30, color: "#fbbf24" },
    { name: "DTI", value: 12, max: 25, color: "#34d399" },
    { name: "Credit utilization", value: 20, max: 20, color: "#ef4444" },
    { name: "Income stability", value: 0, max: 15, color: "#e5e7eb" },
    { name: "Active Facilities", value: 5, max: 10, color: "#34d399" },
  ];

  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-4 overflow-x-hidden px-1 sm:space-y-5 sm:px-2 lg:px-4">
      <CreditLensHeader title="Dashboard" subtitle="" name="John Doe" role="Public Customer" />

      <section className="rounded-2xl bg-[radial-gradient(circle_at_25%_20%,#0d4a6d_0%,#082a43_48%,#061f34_100%)] px-4 pb-4 pt-3 text-white shadow-md sm:px-6 sm:pb-6 sm:pt-4 md:rounded-[26px]">
        <div className="mt-3 grid min-w-0 gap-6 lg:mt-4 lg:grid-cols-[minmax(0,550px)_minmax(0,1fr)] lg:gap-8">
          <div className="flex min-w-0 flex-col items-center justify-center">
            <h3 className="text-base font-semibold text-white/90 sm:text-lg">Your Credit Risk Score</h3>

            <div className="relative h-[220px] w-full max-w-[360px] sm:h-[250px] sm:max-w-[420px] lg:h-[260px]">
              <CreditRiskGauge value={score} />

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-10">
                <div className="text-3xl font-extrabold tracking-tight text-[#fbbf24] sm:text-4xl">{score}</div>
                <div className="mt-1 text-sm text-white/80 sm:mt-2 sm:text-base">{riskLabel}</div>
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-col justify-center lg:flex lg:pr-6">
            <h4 className="mb-3 text-center text-base font-semibold text-white/90 sm:text-lg">Score Factors</h4>
            <div className="min-w-0">
              <RiskFactorBars factors={factors} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid min-w-0 gap-4 md:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="min-w-0 rounded-2xl bg-[linear-gradient(135deg,#0b2a44,#072033)] p-4 text-white shadow-sm md:rounded-[26px] sm:p-5">
          <div className="mb-3 flex min-w-0 items-center justify-between gap-3">
            <h4 className="min-w-0 truncate text-base font-semibold sm:text-lg">
              Credit risk score in this last 6 months
            </h4>

            <button
              onClick={() => router.push("/public-customer/creditlens/trends")}
              className="inline-flex shrink-0 items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              Show All
              <span aria-hidden>-&gt;</span>
            </button>
          </div>

          <CreditRiskTrendChart />
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0b2a44,#072033)] p-4 text-white shadow-sm md:rounded-[26px] sm:p-5">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />

          <div className="flex h-full min-w-0 flex-col justify-between">
            <div className="min-w-0">
              <h4 className="break-words text-lg font-semibold leading-tight sm:text-xl">
                Decrease your Credit Risk Score
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Understand the key factors increasing your credit risk and how they affect your
                overall score. Follow practical steps to reduce liabilities, improve payment
                behavior, and strengthen your financial profile.
              </p>
            </div>

            <div className="mt-5 sm:mt-6">
              <button
                onClick={() => router.push("/public-customer/creditlens/insight")}
                className="rounded-md bg-white px-4 py-2 font-medium text-[#072033] hover:bg-white/90"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
