import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const WeaponRangeChart = ({ weaponData }) => {
  const { bodyDamage, falloffMultiplier, minRange, maxRange } = weaponData;
  if (bodyDamage == null || minRange == null || maxRange == null) return null;

  const farDamage = falloffMultiplier != null
    ? bodyDamage * falloffMultiplier
    : bodyDamage;

  const data = [
    { range: 0, damage: bodyDamage },
    { range: minRange, damage: bodyDamage },
    { range: maxRange, damage: farDamage },
    { range: maxRange + 20, damage: farDamage },
  ];

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis
          dataKey="range"
          type="number"
          domain={[0, 'dataMax']}
          label={{ value: "Distance (m)", position: "insideBottom", offset: -10 }}
        />
        <YAxis
          domain={[0, bodyDamage * 1.1]}
          label={{ value: "Damage", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Line type="linear" dataKey="damage" stroke="#22c55e" strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeaponRangeChart;