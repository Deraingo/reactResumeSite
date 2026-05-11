const SpecDisplay = ({loadout, specData, StatBar, DamageCalculator}) => {
 return (<div className="description">
          <p>
            <strong>Spec:</strong> {loadout.ability}
          </p>
          {specData?.desc && <i className="italics">{specData.desc}</i>}
            {specData?.damage != null && (
              <p className="stat-row">
                <span className="stat-label">Damage:</span>
                <i>{specData.damage}</i>
                <StatBar value={specData.damage} low={10} high={200}/>
              </p>
            )}

            {specData?.cooldownMin != null && (
              <p className="stat-row">
                <span className="stat-label">Cool Down (Min):</span>
                <i>{specData.coolDownMin}</i>
                <StatBar value={specData.cooldownMin} low={10} high={2000}/>
              </p>
            )}
            {specData?.cooldownMax != null && (
              <p className="stat-row">
                <span className="stat-label">Cool Down (Max):</span>
                <i>{specData.coolDownMax}</i>
                <StatBar value={specData.cooldownMax} low={1} high={300}/>
              </p>
            )}
            {specData?.durationMin != null && (
              <p className="stat-row">
                <span className="stat-label">Duration Min: </span>
                <i>{specData.durationMin}</i>
                <StatBar value={specData.durationMin} low={1} high={300}/>
              </p>
            )}
            {specData?.durationMax != null && specData?.durationNote != null && (
              <>
              <p className="stat-row">
                <span className="stat-label">Duration Max: </span>
                <i>{specData.durationMax} seconds:</i>
                
                <StatBar value={specData.durationMax} low={1} high={300}/>
              </p>
              <i className="italics">{specData.durationNote}</i>
              </>
            )}
            {specData?.charges != null && (
              <p className="stat-row">
                <span className="stat-label">Charges</span>
                <i>{specData.charges}s</i>
                <StatBar value={specData.charges} low={1} high={300}/>
              </p>
            )}
          </div>
)
}

export default SpecDisplay;