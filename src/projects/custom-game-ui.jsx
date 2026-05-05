import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LoadoutDisplay from "../components/LoadoutDisplay";
import '../App.css';
import Sidebar from '../sidebar';


const GameUI = () => {
    return (
        <div className="contianer">
            <div className="customization-menu-container">
                <LoadoutDisplay/>
            </div>
            <div className="player-queue-menu-container">

            </div>
            <div className="player-team-menu-container">

            </div>
        </div>
    );
};