import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";
import "./style/swe-style.css";

function SweProj() {
  const [showTechnical, setTechnical] = useState(false);
  return (
    <div className="swe-container">
      <Sidebar />
      <h2>SWE Forecast Tool (Snowpack Forecast)</h2>
      <p>
        Live: <a
          href="https://climate.usu.edu/swe/sweForecast.php
"
        >
          https://climate.usu.edu/swe/sweForecast.php
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
              A snow water equivalent forecasting tool used by Utah water
              managers and researchers to predict spring runoff and water
              availability. I built the entire system end-to-end from the data
              ingestion pipeline that processes snow measurement data, to the
              database that stores it, to the web interface where users explore
              forecasts through interactive graphs and imagry that shows current
              and predicted snowpack. The project taught me how to take
              scientific research and ship it as a real production tool that
              scientists and normal users look at and use on a daily basis.
            </p>
          </div>
        </div>
      ) : (
        <div className="project-explanation">
          <div>
            <p>
              <strong>The problem: </strong>
              Water managers in the Western U.S. need accurate snow water
              equivalent (SWE) forecasts to plan reservoir operations, drought
              response, and seasonal water allocations. Researchers at the
              Climate Center had the modeling expertise but needed a system that
              could ingest their data, store it cleanly, and surface it through
              a UI that non-technical users could actually navigate.
            </p>
            <p>
              <strong>My role:</strong> Sole developer. Designed and built the
              full stack from data ingestion through frontend visualization.
            </p>
            <p>
              <strong>Architecture:</strong> The system has three layers, each
              handling a distinct concern:
            </p>
            <p>
              <i>Ingestion (Python):</i> A one-time bootstrap script parses the
              initial dataset from researchers, infers schema, and provisions
              the PostgreSQL tables. This was the trickiest part
              researcher-provided data is rarely clean, and the script had to
              handle inconsistent column naming, mixed types, and edge cases
              without losing fidelity.
            </p>
            <p>
              <i>Maintenance (Perl + cron):</i> A scheduled Perl job watches for
              new data dropped by researchers and runs upsert, delete, and
              refresh operations against the existing tables. Perl was the right
              call for this layer — fast, reliable for text processing, and the
              existing Climate Center infrastructure already used it for similar
              pipelines.
            </p>
            <p>
              <i>Frontend (PHP + JS + HTML/CSS):</i> PHP handles CRUD operations
              against PostgreSQL fetching map images, time-series data, and the
              underlying datasets that power expandable graphs and tables.
              JavaScript manages UI state and interactive elements. HTML and CSS
              handle presentation.
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
              <strong>What I learned:</strong> Building production tools for
              researchers is a different skill than building for general
              consumers. The users are technical but in a different domain —
              they understand their science deeply but need the interface to
              stay out of their way. Every UI decision had to optimize for "let
              me see the data without ceremony."
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SweProj;
