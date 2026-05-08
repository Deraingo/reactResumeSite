import "../style/stat-bar.css"
const StatBar = ({ value, low, high }) => {
  if (value == null) return <span>—</span>;
  const tier = value <= low ? "low" : value >= high ? "high" : "med";
  const count = tier === "low" ? 1 : tier === "med" ? 2 : 3;
  return (
    <span className={`stat-bar ${tier}`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={`bar ${i < count ? "filled" : "empty"}`} />
      ))}
    </span>
  );
};

export default StatBar;