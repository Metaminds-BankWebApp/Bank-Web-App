"use client";

import React from "react";
import CreditLensHeader from "@/src/components/ui/Creditlens-header";

import KeyRiskFactorsCard from "../components/KeyRiskFactorsCard";
import PositiveBehaviorsCard from "../components/PositiveBehaviorsCard";
import FinancialTipsCard from "../components/FinancialTipsCard";
import FullReportBanner from "../components/FullReportBanner";

export default function InsightPage() {
  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-4 overflow-x-hidden px-1 sm:space-y-5 sm:px-2 lg:px-4">
      <CreditLensHeader
        title="Credit Insight"
        subtitle=""
        name="Kamal Edirisinghe"
        role="Public Customer"
      />

      <div className="pb-0 pt-1 sm:pt-2">
        <div className="grid min-w-0 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-7">
          <KeyRiskFactorsCard />
          <PositiveBehaviorsCard />
          <FinancialTipsCard />
        </div>

        <FullReportBanner />
      </div>
    </div>
  );
}
