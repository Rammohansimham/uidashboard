import React,{useState} from 'react';
import './Sidebar.css';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FaTachometerAlt, FaShoppingCart, FaProjectDiagram, FaChalkboardTeacher } from 'react-icons/fa';
import { FaUserCircle, FaCog, FaFileAlt, FaUsers, FaBlog } from 'react-icons/fa';
import {  FaUsersCog, FaPeopleCarry } from 'react-icons/fa';
const SideBar1 = () => {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  // Toggle User Profile Sublist
  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
  };
  return (
    
    <div className="sidebar">
      <div className="profile-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1154/1154473.png" // Replace with your profile icon URL
          alt="Profile Icon"
          className="profile-icon"
        />
        <span className="profile-name">John Doe</span>
      </div>
      <div className="box-section">
        <div className="box-heading">
          <span className="heading-item">Favourites</span>
          <span className="heading-item">Recents</span>
        </div>
        <div className="box-content">
          <ul className="vertical-list">
            <li className="list-item">Overview</li>
            <li className="list-item">Projects</li>
          </ul>
        </div>
      </div>
      <div className="frame-section">
        <h3 className="frame-heading">Dashboard</h3>
        <div className="frame-items">
          <div className="frame-item">
            <ArrowForwardIosIcon className="arrow-icon" />
            <FaTachometerAlt className="item-icon" />
            <span className="item-text">Dashboard</span>
          </div>
          <div className="frame-item">
            <ArrowForwardIosIcon className="arrow-icon" />
            <FaShoppingCart className="item-icon" />
            <span className="item-text">E-commerce</span>
          </div>
          <div className="frame-item">
            <ArrowForwardIosIcon className="arrow-icon" />
            <FaProjectDiagram className="item-icon" />
            <span className="item-text">Project</span>
          </div>
          <div className="frame-item">
            <ArrowForwardIosIcon className="arrow-icon" />
            <FaChalkboardTeacher className="item-icon" />
            <span className="item-text">Online Course</span>
          </div>
        </div>
      </div>
      {/* pAGes */}
      <div className="custom-frame-section">
        <h3 className="custom-frame-heading">Pages</h3>
        <div className="custom-frame-items">
          {/* User Profile Section */}
          <div className="custom-frame-item" onClick={toggleUserProfile}>
            <ArrowForwardIosIcon className="custom-arrow-icon" />
            <FaUserCircle className="custom-item-icon" />
            <span className="custom-item-text">User Profile</span>
          </div>

          {/* Conditionally render User Profile sub-items */}
          {isUserProfileOpen && (
            <div className="custom-sub-list">
              <div className="custom-sub-item">
                
                <span className="custom-item-text">Overview</span>
              </div>
              <div className="custom-sub-item">
              
                <span className="custom-item-text">Project</span>
              </div>
              <div className="custom-sub-item">
                
                <span className="custom-item-text">Campaigns</span>
              </div>
              <div className="custom-sub-item">
                
                <span className="custom-item-text">Documents</span>
              </div>
              <div className="custom-sub-item">
               
                <span className="custom-item-text">Followers</span>
              </div>
            </div>
          )}

          {/* Other Items */}
          <div className="custom-frame-item">
            <ArrowForwardIosIcon className="custom-arrow-icon" />
            <FaCog className="custom-item-icon" />
            <span className="custom-item-text">Account</span>
          </div>
          <div className="custom-frame-item">
            <ArrowForwardIosIcon className="custom-arrow-icon" />
            <FaBlog className="custom-item-icon" />
            <span className="custom-item-text">Blog</span>
          </div>
          <div className="custom-frame-item">
            <ArrowForwardIosIcon className="custom-arrow-icon" />
            <FaUsersCog className="custom-item-icon" />
            <span className="custom-item-text">Social</span>
          </div>
          <div className="custom-frame-item">
            <ArrowForwardIosIcon className="custom-arrow-icon" />
            <FaPeopleCarry className="custom-item-icon" />
            <span className="custom-item-text">Corporate</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SideBar1;
