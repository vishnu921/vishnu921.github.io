import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio/img1.png'
import IMG2 from '../../assets/portfolio/img2.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Facebook Clone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti saepe voluptatum doloribus sapiente accusantium cupiditate autem perspiciatis! Eveniet, aspernatur.',
    github: 'https://github.com/vishnu921',
    demo: 'https://fb-clone-b81f0.web.app/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Realtime Chat App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti saepe voluptatum doloribus sapiente accusantium cupiditate autem perspiciatis! Eveniet, aspernatur.',
    github: 'https://github.com/vishnu921',
    demo: '#'
  },
  {
    id: 3,
    image: IMG2,
    title: 'TODO Application',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti saepe voluptatum doloribus sapiente accusantium cupiditate autem perspiciatis! Eveniet, aspernatur.',
    github: 'https://github.com/vishnu921',
    demo: 'https://vishnu921.github.io/Todo-application/'
  },
  {
    id: 4,
    image: IMG2,
    title: 'Facebook Clone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti saepe voluptatum doloribus sapiente accusantium cupiditate autem perspiciatis! Eveniet, aspernatur.',
    github: 'https://github.com/vishnu921',
    demo: 'https://fb-clone-b81f0.web.app/'
  },
  {
    id: 5,
    image: IMG2,
    title: 'Facebook Clone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti saepe voluptatum doloribus sapiente accusantium cupiditate autem perspiciatis! Eveniet, aspernatur.',
    github: 'https://github.com/vishnu921',
    demo: 'https://fb-clone-b81f0.web.app/'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Facebook Clone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti saepe voluptatum doloribus sapiente accusantium cupiditate autem perspiciatis! Eveniet, aspernatur.',
    github: 'https://github.com/vishnu921',
    demo: 'https://fb-clone-b81f0.web.app/'
  }
]

function Projects() {
  return (
    <section>
      <div className="inner-section">
        <div className="container">
          <div className="section-header">
            <h5>Checkout My Recent Work</h5>
            <h2>Projects</h2>
          </div>
          <div className="projects-container">
            {
              data.map(({id, image, title, description, github, demo}) => {
                return (
                  <article key={id} className="project-item">
                  <div className="project-item-description">
                    <div className="project-item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                    <div className="project-item-cta">
                      <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                      <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects