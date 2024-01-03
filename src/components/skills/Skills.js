import React, { useEffect, useState } from 'react'
import './skills.css'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

function Skills() {
  const [skillList, setSkillList] = useState([])
  const skillsCollectionRef = collection(db, "skills");

  
  useEffect(() => {
    const getSkillList = async () => {
      try {
        const data = await getDocs(skillsCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setSkillList(filteredData);
      } catch (err) {
        console.log(err);
      }
    }

    getSkillList();
  })

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
              skillList.map(({id, devicon, name}) => {
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