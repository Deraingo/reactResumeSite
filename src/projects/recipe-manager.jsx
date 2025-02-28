import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

function RecipeManager() {
  
  return (
    <div className="recipe-container">
      <Sidebar />
      <h2>Recipe Manager</h2>
    </div>
  );
}
  
export default RecipeManager;