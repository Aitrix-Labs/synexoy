import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, topLinks } from '../data'

function Chevron() {
  return (
    <svg className="nav-chev" viewBox="0 0 12 8" width="10" height="6" aria-hidden="true">
      <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 72 28" aria-hidden="true">
      {/* Vertical bars forming a sigmoid / wave silhouette */}
      <rect x="2" y="10" width="3.2" height="12" rx="1.2" fill="currentColor" opacity="0.55" />
      <rect x="8" y="6" width="3.2" height="18" rx="1.2" fill="currentColor" opacity="0.75" />
      <rect x="14" y="2" width="3.2" height="24" rx="1.2" fill="currentColor" />
      <rect x="20" y="5" width="3.2" height="20" rx="1.2" fill="currentColor" opacity="0.9" />
      <rect x="26" y="9" width="3.2" height="14" rx="1.2" fill="currentColor" opacity="0.7" />
      <rect x="32" y="12" width="3.2" height="10" rx="1.2" fill="currentColor" opacity="0.5" />
      <rect x="38" y="8" width="3.2" height="16" rx="1.2" fill="currentColor" opacity="0.75" />
      <rect x="44" y="3" width="3.2" height="22" rx="1.2" fill="currentColor" />
      <rect x="50" y="6" width="3.2" height="18" rx="1.2" fill="currentColor" opacity="0.85" />
      <rect x="56" y="10" width="3.2" height="12" rx="1.2" fill="currentColor" opacity="0.6" />
      <rect x="62" y="13" width="3.2" height="8" rx="1.2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobile])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`site-header ${isHome ? 'on-hero' : ''} ${scrolled || !isHome ? 'is-solid' : ''}`}
    >
      <div className="header-top-wrap">
        <div className="header-shell">
          <div className="header-top">
            <div className="header-top-links">
              {topLinks.map((link) => (
                <Link key={link.to} to={link.to} className="top-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-rule header-rule-top" aria-hidden="true" />

      <div className="header-shell">
        <div className="header-main">
          <Link to="/" className="brand" aria-label="Synexoy home">
            <BrandMark />
            <span className="brand-word">SYNEXOY</span>
          </Link>

          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className={`nav-item ${open === item.label ? 'is-open' : ''}`}
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link to={item.to} className="nav-link">
                  {item.label}
                  <Chevron />
                </Link>
                {open === item.label && (
                  <div className="nav-panel">
                    <div className="nav-panel-inner">
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} onClick={() => setOpen(null)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button type="button" className="search-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M20 20l-3.2-3.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </nav>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="header-rule" aria-hidden="true" />

      {mobile && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-top">
            <Link to="/" className="brand" onClick={() => setMobile(false)}>
              <BrandMark />
              <span className="brand-word">SYNEXOY</span>
            </Link>
            <button type="button" onClick={() => setMobile(false)} aria-label="Close">
              ✕
            </button>
          </div>
          <div className="mobile-links">
            {topLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMobile(false)}>
                {link.label}
              </Link>
            ))}
            {navLinks.map((item) => (
              <div key={item.label} className="mobile-group">
                <Link to={item.to} onClick={() => setMobile(false)}>
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link key={child.to} to={child.to} onClick={() => setMobile(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link to="/contact" className="btn-contact" onClick={() => setMobile(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
