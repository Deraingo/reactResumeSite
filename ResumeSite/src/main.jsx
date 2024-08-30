import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';

const router = createHashRouter([
  {
    path: "",
    element: <App />,
    children:[
      {
        element: <sidebar />
      }
    ]

  },
  {
    path: "/recipe-manager",
    element: <recipe-manager />
  },
  {
    path: "/swe-proj",
    element: <swe-proj/>
  },
  {
    path: "/maple-proj",
    element: <maple-proj/>
  },
  {
    path: "/findable-glowsticks",
    element: <findable-glowsticks/>
  },
  {
    path: "/power-play",
    element: <power-play/>
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
