import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BiDownload} from 'react-icons/bi'

const About = () => {
  return (
    <section>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src="" alt="My-image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
            <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about-card">
            <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about-card">
            <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, laboriosam a? Amet facilis repellat culpa fuga inventore non mollitia, vitae maiores, laudantium necessitatibus nesciunt voluptate animi suscipit dolor iusto doloremque?
          </p>

          <a href="#" className='btn btn-primary'>
            <BiDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About