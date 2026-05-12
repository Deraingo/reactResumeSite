import React, { useState } from "react";
import { weapons, CLASS_HP } from "../../data/classes";

import "./style/style.css"
import WeaponRangeChart from "./custom-assets/WeaponRangeChart";
import TTKBreakdown from "./custom-assets/TTKBreakdown";
const AdvancedLoadoutDisplay = ({ loadout, weaponData }) => {
  return (
    <>
          <WeaponRangeChart weaponData={weaponData} />
    </>
  );
};

export default AdvancedLoadoutDisplay;
