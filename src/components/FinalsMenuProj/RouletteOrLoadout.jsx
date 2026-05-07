import React from "react";
import { classes } from "../../data/classes";
import "./style/style.css";

const RouletteOrLoadout = ({onSelect}) => {

  return (
    <div className="option-select">
        <label className="roulette-or-loadout">Please Select an Option</label>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 card-container">
            <div
              className="class-card p-6 rounded-lg shadow-md"
              onClick={() => onSelect("Roulette")}
            >
              Roulette
            </div>
            <div
              className="class-card p-6 rounded-lg shadow-md"
              onClick={() => onSelect("Class Builder")}
            >
              Class Builder
            </div>
        </div>
    </div>

  );
};

export default RouletteOrLoadout;
