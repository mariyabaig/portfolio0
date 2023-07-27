

import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Perfect from "./components/Perfect";
import Skills from "./components/Skills";
import { AnimatePresence } from "framer-motion";
import Transition from "./transition";
import Second from "./components/Second";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
    
      <AnimatePresence mode="wait">
       
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/blog" element={<Second/>} />
            <Route exact path="/services" element={<Perfect />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
     
      </AnimatePresence>
    </>
  );
}

export default App;
