import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, FlaskConical, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Layers size={28} />,
    title: 'High-Quality Materials',
    points: [
      'Premium-grade tungsten carbide and HSS substrates',
      'Superior hardness (HRA 90+) and wear resistance',
      'Advanced PVD/CVD coating technologies',
      'Material-matched geometries for optimal performance',
    ]
  },
  {
    icon: <CheckCircle size={28} />,
    title: 'Strict Tolerances & Precision',
    points: [
      'Machined to ±0.005mm dimensional tolerances',
      'Surface finishes up to Ra 0.4μm',
      'CMM-verified quality before dispatch',
      'ISO-aligned quality management practices',
    ]
  }
];

function FeatureBlock({ feature, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="quality-feature"
      initial={{ opacity: 1, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="quality-icon">{feature.icon}</div>

      <h3 style={{
        fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
        fontSize: '1.4rem', letterSpacing: '0.04em', textTransform: 'uppercase',
        color: '#F0F0F2', marginBottom: '8px'
      }}>
        {feature.title}
      </h3>

      {/* Animated underline */}
      <motion.div
        style={{ height: '2px', background: 'linear-gradient(90deg, #1E6FFF, transparent)', marginBottom: '20px' }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
      />

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {feature.points.map((point, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <FlaskConical size={14} color="#1E6FFF" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#C0C0C8', lineHeight: 1.7 }}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Quality() {
  const { ref: quoteRef, inView: quoteInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="quality" style={{ background: '#161618', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* QUALITY watermark */}
      <div className="quality-watermark">QUALITY</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
        {/* Heading */}
        <div className="section-label">Our Standards</div>
        <h2 className="section-heading" style={{ marginBottom: '64px' }}>
          Quality <span>Assurance</span>
        </h2>

        {/* Two feature blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '80px' }}
          className="quality-grid"
        >
          {features.map((feature, i) => (
            <FeatureBlock key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Quote strip */}
        <motion.div
          ref={quoteRef}
          className="quote-strip"
          initial={{ opacity: 1, y: 30 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ color: '#1E6FFF', fontSize: '2rem', lineHeight: 0 }}>"</span>
            <br />
            Join the ranks of industry leaders who trust in our commitment to excellence, and together,
            let's shape the future of manufacturing.
            <br />
            <span style={{ color: '#1E6FFF', fontSize: '2rem', lineHeight: 0 }}>"</span>
          </div>
          <div style={{
            marginTop: '20px', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
            fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1E6FFF',
            fontStyle: 'normal'
          }}>
            — Velmurugan Engineering
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quality-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Quality;
