import './App.css';
import React, { useState, useEffect } from 'react';
// import pages
import Navbar from './components/Navbar';
import Home from './pages/home'
import Services from './pages/services';
import Solution from './pages/Solution';
import Dropdown from './components/dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Home />
      <Services />
      <Solution />
    </div>
  );
}

export default App;
