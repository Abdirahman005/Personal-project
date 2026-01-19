import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
