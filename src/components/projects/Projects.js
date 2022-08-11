import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio/img1.png'
import IMG2 from '../../assets/portfolio/img2.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Facebook Clone',
    description: 'This clone of Facebook is a single page application built using ReactJS in which use can sign-in using their googleaccounts. User can write a post and the feed would change in real-time for all the users. The back-end of the app is maintained using the Firestore database',
    github: 'https://github.com/vishnu921/facebook-clone',
    demo: 'https://fb-clone-b81f0.web.app/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Realtime Chat App',
    description: 'Multiple users can join a chat room by each entering a unique username on website load. A notification is sent to all users when a user joins or leaves the chatroom. Users can type chat messages to the chat room',
    github: 'https://github.com/vishnu921/chat-app-project',
    demo: 'https://github.com/vishnu921'
  },
  {
    id: 3,
    image: IMG2,
    title: 'TODO Application',
    description: 'Add and organize your daily tasks with easy interface. The Todo list persist event after tab is closed or reloaded and you can also undo deleted tasks from last save. The CRUD operations are implemented using Web Storage API and JavaScript',
    github: 'https://github.com/vishnu921/Todo-application',
    demo: 'https://vishnu921.github.io/Todo-application/'
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