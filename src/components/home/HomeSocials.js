import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub, FaTwitter} from 'react-icons/fa'


function HomeSocials() {
  return (
    <div className='home-socials'>
        <a href="https://www.linkedin.com/in/bishnu-amola/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.twitter.com/AmolaVishnu/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.github.com/vishnu921" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HomeSocials