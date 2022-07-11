import React from 'react'
import './home.css'
import HomeSocials from './HomeSocials'
import self from '../../assets/self.jpg'

function Home() {
  return (
    <div className="home">
      <div className="container home-container">
        <h5>Hello I'm</h5>
        <h1>Bishnu Amola</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className='cta'>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>

        <div className="me">
          {/* <img src={self} alt="me" /> */}
        </div>

        <HomeSocials />
      </div>
    </div>
  )
}

export default Home