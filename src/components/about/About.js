import React from 'react'
import './about.css'
import {FaAward, FaGraduationCap} from 'react-icons/fa'
import {BiDownload} from 'react-icons/bi'
import resume from '../../assets/resume.pdf'
import ME from '../../assets/self.jpg'

const About = () => {
  return (
    <section>
    <div className="inner-section">
      <div className="container">
        <div className="section-header">
          <h5>Get To know</h5>
          <h2>About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={ME} alt="ME" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
              <FaAward className='about-icon' />
                <h5>Experienced in </h5>
                <small>MERN Stack</small>
              </article>
              <article className="about-card">
              <FaGraduationCap className='about-icon' />
                <h5>Student at</h5>
                <small>IIT Bhubaneswar</small>
              </article>
            </div>

            <p>
              Hi, I am Bishnu Amola, a Full-stack web developer currently working with MERN stack. I am from Rishikesh, India, pursing my Bachelor of Technology in Civil Engineering from IIT Bhubaneswar. I am fluent in C, C++, Python and JavaScript. If you like to know more about me checkout my resume below.
            </p>

            <a href={resume} className='btn btn-primary'>
              <BiDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
        
      </div>
    </section>
  )
}

export default About