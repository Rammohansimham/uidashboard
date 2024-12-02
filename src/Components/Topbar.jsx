import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, InputBase, Breadcrumbs, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {
  Bookmark as BookmarkIcon,
  Star as StarIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import { Brightness5 as SunIcon, Brightness4 as MoonIcon } from "@mui/icons-material";
import { useTheme } from "../Components/ThemeContext"; // Import the useTheme hook
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from react-router-dom
import './Topobar.css';

const Topbar = ({ width = "1163px" }) => {
  const { toggleTheme } = useTheme(); // Get the toggleTheme function from context
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={1}
      sx={{
        width: width, // Leaves space for the RightNavBar
        left: 243,
        top: 0,
        height: "68px",
        borderBottom: "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section with Icons and Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          <IconButton>
            <StarIcon />
          </IconButton>

          {/* Breadcrumbs */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ display: "flex", alignItems: "center" }}>
            {/* Make "Dashboard" a clickable link */}
            <Link component={RouterLink} to="/" color="inherit">
              Dashboard
            </Link>
            {/* "Default" is plain text, no link */}
            <Link component={RouterLink} to = "/default">
            <Typography color="textPrimary">Default</Typography>
            </Link>
          </Breadcrumbs>
        </div>

        {/* Right Section with Search and Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Search Box */}
          <InputBase
            placeholder="Search…"
            startAdornment={<SearchIcon />}
            sx={{
              bgcolor: "#f0f0f0",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
          />
          {/* Icons */}
          {/* Theme Toggle Icon */}
          <IconButton onClick={handleThemeChange}>
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <IconButton>
            <TimeIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
