import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip
} from "recharts";

// TODO: decide which stats become axes (damage, fireRate, magazine, range, reload, etc.)
// TODO: pick a normalization ceiling per stat so all axes share a 0–100 scale
// TODO: invert "lower is better" stats like reloadTime so longer = lower score
// TODO: build the data array of { stat, value } from weaponData

const WeaponRadarChart = ({ weaponData }) => {
  if (!weaponData) return null;

  // TODO: replace this placeholder data with normalized values from weaponData
  const data = [
    { stat: "Damage", value: 0 },
    { stat: "Headshot", value: 0 },
    { stat: "Fire Rate", value: 0 },
    { stat: "Magazine", value: 0 },
    { stat: "Range", value: 0 },
    { stat: "Reload", value: 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke="#444" />
        <PolarAngleAxis dataKey="stat" stroke="#aaa" />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
        <Tooltip />
        <Radar
          dataKey="value"
          stroke="#22c55e"
          fill="#22c55e"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default WeaponRadarChart;
