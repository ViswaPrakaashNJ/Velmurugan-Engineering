import React from 'react';
import { Globe, ExternalLink, Link } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <Globe size={18} />, href: '#', label: 'Website' },
  { icon: <Link size={18} />, href: '#', label: 'Links' },
  { icon: <ExternalLink size={18} />, href: '#', label: 'External' },
];

function Footer() {
  const handleNav = (href, e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main footer grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '60px',
          marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #2A2A32'
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src="/logo.png" alt="Velmurugan Engineering Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <div>
                <div style={{
                  fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.1rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0F0F2', lineHeight: 1
                }}>
                  Velmurugan Engineering
                </div>
                <div style={{
                  fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.65rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1E6FFF', lineHeight: 1.4
                }}>
                  Precision · Perfection · Performance
                </div>
              </div>
            </div>
            <p style={{
              fontFamily: 'Inter', fontSize: '0.875rem', color: '#7A7A8A', lineHeight: 1.8,
              maxWidth: '340px'
            }}>
              Chennai-based precision cutting tools manufacturer delivering world-class tooling solutions
              to the manufacturing industry since our founding.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '38px', height: '38px',
                    background: 'rgba(30,111,255,0.08)', border: '1px solid #2A2A32',
                    borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#7A7A8A', textDecoration: 'none',
                    transition: 'color 0.3s, border-color 0.3s, background 0.3s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#4D9FFF';
                    e.currentTarget.style.borderColor = '#1E6FFF';
                    e.currentTarget.style.background = 'rgba(30,111,255,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#7A7A8A';
                    e.currentTarget.style.borderColor = '#2A2A32';
                    e.currentTarget.style.background = 'rgba(30,111,255,0.08)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1rem',
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0F0F2', marginBottom: '20px'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(link.href, e)}
                    style={{
                      fontFamily: 'Inter', fontSize: '0.9rem', color: '#7A7A8A',
                      textDecoration: 'none', transition: 'color 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#4D9FFF'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A7A8A'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <h4 style={{
              fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1rem',
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0F0F2', marginBottom: '20px'
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#7A7A8A', lineHeight: 1.6 }}>
                No. 5, DK Garden, 9th Street<br />
                Kovur, Chennai – 600 128
              </div>
              <a href="mailto:velmuruganengi@gmail.com"
                style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#4D9FFF', textDecoration: 'none' }}>
                velmuruganengi@gmail.com
              </a>
              <a href="tel:+917904552036"
                style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#7A7A8A', textDecoration: 'none' }}>
                +91 7904552036
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px'
        }}>
          <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#7A7A8A' }}>
            © 2024 Velmurugan Engineering. All Rights Reserved.
          </p>
          <p style={{
            fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.75rem',
            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2A2A32'
          }}>
            Precision · Perfection · Performance
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
