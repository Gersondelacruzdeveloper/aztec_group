import React from 'react';
import '../assets/scss/Sidebar.scss';
import pdfImg from '../assets/images/pdfImg.png';

// Import icons from react-icons
import { FaTachometerAlt, FaMoneyCheckAlt, FaFileAlt, FaBell } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={pdfImg} alt="PDF Logo" />
      </div>
      <ul>
        <li>
          <FaTachometerAlt className="icon" />
          Dashboard
        </li>
        <li>
          <FaMoneyCheckAlt className="icon" />
          Transactions
        </li>
        <li>
          <FaFileAlt className="icon" />
          Report
        </li>
        <li>
          <FaBell className="icon" />
          Notification
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
