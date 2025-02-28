import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

function PowerPlay() {
  
  return (
    <div className="power-container">
      <Sidebar />
      <h2>Power Play</h2>
    </div>
  );
}
  
export default PowerPlay;