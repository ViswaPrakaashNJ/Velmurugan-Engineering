import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Target, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 500, suffix: '+', label: 'Tools Delivered' },
  { number: 10, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Quality Assured' },
  { number: 50, suffix: '+', label: 'Satisfied Clients' },
];

const values = [
  {
    icon: <Star size={20} color="#4D9FFF" />,
    title: 'Superior Craftsmanship',
    text: 'Every tool is precision-ground to exact tolerances, ensuring repeatable performance across high-volume production runs.'
  },
  {
    icon: <Shield size={20} color="#4D9FFF" />,
    title: 'Durability & Reliability',
    text: 'Manufactured from premium-grade carbide and HSS materials with proven hardness and wear resistance.'
  },
  {
    icon: <Zap size={20} color="#4D9FFF" />,
    title: 'Performance Excellence',
    text: 'Optimized cutting geometries and coating technologies deliver superior metal removal rates and extended tool life.'
  },
  {
    icon: <Target size={20} color="#4D9FFF" />,
    title: 'Customer Satisfaction',
    text: 'We partner closely with each client to engineer solutions tailored precisely to their machining requirements.'
  },
];

function StatCard({ stat }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const countRef = useRef(null);

  useEffect(() => {
    if (inView && countRef.current) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.number,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(obj.val) + stat.suffix;
          }
        }
      });
    }
  }, [inView, stat]);

  return (
    <div ref={ref} className="stat-counter-card">
      <div className="stat-number" ref={countRef}>
        0{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const valueCardsRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Heading wipe reveal
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo(headingRef.current,
        { opacity: 1, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
        }
      );

      // Value cards slide in
      valueCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { x: -60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{ background: '#161618', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="px-5 md:px-10">
        {/* Section label */}
        <div className="section-label">Who We Are</div>

        <div ref={headingRef} >
          <h2 className="section-heading">
            Engineering <span>Excellence</span><br />Since Day One
          </h2>
        </div>

        {/* Animated blue line */}
        <div
          ref={lineRef}
          style={{
            width: '80px', height: '3px',
            background: 'linear-gradient(90deg, #1E6FFF, #4D9FFF)',
            marginBottom: '60px',
            transform: 'scaleX(0)', transformOrigin: 'left'
          }}
        />

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '80px'
        }}>
          {stats.map(stat => <StatCard key={stat.label} stat={stat} />)}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">
          {/* Left: Description */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: '#C0C0C8',
              lineHeight: 1.8, marginBottom: '24px'
            }}>
              Velmurugan Engineering (VME) is a Chennai-based precision cutting tools manufacturer delivering world-class tooling solutions to the manufacturing industry. Based in Kovur, Chennai, we specialize in custom-engineered cutting tools that meet the tightest tolerances and most demanding production environments.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#7A7A8A',
              lineHeight: 1.8
            }}>
              From boring bars and milling cutters to through-coolant grooving tools and fully customized special cutters, VME serves procurement managers and engineering teams across India who demand nothing less than perfection.
            </p>
          </div>

          {/* Right: Values */}
          <div>
            {values.map((v, i) => (
              <div
                key={v.title}
                ref={el => valueCardsRef.current[i] = el}
                className="value-card"
                
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  {v.icon}
                  <h3 style={{
                    fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                    fontSize: '1.05rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#F0F0F2'
                  }}>
                    {v.title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#7A7A8A', lineHeight: 1.7 }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
