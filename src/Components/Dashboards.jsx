import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "./Dashboards.css";
import mapImage from "../images/map1.png";
import { Margin } from "@mui/icons-material";

// Register all necessary components
Chart.register(...registerables);


const Dashboards = () => {
  const products = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];
  const stats = [
    {
      title: "Customers",
      value: "3,781",
      growth: "+11.01%",
      growthPositive: true,
    },
    {
      title: "Orders",
      value: "1,219",
      growth: "-0.03%",
      growthPositive: false,
    },
    {
      title: "Revenue",
      value: "$695",
      growth: "+15.03%",
      growthPositive: true,
    },
    {
      title: "Growth",
      value: "30.1%",
      growth: "+6.08%",
      growthPositive: true,
    },
  ];

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Actual",
        data: [10, 15, 12, 20, 10, 18],
        backgroundColor: "rgba(53, 162, 235, 0.8)",
        barThickness: 20,
        categoryPercentage: 0.8,
      },
      {
        label: "Projection",
        data: [20, 25, 22, 30, 18, 25],
        backgroundColor: "rgba(53, 162, 235, 0.4)",
        barThickness: 20,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            return `${value}M`;
          },
          stepSize: 10,
          beginAtZero: true,
        },
      },
    },
  };

  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: [10, 12, 8, 15, 10, 18],
        borderColor: "black",
        backgroundColor: "transparent",
        borderWidth: 2,
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 3,
      },
      {
        label: "Previous Week",
        data: [15, 10, 12, 8, 18, 20],
        borderColor: "rgba(53, 162, 235, 0.6)",
        backgroundColor: "transparent",
        borderWidth: 2,
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 3,
        borderDash: [5, 5],
      },
    ],
  };

  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value}M`;
          },
        },
      },
    },
  };
  const locations = [
    { city: "New York", revenue: "72K", percentage: 80 },
    { city: "San Francisco", revenue: "39K", percentage: 50 },
    { city: "Sydney", revenue: "25K", percentage: 30 },
    { city: "Singapore", revenue: "61K", percentage: 70 },
  ];
  const circledata = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ["#000000", "#83E6C7", "#B1C3FF", "#A6D8FF"],
        hoverBackgroundColor: ["#333333", "#72D6B6", "#9CB2F7", "#94C7EF"],
        borderWidth: 0,
      },
    ],
  };

  const circleoptions = {
    responsive: true,
    cutout: "70%", // Adjusts the size of the donut hole
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltip as the number is displayed inside the chart
      },
    },
  };

  
  return (
   
    <div className="dashboard">
      <div className="stats-container">
        <h1 className="section-title">eCommerce</h1>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              className={`stat-card ${stat.growthPositive ? "positive" : "negative"}`}
              key={index}
            >
              <h2 className="stat-title">{stat.title}</h2>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-growth">
                {stat.growth}
                <span className="arrow">{stat.growthPositive ? "↗" : "↘"}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Projections vs Actuals</h3>
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="chart-card1">
        <h3 className="chart-title1">
          Revenue <span className="legend-label1">● Current Week $58,211</span> <span className="legend-label1">● Previous Week $68,768</span>
        </h3>
        <div className="chart-container1">
          <Line data={data1} options={options1} />
        </div>
      </div>
      <div className="location-card">
        <h3 className="card-title">Revenue by Location</h3>
        <div className="world-map">
          {/* Updated image reference */}
          <img src={mapImage} alt="World Map" />
          {/* Map markers */}
          {/* <div className="marker marker-new-york"></div>
          <div className="marker marker-san-francisco"></div>
          <div className="marker marker-sydney"></div>
          <div className="marker marker-singapore"></div> */}
        </div>
        <ul className="location-list">
          {locations.map((location, index) => (
            <li key={index} className="location-item">
              <div className="location-info">
                <span className="city-name">{location.city}</span>
                <span className="revenue">{location.revenue}</span>
              </div>
              <div className="revenue-bar">
                <div
                  className="progress"
                  style={{ width: `${location.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sales-card">
  <h3 className="card-title2">Total Sales</h3>
  <div className="chart-container2">
    <Doughnut data={circledata} options={circleoptions} />
    <div className="chart-center">
      <p>38.6%</p>
    </div>
  </div>
  <div className="sales-list-grid">
    <div className="sales-item">
      <span className="dot black"></span> <p>Direct</p> <span>$300.56</span>
    </div>
    <div className="sales-item">
      <span className="dot green"></span> <p>Affiliate</p> <span>$135.18</span>
    </div>
    <div className="sales-item">
      <span className="dot purple"></span> <p>Sponsored</p> <span>$154.02</span>
    </div>
    <div className="sales-item">
      <span className="dot blue"></span> <p>E-mail</p> <span>$48.96</span>
    </div>
  </div>
  <div className="top-selling-card">
      <h3 className="card-titles1">Top Selling Products</h3>
      <table className="top-selling-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>

    </div>
    
  );
};

export default Dashboards;
