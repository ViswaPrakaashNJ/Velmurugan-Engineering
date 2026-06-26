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
          <img src="/logo.png" alt="Velmurugan Engineering Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
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
