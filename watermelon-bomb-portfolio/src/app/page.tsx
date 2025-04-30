'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Animation from '../components/Animation';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';


export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent && <Animation onComplete={() => setShowContent(true)} />}
      {showContent && (
        <>
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Works />
          <Contact />
        </>
      )}
    </>
  );
}
