import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const words = ['PRECISION.', 'PERFECTION.', 'PERFORMANCE.'];

// Gear SVG for background
function GearSVG() {
  return (
    <svg className="gear-bg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Outer gear teeth */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + 80 * Math.cos(angle);
          const y1 = 100 + 80 * Math.sin(angle);
          const x2 = 100 + 95 * Math.cos(angle - 0.15);
          const y2 = 100 + 95 * Math.sin(angle - 0.15);
          const x3 = 100 + 95 * Math.cos(angle + 0.15);
          const y3 = 100 + 95 * Math.sin(angle + 0.15);
          return (
            <polygon
              key={i}
              points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
              fill="#1E6FFF"
            />
          );
        })}
        <circle cx="100" cy="100" r="78" stroke="#1E6FFF" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="55" stroke="#1E6FFF" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="100" r="30" stroke="#4D9FFF" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="10" stroke="#4D9FFF" strokeWidth="2" fill="rgba(30,111,255,0.2)" />
        {/* Cross lines */}
        <line x1="100" y1="45" x2="100" y2="155" stroke="#1E6FFF" strokeWidth="1" opacity="0.5" />
        <line x1="45" y1="100" x2="155" y2="100" stroke="#1E6FFF" strokeWidth="1" opacity="0.5" />
        <line x1="61" y1="61" x2="139" y2="139" stroke="#1E6FFF" strokeWidth="1" opacity="0.3" />
        <line x1="139" y1="61" x2="61" y2="139" stroke="#1E6FFF" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}

function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.4 }); // start after preloader

      // Stagger word reveal
      tl.fromTo(
        '.hero-headline-inner',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          subRef.current,
          { opacity: 1, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current.children,
          { opacity: 1, y: 20 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="noise-overlay" />
      <GearSVG />

      {/* Blue accent line top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #1E6FFF 30%, #4D9FFF 70%, transparent)',
        opacity: 0.6
      }} />

      <div style={{
        maxWidth: '1280px', margin: '0 auto', 
        width: '100%', minWidth: 0, boxSizing: 'border-box', position: 'relative', zIndex: 2, 
        paddingTop: 'clamp(140px, 22vh, 240px)', paddingBottom: '160px',
        paddingLeft: 'clamp(20px, 5vw, 40px)', paddingRight: 'clamp(20px, 5vw, 40px)'
      }}>
        {/* Eyebrow label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 1, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          style={{ marginBottom: '28px' }}
        >
          Chennai-based Precision Cutting Tools Manufacturer
        </motion.div>

        {/* Headline */}
        <div ref={headlineRef} style={{ marginBottom: '32px' }}>
          {words.map((word) => (
            <div key={word} className="hero-headline-word">
              <span className="hero-headline-inner">{word}</span>
            </div>
          ))}
        </div>

        {/* Subheadline */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#C0C0C8',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '48px',
            opacity: 0
          }}
        >
          Custom precision cutting tools engineered for the most demanding manufacturing environments.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <a
            href="#products"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Contact Us
          </a>
        </div>

        {/* Metric strip */}
        <motion.div
          className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 border-t border-[rgba(42,42,50,0.8)]"
          style={{ marginTop: 'clamp(4rem, 8vw, 5rem)', paddingTop: 'clamp(2rem, 4vw, 2.5rem)' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          {[
            { n: '500+', label: 'Tools Delivered' },
            { n: '10+', label: 'Years Experience' },
            { n: '100%', label: 'Quality Assured' },
            { n: '50+', label: 'Happy Clients' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                fontSize: '1.8rem', color: '#4D9FFF', lineHeight: 1
              }}>{n}</div>
              <div style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 600,
                fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#7A7A8A', marginTop: '4px'
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7A8A', fontFamily: 'Rajdhani, sans-serif' }}>
          Scroll
        </span>
        <ChevronDown size={20} color="#1E6FFF" />
      </div>
    </section>
  );
}

export default Hero;
