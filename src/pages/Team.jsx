import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Team.css'

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

const teamMembers = [
  { initials: 'CEO', role: 'Chief Executive Officer', dept: 'Leadership' },
  { initials: 'CD', role: 'Creative Director', dept: 'Design' },
  { initials: 'TD', role: 'Technical Director', dept: 'Engineering' },
  { initials: 'SM', role: 'Strategy Manager', dept: 'Marketing' },
  { initials: 'LG', role: 'Lead Designer', dept: 'Design' },
  { initials: 'PM', role: 'Production Manager', dept: 'Media' },
  { initials: 'SD', role: 'Senior Developer', dept: 'Engineering' },
  { initials: 'CM', role: 'Content Manager', dept: 'Marketing' },
]

const DeptIcon = ({ type }) => {
  const icons = {
    design: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    engineering: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    marketing: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    production: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
  }
  return <span className="dept-card__icon">{icons[type]}</span>
}

const departments = [
  { name: 'Design', count: '8+', iconType: 'design' },
  { name: 'Engineering', count: '6+', iconType: 'engineering' },
  { name: 'Marketing', count: '5+', iconType: 'marketing' },
  { name: 'Production', count: '4+', iconType: 'production' },
]

export default function Team() {
  return (
    <motion.div
      className="page-enter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="team-hero" id="team-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Team
          </motion.span>
          <motion.h1
            className="team-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            The minds behind<br />
            <span className="text-accent">the magic</span>
          </motion.h1>
          <motion.p
            className="team-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A multidisciplinary team of strategists, designers, developers, and storytellers 
            united by a shared passion for building unforgettable brands.
          </motion.p>
        </div>
      </section>

      {/* Departments */}
      <AnimatedSection className="section team-departments" id="team-departments">
        <div className="container">
          <motion.div className="team-departments__grid" variants={stagger}>
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                className="dept-card"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                id={`dept-card-${i}`}
              >
                <DeptIcon type={dept.iconType} />
                <div>
                  <h3 className="dept-card__name">{dept.name}</h3>
                  <span className="dept-card__count">{dept.count} Members</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Team Grid */}
      <AnimatedSection className="section team-grid-section" id="team-members">
        <div className="container">
          <motion.span className="section-label" variants={fadeUp}>Meet the Team</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Passionate individuals,<br />
            <span className="text-accent">extraordinary results</span>
          </motion.h2>

          <motion.div className="team-grid" variants={stagger}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="team-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                id={`team-card-${i}`}
              >
                <div className="team-card__avatar">
                  <span className="team-card__initials">{member.initials}</span>
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__role">{member.role}</h3>
                  <span className="team-card__dept">{member.dept}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Join CTA */}
      <AnimatedSection className="section team-join" id="team-join">
        <div className="container">
          <motion.div className="team-join__card" variants={fadeUp}>
            <div className="team-join__content">
              <span className="team-join__badge">We're Hiring</span>
              <h2 className="team-join__title">
                Join our growing team
              </h2>
              <p className="team-join__desc">
                We're always looking for talented individuals who are passionate about design, 
                technology, and building brands that people remember.
              </p>
              <a href="mailto:hello.thedesign360@gmail.com" className="btn-primary" id="team-join-btn">
                View Open Positions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="team-join__visual">
              <div className="team-join__circles">
                <div className="team-join__circle team-join__circle--1" />
                <div className="team-join__circle team-join__circle--2" />
                <div className="team-join__circle team-join__circle--3" />
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </motion.div>
  )
}
