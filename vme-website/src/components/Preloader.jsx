import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Preloader({ onComplete }) {
  return (
    <AnimatePresence>
      <motion.div
        className="preloader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onAnimationComplete={onComplete}
      >
        {/* VME Logo Mark */}
        <motion.div
          className="preloader-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Gear shape */}
            <path
              d="M40 10 L44 20 L54 16 L52 27 L62 30 L56 39 L62 48 L52 51 L54 62 L44 58 L40 68 L36 58 L26 62 L28 51 L18 48 L24 39 L18 30 L28 27 L26 16 L36 20 Z"
              stroke="#1E6FFF"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="39" r="12" stroke="#4D9FFF" strokeWidth="2" fill="none" />
            <text x="40" y="44" textAnchor="middle" fill="#1E6FFF"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '2px' }}>
              VME
            </text>
          </svg>
        </motion.div>
        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#7A7A8A'
          }}
        >
          Precision · Perfection · Performance
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}

export default Preloader;
