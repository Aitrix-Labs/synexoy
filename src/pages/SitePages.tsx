import { FormEvent, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brand, navLinks } from '../data'

function titleFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  if (!parts.length) return 'Home'
  const last = parts[parts.length - 1]
  return last
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function findBlurb(pathname: string) {
  for (const nav of navLinks) {
    if (nav.to === pathname) return `Explore ${nav.label} capabilities from ${brand.name}.`
    for (const child of nav.children) {
      if (child.to === pathname) {
        return `${child.label} services from ${brand.name} — AI-first consulting for enterprise outcomes.`
      }
    }
  }
  return `${brand.name} helps enterprises modernize data, re-engineer processes, and decide faster with AI.`
}

export function GenericPage() {
  const { pathname } = useLocation()
  const title = titleFromPath(pathname)

  return (
    <section className="page-hero">
      <div className="container narrow-page">
        <p className="eyebrow">{brand.name}</p>
        <h1>{title}</h1>
        <p>{findBlurb(pathname)}</p>
        <div className="page-actions">
          <Link to="/contact" className="btn-red">
            Talk to our AI experts
          </Link>
          <Link to="/" className="btn-outline-dark">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="page-hero contact-page">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Talk to our AI experts</h1>
          <p>
            Tell us about your AI, data, or analytics priorities. We&apos;ll help you identify
            high-ROI use cases and a practical path to production.
          </p>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          {sent ? (
            <p className="form-success">Thanks — our team will get back to you shortly.</p>
          ) : (
            <>
              <label>
                Full name
                <input name="name" required placeholder="Jane Doe" />
              </label>
              <label>
                Work email
                <input name="email" type="email" required placeholder="jane@company.com" />
              </label>
              <label>
                Company
                <input name="company" required placeholder="Acme Corp" />
              </label>
              <label>
                How can we help?
                <textarea name="message" rows={5} required placeholder="Share your goals..." />
              </label>
              <button type="submit" className="btn-red">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export function LegalPage({ kind }: { kind: 'privacy' | 'cookie' }) {
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Cookie Policy'
  return (
    <section className="page-hero">
      <div className="container narrow-page">
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <p>
          This page outlines how {brand.name} handles information related to our websites and
          services. For production use, replace this summary with your counsel-approved policy.
        </p>
        <ul className="legal-list">
          <li>We collect information you submit through forms and site interactions.</li>
          <li>We use cookies and similar technologies to improve experience and measure usage.</li>
          <li>You can request access, correction, or deletion of personal data where applicable.</li>
        </ul>
        <Link to="/contact" className="btn-outline-dark">
          Contact us
        </Link>
      </div>
    </section>
  )
}
