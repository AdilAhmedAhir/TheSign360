import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* CTA Section */}
      <div className="footer__cta-section">
        <div className="container">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">
              Let's Start <span className="text-accent">Growing</span>
            </h2>
            <p className="footer__cta-desc">
              Ready to transform your brand? Let's create something unforgettable together.
            </p>
            <div className="footer__cta-actions">
              <Link to="/contact" className="btn-primary" id="footer-contact-btn">
                Contact Us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="https://cal.com/thesign/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-outline" id="footer-call-btn">
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__col footer__col--brand">
              <TheSignLogoFull />
              <p className="footer__brand-desc">
                360° studio delivering end-to-end brand development solutions.
              </p>
              <div className="footer__social">
                <a href="https://www.facebook.com/TheSign360" target="_blank" rel="noopener noreferrer" className="footer__social-link" id="footer-facebook" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/thesign360/" target="_blank" rel="noopener noreferrer" className="footer__social-link" id="footer-linkedin" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Pages Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Pages</h4>
              <div className="footer__links">
                <Link to="/" className="footer__link" id="footer-link-home">Home</Link>
                <Link to="/about" className="footer__link" id="footer-link-about">About</Link>
                <Link to="/team" className="footer__link" id="footer-link-team">Team</Link>
                <Link to="/works" className="footer__link" id="footer-link-works">Works</Link>
              </div>
            </div>

            {/* Legal Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Legal</h4>
              <div className="footer__links">
                <a href="#" className="footer__link" id="footer-link-career">Career</a>
                <a href="#" className="footer__link" id="footer-link-terms">Terms</a>
                <a href="#" className="footer__link" id="footer-link-privacy">Privacy</a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Get in Touch</h4>
              <div className="footer__links">
                <a href="tel:+8801948992090" className="footer__link footer__link--contact" id="footer-phone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  01948-992090
                </a>
                <a href="mailto:hello.thedesign360@gmail.com" className="footer__link footer__link--contact" id="footer-email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M22 7l-10 6L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  hello.thedesign360@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Ventures */}
          <div className="footer__ventures">
            <div className="footer__ventures-row">
              <a href="https://www.startdaily.xyz/" target="_blank" rel="noopener noreferrer" className="footer__venture-link" id="footer-startdaily">
                Start Daily XYZ
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span className="footer__ventures-dot">·</span>
              <a href="https://www.facebook.com/theauricmedia" target="_blank" rel="noopener noreferrer" className="footer__venture-link" id="footer-auricmedia">
                The Auric Media
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} TheSign. All rights reserved.
            </p>
            <p className="footer__initiative">
              An Initiative by <strong>Connec Group</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function TheSignLogoFull() {
  return (
    <svg width="140" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer__logo">
      <text x="0" y="30" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="26" fill="#F5F0EB" letterSpacing="-0.5">
        THE
      </text>
      <text x="55" y="30" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="26" fill="#F5F0EB" letterSpacing="-0.5">
        SIGN
      </text>
      <path d="M40 10 C48 7, 82 5, 112 12 Q118 14, 100 18 C82 23, 52 25, 40 32" 
            stroke="#C4292E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}
