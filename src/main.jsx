import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './layout/Main.jsx'
import Homepage from './components/Homepage'
import DivisionPage from './components/DivisionPage'
import About from './components/About'
import Contact from './components/Contact'
import DistrictPage from './components/DistrictPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,  
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/divisions", element: <DivisionPage /> },
      { path: "/division/:divisionId", element: <DivisionPage /> },
      { path: "/district/:districtId", element: <DistrictPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
