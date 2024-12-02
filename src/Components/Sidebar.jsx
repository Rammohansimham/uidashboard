import React, { useState } from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import {
  PieChart,
  ShoppingBag,
  Folder,
  Bookmarks,
  Person,
  InsertDriveFile,
  Group,
  Campaign,
  Settings,
  Close,
} from "@mui/icons-material";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <Sidebar
      {...props}
      width="214px"
      collapsedWidth="80px"
      collapsed={collapsed}
      className={`flex flex-col h-screen pt-6 px-4 border border-gray-900_19 overflow-auto ${
        props.className || ""
      }`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-center mb-5">
        <img src="/images/logo.png" alt="Wind Logo" className="h-[24px] rounded-[12px]" />
        {!collapsed && (
          <span className="ml-2 text-[14px] font-normal text-gray-900">ByeWind</span>
        )}
      </div>

      {/* Menu Section */}
      <span className="ml-3 mt-5 text-[14px] font-normal text-gray-900_66">Dashboards</span>
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px",
            paddingLeft: "24px",
            color: "#1c1c1c",
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: "8px",
          },
        }}
        className="mt-2"
      >
        <MenuItem icon={<PieChart fontSize="small" />}>Default</MenuItem>
        <MenuItem icon={<ShoppingBag fontSize="small" />}>eCommerce</MenuItem>
        <MenuItem icon={<Folder fontSize="small" />}>Projects</MenuItem>
        <MenuItem icon={<Bookmarks fontSize="small" />}>Online Courses</MenuItem>
      </Menu>

      <span className="ml-3 mt-5 text-[14px] font-normal text-gray-900_66">Pages</span>
      <Menu className="mt-2">
        <MenuItem icon={<Person fontSize="small" />}>User Profile</MenuItem>
        <MenuItem icon={<InsertDriveFile fontSize="small" />}>Overview</MenuItem>
        <MenuItem icon={<Folder fontSize="small" />}>Projects</MenuItem>
        <MenuItem icon={<Campaign fontSize="small" />}>Campaigns</MenuItem>
        <MenuItem icon={<InsertDriveFile fontSize="small" />}>Documents</MenuItem>
        <MenuItem icon={<Group fontSize="small" />}>Followers</MenuItem>
      </Menu>

      {/* Footer Section */}
      {collapsed ? (
        <div className="mt-auto flex items-center justify-center">
          <Settings fontSize="small" />
        </div>
      ) : (
        <div className="mt-auto flex items-center justify-center gap-2">
          <Close fontSize="small" onClick={toggleSidebar} />
          <Settings fontSize="small" />
        </div>
      )}
    </Sidebar>
  );
}
