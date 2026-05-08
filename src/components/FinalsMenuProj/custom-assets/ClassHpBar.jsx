// TODO: define class HP values (Light/Medium/Heavy) — eventually move into data/classes.js
// TODO: look up HP from the className prop
// TODO: scale the bar width as a percentage of the largest class HP
// TODO: apply a class-specific color modifier (light/medium/heavy)

const ClassHpBar = ({ className }) => {
  // TODO: early return if className doesn't map to a known class

  return (
    <div className="class-hp-bar">
      <span className="class-hp-label">Class: {className}</span>
      <div className="class-hp-track">
        <div className="class-hp-fill" style={{ width: "0%" }} />
      </div>
      <span className="class-hp-value">— HP</span>
    </div>
  );
};

export default ClassHpBar;
