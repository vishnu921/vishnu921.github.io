import React from 'react'
import { useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {FaCode, FaPaperPlane, FaLaptopCode} from 'react-icons/fa'

function Navbar() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome /></a>
      <a href="#" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser /></a>
      <a href="#"><FaCode /></a>
      <a href="#"><FaLaptopCode /></a>
      <a href="#"><FaPaperPlane /></a>
    </nav>
  )
}

export default Navbar