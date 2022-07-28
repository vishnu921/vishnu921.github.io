import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import background from './assets/bg.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="skills" element={<Skills />} /> 
          <Route path="projects" element={<Projects />} /> 
          <Route path="contact" element={<Contact />} /> 
        </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
