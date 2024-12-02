import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import "./ProfileDashboard.css";
import { TextField, IconButton, Button, Box, InputAdornment } from "@mui/material";
import { Add, FilterList, Sort, Search } from "@mui/icons-material";
import { useTheme } from "../Components/ThemeContext";

const ProfileDashboard = () => {
  const { theme } = useTheme(); 
  const initialOrders = [
    { id: "#CM9801", user: "Natali Craig", userImage: "https://cdn-icons-png.flaticon.com/512/147/147144.png", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", statusColor: "blue" },
    { id: "#CM9802", user: "Kate Morrison", userImage: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", statusColor: "green" },
    { id: "#CM9803", user: "Drew Cano", userImage: "https://cdn-icons-png.flaticon.com/512/236/236831.png", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", statusColor: "orange" },
    { id: "#CM9804", user: "Orlando Diggs", userImage: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", statusColor: "yellow" },
    { id: "#CM9805", user: "Andi Lane", userImage: "https://cdn-icons-png.flaticon.com/512/2922/2922556.png", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", statusColor: "grey" },
    { id: "#CM9806", user: "Megan Fox", userImage: "https://cdn-icons-png.flaticon.com/512/2922/2922578.png", project: "Website Redesign", address: "Oak Street New York", date: "2 hours ago", status: "Pending", statusColor: "orange" },
    { id: "#CM9807", user: "John Smith", userImage: "https://cdn-icons-png.flaticon.com/512/236/236831.png", project: "E-commerce Platform", address: "Pine Road Chicago", date: "3 hours ago", status: "In Progress", statusColor: "blue" },
    { id: "#CM9808", user: "Alice Wonder", userImage: "https://cdn-icons-png.flaticon.com/512/1256/1256653.png", project: "Mobile App", address: "River Avenue Boston", date: "4 hours ago", status: "Complete", statusColor: "green" },
    { id: "#CM9809", user: "Robert Brown", userImage: "https://cdn-icons-png.flaticon.com/512/4298/4298373.png", project: "CRM Integration", address: "Elm Lane Miami", date: "1 day ago", status: "Approved", statusColor: "yellow" },
    { id: "#CM9810", user: "Sophia Davis", userImage: "https://cdn-icons-png.flaticon.com/512/1154/1154473.png", project: "Marketing Website", address: "Sunset Boulevard Los Angeles", date: "Feb 1, 2023", status: "Rejected", statusColor: "grey" },
    { id: "#CM9811", user: "Daniel Wright", userImage: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png", project: "Client Landing Page", address: "King Street Dallas", date: "Feb 2, 2023", status: "Complete", statusColor: "green" },
    { id: "#CM9812", user: "Emily Clark", userImage: "https://cdn-icons-png.flaticon.com/512/2922/2922585.png", project: "Admin Panel", address: "Maple Drive Houston", date: "3 days ago", status: "In Progress", statusColor: "blue" },
    { id: "#CM9813", user: "James White", userImage: "https://cdn-icons-png.flaticon.com/512/847/847969.png", project: "Blog Redesign", address: "Park Avenue Denver", date: "4 days ago", status: "Pending", statusColor: "orange" },
    { id: "#CM9814", user: "Lucas Lee", userImage: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png", project: "Dashboard Development", address: "Broadway Street San Francisco", date: "1 week ago", status: "Approved", statusColor: "yellow" },
    { id: "#CM9815", user: "Grace Harris", userImage: "https://cdn-icons-png.flaticon.com/512/599/599305.png", project: "Portfolio Website", address: "High Street Phoenix", date: "2 weeks ago", status: "Rejected", statusColor: "grey" },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const rowsPerPage = 10;  // Updated to 10 rows per page
  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const currentData = orders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const statusColorMap = {
    "In Progress": "blue",
    Complete: "green",
    Pending: "orange",
    Approved: "yellow",
    Rejected: "grey",
  };

  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? { ...order, status: newStatus, statusColor: statusColorMap[newStatus] }
          : order
      )
    );
    setDropdownOpen(null); // Close dropdown after selection
  };

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };
 
  const handleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    const sortedData = [...orders].sort((a, b) => {
      if (sortDirection === "asc") {
        return a.user.localeCompare(b.user);
      } else {
        return b.user.localeCompare(a.user);
      }
    });
    setOrders(sortedData);
  };

  const filteredData = orders.filter(
    (order) =>
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="order-list">
    <h2 className="order-title">Order List</h2>
      {/* Header with Add, Filter, and Search */}
      <div className="header-container2" style={{backgroundColor:"white"}}>
        <div className="left-actions">
          <IconButton className="add-button" >
            <Add />
          </IconButton>
          <IconButton className="filter-button">
            <FilterList />
          </IconButton>
        </div>
        <div className="right-actions">
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    <table className="order-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Order ID</th>
          <th>User</th>
          <th>Project</th>
          <th>Address</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((order) => (
          <tr key={order.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{order.id}</td>
            <td>
              <div className="user-info">
                <img
                  src={order.userImage}
                  alt={order.user}
                  className="user-image"
                />
                <span>{order.user}</span>
              </div>
            </td>
            <td>{order.project}</td>
            <td>{order.address}</td>
            <td>
              <div className="date-field">
                <CalendarToday className="calendar-icon" /> {order.date}
              </div>
            </td>
            <td>
  <div className="status-container">
    <span className={`status-dot ${order.statusColor}`}></span>
    <span className={`status-text ${order.statusColor}`}>
      {order.status}
    </span>
    <span
      className="status-menu"
      onClick={() =>
        setDropdownOpen(dropdownOpen === order.id ? null : order.id)
      }
    >
      ...
    </span>
    {dropdownOpen === order.id && (
      <div className="dropdown-menu">
        {Object.keys(statusColorMap).map((status) => (
          <div
            key={status}
            onClick={() => handleStatusChange(order.id, status)}
          >
            {status}
          </div>
        ))}
      </div>
    )}
  </div>
</td>

          </tr>
        ))}
      </tbody>
    </table>
    <div className="pagination-container">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        siblingCount={1}
        boundaryCount={1}
      />
    </div>
  </div>
  );
};

export default ProfileDashboard;
