"use client";

import useGetBBSAtRiskCategories from "@/hooks/api/bbs/useGetBBSAtRiskCategories";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartAtRiskCategories = ({ queries }) => {
  if (!queries.startDate) {
    delete queries.startDate;
  }

  if (!queries.endDate) {
    delete queries.endDate;
  }

  const { data: response, isLoading } = useGetBBSAtRiskCategories(queries);

  if (isLoading) {
    return "Loading...";
  }

  if (!response) {
    return;
  }

  const { totalRecords, data } = response;

  const calculatePercentage = (totalAtRisk, totalQuestion) => {
    return (totalAtRisk / (totalRecords * totalQuestion)) * 100;
  };

  const chartData = {
    // NOTE: change labels here
    labels: [
      "Body Position",
      "Body Usage",
      "Tools",
      "Procedure",
      "Work Area",
      "Office Ergonomics",
      "Maintenance",
      "Protective Equipment",
      "Driving",
    ],
    datasets: [
      {
        label: "Percentage At Risk",
        data: [
          calculatePercentage(
            data.bodyPosition.totalAtRisk,
            data.bodyPosition.totalQuestion
          ),
          calculatePercentage(
            data.bodyUsage.totalAtRisk,
            data.bodyUsage.totalQuestion
          ),
          calculatePercentage(data.tools.totalAtRisk, data.tools.totalQuestion),
          calculatePercentage(
            data.procedure.totalAtRisk,
            data.procedure.totalQuestion
          ),
          calculatePercentage(
            data.workArea.totalAtRisk,
            data.workArea.totalQuestion
          ),
          calculatePercentage(
            data.officeErgonomics.totalAtRisk,
            data.officeErgonomics.totalQuestion
          ),
          calculatePercentage(
            data.maintenance.totalAtRisk,
            data.maintenance.totalQuestion
          ),
          calculatePercentage(
            data.protectiveEquipment.totalAtRisk,
            data.protectiveEquipment.totalQuestion
          ),
          calculatePercentage(
            data.driving.totalAtRisk,
            data.driving.totalQuestion
          ),
        ],
        backgroundColor: [
          // NOTE: change bg color here
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        anchor: "center",
        align: "end",
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (a, b) => a + b,
            0
          );

          const percentage = ((value / total) * 100).toFixed(2);
          if (percentage === "0.00") {
            return "";
          }
          return `${
            context.chart.data.labels[context.dataIndex]
          }\n${percentage}%`;
        },
        font: {
          weight: "bold",
          size: "12",
        },
        color: 'black'
      },
    },
  };

  return (
    <div className="flex flex-col w-full h-full items-center gap-4">
      <h2 className="font-bold text-lg">Percentage of At-Risk Categories</h2>
      <Pie
        data={chartData}
        options={chartOptions}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default PieChartAtRiskCategories;
