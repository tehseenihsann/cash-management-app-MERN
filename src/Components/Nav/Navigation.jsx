import React, { useState } from 'react';
import './Navigation.css';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className={`navbar-left`}>
          <div className="company-name">Management</div>
        </div>
        <div className={`navbar-right`}>
          <div className="notification-icon"><CircleNotificationsIcon fontSize='large' /></div> {/* Corrected CircleNotificationsIcon placement */}
          <div className="user-info">
            <img src="/logoImage.png" alt="User" className="user-image" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
