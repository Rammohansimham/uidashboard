import React from "react";
import Dashboards from "../Components/Dashboards";
import MetricCard from "../Components/MetricCard";
import ChartCard from "../Components/ChartCard";
import Table from "../Components/Table"         // Ensure 'Table.jsx' exists
import SideBar1 from "../Components/SideBar1";
import Topbar from "../Components/Topbar";
import RightNavBar from "../Components/RightNavBar";
import { ThemeContextProvider } from "../Components/ThemeContext";


const Dashboard = () => {
  return (
    
    <div style={{  display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <SideBar1/>
        <Topbar/>
        <Dashboards/>
        <RightNavBar/>
        {/* <MetricCard title="Customers" value="3,781" growth="+11.0%" />
        <MetricCard title="Orders" value="1,219" growth="-0.03%" />
        <MetricCard title="Revenue" value="$695" growth="+15.0%" />
        <MetricCard title="Growth" value="30.1%" growth="+4.08%" /> */}
      </div>
      {/* <ChartCard />
      <Table /> */}
    </div>
    
  );
};

export default Dashboard;
