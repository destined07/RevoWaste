import Header from "../../components/header"

export default function Attendance() {
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
          <h1 className="rw-page-title">Attendance Management</h1>
          <p className="rw-page-subtitle">Track attendance for waste management workers and volunteers</p>
        </div>

        <div className="rw-grid rw-grid-2">
          <section className="rw-card">
            <h2>Mark Attendance</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input type="text" placeholder="Employee ID" className="rw-input" />
              <input type="text" placeholder="Full Name" className="rw-input" />
              <select className="rw-input rw-select">
                <option>Select Role</option>
                <option>Waste Collector</option>
                <option>Supervisor</option>
                <option>Green Champion</option>
                <option>Volunteer</option>
              </select>
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button type="button" className="rw-btn rw-btn-primary" style={{ flex: 1 }}>
                  Check In
                </button>
                <button type="button" className="rw-btn rw-btn-secondary" style={{ flex: 1 }}>
                  Check Out
                </button>
              </div>
            </form>
          </section>

          <section className="rw-card">
            <h2>Today's Attendance</h2>
            <div className="rw-grid rw-grid-2" style={{ marginBottom: "24px" }}>
              <div className="rw-stat-card">
                <div className="rw-stat-number">42</div>
                <div className="rw-stat-label">Present</div>
              </div>
              <div className="rw-stat-card">
                <div className="rw-stat-number">8</div>
                <div className="rw-stat-label">Absent</div>
              </div>
            </div>
            <div>
              <h3>Recent Check-ins</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span style={{ fontWeight: "600" }}>Rajesh Kumar</span>
                <span style={{ color: "var(--green-600)", fontSize: "0.875rem", fontWeight: "500" }}>Present</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span style={{ fontWeight: "600" }}>Priya Sharma</span>
                <span style={{ color: "var(--green-600)", fontSize: "0.875rem", fontWeight: "500" }}>Present</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span style={{ fontWeight: "600" }}>Amit Singh</span>
                <span style={{ color: "var(--gray-500)", fontSize: "0.875rem", fontWeight: "500" }}>Absent</span>
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
