import React from "react";
import StatBar from "./StatBar";

const DamageCalculator = ({ bodyDamage, headDamage, fireRate }) => {
  if (bodyDamage == null || fireRate == null) {
    return <i>—</i>;
  }
  const avgDamage =
    headDamage != null ? (bodyDamage + headDamage) / 2 : bodyDamage;
  const dps = (avgDamage * fireRate) / 60;

  return (
    <>
      {dps.toFixed(1)}
      <StatBar value={dps} low={1} high={350} />
    </>
  );
};

export default DamageCalculator;
