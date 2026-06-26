import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Quality from './components/Quality';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for layout calculation then refresh scroll triggers
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => {}} />}
      </AnimatePresence>

      <div style={{ position: 'relative' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Gallery />
          <Quality />
          <WhyChoose />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
