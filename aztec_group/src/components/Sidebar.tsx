import React from 'react';
import '../assets/scss/Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="pdf-logo.png" alt="PDF Logo" />
      </div>
      <ul>
        <li>Dashbord</li>
        <li>Transactions</li>
        <li>Report</li>
        <li>Notification</li>
      </ul>
    </div>
  );
}

export default Sidebar;
