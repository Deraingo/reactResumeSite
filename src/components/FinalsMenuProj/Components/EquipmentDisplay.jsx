const EquipmentDisplay = ({ loadout, equipmentData, StatBar, showTechnical }) => (
 
  <div className="description">
    {equipmentData.map((item, i) => (
      <div key={loadout.equipment[i]} className="equipment-output">
        <p><strong>{loadout.equipment[i]}</strong>{item?.type && <> — <i>{item.type}</i></>}</p>
        {item?.desc && <i className="italics">{item.desc}</i>}

        {item?.damage != null && (
          <p className="stat-row">
            <span className="stat-label">Damage:</span>
            <i>{item.damage}</i>
            <StatBar value={item.damage} low={10} high={200}/>
          </p>
        )}
        {item?.environmentalDamage != null && (
          <p className="stat-row">
            <span className="stat-label">Environmental:</span>
            <i>{item.environmentalDamage}</i>
            <StatBar value={item.environmentalDamage} low={1} high={2000}/>
          </p>
        )}
        {item?.cooldownMin != null && (
          <p className="stat-row">
            <span className="stat-label">Cooldown:</span>
            <i>{item.cooldownMin}s</i>
            <StatBar value={item.cooldownMin} low={1} high={30}/>
          </p>
        )}
        {item?.durationMin && (
            <p className="stat-row">
            <span className="stat-label">Duration-Min:</span>
            <i>{item.durationMin}s</i>
            <StatBar value={item.durationMin} low={1} high={30}/>
            </p>
        )}
        {item?.durationMax && (
            <p className="stat-row">
            <span className="stat-label">Duration-Max:</span>
            <i>{item.durationMax}s</i>
            <StatBar value={item.durationMax} low={1} high={30}/>
            </p>
        )}
        {showTechnical && item?.defensiveWeight && (
            <p className="stat-row">
            <span className="stat-label">Defensive Power:</span>
            <i>{item.defensiveWeight}s</i>
            <StatBar value={item.defensiveWeight} low={1} high={10}/>
            </p>
        )}
        {showTechnical && item?.offensiveWeight && (
            <p className="stat-row">
            <span className="stat-label">Offensive Power:</span>
            <i>{item.durationMin}s</i>
            <StatBar value={item.durationMin} low={1} high={30}/>
            </p>
        )}
      </div>
    ))}
  </div>
);

export default EquipmentDisplay;