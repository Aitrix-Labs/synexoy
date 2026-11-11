export default function RecognitionCard() {
  const bars = [
    ...Array.from({ length: 9 }, () => 'red'),
    ...Array.from({ length: 6 }, () => 'white'),
    ...Array.from({ length: 2 }, () => 'grey'),
  ]

  return (
    <div className="recognition-card" aria-label="Synexoy named in 17 Gartner research reports">
      <p className="recognition-card-kicker">Synexoy named in</p>
      <div className="recognition-card-main">
        <span className="recognition-card-count">17</span>
        <span className="recognition-card-label">Gartner® research reports</span>
      </div>
      <div className="recognition-card-bars" aria-hidden="true">
        {bars.map((tone, i) => (
          <span key={`${tone}-${i}`} className={`recognition-bar is-${tone}`} />
        ))}
      </div>
      <ul className="recognition-card-legend">
        <li>
          <span className="dot is-red" />9 Domain-Specific Models
        </li>
        <li>
          <span className="dot is-white" />6 Agentic AI
        </li>
        <li>
          <span className="dot is-grey" />2 Impact Radars
        </li>
      </ul>
    </div>
  )
}
