import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
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

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Data-Driven Design',
    desc: 'Every creative decision is backed by research, analytics, and market intelligence to maximize impact.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: '360° Approach',
    desc: 'We provide end-to-end solutions, ensuring consistency and quality across every touchpoint of your brand.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Scalable Results',
    desc: 'We build brand infrastructures designed to grow with you, delivering measurable and scalable outcomes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7.5 4.21l4.5 2.6 4.5-2.6M7.5 19.79V14.6L3 12M21 12l-4.5 2.6v5.19M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Innovation First',
    desc: 'We stay at the forefront of technology and design trends to give your brand a competitive edge.',
  },
]

export default function About() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.span>
          <motion.h1
            className="about-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            We craft brands that<br />
            <span className="text-accent">stand the test of time</span>
          </motion.h1>
          <motion.p
            className="about-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            TheSign is a 360° creative studio delivering end-to-end brand development solutions. 
            From creative designs and photoshoots to digital marketing, UI/UX design, and beyond — 
            we are your complete brand partner.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <AnimatedSection className="section about-story" id="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__left">
              <motion.span className="section-label" variants={fadeUp}>Our Story</motion.span>
              <motion.h2 className="section-title" variants={fadeUp}>
                Born from a passion for<br />
                <span className="text-accent">exceptional design</span>
              </motion.h2>
            </div>
            <motion.div className="about-story__right" variants={fadeUp}>
              <p>
                TheSign was founded with a simple yet powerful vision: to help brands 
                build unforgettable identities that resonate with their audiences. We believe 
                that great design isn't just about aesthetics — it's about solving complex 
                problems and creating meaningful connections.
              </p>
              <p>
                As an initiative by <strong>Connec Group</strong>, we bring together a diverse 
                team of strategists, designers, developers, and storytellers who share a common 
                goal — to transform complex ideas into high-performance market assets through 
                the synthesis of data and design.
              </p>
              <p>
                Our 360° approach ensures that every aspect of your brand — from visual identity 
                to digital presence, from marketing strategy to media production — works in harmony 
                to deliver measurable, scalable results.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="section about-values" id="about-values">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Our Values</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            What drives us
          </motion.h2>
          <motion.div className="about-values__grid" variants={stagger}>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="value-card"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                id={`value-card-${i}`}
              >
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="section about-process" id="about-process">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Our Process</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            How we bring ideas to life
          </motion.h2>
          <motion.div className="about-process__steps" variants={stagger}>
            {[
              { step: '01', title: 'Discover', desc: 'We deep-dive into your brand, audience, and market to uncover insights that fuel strategy.' },
              { step: '02', title: 'Strategize', desc: 'We synthesize research into a clear roadmap that aligns business goals with creative direction.' },
              { step: '03', title: 'Create', desc: 'Our multidisciplinary team brings the strategy to life through design, content, and technology.' },
              { step: '04', title: 'Launch & Scale', desc: 'We deploy, measure, and optimize to ensure sustainable growth and maximum impact.' },
            ].map((item, i) => (
              <motion.div key={item.step} className="process-step" variants={fadeUp} id={`process-step-${i}`}>
                <span className="process-step__number">{item.step}</span>
                <div className="process-step__content">
                  <h3 className="process-step__title">{item.title}</h3>
                  <p className="process-step__desc">{item.desc}</p>
                </div>
                {i < 3 && <div className="process-step__connector" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section about-cta" id="about-cta">
        <div className="container">
          <motion.div className="about-cta__card" variants={fadeUp}>
            <h2 className="about-cta__title">Ready to transform your brand?</h2>
            <p className="about-cta__desc">
              Let's create something unforgettable together.
            </p>
            <div className="about-cta__actions">
              <a href="mailto:hello.thedesign360@gmail.com" className="btn-primary" id="about-cta-contact">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link to="/works" className="btn-outline" id="about-cta-works">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}
