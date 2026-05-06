import Sidebar from "../sidebar";
import React, { useEffect, useRef, useState } from "react";
function TwitchCordBot() {
  const [showTechnical, setTechnical] = useState(false);
  return (
    <div className="swe-container">
      <Sidebar />
      <h2>Finals Roulette Bot</h2>
      <p>Solo Project</p>
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
              A very simple bot API that reads from a json structure I have built. When a user types !roulette in discord, or uses the Random Loadout redeem on a twitch channel. The API sends the loadout to discord or twitch depending on where the request came from where it is then displayed
            </p>
          </div>
        </div>
      ) : (
        <div className="project-explanation">
          <div>
            <p>
              <strong>Why:</strong> I had seen a couple of finals roulette websites and even made my own webapp in github pages which lives in this project, but I hadnt seen discord bots or twitch bots that do the same thing. 
              
            </p>
            <p>The plan for these bots is to get the Oauth automated so anyone can add them to their channel on twitch. Right now only discord is automated.</p>
            <p>
              <strong>Architecture</strong> The bot is built in typescript and is hosted on a Render.com instance. The planned architecture is to have the Finals Roulette Bot be the backend for the bot, but also the frontend for all of my bots, while new bots will be in their own server if it makes sense based on predicted request amount. 
            </p>
            <p><strong>Frontend: </strong> The frontend is Vite/React based using TypeScript using typescript allows for JS familiarity while also setting explicit typing so injection is harder, and fails are more elegant and descriptive</p>
            <p><strong>Backend: </strong> Just a simple node server that serves .ts files for the API. The twitch bot uses twrple to track and publish events made, and the discord bot uses discord.js for its events</p>
            <p><strong>The Future: </strong> What had originally started as just a passion project for myself was picked up by members of the finals community so here is a roadmap of features and new bots coming</p>
            <ul>
              <li>June 2026: Automated Oauth - The goal is to get Oauth automated so new bots can refresh tokens without needing someone to feed it</li>
              <li>June-July 2026: DB hosting roulette data, run cron to get updates on weapons, equipment, specs, classes (this will be used in tandem with the new finals roulette page on this site)</li>
              <li>July 2026: Discord bot filtering - add "tags" users can add to the command to add limits to what is randomized i.e. --heavy, --light, --medium</li>
              <li>July - August 2026: Vibebot fully running</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default TwitchCordBot;
