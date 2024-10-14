"use client";

import PieChartAtRiskAndSafe from "./PieChartAtRIskAndSafe";
import PieChartAtRiskCategories from "./PieChartAtRiskCategories";
import TopFiveBBS from "./TopFiveBBS";

const SectionChart = ({ startDate, endDate }) => {
  return (
    <div className="mt-6 mb-12 grid grid-cols-3 gap-12">
      <PieChartAtRiskCategories queries={{ startDate, endDate }} />
      <PieChartAtRiskAndSafe queries={{ startDate, endDate }} />
      <TopFiveBBS queries={{ startDate, endDate }} />
    </div>
  );
};

export default SectionChart;
