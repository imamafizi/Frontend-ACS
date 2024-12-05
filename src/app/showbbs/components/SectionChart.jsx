"use client";

import PieChartAtRiskAndSafe from "./PieChartAtRIskAndSafe";
import PieChartAtRiskCategories from "./PieChartAtRiskCategories";
import TopFiveBBS from "./TopFiveBBS";

const SectionChart = ({ startDate, endDate }) => {
  return (
    <div className="mt-6 mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <PieChartAtRiskCategories queries={{ startDate, endDate }} />
      <PieChartAtRiskAndSafe queries={{ startDate, endDate }} />
      <TopFiveBBS queries={{ startDate, endDate }} />
    </div>
  );
};

export default SectionChart;
