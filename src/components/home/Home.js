import React from 'react'
import './home.css'
import HomeSocials from './HomeSocials'
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="inner-section">
        <div className="container home-container">
          <h4>Hello I'm</h4>
          <h1>Bishnu Amola</h1>
          <h4 className="text-light">Fullstack Developer</h4>

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