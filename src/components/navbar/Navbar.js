import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {FaCode, FaPaperPlane, FaLaptopCode} from 'react-icons/fa'

function Navbar() {

  return (
    <nav>
      <NavLink to="/">
        <AiOutlineHome />
      </NavLink>
      <NavLink to="about">
        <AiOutlineUser />
      </NavLink>
      <NavLink to="skills">
        <FaCode />
      </NavLink>
      <NavLink to="projects">
        <FaLaptopCode />
      </NavLink>
      <NavLink to="contact">
        <FaPaperPlane />
      </NavLink>
    </nav>
  )
}

export default Navbar