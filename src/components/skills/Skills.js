import React from 'react'
import './skills.css'

const data = [
  {
    id: 1,
    name: "C++",
    devicon: "devicon-cplusplus-plain"
  },
  {
    id: 2,
    name: "Python",
    devicon: "devicon-python-plain"
  },
  {
    id: 3,
    name: "JavaScript",
    devicon: "devicon-javascript-plain"
  },
  {
    id: 4,
    name: "HTML5",
    devicon: "devicon-html5-plain"
  },
  {
    id: 5,
    name: "CSS",
    devicon: "devicon-css3-plain"
  },
  {
    id: 6,
    name: "React",
    devicon: "devicon-react-original"
  },
  {
    id: 7,
    name: "Nodejs",
    devicon: "devicon-nodejs-plain"
  },
  {
    id: 8,
    name: "Express",
    devicon: "devicon-express-original"
  },
  {
    id: 9,
    name: "MongoDB",
    devicon: "devicon-mongodb-plain"
  },
  {
    id: 10,
    name: "MySql",
    devicon: "devicon-mysql-plain"
  },
  {
    id: 11,
    name: "Bootstrap",
    devicon: "devicon-bootstrap-plain"
  },
  {
    id: 12,
    name: "Tensorflow",
    devicon: "devicon-tensorflow-original"
  }
]

function Skills() {
  return (
    <section>
    <div className="inner-section">
      <div className="section-header">
        <h5>What I'm best at</h5>
        <h2>Skills</h2>
      </div>

        <div className="container">
          <div className="skills-container">
            {
              data.map(({id, devicon, name}) => {
                return (
                  <div key={id} className="skill-card">
                    <div className='skill-item'>
                      <i className={devicon} />
                      <p>{name}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills