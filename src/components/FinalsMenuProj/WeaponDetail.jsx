import { useParams, Link } from "react-router-dom";
import StatBar from "./custom-assets/StatBar";
import DamageCalculator from "./custom-assets/DamageCalculator";
import { useState } from "react";
import { classes, weapons } from "../../data/classes";
import TTKBreakdown from "./custom-assets/TTKBreakdown";
import "./style/weapon-compare.css"

const WeaponDetail = () => {
  const { className, weaponName } = useParams();
  const weapon = weapons[decodeURIComponent(weaponName)];
  const weaponJson = weapon;
  const [selectedWeapon, setWeaponCompare] = useState()
  const avgDamage = weaponJson.headDamage != null ? (weaponJson.bodyDamage + weaponJson.headDamage) / 2 : weaponJson.bodyDamage;
  const dps = ((avgDamage * weaponJson.fireRate) / 60).toFixed(2);
  const [compareName, setCompareName] = useState("");
  const compareData = compareName ? weapons[compareName] : null;
  const classWeapons = classes[className].weapons.map((name) => ({
    name,
    ...weapons[name],
  }));
  
  const handleChange = (e) => {
    setCompareName(e.target.value);
  };
  const headLabel = weaponJson.type === "Melee" ? "Alt Fire" : "Head";
  const compareDps = ((avgDamage * compareData.fireRate) / 60).toFixed(2);
  return (
    
    <>
    <Link className="back-link" to="/finals-roulette">← Back</Link>
    <div className="overflow-x-auto">
      <div className="loadout-card grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="current-weapon">
              <h1>{decodeURIComponent(weaponName)}</h1>
              <div className="details">
                <p>Class: {className}</p>
                <p>Body Damage: {weaponJson.bodyDamage}<StatBar value={weaponJson.bodyDamage} low={10} high={150}/></p>
                <p>{headLabel}: {weaponJson.headDamage}<StatBar value={weaponJson.headDamage} low={10} high={150}/></p>
                <p>Environmental Damage: {weaponJson.environmentalDamage}<StatBar value={weaponJson.environmentalDamage} low={10} high={3000}/></p>
                <p>DPS: {dps}<StatBar value={dps} low={10} high={300}/></p>
                <p>Min Rage: {weaponJson.bodyDamage}<StatBar value={weaponJson.bodyDamage} low={10} high={300}/></p>
                <p>Max Rage: {weaponJson.bodyDamage}<StatBar value={weaponJson.bodyDamage} low={10} high={300}/></p>
                </div>
                <TTKBreakdown weaponData={weaponJson}/>
              
          </div>
          
          {!compareData && (
          <div>
            <h1>Compare</h1>
            <select onChange={handleChange}>
              <option className="weapon-select-compare" value="">— Select a weapon —</option>
              {classWeapons.map((w) => (
                <option className="weapon-select-compare" key={w.name} value={w.name}>
                  {w.name}
                </option>
              ))}
            </select>
            
            
          
          </div>
          )}
          {compareData && (
            <div className="compare-column">
              <h1>{compareName}</h1>
              <div className="details">
                <p>Class: {className}</p>
                <p>Body Damage: {compareData.bodyDamage}<StatBar value={compareData.bodyDamage} low={10} high={150}/></p>
                <p>{headLabel}: {compareData.headDamage}<StatBar value={compareData.headDamage} low={10} high={150}/></p>
                <p>Environmental Damage: {compareData.environmentalDamage}<StatBar value={compareData.environmentalDamage} low={10} high={3000}/></p>
                <p>DPS: {dps}<StatBar value={dps} low={10} high={300}/></p>
                <p>Min Rage: {compareData.bodyDamage}<StatBar value={compareData.bodyDamage} low={10} high={300}/></p>
                <p>Max Rage: {compareData.bodyDamage}<StatBar value={compareData.bodyDamage} low={10} high={300}/></p>
                </div>
                <TTKBreakdown weaponData={compareData}/>
              
            </div>
          )}
          
      </div>
      {compareData && (
            <>
            <div className="compare-table overflow-x-auto">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Body Damage</th>
                  <th>Head Damage</th>
                  <th>Environmental Damage</th>
                  <th>Magazine Size</th>
                  <th>DPS</th>
                </tr>
                <tr>
                  <th>{weaponName}</th>
                  <th>{weaponJson.bodyDamage}</th>
                  <th>{weaponJson.headDamage}</th>
                  <th>{weaponJson.environmentalDamage}</th>
                  <th>{weaponJson.magazine}</th>
                  <th>{dps}</th>
                </tr>
                <tr>
                  <th>{compareName}</th>
                  <th>{compareData.bodyDamage}</th>
                  <th>{compareData.headDamage}</th>
                  <th>{compareData.environmentalDamage}</th>
                  <th>{compareData.magazine}</th>
                  <th>{dps}</th>
                </tr>
                </table>
              </div>
          </>
          )}
      </div>
    </>
  );
};

export default WeaponDetail