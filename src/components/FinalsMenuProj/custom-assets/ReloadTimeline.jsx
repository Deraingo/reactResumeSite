// TODO: pull tactical and empty reload times from weaponData
// TODO: normalize bar widths against the longer of the two so they share a scale
// TODO: render each row only when its time exists; show reloadTimeNote when present

const ReloadTimeline = ({ weaponData }) => {
  // TODO: early return if neither reload time exists

  return (
    <div className="reload-timeline">
      <h3>Reload</h3>

      <div className="reload-row">
        <span className="reload-label">Tactical</span>
        <div className="reload-track">
          <div className="reload-fill tactical" style={{ width: "0%" }} />
        </div>
        <span className="reload-time">0s</span>
      </div>

      <div className="reload-row">
        <span className="reload-label">Empty</span>
        <div className="reload-track">
          <div className="reload-fill empty" style={{ width: "0%" }} />
        </div>
        <span className="reload-time">0s</span>
      </div>

      {/* TODO: conditionally render reloadTimeNote when present */}
      <p className="reload-note">
        <em>note goes here</em>
      </p>
    </div>
  );
};

export default ReloadTimeline;
