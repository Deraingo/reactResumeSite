import React from "react";
import "./style/style.css";
import SpecSelect from "./SpecSelect";
import { classes } from "../../data/classes";
const classNames = Object.keys(classes);
const ClassSelect = ({ onSelect }) => (
  
  <div className="class-input">
    <label className="select-class">Select a Class: </label>
    <div className="class-selector grid sm:grid-cols-2 lg:grid-cols-3 gap-6 card-container">
      {classNames.map((c) => (
        <div
          key={c}
          className="class-card p-6 rounded-lg shadow-md"
          onClick={() => onSelect(c)}
        >
          {c}
        </div>
      ))}
    </div>
  </div>
);

export default ClassSelect;
