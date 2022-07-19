import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Skills() {
  return (
    <section>
    <div className="inner-section">
        <h5>What I'm best at</h5>
        <h2>Skills</h2>

        <div className="container skills-container">
          <div className="skills-frontend">
            <h3>Frontend Development</h3>
            <div className="skills-content">
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="skills-backend">
            <h3>Backend Development</h3>
            <div className="skills-content">
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="skill-details">
                <BsPatchCheckFill className='skill-details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills