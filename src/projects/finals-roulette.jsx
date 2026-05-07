import React, { useState } from "react";
import { generateRandomLoadout } from "../utils/loadoutGenerator";
import LoadoutDisplay from "../components/FinalsMenuProj/LoadoutDisplay";
import RandomLoadoutButton from "../components/FinalsMenuProj//RandomLoadoutButton";
import { Link } from "react-router-dom";
import "../App.css";
import Sidebar from "../sidebar";
import ClassSelect from "../components/FinalsMenuProj/ClassSelect";
import SpecSelect from "../components/FinalsMenuProj/SpecSelect";
import WeaponSelect from "../components/FinalsMenuProj/WeaponSelect";
import RouletteOrLoadout from "../components/FinalsMenuProj/RouletteOrLoadout";
import EquipmentSelect from "../components/FinalsMenuProj/EquipmentSelect";

const FinalsRoulette = () => {
  const [loadout, setLoadout] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null)
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedClass(null);
    setSelectedSpec(null);
    setSelectedWeapon(null);
    setSelectedEquipment(null);
    setLoadout(null);
  };
  const handleClassSelect = (className) => {
    setSelectedClass(className);
    setSelectedSpec(null);
  };

  return (
    <>
      <Sidebar />
      <div className="app-container">
        <h1>The Finals Loadout Builder</h1>
        <i className="italics">*Stacking melee values are averaged instead*</i>
        <RouletteOrLoadout onSelect={handleOptionSelect}/>
        {selectedOption && selectedOption !== "Roulette" && !selectedClass && (
          <ClassSelect onSelect={handleClassSelect} />
        )}
        {selectedClass && !selectedSpec && (
          <SpecSelect
            selectedClass={selectedClass}
            onSelect={setSelectedSpec}
          />
        )}
        {selectedClass && selectedSpec && !selectedWeapon &&(
          <WeaponSelect
            selectedClass={selectedClass}
            onSelect={setSelectedWeapon}
          />
        )}
        {selectedClass && selectedSpec && selectedWeapon && !selectedEquipment &&(
          <EquipmentSelect
            selectedClass={selectedClass}
            onSelect={(equipment) => {
            setSelectedEquipment(equipment);
            setLoadout({
              className: selectedClass,
              ability: selectedSpec,
              weapon: selectedWeapon,
              equipment: equipment,
            });
          }}
          />
        )}
        {selectedOption && selectedOption === "Roulette" && (
          <RandomLoadoutButton
          onGenerate={() => setLoadout(generateRandomLoadout())}
          />
        )}
        
        <LoadoutDisplay loadout={loadout} />
      </div>
    </>
  );
};

export default FinalsRoulette;
