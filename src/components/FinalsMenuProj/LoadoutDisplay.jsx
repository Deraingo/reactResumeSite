import React, { useState } from "react";
import { weapons } from "../../data/classes";
import "./style/style.css"
import AdvancedLoadoutDisplay from "./AdvancedLoadoutDisplay";
import DamageCalculator from "./custom-assets/DamageCalculator";
import StatBar from "./custom-assets/StatBar";
const LoadoutDisplay = ({ loadout }) => {
  const [showTechnical, setTechnical] = useState(false);
  if (!loadout) return <p></p>;
  const weaponData = weapons[loadout.weapon];
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
          
        </div>
        <div className="description">
          <p>
            <strong>Weapon:</strong> {loadout.weapon}
            {weaponData?.type && <> - <i className="italics">{weaponData.type}</i></>}
          </p>
          {weaponData?.desc && <i className="italics">{weaponData.desc}</i>}

          <div className="stat-grid grid sm:grid-cols-3 gap-2">
            {weaponData?.headDamage != null && (
              <p className="stat-row">
                <span className="stat-label">Head:</span>
                <i>{weaponData.headDamage}</i>
                <StatBar value={weaponData.headDamage} low={10} high={250}/>
              </p>
            )}
            {weaponData?.bodyDamage != null && (
              <p className="stat-row">
                <span className="stat-label">Body:</span>
                <i>{weaponData.bodyDamage}</i>
                <StatBar value={weaponData.bodyDamage} low={10} high={200}/>
              </p>
            )}
            {weaponData?.environmentalDamage != null && (
              <p className="stat-row">
                <span className="stat-label">Environmental:</span>
                <i>{weaponData.environmentalDamage}</i>
                <StatBar value={weaponData.environmentalDamage} low={35} high={1000}/>
              </p>
            )}
            {weaponData?.bodyDamage != null && weaponData?.fireRate != null && (
              <p className="stat-row">
                <span className="stat-label">DPS:</span>
                <DamageCalculator
                  bodyDamage={weaponData.bodyDamage}
                  headDamage={weaponData.headDamage}
                  fireRate={weaponData.fireRate}
                />
              </p>
            )}
            {weaponData?.fireRate != null && (
              <p className="stat-row">
                <span className="stat-label">Fire Rate:</span>
                <i>{weaponData.fireRate}</i>
                <StatBar value={weaponData.fireRate} low={10} high={2000}/>
              </p>
            )}
            {weaponData?.magazine != null && (
              <p className="stat-row">
                <span className="stat-label">Magazine Size:</span>
                <i>{weaponData.magazine}</i>
                <StatBar value={weaponData.magazine} low={1} high={300}/>
              </p>
            )}
            {weaponData?.minRange != null && (
              <p className="stat-row">
                <span className="stat-label">Min Range:</span>
                <i>{weaponData.minRange}m</i>
                <StatBar value={weaponData.minRange} low={1} high={300}/>
              </p>
            )}
            {weaponData?.maxRange != null && (
              <p className="stat-row">
                <span className="stat-label">Max Range:</span>
                <i>{weaponData.maxRange}m</i>
                <StatBar value={weaponData.maxRange} low={1} high={300}/>
              </p>
            )}
            {weaponData?.reloadTime != null && (
              <p className="stat-row">
                <span className="stat-label">Tac Reload Speed:</span>
                <i>{weaponData.reloadTime}s</i>
                <StatBar value={weaponData.reloadTime} low={1} high={300}/>
              </p>
            )}{weaponData?.emptyReloadTime != null && (
              <p className="stat-row">
                <span className="stat-label">Empty Reload Speed:</span>
                <i>{weaponData.emptyReloadTime}s</i>
                <StatBar value={weaponData.emptyReloadTime} low={1} high={300}/>
              </p>
            )}
          </div>
        </div>
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
