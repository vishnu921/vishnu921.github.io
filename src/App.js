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
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="skills" element={<Skills />} /> 
        <Route path="projects" element={<Projects />} /> 
        <Route path="contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
