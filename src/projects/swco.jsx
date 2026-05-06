import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";
import "./style/swco-style.css";

function SwcoProj() {
  const [showTechnical, setTechnical] = useState(false);
  return (
    <div className="swco-container">
      <Sidebar />
      <h2>SWCO(Surface Weather and Climate Observations)</h2>
      <p>
        Live: <a
          href="https://climate.usu.edu/swco/"
        >
          https://climate.usu.edu/swco/
        </a> 
         
      </p>
      <p>Built at: The Utah Climate Center</p>
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
              A geospatial dashboard showing snow and water conditions across station networks across the world I contributed the foundational components, the original interactive map markers, and the side menu framework that's now used across multiple Climate Center tools.
            </p>
          </div>
        </div>
      ) : (
        <div className="project-explanation">
          <div>
            <p>
              <strong>My contributions: </strong>
              I joined this project to build specific foundational pieces that the team has continued to iterate on since.
            </p>
            <p>
              <i>Map markers and interaction:</i> Prototyped the original Leaflet integration and built the dynamic marker logic markers that update based on current conditions and respond to user interaction. The current implementation has been iterated on since I left, but the underlying pattern came from this initial work.
            </p>
            <p>
              <i>Reusable side menu framework:</i> Built the side menu component that the Climate Center later adopted as a pattern across other tools on the site. This was the first time I built something with explicit reusability in mind
            </p>
            <p>
              <i>Frontend (PHP + JS + HTML/CSS):</i> PHP handles CRUD operations
              against PostgreSQL fetching map images, time-series data, and the
              underlying datasets that power expandable graphs and tables.
              JavaScript manages UI state and interactive elements. HTML and CSS
              handle presentation.
            </p>
            <p>
              <strong>Stack:</strong> PostgreSQL backend, Perl maintenance scripts, PHP/JS/HTML/CSS frontend same architecture as SWE Forecast. Leaflet for the interactive mapping layer..
            </p>
            <p>
              <strong>What I learned:</strong> Working on a project that other engineers would inherit and extend forced me to think about code as something other people read, not just something that runs. The side menu being adopted across the site was the first time I saw my work outlive my involvement, which is a different kind of satisfaction than shipping a personal project.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwcoProj;
