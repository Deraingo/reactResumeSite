import React, { useState } from "react";
import { Link } from "react-router-dom";
function ProjectCards() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 card-container">
        <Link className="card-link" to="/recipe-manager">
          <div className="project-card" p-15 rounded-lg shadow-md>
            <div className="proj-image"></div>
            <div className="proj-desc">
              <h3>Recipe Manager</h3>
              <p class="text-gray-600">
                What started as a school project turns into passion project
              </p>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="/the-finals">
          <div className="project-card" p-15 rounded-lg shadow-md>
            <div className="proj-image"></div>
            <div className="proj-desc">
              <h3 className="card-link">The Finals Data Analysis</h3>
              <p class="text-gray-600">
                Does Embark hold bias to one player group?
              </p>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="swe-proj">
          <div className="project-card" p-15 rounded-lg shadow-md>
            <div className="proj-image"></div>
            <div className="proj-desc">
              <h3>SWE</h3>
              <p class="text-gray-600">Tracking Utahs snowpack forecast</p>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="vibe-bot">
          <div className="project-card" p-15 rounded-lg shadow-md>
            <div className="proj-image"></div>
            <div className="proj-desc">
              <h3>Vibebot</h3>
              <p class="text-gray-600">A simple twitch command utility</p>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="finals-roulette">
          <div className="project-card" p-15 rounded-lg shadow-md>
            <div className="proj-image"></div>
            <div className="proj-desc">
              <h3>Finals Roulette</h3>
              <p class="text-gray-600">
                Generate a random finals loadout, now in twitch and discord bot
                form
              </p>
            </div>
          </div>
        </Link>
        <Link className="card-link" to="way-mark">
          <div className="project-card" p-15 rounded-lg shadow-md>
            <div className="proj-image"></div>
            <div className="proj-desc">
              <h3>Waymark</h3>
              <p class="text-gray-600">
                A GIS based map app to help people find new roadtrips
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProjectCards;
