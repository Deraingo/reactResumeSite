import React, { useState } from "react";
import { weapons, abilities, equipment } from "../../../data/classes";
import "../style/style.css"
import AdvancedLoadoutDisplay from "../AdvancedLoadoutDisplay";
import DamageCalculator from "../custom-assets/DamageCalculator";
import StatBar from "../custom-assets/StatBar";
import WeaponDisplay from "./WeaponDisplay";
import SpecDisplay from "./SpecDisplay";
import EquipmentDisplay from "./EquipmentDisplay";
const LoadoutDisplay = ({ loadout }) => {
  const [showTechnical, setTechnical] = useState(false);
  if (!loadout) return <p></p>;
  const weaponData = weapons[loadout.weapon];
  const specData = abilities[loadout.ability]
  const equipmentData = loadout.equipment.map((name) => ({
    name,
    ...equipment[name],
  }));
  const { offAvg, defAvg } = getClassWeight(loadout);
  //  
  // spider chart showing Mobility, Range, Sustain, Utility, Crowd Control for overall class
  //
  return (
    <>
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
          <button
            onClick={() => setTechnical(false)}
            style={{ fontWeight: !showTechnical ? "bold" : "normal" }}
          >
            Basic
          </button>
          <button
            onClick={() => setTechnical(true)}
            style={{ fontWeight: showTechnical ? "bold" : "normal" }}
          >
            Advanced
          </button>
      </div>
      <div className="loadout-card grid sm:grid-cols-2 lg:grid-cols-2 gap-40">
      {weaponData &&(
        <>
        <div className="base">
          <h2>Class: {loadout.className}</h2>
          
          <p><strong>Ability:</strong> {loadout.ability}</p>
          <p><strong>Equipment:</strong> {loadout.equipment.join(", ")}</p>
          <p>Defensive Capability: <StatBar value={defAvg} low={4} high={9.2}/></p>
          <p>Offensive Capability: <StatBar value={offAvg} low={4} high={9.2}/></p>
          
        </div>
        <WeaponDisplay loadout={loadout} weaponData={weaponData} StatBar={StatBar} DamageCalculator={DamageCalculator} showTechnical={showTechnical}/>
        <SpecDisplay loadout={loadout} specData={specData} StatBar={StatBar} DamageCalculator={DamageCalculator}/>
        <EquipmentDisplay loadout={loadout} equipmentData={equipmentData} StatBar={StatBar} DamageCalculator={DamageCalculator} showTechnical={showTechnical}/>
        </>
        )} { showTechnical && weaponData && (
          <>
            <AdvancedLoadoutDisplay loadout={loadout} weaponData={weaponData}/>
          </>
        )}
      
      </div>
    </>
  );
};

export default LoadoutDisplay;

function getClassWeight(loadout) {
  const items = [
    abilities[loadout.ability],
    weapons[loadout.weapon],
    ...(loadout.equipment ?? []).map((name) => equipment[name]),
  ];

  const offValues = items.map((i) => i?.offensiveWeight).filter((v) => v != null);
  const defValues = items.map((i) => i?.defensiveWeight).filter((v) => v != null);

  const avg = (arr) =>
    arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  return { offAvg: avg(offValues), defAvg: avg(defValues) };
}