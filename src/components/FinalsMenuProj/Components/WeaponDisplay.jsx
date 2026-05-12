import { Link } from "react-router-dom";
import WeaponDetail from "../WeaponDetail";
import "./style/style.css"
const WeaponDisplay = ({loadout, weaponData, StatBar, DamageCalculator, showTechnical}) => {
 const headLabel = weaponData.type === "Melee" ? "Alt Fire" : "Head";
  return (
    <div className="description weapon-description">
      <Link to={`/weapon/${loadout.className}/${encodeURIComponent(loadout.weapon)}`}>
        <div className="stat-grid grid sm:grid-cols-3 gap-2">
        <p></p>
        <p></p>
        <p className="hidden-text">Compare Weapon?</p>
        </div>
        <p>
          <strong>Weapon:</strong> {loadout.weapon}
          {weaponData?.type && <> - <i className="italics">{weaponData.type}</i></>}
        </p>
        {weaponData?.desc && <i className="italics">{weaponData.desc}</i>}

        <div className="stat-grid grid sm:grid-cols-3 gap-2">
          {weaponData?.headDamage != null && (
            <p className="stat-row">
              <span className="stat-label">{headLabel}:</span>
              <i>{weaponData.headDamage}</i>
              <StatBar value={weaponData.headDamage} low={1} high={150}/>
            </p>
          )}
          {weaponData?.bodyDamage != null && (
            <p className="stat-row">
              <span className="stat-label">Body:</span>
              <i>{weaponData.bodyDamage}</i>
              <StatBar value={weaponData.bodyDamage} low={1} high={150}/>
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
          
          {weaponData?.minRange != null && showTechnical &&(
            <p className="stat-row">
              <span className="stat-label">Min Range:</span>
              <i>{weaponData.minRange}m</i>
              <StatBar value={weaponData.minRange} low={1} high={300}/>
            </p>
          )}
          {weaponData?.maxRange != null && showTechnical &&(
            <p className="stat-row">
              <span className="stat-label">Max Range:</span>
              <i>{weaponData.maxRange}m</i>
              <StatBar value={weaponData.maxRange} low={1} high={300}/>
            </p>
          )}
          {weaponData?.reloadTime != null && showTechnical &&(
            <p className="stat-row">
              <span className="stat-label">Tac Reload Speed:</span>
              <i>{weaponData.reloadTime}s</i>
              <StatBar value={weaponData.reloadTime} low={1} high={300}/>
            </p>
          )}{weaponData?.emptyReloadTime != null && showTechnical &&(
            <p className="stat-row">
              <span className="stat-label">Empty Reload Speed:</span>
              <i>{weaponData.emptyReloadTime}s</i>
              <StatBar value={weaponData.emptyReloadTime} low={1} high={300}/>
            </p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default WeaponDisplay;