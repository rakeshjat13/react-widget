import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from "./Contact";


export default function Routes() {
  return useRoutes([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'about',
        element: <About />
    }, 
    {
        path: 'contact',
        element: <Contact />
    }
]);
}
