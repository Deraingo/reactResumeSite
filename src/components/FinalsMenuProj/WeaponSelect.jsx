import React from "react";
import { classes } from "../../data/classes";
import "./style/style.css";
// Body damage falloff line
// const close = { x: w.minRange, y: w.bodyDamage };
// const far = { x: w.maxRange, y: w.bodyDamage * w.falloffMultiplier };
// connect with a line — that's your falloff curve

// If headDamage is populated, plot it as a separate line/point at minRange
// (and apply the same falloffMultiplier if you want headshot falloff too)

const WeaponSelect = ({ selectedClass, onSelect }) => {
  if (!selectedClass) return null;
  const weapons = classes[selectedClass].weapons;

  return (
    <div className="weapon-input">
      <label className="select-weapon">Select a Weapon: </label>
      <div className="weapon-selector grid sm:grid-cols-2 lg:grid-cols-3 gap-6 card-container">
        {weapons.map((w) => (
          <div
            key={w}
            className="weapon-card p-6 rounded-lg shadow-md"
            onClick={() => onSelect(w)}
          >
            {w}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaponSelect;
