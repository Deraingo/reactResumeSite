import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import '../style/customization-menu.css'
import Sidebar from '../sidebar';
import {maps, variants} from '../data/game-data';

function CustomizationMenu(){
    const variantTypes = Object.keys(variants)
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    let selectedMap = ""
    return (
        <div className="container">
            <div className="maps">
                <div className={`map-menu ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                    <span className="maps-dropdown">
                        Maps
                    </span>
                </div>
                <div className={`dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <nav>
                    <ul>
                        <li className="map-list-item">{maps[0]}</li>
                        <li className="map-list-item">{maps[1]}</li>
                        <li className="map-list-item">{maps[2]}</li>
                        <li className="map-list-item">{maps[3]}</li>
                        <li className="map-list-item">{maps[4]}</li>
                        <li className="map-list-item">{maps[5]}</li>
                        <li className="map-list-item">{maps[6]}</li>
                        <li className="map-list-item">{maps[7]}</li>
                        <li className="map-list-item">{maps[8]}</li>
                        <li className="map-list-item">{maps[9]}</li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className="envionment-options">
                <div>{variants[0]}</div>
                <div>{variants[1]}</div>
                <div>{variants[2]}</div>
                <div>{variants[3]}</div>
                <div>{variants[4]}</div>
                <div>{variants[5]}</div>
                <div>{variants[6]}</div>
                <div>{variants[7]}</div>
                <div>{variants[8]}</div>
                <div>{variants[9]}</div>
            </div>
            <div className="player-options">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default CustomizationMenu;