"use client";

import useGetBBSAtRiskAndSafe from "@/hooks/api/bbs/useGetBBSAtRiskAndSafe";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartAtRiskAndSafe = ({ queries }) => {
  if (!queries.startDate) {
    delete queries.startDate;
  }

  if (!queries.endDate) {
    delete queries.endDate;
  }

  const { data: response, isLoading } = useGetBBSAtRiskAndSafe(queries);

  if (isLoading) {
    return "Loading...";
  }

  if (!response) {
    return;
  }

  const chartData = {
    // NOTE: change labels here
    labels: ["Safe", "At Risk"],
    datasets: [
      {
        label: "Percentage",
        data: [response.percentages.safe, response.percentages.atRisk],
        backgroundColor: [
          // NOTE: change bg color here
          "#36A2EB",
          "#FF6384",
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col w-full h-full items-center gap-4">
      <h2 className="font-bold text-lg">Percentage of At-Risk and Safe</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            datalabels: {
              anchor: "center",
              align: "end",
              formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
                const percentage = Math.round(
                  (value /
                    (response.percentages.safe + response.percentages.atRisk)) *
                    100
                );
                return `${label}\n${percentage}%`;
              },
              font: {
                weight: "bold",
                size: "12",
              },
              color: "black",
            },
          },
        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default PieChartAtRiskAndSafe;
