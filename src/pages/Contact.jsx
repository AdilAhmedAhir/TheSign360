import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

function AnimatedSection({ children, className = '', id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
    >
      {children}
    </motion.section>
  )
}

export default function Contact() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="contact-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's build something<br />
            <span className="text-accent">unforgettable</span>
          </motion.h1>
          <motion.p
            className="contact-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Ready to transform your brand? Book a discovery call or reach out directly — 
            we'd love to hear about your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <AnimatedSection className="section contact-content" id="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Cal.com Calendar Embed */}
            <motion.div className="contact-calendar" variants={fadeUp}>
              <h2 className="contact-calendar__title">
                Schedule a <span className="text-accent">Discovery Call</span>
              </h2>
              <p className="contact-calendar__desc">
                Pick a time that works for you. We'll discuss your project goals, 
                timeline, and how we can help bring your vision to life.
              </p>
              <div className="contact-calendar__embed">
                <iframe
                  src="https://cal.com/thesign/discovery-call?embed=true&theme=dark"
                  title="Book a Discovery Call - TheSign"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    minHeight: '600px',
                    borderRadius: 'var(--radius-lg)',
                  }}
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div className="contact-info" variants={fadeUp}>
              <div className="contact-info__card">
                <h3 className="contact-info__title">Contact Details</h3>
                
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-info__label">Phone</span>
                    <a href="tel:+8801948992090" className="contact-info__value">01948-992090</a>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 6L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-info__label">Email</span>
                    <a href="mailto:hello.thedesign360@gmail.com" className="contact-info__value">hello.thedesign360@gmail.com</a>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-info__label">Location</span>
                    <span className="contact-info__value">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-info__card">
                <h3 className="contact-info__title">Follow Us</h3>
                <div className="contact-social">
                  <a href="https://www.facebook.com/TheSign360" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.linkedin.com/company/thesign360/" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Quick CTA */}
              <a
                href="https://cal.com/thesign/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary contact-info__cta"
              >
                Book A Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}
