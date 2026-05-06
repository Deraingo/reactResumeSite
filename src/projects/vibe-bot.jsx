import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";

function VibeBot() {
  return (
    <div className="vibe-bot">
      <Sidebar />
      <h2>Vibebot</h2>
    </div>
  );
}

export default VibeBot;
