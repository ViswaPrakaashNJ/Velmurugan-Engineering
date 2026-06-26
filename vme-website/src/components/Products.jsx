import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Product category data
const products = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="18" width="36" height="12" rx="2" />
        <line x1="24" y1="6" x2="24" y2="18" />
        <line x1="24" y1="30" x2="24" y2="42" />
        <circle cx="24" cy="24" r="4" />
        <line x1="6" y1="24" x2="12" y2="24" />
        <line x1="36" y1="24" x2="42" y2="24" />
      </svg>
    ),
    name: 'Boring Bars',
    desc: 'Special Insert Type, Standard & Carbide boring bars for precision bore finishing.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 24 L24 8 L40 24 L24 40 Z" />
        <circle cx="24" cy="24" r="6" />
        <line x1="24" y1="2" x2="24" y2="14" />
        <line x1="24" y1="34" x2="24" y2="46" />
      </svg>
    ),
    name: 'Facing Tools',
    desc: 'Back facing and front facing tools for precise surface finishing operations.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1={24 + 8 * Math.cos((angle * Math.PI) / 180)}
            y1={24 + 8 * Math.sin((angle * Math.PI) / 180)}
            x2={24 + 16 * Math.cos((angle * Math.PI) / 180)}
            y2={24 + 16 * Math.sin((angle * Math.PI) / 180)}
          />
        ))}
      </svg>
    ),
    name: 'Milling Cutters',
    desc: 'T-Slot, Side & Face, Spot Face, Face Milling, and Hole Mill cutters.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="20" width="32" height="8" rx="1" />
        <path d="M8 20 L4 24 L8 28" />
        <path d="M40 20 L44 24 L40 28" />
        <line x1="16" y1="16" x2="16" y2="32" />
        <line x1="24" y1="14" x2="24" y2="34" />
        <line x1="32" y1="16" x2="32" y2="32" />
      </svg>
    ),
    name: 'Grooving Tools',
    desc: 'OD, ID, Face & Through-Coolant grooving tools for precision groove cutting.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 38 L24 10 L38 38 Z" />
        <line x1="17" y1="28" x2="31" y2="28" />
        <circle cx="24" cy="22" r="3" />
      </svg>
    ),
    name: 'Special Cutters & Combination Tools',
    desc: 'Multi-operation combination tools engineered for complex machining sequences.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="14" y="10" width="20" height="28" rx="2" />
        <rect x="18" y="14" width="12" height="8" rx="1" />
        <circle cx="24" cy="34" r="3" />
        <line x1="6" y1="22" x2="14" y2="22" />
        <line x1="34" y1="22" x2="42" y2="22" />
      </svg>
    ),
    name: 'Cartridges & Micro Bore',
    desc: 'Standard and micro bore cartridges for fine boring and tight-tolerance applications.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="24" y1="6" x2="24" y2="42" strokeLinecap="round" />
        <ellipse cx="24" cy="10" rx="8" ry="4" />
        <path d="M16 18 Q24 22 32 18" />
        <path d="M16 26 Q24 30 32 26" />
        <path d="M18 34 Q24 38 30 34" />
      </svg>
    ),
    name: 'Drilling Tools',
    desc: 'U-Drill and Core Drill solutions for efficient, high-speed deep hole drilling.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 36 L24 12 L36 36" strokeLinejoin="round" />
        <path d="M16 28 L32 28" />
        <rect x="20" y="28" width="8" height="8" />
      </svg>
    ),
    name: 'Special Carbide Tools',
    desc: 'Premium carbide tools designed for exotic alloys, hardened steels and super-alloys.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 24 C8 14 16 8 24 8 C32 8 40 14 40 24 C40 34 32 40 24 40 C16 40 8 34 8 24Z" />
        <path d="M18 20 L30 20 L30 28 L18 28 Z" />
        <line x1="24" y1="8" x2="24" y2="20" />
        <line x1="24" y1="28" x2="24" y2="40" />
      </svg>
    ),
    name: 'Customized / Special Cutting Tools',
    desc: 'Fully bespoke cutting tool solutions engineered to your exact machining needs.',
  },
];

function ProductCard({ product, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      { scale: 0.88, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out',
        delay: (index % 3) * 0.12,
        scrollTrigger: { trigger: card, start: 'top 85%' }
      }
    );

    // Vanilla-tilt-like effect via pure JS
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    };
    const handleLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.transition = 'transform 0.4s ease';
    };
    const handleEnter = () => { card.style.transition = 'none'; };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    card.addEventListener('mouseenter', handleEnter);

    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
      card.removeEventListener('mouseenter', handleEnter);
    };
  }, [index]);

  return (
    <div ref={cardRef} className="product-card" >
      <div className="product-card-icon">{product.icon}</div>
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-desc">{product.desc}</p>
      <div className="product-learn-more">
        Learn More <ArrowRight size={14} />
      </div>
    </div>
  );
}

function Products() {
  const headingRef = useRef(null);
  const svgPathRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(headingRef.current,
            { opacity: 1, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
          );
          // SVG underline
          if (svgPathRef.current) {
            svgPathRef.current.classList.add('animated');
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" style={{ background: '#0D0D0F', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} className="px-5 md:px-10">
        {/* Heading */}
        <div className="section-label">What We Make</div>
        <div ref={headingRef} >
          <h2 className="section-heading">
            Products We <span>Manufacture</span>
          </h2>
        </div>

        {/* SVG animated underline */}
        <svg width="320" height="8" className="heading-underline-svg" style={{ marginBottom: '60px' }}>
          <path
            ref={svgPathRef}
            d="M0 4 Q80 8 160 4 Q240 0 320 4"
            className="heading-underline-path"
          />
        </svg>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '48px'
        }}
          className="products-grid"
        >
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="highlight-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4D9FFF" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2L12 5M12 19L12 22M2 12L5 12M19 12L22 12" />
              <path d="M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M19.07 4.93L16.95 7.05M7.05 16.95L4.93 19.07" />
            </svg>
            <p style={{
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 600,
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              letterSpacing: '0.03em', color: '#C0C0C8'
            }}>
              Specialists in Through-Coolant OD/ID/Face Grooving Tools & Fully Customized Cutting Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Responsive grid breakpoint via inline style override */}
      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Products;
