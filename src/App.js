import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Perfect from './components/Perfect';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/services" element={<Perfect />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
