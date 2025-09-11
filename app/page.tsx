import Header from "../components/header"

export default function Home() {
  return (
    <div className="rw-app">
      {/* Background circles */}
      <div className="rw-bg-circles">
        <div className="rw-circle rw-circle-1"></div>
        <div className="rw-circle rw-circle-2"></div>
        <div className="rw-circle rw-circle-3"></div>
        <div className="rw-circle rw-circle-4"></div>
      </div>

      <Header />

      <main className="rw-main">
        <div className="rw-page-header">
          <h1 className="rw-page-title">Smart Waste Management</h1>
          <p className="rw-page-subtitle">
            Revolutionizing India's waste management through technology, training, and community engagement
          </p>
        </div>

        <div className="rw-grid rw-grid-2">
          <div className="rw-card">
            <h2>The Challenge</h2>
            <p>
              India generates approximately 1.7 lakh tonnes of municipal solid waste daily, with only 54% being
              scientifically treated. This creates environmental hazards, health risks, and economic losses across urban
              and rural areas.
            </p>
            <p>
              RevoWaste addresses these gaps through comprehensive training, decentralized monitoring, smart incentives,
              and technology-driven reporting systems.
            </p>
          </div>

          <div className="rw-card">
            <h2>Our Solution</h2>
            <ul>
              <li>Mandatory Training for citizens and waste management workers</li>
              <li>Green Champions committees for decentralized community monitoring</li>
              <li>Geo-tagged dump reporting with real-time vehicle tracking</li>
              <li>Smart facilities locator and integrated scrap shop network</li>
              <li>AI-powered incentives and compliance analytics system</li>
              <li>Automated plate monitoring for waste collection vehicles</li>
            </ul>
          </div>
        </div>

        <div className="rw-grid rw-grid-4" style={{ marginTop: "48px" }}>
          <div className="rw-stat-card">
            <div className="rw-stat-number">1.7L</div>
            <div className="rw-stat-label">Tonnes Daily Waste</div>
          </div>
          <div className="rw-stat-card">
            <div className="rw-stat-number">54%</div>
            <div className="rw-stat-label">Currently Treated</div>
          </div>
          <div className="rw-stat-card">
            <div className="rw-stat-number">9</div>
            <div className="rw-stat-label">Smart Modules</div>
          </div>
          <div className="rw-stat-card">
            <div className="rw-stat-number">100%</div>
            <div className="rw-stat-label">Target Coverage</div>
          </div>
        </div>
      </main>

      <footer className="rw-footer">
        <div className="rw-footer-content">
          <p>© 2024 RevoWaste - Smart India Hackathon Project</p>
        </div>
      </footer>
    </div>
  )
}
