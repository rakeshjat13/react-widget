import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About Us</Link></li>
        <li><Link to="/contact" >Contact Us</Link></li>
      </ul>
        <div>
          Home Page
        </div>
    </>
  )
}
