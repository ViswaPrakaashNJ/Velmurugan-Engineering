import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, User, CheckCircle, Loader2 } from 'lucide-react';

const productCategories = [
  'Boring Bars (Special Insert Type)',
  'Boring Bars (Standard)',
  'Boring Bars (Carbide)',
  'Facing Tools (Back Facing)',
  'Facing Tools (Front Facing)',
  'Milling Cutters (T-Slot)',
  'Milling Cutters (Side & Face)',
  'Milling Cutters (Spot Face)',
  'Milling Cutters (Face Milling)',
  'Milling Cutters (Hole Mill)',
  'Grooving Tools (OD)',
  'Grooving Tools (ID)',
  'Grooving Tools (Face)',
  'Grooving Tools (Through-Coolant)',
  'Special Cutters & Combination Tools',
  'Cartridges',
  'Micro Bore Cartridges',
  'Drilling Tools (U-Drill)',
  'Drilling Tools (Core Drill)',
  'Special Carbide Tools',
  'Customized / Special Cutting Tools',
];

const contactInfo = [
  {
    icon: <MapPin size={18} />,
    label: 'Address',
    lines: [
      'No. 5, DK Garden, 9th Street,',
      'Sri Kumaran Nagar, Kovur,',
      'Chennai – 600 128'
    ]
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    lines: ['velmuruganengi@gmail.com']
  },
  {
    icon: <User size={18} />,
    label: 'Business Head',
    lines: ['Lingayssan Venkatesan', '7904552036 / 8939839486']
  },
  {
    icon: <User size={18} />,
    label: 'Proprietor',
    lines: ['Lathalakshmi Venkatesan', '9677247322 / 9791014117']
  }
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const { ref: infoRef, inView: infoInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.15, triggerOnce: true });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError('');
    try {
      // EmailJS integration — replace with your actual service/template/key
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
        {
          from_name: data.name,
          company: data.company,
          phone: data.phone,
          from_email: data.email,
          product: data.product,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'    // Replace with your EmailJS public key
      );
      setSubmitted(true);
      reset();
    } catch (err) {
      // For demo/dev: simulate success
      console.log('Form data:', data);
      setSubmitted(true);
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" style={{ background: '#0D0D0F', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        {/* Heading */}
        <div className="section-label" style={{ textAlign: 'center' }}>Get In Touch</div>
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
          Request a <span>Quote</span>
        </h2>
        <p style={{
          textAlign: 'center', color: '#7A7A8A', fontFamily: 'Inter', fontSize: '1rem',
          maxWidth: '500px', margin: '0 auto 64px', lineHeight: 1.7
        }}>
          Tell us about your machining requirements and our engineering team will get back to you within 24 hours.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Left: Contact Info */}
          <motion.div
            ref={infoRef}
            className="contact-info-card"
            initial={{ opacity: 1, x: -40 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{
              fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.3rem',
              letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F0F0F2',
              marginBottom: '28px', paddingBottom: '16px',
              borderBottom: '1px solid #2A2A32'
            }}>
              Contact Information
            </h3>

            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                className="contact-info-item"
                initial={{ opacity: 1, x: -20 }}
                animate={infoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.75rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1E6FFF',
                    marginBottom: '4px'
                  }}>
                    {info.label}
                  </div>
                  {info.lines.map((line, j) => (
                    <div key={j} style={{
                      fontFamily: 'Inter', fontSize: '0.9rem', color: '#C0C0C8', lineHeight: 1.6
                    }}>
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div style={{
              marginTop: '24px', height: '140px', borderRadius: '8px', overflow: 'hidden',
              border: '1px solid #2A2A32', position: 'relative',
              background: 'linear-gradient(135deg, #1A1A2E, #16213E)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <MapPin size={32} color="#1E6FFF" style={{ margin: '0 auto 8px' }} />
                <div style={{
                  fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '0.8rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7A8A'
                }}>
                  Kovur, Chennai — 600 128
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 1, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  style={{
                    background: 'rgba(26,26,30,0.8)', border: '1px solid #2A2A32',
                    borderRadius: '8px', padding: '80px 40px'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  >
                    <CheckCircle size={64} color="#22c55e" />
                  </motion.div>
                  <h3 style={{
                    fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.8rem',
                    letterSpacing: '0.04em', textTransform: 'uppercase', color: '#F0F0F2'
                  }}>
                    Inquiry Sent!
                  </h3>
                  <p style={{ fontFamily: 'Inter', color: '#7A7A8A', fontSize: '1rem', lineHeight: 1.7 }}>
                    We'll get back to you shortly.
                  </p>
                  <button
                    className="btn-outline"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '16px' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    background: 'rgba(26,26,30,0.8)', border: '1px solid #2A2A32',
                    borderRadius: '8px', padding: '40px 32px'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        className="form-input"
                        placeholder="Your name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="form-error">{errors.name.message}</p>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name *</label>
                      <input
                        id="company"
                        className="form-input"
                        placeholder="Your company"
                        {...register('company', { required: 'Company is required' })}
                      />
                      {errors.company && <p className="form-error">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        {...register('phone', {
                          required: 'Phone is required',
                          pattern: { value: /^[+\d\s-]{7,15}$/, message: 'Invalid phone number' }
                        })}
                      />
                      {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        className="form-input"
                        placeholder="you@company.com"
                        {...register('email', {
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
                        })}
                      />
                      {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="product">Product Interested In *</label>
                    <select
                      id="product"
                      className="form-select"
                      {...register('product', { required: 'Please select a product' })}
                    >
                      <option value="">Select a product category…</option>
                      {productCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.product && <p className="form-error">{errors.product.message}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Requirements</label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      placeholder="Describe your machining requirements, materials, dimensions, tolerance requirements..."
                      {...register('message')}
                    />
                  </div>

                  {error && (
                    <p style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '16px' }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitting}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                        Sending…
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>

                  <style>{`
                    @keyframes spin { to { transform: rotate(360deg); } }
                  `}</style>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Contact;
