import React from 'react'
import "./NavBar.css"
import { GiNetworkBars } from "react-icons/gi"
import { MdNetworkWifi1Bar } from "react-icons/md"
import { FaBatteryFull } from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <span>9:41</span>
      <div className="icons">
        <GiNetworkBars />
        <MdNetworkWifi1Bar />
        <FaBatteryFull />
      </div>
    </div>
  )
}

export default NavBar