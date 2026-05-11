import React from "react";
import { classes } from "../../../data/classes";
import "../style/style.css";

const SpecSelect = ({ selectedClass, onSelect }) => {
  if (!selectedClass) return null;
  const specs = classes[selectedClass].abilities;

  return (
    <div className="spec-input">
      <label className="select-spec">Select a Spec: </label>
      <div className="spec-selector grid sm:grid-cols-2 lg:grid-cols-3 gap-6 card-container">
        {specs.map((s) => (
          <div
            key={s}
            className="spec-card p-6 rounded-lg shadow-md"
            onClick={() => onSelect(s)}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};


export default SpecSelect;
