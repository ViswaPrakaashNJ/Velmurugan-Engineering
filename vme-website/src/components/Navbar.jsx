import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Velmurugan Engineering Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>
              <div style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.1rem',
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0F0F2', lineHeight: 1
              }}>
                Velmurugan
              </div>
              <div style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '0.65rem',
                letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1E6FFF', lineHeight: 1.2
              }}>
                Engineering
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden md:flex">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                {link.label}
              </a>
            ))}
            <button className="btn-quote" onClick={() => handleNavClick('#contact')}>
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: '#F0F0F2', cursor: 'pointer', padding: '8px' }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="mobile-drawer">
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-drawer-panel"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-link"
                    initial={{ opacity: 1, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.button
                className="btn-primary"
                style={{ marginTop: '32px' }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('#contact')}
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
