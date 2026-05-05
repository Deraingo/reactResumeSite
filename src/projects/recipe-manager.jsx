import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";

function RecipeManager() {
  return (
    <div className="recipe-container">
      <Sidebar />
      <div className="title-card">
        <h2>Recipe Manager</h2>
        <p>
          What originally started as a school project started turning personal
        </p>
      </div>
      <div className="project-info">
        <p>
          The Recipe Manager PWA was originally a final project a friend an I
          did for a college class. After the class was over though we still had
          interest in the project.
        </p>
        <p>
          The project was built using Vite+React in JavaScript with a TypeScript
          backend
        </p>
        <p>
          Though Stagnent now the plan was to make a recipe sharing app where
          users can create groups, or add friends to share recipes with.
        </p>
        <p>The Features we were able to release on this was:</p>
        <ul>
          <li>Creating recipe cards</li>
          <li>
            Being able to select recipe cards in the UI to add to a recipe book
          </li>
          <li>Recipe book sharing, though collaborating does not work yet</li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeManager;
