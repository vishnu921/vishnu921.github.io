import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import {FaHome, FaCode, FaPaperPlane, FaLaptopCode, FaUser} from 'react-icons/fa'

function Navbar() {

  return (
    <header>
      <nav>
        <NavLink to="/">
          <FaHome className='nav-icon'/>
          <span className='nav-item-name'>Home</span>
        </NavLink>
        <NavLink to="about">
          <FaUser className='nav-icon'/>
          <span className='nav-item-name'>About</span>
        </NavLink>
        <NavLink to="skills">
          <FaCode className='nav-icon'/>
          <span className='nav-item-name'>Skills</span>
        </NavLink>
        <NavLink to="projects">
          <FaLaptopCode className='nav-icon'/>
          <span className='nav-item-name'>Projects</span>
        </NavLink>
        <NavLink to="contact">
          <FaPaperPlane className='nav-icon'/>
          <span className='nav-item-name'>Contact</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar