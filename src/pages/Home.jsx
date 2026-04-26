import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/* ── SVG Service Icons ── */
const ServiceIcon = ({ type }) => {
  const icons = {
    marketing: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    creatives: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    webappai: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    media: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
        <line x1="17" y1="17" x2="22" y2="17" />
      </svg>
    ),
    corporate: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="2" />
        <line x1="15" y1="22" x2="15" y2="2" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </svg>
    ),
    gamedev: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="18" y1="11" x2="18.01" y2="11" />
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
      </svg>
    ),
  }
  return <div className="service-card__icon">{icons[type]}</div>
}

const services = [
  {
    iconType: 'marketing',
    title: 'Marketing',
    desc: 'Strategic campaigns that amplify your brand presence and drive measurable growth across all channels.',
  },
  {
    iconType: 'creatives',
    title: 'Creatives',
    desc: 'Stunning visual identities and design systems that make your brand impossible to ignore.',
  },
  {
    iconType: 'webappai',
    title: 'Web, App & AI',
    desc: 'Cutting-edge digital products powered by intelligent design and modern technology stacks.',
  },
  {
    iconType: 'media',
    title: 'Media Production',
    desc: 'Cinematic video content and photography that tells your brand story with impact.',
  },
  {
    iconType: 'corporate',
    title: 'Corporate Production',
    desc: 'Professional-grade corporate content from events to internal communications.',
  },
  {
    iconType: 'gamedev',
    title: 'Game Dev & Playtesting',
    desc: 'Immersive gaming experiences with rigorous playtesting for polished final products.',
  },
]

const clientLogos = [
  { name: 'Connec Group', bg: '#ffffff', dark: false },
  { name: 'Archie', bg: '#EF4444', dark: true },
  { name: 'Foxy Vox', bg: '#0f172a', dark: true },
  { name: 'Earth Ants', bg: '#22c55e', dark: true },
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

        {/* Light rays background (Change 7) */}
        <div className="hero__rays">
          <div className="hero__ray hero__ray--1" />
          <div className="hero__ray hero__ray--2" />
          <div className="hero__ray hero__ray--3" />
          <div className="hero__ray hero__ray--4" />
          <div className="hero__ray hero__ray--5" />
        </div>
        
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

            {/* Shiny text animation (Change 5) */}
            <h1 className="hero__title">
              <span className="hero__title-line shiny-text">360 Solution</span>
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
              <a
                href="https://cal.com/thesign/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="hero-cta-book"
              >
                Book A Call
              </a>
            </div>
          </motion.div>

          {/* Orbit animation with 360° center + venture logos (Change 10) */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__orbit">
              {/* Outer ring — slowest */}
              <div className="hero__orbit-ring hero__orbit-ring--1">
                <div className="hero__orbit-dot" />
                <div className="hero__orbit-venture hero__orbit-venture--pos1">
                  <span className="hero__orbit-venture-label">Connec</span>
                </div>
              </div>
              {/* Middle ring */}
              <div className="hero__orbit-ring hero__orbit-ring--2">
                <div className="hero__orbit-dot" />
                <div className="hero__orbit-venture hero__orbit-venture--pos2">
                  <span className="hero__orbit-venture-label">SD</span>
                </div>
              </div>
              {/* Inner ring — fastest */}
              <div className="hero__orbit-ring hero__orbit-ring--3">
                <div className="hero__orbit-dot" />
                <div className="hero__orbit-venture hero__orbit-venture--pos3">
                  <span className="hero__orbit-venture-label">TAM</span>
                </div>
              </div>
              {/* Center — 360° text */}
              <div className="hero__orbit-center">
                <span className="hero__orbit-center-text">360°</span>
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

      {/* Services (Change 1 — SVG icons instead of emojis) */}
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
                <ServiceIcon type={service.iconType} />
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <div className="service-card__number">0{i + 1}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Preview (Change 8 — stats section removed) */}
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
        </div>
      </AnimatedSection>

      {/* Trusted Partners (Change 6 — enhanced logo loop) */}
      <AnimatedSection className="section partners" id="partners">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Our Trusted Partners</motion.span>
          <motion.h2 className="section-title partners__title" variants={fadeUp}>
            Brands that trust us
          </motion.h2>
        </div>
        <motion.div className="partners__marquee" variants={fadeUp}>
          <div className="partners__track">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
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
              href="https://www.startdaily.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="agency-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              id="agency-startdaily"
            >
              <span className="agency-card__badge">Partnered Agency</span>
              <div className="agency-card__logo-wrap agency-card__logo-wrap--sd">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="sd-grad" x1="0" y1="0" x2="72" y2="72">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#2563eb"/>
                    </linearGradient>
                  </defs>
                  <circle cx="36" cy="36" r="34" stroke="url(#sd-grad)" strokeWidth="2.5" fill="none"/>
                  <path d="M24 28 C24 22, 36 20, 36 28 C36 36, 48 34, 48 28" 
                        stroke="#3b82f6" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                  <path d="M24 44 C24 38, 36 36, 36 44 C36 52, 48 50, 48 44" 
                        stroke="#3b82f6" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="agency-card__info">
                <h3 className="agency-card__name">
                  <span className="agency-card__name-start">Start</span>{' '}
                  <span className="agency-card__name-daily">Daily</span>
                </h3>
                <p className="agency-card__tagline">Launch Your Vision. Start Daily.</p>
                <p className="agency-card__desc">Custom software, AI automation, and transparent execution to help brands scale with the architecture they need.</p>
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
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="36" cy="36" r="34" fill="#c5d5a0"/>
                  <circle cx="36" cy="36" r="28" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.5"/>
                  <circle cx="36" cy="36" r="22" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.4"/>
                  <circle cx="36" cy="36" r="16" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  <ellipse cx="32" cy="34" rx="6" ry="10" stroke="#8fa862" strokeWidth="0.5" fill="none" opacity="0.4"/>
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
