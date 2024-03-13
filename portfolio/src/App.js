import './App.css';
import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import links from './links data/links';

const App = () => {
  //uselocation hook
  const location = useLocation();

//active links state change on click
let [active_link, set_active_link] = useState("white");


  return (
    <>
    <Header links={links} location={location} />
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
    <Footer />
    
    </>
  );
}

export default App;
