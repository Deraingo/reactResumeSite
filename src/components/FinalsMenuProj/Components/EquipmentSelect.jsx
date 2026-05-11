import React, { useState } from "react";
import { classes } from "../../../data/classes";
import "../style/style.css";

const MAX_EQUIPMENT = 4;

const EquipmentSelect = ({ selectedClass, onSelect }) => {
  const [picked, setPicked] = useState([]);
  if (!selectedClass) return null;
  const equipment = classes[selectedClass].equipment;

  const toggle = (item) => {
    setPicked((prev) => {
      if (prev.includes(item)) return prev.filter((x) => x !== item);
      if (prev.length >= MAX_EQUIPMENT) return prev;
      return [...prev, item];
    });
  };

  return (
    <div className="equipment-input">
      <label className="select-equipment">
        Select Equipment ({picked.length}/{MAX_EQUIPMENT}):
      </label>
      <div className="equipment-selector grid sm:grid-cols-2 lg:grid-cols-3 gap-6 card-container">
        {equipment.map((e) => (
          <div
            key={e}
            className={`equipment-card p-6 rounded-lg shadow-md ${
              picked.includes(e) ? "selected" : ""
            }`}
            onClick={() => toggle(e)}
          >
            {e}
          </div>
        ))}
      </div>
      <button
        className="next-btn"
        disabled={picked.length === 0}
        onClick={() => onSelect(picked)}
      >
        Next
      </button>
    </div>
  );
};

export default EquipmentSelect;
