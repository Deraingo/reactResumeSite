import React, { useState } from "react";
import { generateRandomLoadout } from "../utils/loadoutGenerator";
import LoadoutDisplay from "../components/LoadoutDisplay";
import RandomLoadoutButton from "../components/RandomLoadoutButton";
import { Link } from 'react-router-dom';
import '../App.css';
import Sidebar from '../sidebar';

const FinalsRoulette = () => {
  const [loadout, setLoadout] = useState(null);

  return (
    <div className="app-container">
      <h1>The Finals Loadout Roulette</h1>
      <RandomLoadoutButton onGenerate={() => setLoadout(generateRandomLoadout())} />
      <LoadoutDisplay loadout={loadout} />
    </div>
  );
};

export default FinalsRoulette;
