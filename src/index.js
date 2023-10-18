import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';
import Portfolio from './pages/Portfolio';
import Contact from './pages/contact';
import { createBrowserRouter,RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Main",
    element: <Main />,
  },
  {
    path: "Services",
    element: <Services />,
  },
  {
    path: "Aboutus",
    element: <Aboutus />,
  },
  {
    path: "Portfolio",
    element: <Portfolio />,
  },
  {
    path:"Contact",
    element: <Contact />
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);



reportWebVitals();
