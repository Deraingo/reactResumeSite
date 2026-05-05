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
        <strong>The Features we were able to release on this was:</strong>
        <ul>
          <li> - Creating recipe cards</li>
          <li>
            - Being able to select recipe cards in the UI to add to a recipe
            book
          </li>
          <li>- Recipe book sharing, though collaborating does not work yet</li>
        </ul>
        <strong>Frontend</strong>
        <p>
          Users are met with a home screen where they need to register or login
          in order to access the application
        </p>
        <p>
          We attempted to make the menu intuitive for users by minimalizing
          steps to create recepies and cookbooks
        </p>
        <strong>Backend</strong>
      </div>
    </div>
  );
}

export default RecipeManager;
