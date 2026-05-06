import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";

function RecipeManager() {
  const [showTechnical, setTechnical] = useState(false);
  return (
    <div className="swe-container">
      <Sidebar />
      <h2>Recipe Manager (PWA)</h2>
      <p>Built with: One other collaborator using a prebuilt template</p>
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <button
          onClick={() => setTechnical(false)}
          style={{ fontWeight: !showTechnical ? "bold" : "normal" }}
        >
          Overview
        </button>
        <button
          onClick={() => setTechnical(true)}
          style={{ fontWeight: showTechnical ? "bold" : "normal" }}
        >
          Technical Explanation
        </button>
      </div>
      {!showTechnical ? (
        <div className="project-explanation">
          <div>
            <p>
              A Progressive Web App for creating, organizing, and sharing recipes. Users can build individual recipe cards, group them into cookbooks, and share cookbooks with others. Built as a deployable mobile-quality web experience installable on phones, works offline, and doesn't require an app store. The project started in a college course and continued past it as a real product the two of us were invested in.
            </p>
          </div>
        </div>
      ) : (
        <div className="project-explanation">
          <div>
            <p>
              <strong>The project: </strong>
              A recipe management PWA built with a collaborator. Users register, create recipe cards with ingredients and instructions, organize them into cookbooks, and share cookbooks with other users. The original vision was a recipe-sharing social layer with friend groups and collaborative cookbooks.
            </p>
            <p>
              <strong>Architecture:</strong> Full-stack monorepo with separate `client` and `server` directories, Prisma ORM for the data layer, and Docker Compose for the local development environment. The repo is structured for real team development rather than a single-file class project.
            </p>
            <p>
              <strong>Frontend (Vite + React in JavaScript): </strong> Vite for the fast dev experience and clean production builds, React for component-driven UI and state management. PWA layer on top with service worker for offline capability and a web app manifest for installability meaningful for a recipe app that needs to work in a kitchen where you're not always thinking about your data plan.:
            </p>
            <p>
              <i>Backend (TypeScript + Prisma):</i> Express-style server in TypeScript handling user authentication, recipe and cookbook CRUD operations, and the data layer behind cookbook sharing. Prisma manages the schema, migrations, and type-safe database queries, which made it easy to keep the two of us aligned on data model changes without stepping on each other.
            </p>
            <p>
              <i>Infrastructure:</i> Docker Compose for the local database so anyone cloning the repo can be running end-to-end in a few commands. Migration system through Prisma so schema changes are versioned and reversible.
            </p>
            <p>
              <i>What shipped: </i> Recipe card creation with structured ingredients and instructions. Cookbook compilation selecting recipe cards in the UI and grouping them into shareable books. Cookbook sharing between users (read access; collaborative editing was scoped for a future phase). Authenticated user accounts with login and registration.
            </p>
            <p>
              <strong>Why this stack:</strong> PostgreSQL was the right database
              for the workload, geospatial data, time series, and the kind of
              complex queries forecasting tools demand. Perl and PHP weren't
              trendy choices but they integrated cleanly with the Climate
              Center's existing infrastructure, which mattered more than novelty
              for a tool that needed to keep running long after I left.
            </p>
            <p>
              <strong>What I learned:</strong> This was the first project outside of a professional where I worked end-to-end on something with another developer coordinating on shared code, splitting responsibilities, and managing the friction of two people writing into the same codebase. Prisma's type-safe schema was a quiet hero of the collaboration we never had a "wait, what's that field called again" moment because the types caught it. It also pushed me on UI thinking. A recipe app is judged on how few taps it takes to do something simple, and that constraint forced design decisions I wouldn't have made on a backend-heavy project.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeManager;
