import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Works.css'

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

const categories = ['All', 'Branding', 'Digital', 'Production', 'Marketing']

const projects = [
  {
    title: 'Earth Ants — Sustainovate Season 1',
    category: 'Branding',
    tags: ['Event Branding', 'Visual Identity', 'Production'],
    desc: 'Complete event branding and visual identity design for Earth Ants\' inaugural Sustainovate season, merging sustainability with innovation.',
    link: 'https://www.behance.net/gallery/219007165/Earth-Ants-Event-Sustainovate-Season-1-Work',
    color: '#22c55e',
    featured: true,
  },
  {
    title: 'Connec Group — Brand Identity',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual System'],
    desc: 'End-to-end brand development for Connec Group, establishing a modern, interconnected visual language.',
    color: '#3b82f6',
    featured: true,
  },
  {
    title: 'Foxy Vox — Visual Identity',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Illustration'],
    desc: 'Bold and dynamic brand identity featuring an origami-inspired fox mascot that captures the brand\'s playful energy.',
    color: '#f97316',
  },
  {
    title: 'Archie — Game Branding',
    category: 'Digital',
    tags: ['Game Design', 'UI/UX', 'Branding'],
    desc: 'Colorful and engaging brand identity for Archie, a playful gaming platform with a focus on interactive experiences.',
    color: '#ef4444',
  },
  {
    title: 'Seasons Street — Corporate Identity',
    category: 'Branding',
    tags: ['Logo Design', 'Corporate Identity', 'Stationery'],
    desc: 'Sophisticated corporate identity for Seasons Street, reflecting their commitment to quality solutions.',
    color: '#dc2626',
  },
  {
    title: 'AND Studio — Brand Development',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Typography'],
    desc: 'Fluid, organic brand identity for AND Studio that captures the studio\'s creative and collaborative spirit.',
    color: '#a855f7',
  },
  {
    title: 'Arolbade — Visual System',
    category: 'Digital',
    tags: ['Visual Identity', 'Typography', 'Digital Design'],
    desc: 'Bold typographic identity system with vibrant color blocking for a modern digital-first brand.',
    color: '#ec4899',
  },
  {
    title: 'Start Daily XYZ — Digital Platform',
    category: 'Marketing',
    tags: ['Digital Marketing', 'Content Strategy', 'Social Media'],
    desc: 'Comprehensive digital marketing and content strategy for Start Daily XYZ media platform.',
    color: '#06b6d4',
  },
]

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="works-hero" id="works-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Works
          </motion.span>
          <motion.h1
            className="works-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafted with purpose,<br />
            <span className="text-accent">built to last</span>
          </motion.h1>
          <motion.p
            className="works-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A curated selection of work demonstrating our commitment to building 
            unforgettable brand infrastructures that deliver measurable, scalable results.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="works-filter" id="works-filter">
        <div className="container">
          <motion.div
            className="works-filter__pills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`works-filter__pill ${activeCategory === cat ? 'works-filter__pill--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <AnimatedSection className="section works-grid-section" id="works-projects">
        <div className="container">
          <motion.div className="works-grid" variants={stagger} layout>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                layout
                id={`project-card-${i}`}
              >
                <div className="project-card__visual" style={{ '--project-color': project.color }}>
                  <div className="project-card__visual-inner">
                    <span className="project-card__visual-letter">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="project-card__content">
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.desc}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      View Project
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ) : (
                    <span className="project-card__link project-card__link--muted">
                      Case Study Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Behance CTA */}
      <AnimatedSection className="section works-behance" id="works-behance">
        <div className="container">
          <motion.a
            href="https://www.behance.net/gallery/219007165/Earth-Ants-Event-Sustainovate-Season-1-Work"
            target="_blank"
            rel="noopener noreferrer"
            className="behance-card"
            variants={fadeUp}
            whileHover={{ y: -4 }}
            id="behance-link"
          >
            <div className="behance-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M22 7h-7M22 7v7M22 7L13 16l-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="behance-card__content">
              <h3 className="behance-card__title">Explore more on Behance</h3>
              <p className="behance-card__desc">
                View our complete portfolio including detailed case studies, process breakdowns, and more.
              </p>
            </div>
            <div className="behance-card__arrow">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}
