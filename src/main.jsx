import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import SweProj from './projects/swe-proj.jsx';
import MapleProj from './projects/maple-proj.jsx';
import TheFinals from './projects/the-finals.jsx';
import RecipeManager from './projects/recipe-manager.jsx';
import FinalsRoulette from './projects/finals-roulette.jsx';
import CustomizationMenu from './components/CustomizationMenu.jsx';
import AboutMe from './projects/about-me.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        element: <sidebar />
      }
    ]

  },
  {
    path: "/recipe-manager",
    element: <RecipeManager />
  },
  {
    path: "/swe-proj",
    element: <SweProj />
  },
  {
    path: "/maple-proj",
    element: <MapleProj />
  },
  {
    path: "/the-finals",
    element: <TheFinals />
  },
  {
    path: "/finals-roulette",
    element: <FinalsRoulette/>
  },
  {
    path: "/custom-game-ui",
    element: <CustomizationMenu/>
  },
  {
    path: "/about-me",
    element: <AboutMe/>
  }
]);


const Main = () => {
  return (
      <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Main />
)
