import { useParams, Link } from "react-router-dom";
import { weapons } from "../../data/classes";
import StatBar from "./custom-assets/StatBar";
import DamageCalculator from "./custom-assets/DamageCalculator";
import { useState } from "react";

const WeaponDetail = () => {
  const { className, weaponName } = useParams();
  const weapon = weapons[decodeURIComponent(weaponName)];
  const weaponJson = weapon;
  const dps = <DamageCalculator bodyDamage={weaponJson.bodyDamage} headDamage={weaponJson.headDamage} fireRate={weaponJson.fireRate}/>
  const [selectedWeapon, setWeaponCompare] = useState()
  const handleChage = (e) => {
    setWeaponCompare(e.target.value);
  }
  return (
    <div className="loadout-card grid sm:grid-cols-2 lg:grid-cols-2 gap-40">
        <div>
            <h1>{decodeURIComponent(weaponName)}</h1>
            <p>Class: {className}</p>
            <p>Body Damage: {weaponJson.bodyDamage}<StatBar value={weaponJson.bodyDamage} low={10} high={150}/></p>
            <p>Headshot / Alt-fire: {weaponJson.headDamage}<StatBar value={weaponJson.headDamage} low={10} high={150}/></p>
            <p>Environmental Damage: {weaponJson.environmentalDamage}<StatBar value={weaponJson.environmentalDamage} low={10} high={3000}/></p>
            <p>DPS: {dps}<StatBar value={dps} low={10} high={300}/></p>
            <p>Min Rage: {weaponJson.bodyDamage}<StatBar value={weaponJson.bodyDamage} low={10} high={300}/></p>
            <p>Max Rage: {weaponJson.bodyDamage}<StatBar value={weaponJson.bodyDamage} low={10} high={300}/></p>
            
        </div>
        <div>
            <h1>Compare</h1>
            <select onChange={handleChange}>
                
            </select>
        </div>
      <Link to="/finals-roulette">← Back</Link>
      
    </div>
  );
};

export default WeaponDetail