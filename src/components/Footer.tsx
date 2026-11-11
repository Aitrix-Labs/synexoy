import { Link } from 'react-router-dom'
import { footerColumns } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <h2>Let&apos;s deliver measurable ROI from AI for your enterprise</h2>
          <Link to="/contact" className="cta-red">
            Talk to our AI experts
          </Link>
        </div>
      </div>

      <div className="container footer-grid">
        {footerColumns.map((col) => (
          <div key={col.title} className="footer-col">
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/about">Company</Link>
            </li>
            <li>
              <Link to="/newsroom">Newsroom</Link>
            </li>
            <li>
              <Link to="/accelerators">Accelerators</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright © {new Date().getFullYear()} Synexoy | All Rights Reserved</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
          <div className="footer-social" aria-label="Social links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              ig
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X">
              x
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              f
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              yt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
