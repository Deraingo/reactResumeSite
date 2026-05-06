import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";

function WayMark() {
  return (
    <div className="way-mark">
      <Sidebar />
      <h2>WayMark</h2>
    </div>
  );
}

export default WayMark;
