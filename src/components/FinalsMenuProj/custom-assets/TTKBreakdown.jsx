import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList
} from "recharts";
import { CLASS_HP } from "../../../data/classes";
import "../style/style.css";

const TTKBreakdown = ({ weaponData }) => {
  if (weaponData?.bodyDamage == null || weaponData?.fireRate == null && weaponData?.headshotMultiplier == null) return null;

  const { bodyDamage, fireRate, headDamage, type } = weaponData;
  const shotsPerSecond = fireRate / 60;
  const headLabel = type === "Melee" ? "Alt Fire" : "Head";

  const rows = Object.entries(CLASS_HP).map(([className, hp]) => {
    const shotsToKill = Math.ceil(hp / bodyDamage);
    const shotsToKillHead = headDamage != null ? Math.ceil(hp / (headDamage + (headDamage * weaponData.headshotMultiplier))) : null;
    console.log(shotsToKillHead)
    return {
      className,
      shotsToKill,
      shotsToKillHead,
      ttkSeconds: (shotsToKill - 1) / shotsPerSecond,
      ttkSecondsHead: shotsToKillHead != null ? (shotsToKillHead - 1) / shotsPerSecond : null,
    };
  });

  return (
    <div className="ttk-breakdown">
      <h3>Time to Kill</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart layout="vertical" data={rows} margin={{ top: 10, right: 60, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis type="number" stroke="#aaa" />
          <YAxis type="category" dataKey="className" stroke="#aaa" />
          <Tooltip formatter={(value, name) => [`${value.toFixed(2)}s`, name]}
                   contentStyle={{ background: "#222", border: "1px solid #444" }} />
          <Bar dataKey="ttkSeconds" name="Body" fill="#ef4444">
            <LabelList dataKey="shotsToKill" position="right"
                       formatter={(v) => `${v} shots`} fill="#aaa" />
          </Bar>
          <Bar dataKey="ttkSecondsHead" name={headLabel} fill="#2bff00">
            <LabelList dataKey="shotsToKillHead" position="right"
                       formatter={(v) => v != null ? `${v} shots` : ""} fill="#aaa" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TTKBreakdown;
