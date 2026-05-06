import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import SweProj from "./projects/swe-proj.jsx";
import TheFinals from "./projects/the-finals.jsx";
import RecipeManager from "./projects/recipe-manager.jsx";
import FinalsRoulette from "./projects/finals-roulette.jsx";
import CustomizationMenu from "./components/FinalsMenuProj/CustomizationMenu.jsx";
import AboutMe from "./projects/about-me.jsx";
import TwitchCordBot from "./projects/twitch-cord-bots.jsx";
import VibeBot from "./projects/vibe-bot.jsx";
import WayMark from "./projects/way-mark.jsx";
import SwcoProj from "./projects/swco.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <sidebar />,
      },
    ],
  },
  {
    path: "/recipe-manager",
    element: <RecipeManager />,
  },
  {
    path: "/swco",
    element: <SwcoProj />,
  },
  {
    path: "/swe-proj",
    element: <SweProj />,
  },
  {
    path: "/twitch-cord-bots",
    element: <TwitchCordBot />,
  },
  {
    path: "/vibe-bot",
    element: <VibeBot />,
  },
  {
    path: "/the-finals",
    element: <TheFinals />,
  },
  {
    path: "/way-mark",
    element: <WayMark />,
  },
  {
    path: "/finals-roulette",
    element: <FinalsRoulette />,
  },
  {
    path: "/custom-game-ui",
    element: <CustomizationMenu />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
