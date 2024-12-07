import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <div className="components">
          <div className="alerts">
        <li><a href="/alerts"> 🔔 Alerts</a></li>
        </div>
        <div className="alerts-count">0</div>
        <li><a href="/loginSignup">Login / Signup</a></li>
        </div>
      </ul>
      <br />
    </div>
    
  )
}

export default Navbar
