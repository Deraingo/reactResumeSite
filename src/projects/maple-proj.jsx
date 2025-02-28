import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

function MapleProj() {
  
  return (
    <div className="maple-container">
      <Sidebar />
      <h2>Maple</h2>
    </div>
  );
}
  
export default MapleProj;