import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../asset'
import RecognitionCard from '../components/RecognitionCard'
import {
  awardImages,
  caseStudies,
  heroSlides,
  industryTabs,
  partnerImages,
  platforms,
  stats,
  testimonials,
  whatWeDo,
  whyChoose,
} from '../data'

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [industry, setIndustry] = useState(0)
  const [platform, setPlatform] = useState(0)
  const [testimonial, setTestimonial] = useState(0)
  const [slideTick, setSlideTick] = useState(0)
  const whatTrackRef = useRef<HTMLDivElement>(null)

  const active = heroSlides[slide]
  const activeIndustry = industryTabs[industry]
  const activePlatform = platforms[platform]
  const activeTestimonial = testimonials[testimonial]

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, 12000)
    return () => window.clearInterval(id)
  }, [slideTick])

  function goToSlide(index: number) {
    setSlide(index)
    setSlideTick((t) => t + 1)
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setTestimonial((t) => (t + 1) % testimonials.length)
    }, 9000)
    return () => window.clearInterval(id)
  }, [])

  function scrollWhat(dir: 1 | -1) {
    const el = whatTrackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.75), behavior: 'smooth' })
  }

  return (
    <>
      {/* ========== HERO ========== */}
      <section className={`hero theme-${active.theme}`} id="HeroSlider">
        {active.theme === 'video' && 'video' in active && active.video ? (
          <>
            <video
              className="hero-video"
              key={active.video}
              autoPlay
              muted
              loop
              playsInline
              poster={asset(active.background ?? 'images/hero/efficiency-poster.jpg')}
            >
              <source src={asset(active.video)} type="video/mp4" />
            </video>
            <div className="hero-overlay" aria-hidden="true" />
          </>
        ) : null}
        {active.theme === 'warm' && 'background' in active && active.background ? (
          <div
            className="hero-media-bg hero-media-bg-warm"
            style={{ backgroundImage: `url(${asset(active.background)})` }}
          />
        ) : null}
        {active.theme === 'dark-podcast' && (
          <div
            className="hero-media-bg"
            style={{ backgroundImage: `url(${asset('images/hero/bg-podcast.jpg')})` }}
          />
        )}
        {active.theme === 'dark-fde' && (
          <div
            className="hero-media-side"
            style={{ backgroundImage: `url(${asset('images/hero/fde.jpg')})` }}
          />
        )}

        <div className="container hero-main">
          <div className="hero-copy" key={active.id}>
            <h1>{active.title}</h1>
            <Link
              to={active.ctaTo}
              className={active.theme === 'warm' ? 'cta-dark' : 'cta-red'}
            >
              {active.cta}
            </Link>
          </div>

          <div className="hero-aside" key={`${active.id}-aside`}>
            {active.visual === 'gartner' && active.disclaimer ? (
              <div className="gartner-aside">
                <RecognitionCard />
                <p className="hero-disclaimer">{active.disclaimer}</p>
              </div>
            ) : null}
            {active.visual === 'podcast' && active.speakers && (
              <div className="podcast-aside">
                {active.speakers.map((sp) => (
                  <div key={sp.name} className="speaker">
                    <img src={asset(sp.image)} alt={sp.name} />
                    <div>
                      <strong>{sp.name}</strong>
                      <span>{sp.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hero-cards">
          <div className="container hero-cards-row">
            {heroSlides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`hero-card ${i === slide ? 'is-active' : ''}`}
                onClick={() => goToSlide(i)}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INTRO + STATS ========== */}
      <section
        className="intro-section"
        style={{ backgroundImage: `url(${asset('images/intro/pattern.jpg')})` }}
      >
        <div className="intro-copy">
          <div className="container">
            <h2 className="intro-lead">
              Synexoy helps F1000 enterprises <em>modernize</em> data, <em>re-engineer</em> business
              processes, and make better <em>decisions</em> using AI to gain competitive advantage.
            </h2>
          </div>
        </div>
        <div className="stats-bar">
          <div className="container">
            <div className="stats-row">
              {stats.map((s, i) => (
                <div key={s.value} className={`stat-item ${i === 1 ? 'has-sides' : ''}`}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT WE DO ========== */}
      <section className="section what-section" id="what-we-do">
        <div className="container">
          <div className="what-head">
            <h2 className="heading-red">What we do</h2>
            <div className="what-arrows">
              <button type="button" aria-label="Previous" onClick={() => scrollWhat(-1)}>
                <img src={asset('images/ui/arrow-prev.svg')} alt="" />
              </button>
              <button type="button" aria-label="Next" onClick={() => scrollWhat(1)}>
                <img src={asset('images/ui/arrow-next.svg')} alt="" />
              </button>
            </div>
          </div>
          <div className="what-track" ref={whatTrackRef}>
            {whatWeDo.map((card) => (
              <article key={card.title} className="what-card">
                <div className="what-card-img">
                  <img src={asset(card.image)} alt={card.title} />
                </div>
                <div className="what-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.blurb}</p>
                  <Link to={card.to} className="link-arrow">
                    Explore more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRY ========== */}
      <section className="section industry-section">
        <div className="container">
          <h2 className="heading-red">Industry-focused solutions</h2>
          <p className="section-lead">
            Built using DSLMs (Domain-Specific Language Models) and AI agents that unify industry
            context with enterprise data to drive clear, tangible outcomes.
          </p>
          <div className="industry-tabs" role="tablist">
            {industryTabs.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={i === industry}
                className={i === industry ? 'is-active' : ''}
                onClick={() => setIndustry(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="industry-grid">
            {activeIndustry.solutions.map((sol) => (
              <article key={sol.title} className="industry-card">
                <div className="industry-media">
                  <img src={asset(sol.image)} alt={sol.title} />
                </div>
                <div className="industry-body">
                  <h3>{sol.title}:</h3>
                  <p>{sol.blurb}</p>
                  <strong>{sol.metric}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/industries" className="cta-outline">
              {activeIndustry.explore}
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="section cases-section">
        <div className="container">
          <div className="row-between">
            <h2 className="heading-red">Business impact delivered to our clients</h2>
            <Link to="/resources/case-studies" className="text-link">
              View all case studies
            </Link>
          </div>
          <div className="cases-grid">
            {caseStudies.map((c) => (
              <article key={c.title} className="case-card">
                <div className="case-img">
                  <img src={asset(c.image)} alt="" />
                </div>
                <div className="case-content">
                  <span className="case-tag">{c.tag}</span>
                  <h3 className="case-title">{c.title}</h3>
                  <ul className="case-metrics">
                    {c.metrics.map((m) => (
                      <li key={m.value}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/resources/case-studies" className="link-arrow">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE ========== */}
      <section className="section why-section">
        <div className="container">
          <h2 className="why-heading">Why choose Synexoy?</h2>
          <div className="why-grid">
            {whyChoose.map((item) => (
              <article key={item.title} className="why-item">
                <div className="why-item-head">
                  <img src={asset(item.icon)} alt="" width={40} height={40} />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AWARDS + PARTNERS ========== */}
      <section className="section awards-section">
        <div className="container">
          <div className="row-between awards-head">
            <h2 className="heading-red">Awarded for innovation and impact</h2>
            <Link to="/resources" className="text-link">
              View more
            </Link>
          </div>
          <p className="section-lead">
            Recognized by leading industry analysts and established platforms for delivering
            measurable business impact through data and AI. Our awards reflect consistent excellence,
            innovation, and trusted execution across global enterprises.
          </p>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...awardImages, ...awardImages].map((src, i) => (
                <div key={`${src}-${i}`} className="award-logo">
                  <img src={asset(src)} alt="Award" />
                </div>
              ))}
            </div>
          </div>

          <div className="partners-block">
            <h2 className="heading-red">Technology partnerships across every layer of the AI stack</h2>
            <p className="section-lead">
              From hyperscaler and data platforms to frontier models, our alliances give enterprises a
              single, connected path from data to production-grade AI transformations.
            </p>
            <div className="partners-row">
              {partnerImages.map((p) => (
                <div key={p.name} className="partner-logo">
                  <img src={asset(p.src)} alt={p.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="heading-dark">Trusted by clients and backed by industry experts</h2>
          <div className="testimonial-layout" key={activeTestimonial.name + activeTestimonial.title}>
            <div className="testimonial-media">
              <img src={asset(activeTestimonial.image)} alt="" />
              {activeTestimonial.type === 'video' && <span className="play-btn" aria-hidden="true" />}
            </div>
            <div className="testimonial-copy">
              <img className="quote-icon" src={asset('images/ui/quote.svg')} alt="" />
              <h3>{activeTestimonial.title}</h3>
              <blockquote>{activeTestimonial.quote}</blockquote>
              <div className="testimonial-person">
                <strong>{activeTestimonial.name}</strong>
                <span>{activeTestimonial.role}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === testimonial ? 'is-active' : ''}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== PLATFORMS ========== */}
      <section className="section platforms-section" id="enterprise-accelerators">
        <div className="container">
          <h2 className="heading-red">AI-powered platforms built for enterprise impact</h2>
          <p className="section-lead wide">
            Synexoy&apos;s AI-powered platforms turn complex enterprise challenges into intelligent,
            scalable, and measurable business outcomes. Built to address high-stakes business
            problems across marketing, supply chain, and data quality, Synexoy&apos;s enterprise grade
            solutions connect data, intelligence, and execution to help organizations move from
            fragmented processes to faster, smarter, and more confident decision-making.
          </p>
          <div className="accel-tabs">
            {platforms.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={i === platform ? 'is-active' : ''}
                onClick={() => setPlatform(i)}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="accel-panel" key={activePlatform.id}>
            <div className="accel-copy">
              <h3>{activePlatform.tagline}</h3>
              <p>{activePlatform.blurb}</p>
              <ul>
                {activePlatform.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link to={`/solutions/${activePlatform.id}`} className="cta-outline">
                Explore {activePlatform.name}
              </Link>
            </div>
            <div className="accel-media">
              <img src={asset(activePlatform.image)} alt={activePlatform.name} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
