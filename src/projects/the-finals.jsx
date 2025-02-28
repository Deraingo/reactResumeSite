import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

function TheFinals() {
  
  return (
    <div className="swe-container">
      <Sidebar />
      <h2>The Finals</h2>
    </div>
  );
}
  
export default TheFinals;