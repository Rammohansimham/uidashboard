import React from 'react';
import './RightNavBar.css';
import hotspot from "../images/hotspot.png"
import { BugReport as BugIcon, Person as UserIcon, Wifi as WifiIcon } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const RightNavBar = () => {
  const contacts = [
    { img: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'Natali Craig' },
    { img: 'https://randomuser.me/api/portraits/men/2.jpg', name: 'Drew Cano' },
    { img: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Orlando Diggs' },
    { img: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Andi Lane' },
    { img: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Kate Morrison' },
    { img: 'https://randomuser.me/api/portraits/men/6.jpg', name: 'Koray Okumus' },
  ];
  
  const activities = [
    {
      img: 'https://randomuser.me/api/portraits/men/7.jpg', // Replace with actual profile image URL
      text: 'You have a bug that needs...',
      time: 'Just now',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/8.jpg',
      text: 'Released a new version',
      time: '59 minutes ago',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      text: 'Submitted a bug',
      time: '12 hours ago',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/10.jpg',
      text: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
    },
  ];
  return (
    <div className="right-nav-container">
      {/* Content of the Right Navbar */}
      <div className="right-nav-bar">
      {/* Notification Section */}
      <div className="notification-section">
        <h3 className="notification-header">Notifications</h3>
        {/* Notification Items */}
        <div className="notification-item">
          <BugIcon className="notification-icon" />
          <div className="notification-text">
            <p className="notification-title">You have a bug that needs attention...</p>
            <span className="notification-time">Just now</span>
          </div>
        </div>
        <div className="notification-item">
          <UserIcon className="notification-icon" />
          <div className="notification-text">
            <p className="notification-title">New user registered</p>
            <span className="notification-time">59 minutes ago</span>
          </div>
        </div>
        <div className="notification-item">
          <BugIcon className="notification-icon" />
          <div className="notification-text">
            <p className="notification-title">You have a bug that needs attention...</p>
            <span className="notification-time">12 hours ago</span>
          </div>
        </div>
        <div className="notification-item">
          <img src={hotspot} alt="Hotspot Icon" className="notification-icon" />
          <div className="notification-text">
            <p className="notification-title">Andi Lane subscribed to you</p>
            <p className="notification-time">Today, 11:59 AM</p>
          </div>
        </div>
      </div>
    </div>
    {/* activity */}
    <div className="activity-section">
      <h3 className="activity-header">Activities</h3>
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <img
            src={activity.img}
            alt="Profile"
            className="activity-profile-img"
          />
          <div className="activity-text">
            <p className="activity-description">{activity.text}</p>
            <p className="activity-time">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Existing Notifications and Activity Sections */}
    <div className="contacts-section">
      <h3 className="contacts-header">Contacts</h3>
      {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <img
            src={contact.img}
            alt={contact.name}
            className="contact-profile-img"
          />
          <p className="contact-name">{contact.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RightNavBar;
