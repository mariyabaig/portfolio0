import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
  <>
  <AnimatedCursor/>
  <BrowserRouter>
  
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/experience" element={<Experience/>}/>
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
