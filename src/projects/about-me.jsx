import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";

function AboutMe() {
  const [showHobby, setShowHobby] = useState(false);

  return (
    <div className="about-me-container">
      <Sidebar />
      <div className="about-me">
        <h2>Hello I am Daniel Wakefield, and welcome to my portfolio</h2>
        <p>
          I have been developing professionally for 6 years as of 02/11/2026. I
          specialize in full stack web development but in my freetime I enjoy
          working on integrated circuits, game development, data analysis, and
          creating tools for myself or others to use.
        </p>

        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
          <button
            onClick={() => setShowHobby(false)}
            style={{ fontWeight: !showHobby ? "bold" : "normal" }}
          >
            Professional Stack
          </button>
          <button
            onClick={() => setShowHobby(true)}
            style={{ fontWeight: showHobby ? "bold" : "normal" }}
          >
            Also Tinkering With
          </button>
        </div>

        {!showHobby ? (
          <>
            <p>My professional stack includes:</p>
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>Perl</li>
              <li>C++</li>
              <li>Bash</li>
              <li>Liquid</li>
              <li>HTML + CSS</li>
            </ul>
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>Django</li>
              <li>Vite</li>
            </ul>
            <h3>Libraries</h3>
            <ul>
              <li>
                pandas, NumPy, Matplotlib, Scikit-learn, Requests, BeautifulSoup
              </li>
              <li>WWW::Mechanize</li>
              <li>PostGIS</li>
              <li>Leaflet, Jawg, MapBox</li>
            </ul>
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>MongoDB</li>
              <li>Prisma (ORM)</li>
            </ul>
            <h3>Tools</h3>
            <ul>
              <li>Blender (render scripting via Python)</li>
            </ul>
          </>
        ) : (
          <>
            <p>What I explore outside of work:</p>
            <h3>Languages</h3>
            <ul>
              <li>Rust</li>
              <li>C#</li>
              <li>Kotlin</li>
              <li>Lua</li>
              <li>Go</li>
              <li>Java</li>
            </ul>
            <h3>Exploring</h3>
            <ul>
              <li>Embedded systems / integrated circuitry</li>
            </ul>
            <h3>Tools</h3>
            <ul>
              <li>GIMP, Inkscape</li>
              <li>DaVinci Resolve</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
