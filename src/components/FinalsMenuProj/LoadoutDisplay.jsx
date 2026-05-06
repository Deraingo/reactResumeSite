import React from "react";

const LoadoutDisplay = ({ loadout }) => {
  if (!loadout) return <p>Click the button to generate a random loadout!</p>;

  return (
    <div className="loadout-card">
      <h2>Class: {loadout.className}</h2>
      <p><strong>Weapon:</strong> {loadout.weapon}</p>
      <p><strong>Ability:</strong> {loadout.ability}</p>
      <p><strong>Equipment:</strong> {loadout.equipment.join(", ")}</p>
    </div>
  );
};

export default LoadoutDisplay;
