import React from 'react'
import './home.css'
import HomeSocials from './HomeSocials'
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="inner-section">
        <div className="container home-container">
          <h5>Hello I'm</h5>
          <h1>Bishnu Amola</h1>
          <h5 className="text-light">Fullstack Developer</h5>

          <div className='cta'>
          <Link to='/contact' className='btn btn-primary'>Contact Me</Link>
          </div>
          <HomeSocials />
        </div>
      </div>
    </section>
  )
}

export default Home