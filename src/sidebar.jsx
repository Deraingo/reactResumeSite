import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hamburger-menu ${isHovered || isOpen ? 'open' : ''}`} onClick={toggleSidebar}
      >
        <span className="hamburger-icon">&#9776;</span>
        <span className="header-text">Links</span>
      </div>
      <div
        className={`sidebar ${isHovered || isOpen ? 'open' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleSidebar}
      >
        <nav>
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/about-me" onClick={toggleSidebar}>About Me</Link></li>
            <li><Link to="/recipe-manager" onClick={toggleSidebar}>Recipe Manager</Link></li>
            <li><Link to="/the-finals" onClick={toggleSidebar}>Data Analysis on "The Finals"</Link></li>
            <li><Link to="/swe-proj" onClick={toggleSidebar}>SWE Project</Link></li>
            <li><Link to="/maple-proj/" onClick={toggleSidebar}>Maple Project</Link></li>
            <li><Link to="/power-play" onClick={toggleSidebar}>Power Play</Link></li>
            <li><Link to="/finals-roulette">The Finals Roulette</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
