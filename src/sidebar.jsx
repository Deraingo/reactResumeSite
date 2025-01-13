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
              <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
              <li><Link to="/recipe-manager" onClick={toggleSidebar}>Recipe Manager</Link></li>
              <li><Link to="/swe-proj" onClick={toggleSidebar}>SWE Project</Link></li>
              <li><Link to="./projects/maple-proj/" onClick={toggleSidebar}>Maple Project</Link></li>
              <li><Link to="/findable-glowsticks" onClick={toggleSidebar}>Findable Glowsticks</Link></li>
              <li><Link to="/power-play" onClick={toggleSidebar}>Power Play</Link></li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  
  export default Sidebar;