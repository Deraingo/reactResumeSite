import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

function SweProj() {
  
  return (
    <div className="swe-container">
      <Sidebar />
      <h2>SWE</h2>
    </div>
  );
}
  
export default SweProj;