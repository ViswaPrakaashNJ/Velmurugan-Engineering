import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Wrench, Droplets, ShieldCheck } from 'lucide-react';

const differentiators = [
  {
    icon: <Settings size={28} />,
    title: 'Precision Machining',
    desc: 'Sub-micron tolerances achieved with advanced CNC grinding and quality inspection at every stage.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Custom Tool Experts',
    desc: 'From concept to delivery — we engineer bespoke cutting tools for any machining challenge.',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Through-Coolant Specialists',
    desc: 'Industry-leading through-coolant OD, ID, and face grooving tools for high-speed wet machining.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Quality First Always',
    desc: 'Rigorous QC protocols and CMM verification ensure every tool meets or exceeds specification.',
  },
];

function WhyCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="why-card"
      initial={{ opacity: 1, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="why-icon">{item.icon}</div>
      <h3 style={{
        fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
        fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase',
        color: '#F0F0F2', marginBottom: '12px'
      }}>
        {item.title}
      </h3>
      <p style={{
        fontFamily: 'Inter', fontSize: '0.875rem', color: '#7A7A8A', lineHeight: 1.7
      }}>
        {item.desc}
      </p>
    </motion.div>
  );
}

function WhyChoose() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="why" style={{ background: '#0D0D0F', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="px-5 md:px-10">
        {/* Heading */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 1, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            Why VME
          </div>
          <h2 className="section-heading" style={{ display: 'inline-block' }}>
            Why Choose <span>Velmurugan Engineering</span>
          </h2>
          <div className="section-divider" style={{ margin: '20px auto' }} />
        </motion.div>

        {/* Cards row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          background: 'rgba(26, 26, 30, 0.5)',
          border: '1px solid #2A2A32',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
          className="why-grid"
        >
          {differentiators.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-card:nth-child(2)::after { display: none; }
        }
        @media (max-width: 640px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-card::after { display: none; }
        }
      `}</style>
    </section>
  );
}

export default WhyChoose;
