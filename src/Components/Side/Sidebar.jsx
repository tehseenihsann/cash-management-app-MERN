import './Sidebar.css';
import React, { useState } from 'react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Sidebar open by default on desktop screens

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  });

  return (
    <div>
      <div className={`sidebar`}>
        <div className="sidebar-top">
          <img src="/logo.png" alt="Logo" />
          <h4>Management</h4>
        </div>
        <div className="sidebar-center">
          <ul className='modules-list'>
            <a href="/">
              <li className='list-item'>
                Dashboard
              </li>
            </a>
            <a href="/cashin">
              <li className='list-item'>
                Cash In
              </li>
            </a>
            <a href="/pati">
              <li className='list-item'>
                Pati Cash
              </li>
            </a>
            <a href="/transfer">
              <li className='list-item'>
                Transfer
              </li>
            </a>
            <a href="/reports">
              <li className='list-item'>
                Reports
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <ul className='modules-list'>
            <a href="/setting">
              <li className='list-item'>
                Setting
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
