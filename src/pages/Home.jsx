import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: '📈',
    title: 'Marketing',
    desc: 'Strategic campaigns that amplify your brand presence and drive measurable growth across all channels.',
  },
  {
    icon: '🎨',
    title: 'Creatives',
    desc: 'Stunning visual identities and design systems that make your brand impossible to ignore.',
  },
  {
    icon: '💻',
    title: 'Web, App & AI',
    desc: 'Cutting-edge digital products powered by intelligent design and modern technology stacks.',
  },
  {
    icon: '🎬',
    title: 'Media Production',
    desc: 'Cinematic video content and photography that tells your brand story with impact.',
  },
  {
    icon: '🏢',
    title: 'Corporate Production',
    desc: 'Professional-grade corporate content from events to internal communications.',
  },
  {
    icon: '🎮',
    title: 'Game Dev & Playtesting',
    desc: 'Immersive gaming experiences with rigorous playtesting for polished final products.',
  },
]

const clientLogos = [
  { name: 'Connec Group', bg: '#ffffff', dark: false },
  { name: 'Archie', bg: '#EF4444', dark: true },
  { name: 'Foxy Vox', bg: '#0f172a', dark: true },
  { name: 'Arolbade', bg: '#000000', dark: true },
  { name: 'Seasons Street', bg: '#f5f5f5', dark: false },
  { name: 'AND Studio', bg: '#111111', dark: true },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
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

export default function Home() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero__grain" />
        <div className="hero__gradient" />
        <div className="hero__gradient-2" />
        
        <div className="container hero__inner">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              360° Creative Studio
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">360 Solution</span>
              <span className="hero__title-line">
                For Your <span className="hero__title-accent">Brand</span>
              </span>
            </h1>

            <p className="hero__subtitle">
              We transform complex ideas into high-performance market assets 
              through the synthesis of data and design.
            </p>

            <div className="hero__actions">
              <Link to="/works" className="btn-primary" id="hero-cta-works">
                View Our Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/about" className="btn-outline" id="hero-cta-about">
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__orbit">
              <div className="hero__orbit-ring hero__orbit-ring--1">
                <div className="hero__orbit-dot" />
              </div>
              <div className="hero__orbit-ring hero__orbit-ring--2">
                <div className="hero__orbit-dot" />
              </div>
              <div className="hero__orbit-ring hero__orbit-ring--3">
                <div className="hero__orbit-dot" />
              </div>
              <div className="hero__orbit-center">
                <TheSignMark />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll-cue">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Services */}
      <AnimatedSection className="section services" id="services">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Our Services</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Everything your brand needs.<br />
            <span className="text-accent">Under one roof.</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            From strategy to execution, we deliver comprehensive solutions that drive real results.
          </motion.p>

          <motion.div className="services__grid" variants={stagger}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                id={`service-card-${i}`}
              >
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <div className="service-card__number">0{i + 1}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Preview */}
      <AnimatedSection className="section about-preview" id="about-preview">
        <div className="container">
          <div className="about-preview__grid">
            <div className="about-preview__left">
              <motion.span className="section-label" variants={fadeUp}>Who We Are</motion.span>
              <motion.h2 className="section-title" variants={fadeUp}>
                We help brands<br />
                that people <span className="text-accent">remember</span>
              </motion.h2>
            </div>
            <motion.div className="about-preview__right" variants={fadeUp}>
              <p className="about-preview__text">
                We transform complex ideas into high-performance market assets through 
                the synthesis of data and design. This curated selection of work demonstrates 
                our commitment to building unforgettable brand infrastructures that deliver 
                measurable, scalable results.
              </p>
              <Link to="/works" className="about-preview__link" id="about-preview-link">
                View our notable works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div className="about-preview__stats" variants={stagger}>
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '6', label: 'Core Services' },
              { number: '360°', label: 'Brand Solutions' },
            ].map((stat) => (
              <motion.div key={stat.label} className="stat-card" variants={fadeUp}>
                <span className="stat-card__number">{stat.number}</span>
                <span className="stat-card__label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Trusted Partners */}
      <AnimatedSection className="section partners" id="partners">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Our Trusted Partners</motion.span>
          <motion.h2 className="section-title partners__title" variants={fadeUp}>
            Brands that trust us
          </motion.h2>
        </div>
        <motion.div className="partners__marquee" variants={fadeUp}>
          <div className="partners__track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className={`partner-logo ${logo.dark ? 'partner-logo--dark' : 'partner-logo--light'}`}
                style={{ '--logo-bg': logo.bg }}
              >
                <span className="partner-logo__name">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Partnered Agencies */}
      <AnimatedSection className="section agencies" id="agencies">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Strategic Partnerships</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Our Partnered <span className="text-accent">Agencies</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            We collaborate with industry-leading agencies to deliver exceptional results across every dimension of your brand.
          </motion.p>

          <motion.div className="agencies__grid" variants={stagger}>
            {/* Start Daily XYZ */}
            <motion.a
              href="https://www.facebook.com/startdailyxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="agency-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              id="agency-startdaily"
            >
              <span className="agency-card__badge">Partnered Agency</span>
              <div className="agency-card__logo-wrap agency-card__logo-wrap--sd">
                {/* Start Daily XYZ Logo — Blue gradient circle with intertwined SD */}
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="sd-grad" x1="0" y1="0" x2="72" y2="72">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#6366f1"/>
                    </linearGradient>
                  </defs>
                  <circle cx="36" cy="36" r="34" fill="url(#sd-grad)"/>
                  <text x="36" y="44" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="28" fill="#fff" letterSpacing="-1">
                    SD
                  </text>
                </svg>
              </div>
              <div className="agency-card__info">
                <h3 className="agency-card__name">
                  <span className="agency-card__name-start">Start</span>{' '}
                  <span className="agency-card__name-daily">Daily</span>
                </h3>
                <p className="agency-card__tagline">Start Today</p>
                <p className="agency-card__desc">Digital media & content platform driving daily engagement and modern storytelling.</p>
              </div>
              <span className="agency-card__arrow">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.a>

            {/* The Auric Media */}
            <motion.a
              href="https://www.facebook.com/theauricmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="agency-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              id="agency-auricmedia"
            >
              <span className="agency-card__badge">Partnered Agency</span>
              <div className="agency-card__logo-wrap agency-card__logo-wrap--am">
                {/* The Auric Media Logo — Sage green circle with topographic lines and blue figure */}
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="36" cy="36" r="34" fill="#c5d5a0"/>
                  {/* Topographic lines */}
                  <circle cx="36" cy="36" r="28" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.5"/>
                  <circle cx="36" cy="36" r="22" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.4"/>
                  <circle cx="36" cy="36" r="16" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  <ellipse cx="32" cy="34" rx="6" ry="10" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.4"/>
                  {/* Blue abstract wings/figure */}
                  <path d="M30 28 C28 22, 36 18, 36 24 C36 18, 44 22, 42 28 L36 34 Z" fill="#3b82f6"/>
                  <path d="M30 36 C28 42, 36 46, 36 40 C36 46, 44 42, 42 36 L36 30 Z" fill="#2563eb"/>
                  <text x="36" y="58" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="6" fill="#1a1a1a" letterSpacing="0.5">
                    THE AURIC MEDIA
                  </text>
                </svg>
              </div>
              <div className="agency-card__info">
                <h3 className="agency-card__name">The Auric Media</h3>
                <p className="agency-card__tagline">We Tell Your Stories Visually</p>
                <p className="agency-card__desc">Creative media production agency specializing in visual storytelling and brand narratives.</p>
              </div>
              <span className="agency-card__arrow">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}

function TheSignMark() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="38" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="20" fill="#F5F0EB" letterSpacing="-1">
        TS
      </text>
      <path d="M10 15 C20 10, 42 8, 52 18 Q56 22, 45 26 C34 30, 18 32, 10 42" 
            stroke="#C4292E" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  )
}
