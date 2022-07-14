import React from 'react'
import './footer.css'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="footer-copyright">
        <small>&copy; 2022 Bishnu Amola. All rights resrved.</small>
      </div>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/bishnu-amola/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.twitter.com/AmolaVishnu/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.github.com/vishnu921" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer