import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList
} from "recharts";
import { CLASS_HP } from "../../../data/classes";
import "../style/style.css";

const TTKBreakdown = ({ weaponData }) => {
  if (weaponData?.bodyDamage == null || weaponData?.fireRate == null) {
    return null;
  }

  const { bodyDamage, fireRate } = weaponData;
  const shotsPerSecond = fireRate / 60;

  const rows = Object.entries(CLASS_HP).map(([className, hp]) => {
    const shotsToKill = Math.ceil(hp / bodyDamage);
    const ttkSeconds = (shotsToKill - 1) / shotsPerSecond;
    return { className, hp, shotsToKill, ttkSeconds };
  });

  return (
    <div className="ttk-breakdown">
      <h3>Time to Kill (body shots)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          layout="vertical"
          data={rows}
          margin={{ top: 10, right: 60, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            type="number"
            stroke="#aaa"
            label={{ value: "Seconds", position: "insideBottom", offset: -5 }}
          />
          <YAxis type="category" dataKey="className" stroke="#aaa" />
          <Tooltip
            formatter={(value, name, item) => [
              `${value.toFixed(2)}s (${item.payload.shotsToKill} shots)`,
              "TTK",
            ]}
            contentStyle={{ background: "#222", border: "1px solid #444" }}
          />
          <Bar dataKey="ttkSeconds" fill="#ef4444">
            <LabelList
              dataKey="shotsToKill"
              position="right"
              formatter={(v) => `${v} shots`}
              fill="#aaa"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TTKBreakdown;
