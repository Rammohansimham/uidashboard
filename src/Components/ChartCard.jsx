import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Current Week",
      data: [10, 20, 30, 40, 50],
      borderColor: "#42A5F5",
      backgroundColor: "rgba(66, 165, 245, 0.2)",
    },
    {
      label: "Previous Week",
      data: [15, 25, 35, 45, 55],
      borderColor: "#FFA726",
      backgroundColor: "rgba(255, 167, 38, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const ChartCard = () => {
  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartCard;
