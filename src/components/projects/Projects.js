import React, { useEffect, useState } from 'react'
import './projects.css'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

function Projects() {
  const [projectList, setprojectList] = useState([]);
  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setprojectList(filteredData);
      } catch (err) {
        console.log(err);
      }
    }

    getProjectList();
  })
  
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
              projectList.map(({id, imageUrl, title, description, githubUrl, liveLink}) => {
                return (
                  <article key={id} className="project-item">
                  <div className="project-item-description">
                    <div className="project-item-image">
                      { imageUrl && <img src={imageUrl} alt={title} /> }
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                    <div className="project-item-cta">
                      <a href={githubUrl} className='btn' target="_blank" rel="noreferrer">Github</a>
                      <a href={liveLink} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
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