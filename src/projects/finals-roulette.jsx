import React, { useState } from "react";
import { generateRandomLoadout } from "../utils/loadoutGenerator";
import LoadoutDisplay from "../components/FinalsMenuProj/LoadoutDisplay";
import RandomLoadoutButton from "../components/FinalsMenuProj//RandomLoadoutButton";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";
import ClassSelect from "../components/FinalsMenuProj/ClassSelect";

const FinalsRoulette = () => {
  const [loadout, setLoadout] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  return (
    <div className="app-container">
      <h1>The Finals Loadout Builder</h1>
      <ClassSelect />
      <RandomLoadoutButton
        onGenerate={() => setLoadout(generateRandomLoadout())}
      />
      <LoadoutDisplay loadout={loadout} />
    </div>
  );
};

export default FinalsRoulette;
