import React from 'react';

// Gallery items with SVG placeholders (since we don't have actual product photos)
const galleryItems = [
  { label: 'Boring Bar Set', color: '#1A1A2E' },
  { label: 'Carbide Milling Cutter', color: '#16213E' },
  { label: 'OD Grooving Tool', color: '#1A1A2E' },
  { label: 'Through-Coolant Tool', color: '#0F3460' },
  { label: 'T-Slot Cutter', color: '#16213E' },
  { label: 'Face Milling Tool', color: '#1A1A2E' },
  { label: 'Special Carbide Insert', color: '#0F3460' },
  { label: 'U-Drill Assembly', color: '#16213E' },
  { label: 'Micro Bore Cartridge', color: '#1A1A2E' },
  // Duplicated for infinite scroll
  { label: 'Boring Bar Set', color: '#1A1A2E' },
  { label: 'Carbide Milling Cutter', color: '#16213E' },
  { label: 'OD Grooving Tool', color: '#1A1A2E' },
  { label: 'Through-Coolant Tool', color: '#0F3460' },
  { label: 'T-Slot Cutter', color: '#16213E' },
  { label: 'Face Milling Tool', color: '#1A1A2E' },
  { label: 'Special Carbide Insert', color: '#0F3460' },
  { label: 'U-Drill Assembly', color: '#16213E' },
  { label: 'Micro Bore Cartridge', color: '#1A1A2E' },
];

// SVG tool illustrations
function ToolIllustration({ index }) {
  const illustrations = [
    // Boring Bar
    <svg viewBox="0 0 200 120" fill="none" key="bb">
      <rect x="20" y="50" width="160" height="20" rx="4" fill="#1E6FFF" fillOpacity="0.2" stroke="#1E6FFF" strokeWidth="1.5" />
      <rect x="160" y="44" width="24" height="32" rx="2" fill="#4D9FFF" fillOpacity="0.3" stroke="#4D9FFF" strokeWidth="1.5" />
      <circle cx="172" cy="60" r="8" fill="#4D9FFF" fillOpacity="0.4" stroke="#4D9FFF" />
      <line x1="20" y1="60" x2="160" y2="60" stroke="#7A7A8A" strokeWidth="0.5" strokeDasharray="4,4" />
    </svg>,
    // Milling Cutter
    <svg viewBox="0 0 200 120" fill="none" key="mc">
      <circle cx="100" cy="60" r="40" stroke="#1E6FFF" strokeWidth="1.5" fill="#1E6FFF" fillOpacity="0.05" />
      <circle cx="100" cy="60" r="15" stroke="#4D9FFF" strokeWidth="2" fill="#4D9FFF" fillOpacity="0.1" />
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i} x1={100+18*Math.cos(a*Math.PI/180)} y1={60+18*Math.sin(a*Math.PI/180)}
          x2={100+38*Math.cos(a*Math.PI/180)} y2={60+38*Math.sin(a*Math.PI/180)}
          stroke="#4D9FFF" strokeWidth="3" strokeLinecap="round" />
      ))}
    </svg>,
    // Grooving Tool
    <svg viewBox="0 0 200 120" fill="none" key="gt">
      <rect x="30" y="54" width="140" height="12" rx="2" fill="#1E6FFF" fillOpacity="0.15" stroke="#1E6FFF" strokeWidth="1.5" />
      <polygon points="170,48 186,60 170,72" fill="#4D9FFF" fillOpacity="0.5" stroke="#4D9FFF" strokeWidth="1.5" />
      <line x1="30" y1="50" x2="30" y2="70" stroke="#7A7A8A" strokeWidth="1" />
    </svg>,
    // Drill
    <svg viewBox="0 0 200 120" fill="none" key="d">
      <line x1="100" y1="10" x2="100" y2="110" stroke="#1E6FFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M82 30 Q100 34 118 30" stroke="#4D9FFF" strokeWidth="2" fill="none" />
      <path d="M82 50 Q100 54 118 50" stroke="#4D9FFF" strokeWidth="2" fill="none" />
      <path d="M82 70 Q100 74 118 70" stroke="#4D9FFF" strokeWidth="2" fill="none" />
      <ellipse cx="100" cy="16" rx="14" ry="6" fill="#1E6FFF" fillOpacity="0.3" stroke="#1E6FFF" />
      <polygon points="90,100 100,115 110,100" fill="#4D9FFF" fillOpacity="0.6" />
    </svg>,
  ];
  return illustrations[index % illustrations.length];
}

function Gallery() {
  return (
    <section id="gallery" style={{ background: '#0D0D0F', padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', marginBottom: '48px' }}>
        <div className="section-label">Precision in Every Cut</div>
        <h2 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          OUR WORK IN <span>STEEL</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="marquee-container" style={{ padding: '20px 0' }}>
        <div className="marquee-track">
          {galleryItems.map((item, i) => (
            <div key={i} className="gallery-item" style={{ background: item.color }}>
              {/* SVG Tool Illustration */}
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '20px',
                position: 'relative', zIndex: 2
              }}>
                <div style={{ width: '140px', height: '80px' }}>
                  <ToolIllustration index={i} />
                </div>
                <div style={{
                  fontFamily: 'Rajdhani, sans-serif', fontWeight: 600,
                  fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#C0C0C8', marginTop: '12px'
                }}>
                  {item.label}
                </div>
              </div>
              {/* Vignette */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(13,13,15,0.6) 100%)',
                pointerEvents: 'none'
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Second row (reverse direction) */}
      <div className="marquee-container" style={{ padding: '20px 0', marginTop: '16px' }}>
        <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {[...galleryItems].reverse().map((item, i) => (
            <div key={i} className="gallery-item" style={{ background: item.color, width: '240px', height: '160px' }}>
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', padding: '16px'
              }}>
                <div style={{ width: '120px', height: '70px' }}>
                  <ToolIllustration index={i + 3} />
                </div>
                <div style={{
                  fontFamily: 'Rajdhani, sans-serif', fontWeight: 600,
                  fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#C0C0C8', marginTop: '8px'
                }}>
                  {item.label}
                </div>
              </div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(13,13,15,0.6) 100%)',
                pointerEvents: 'none'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
