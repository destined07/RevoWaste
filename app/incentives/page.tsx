import Header from "../../components/header"

export default function Incentives() {
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
          <h1 className="rw-page-title">Incentives & Fines</h1>
          <p className="rw-page-subtitle">Reward compliance and manage penalties for waste management violations</p>
        </div>

        <div className="rw-grid rw-grid-2">
          <section className="rw-card">
            <h2>Reward System</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  background: "rgba(34, 197, 94, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>🏆</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "1.125rem" }}>Eco Champion</h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "0.875rem", color: "var(--gray-600)" }}>
                    Complete 10 waste reports
                  </p>
                  <span style={{ color: "var(--green-600)", fontWeight: "600", fontSize: "0.875rem" }}>
                    +500 points
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  background: "rgba(34, 197, 94, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>♻️</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "1.125rem" }}>Recycling Hero</h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "0.875rem", color: "var(--gray-600)" }}>
                    Segregate waste properly for 30 days
                  </p>
                  <span style={{ color: "var(--green-600)", fontWeight: "600", fontSize: "0.875rem" }}>
                    +300 points
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  background: "rgba(34, 197, 94, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ fontSize: "2rem" }}>🌱</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "1.125rem" }}>Green Volunteer</h3>
                  <p style={{ margin: "0 0 8px 0", fontSize: "0.875rem", color: "var(--gray-600)" }}>
                    Attend community cleanup events
                  </p>
                  <span style={{ color: "var(--green-600)", fontWeight: "600", fontSize: "0.875rem" }}>
                    +200 points
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="rw-card">
            <h2>Compliance Analytics</h2>
            <div className="rw-grid rw-grid-3" style={{ marginBottom: "24px" }}>
              <div className="rw-stat-card">
                <div className="rw-stat-number">87%</div>
                <div className="rw-stat-label">Compliance Rate</div>
              </div>
              <div className="rw-stat-card">
                <div className="rw-stat-number">₹45K</div>
                <div className="rw-stat-label">Fines Collected</div>
              </div>
              <div className="rw-stat-card">
                <div className="rw-stat-number">₹1.2L</div>
                <div className="rw-stat-label">Rewards Distributed</div>
              </div>
            </div>
            <div>
              <h3>Recent Activities</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span
                  style={{
                    background: "var(--green-100)",
                    color: "var(--green-700)",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Reward
                </span>
                <span style={{ fontSize: "0.875rem" }}>Priya S. earned 100 points for proper segregation</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    color: "rgb(239, 68, 68)",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  Fine
                </span>
                <span style={{ fontSize: "0.875rem" }}>₹500 fine issued for illegal dumping</span>
              </div>
            </div>
          </section>
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
