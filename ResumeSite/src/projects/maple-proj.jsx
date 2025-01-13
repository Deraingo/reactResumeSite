import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <span className="hamburger-icon">&#9776;</span>
          <span className="header-text">Links</span>
        </div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li><Link to="https://climate.usu.edu/mapleTreeProject/mapleTreeProject.php" target="_blank" onClick={toggleSidebar}>Recipe Manager</Link></li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  
  export default Sidebar;