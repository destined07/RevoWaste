"use client"

import Link from "next/link"

export default function Facilities() {
  const facilities = [
    {
      name: "Green Valley Recycling Center",
      type: "Recycling",
      address: "123 Eco Street, Green District",
      phone: "+91 98765 43210",
    },
    {
      name: "City Waste Treatment Plant",
      type: "Treatment",
      address: "456 Clean Avenue, Central Zone",
      phone: "+91 98765 43211",
    },
    {
      name: "EcoMart Scrap Shop",
      type: "Scrap Shop",
      address: "789 Recycle Road, Market Area",
      phone: "+91 98765 43212",
    },
  ]

  return (
    <div className="rw-app">
      <div className="rw-bg-circles">
        <div className="rw-circle rw-circle-1"></div>
        <div className="rw-circle rw-circle-2"></div>
        <div className="rw-circle rw-circle-3"></div>
        <div className="rw-circle rw-circle-4"></div>
      </div>

      <header className="rw-header">
        <div className="rw-header-content">
          <div className="rw-brand">
            <img src="/logo.png" alt="RevoWaste logo" />
            <div className="rw-brand-text">
              <div className="rw-brand-name">RevoWaste</div>
              <div className="rw-brand-tagline">Clean India · Smart Waste</div>
            </div>
          </div>
          <nav className="rw-nav">
            <Link href="/">Home</Link>
            <Link href="/training">Training</Link>
            <Link href="/report">Report Dump</Link>
            <Link href="/facilities" className="active">
              Facilities & Tracking
            </Link>
            <Link href="/plate-monitor">Plate Monitor</Link>
            <Link href="/attendance">Attendance</Link>
            <Link href="/incentives">Incentives & Fines</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="rw-main">
        <div className="rw-page-header">
          <h1 className="rw-page-title">Facilities & Tracking</h1>
          <p className="rw-page-subtitle">
            Find nearby waste management facilities and track collection vehicles in real-time
          </p>
        </div>

        <div className="rw-grid rw-grid-2">
          <div className="rw-card">
            <h2>Nearby Facilities</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "12px",
                    padding: "20px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "var(--green-700)",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {facility.name}
                  </h4>
                  <div
                    style={{
                      display: "inline-block",
                      background: "var(--green-100)",
                      color: "var(--green-700)",
                      padding: "4px 12px",
                      borderRadius: "16px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      marginBottom: "12px",
                    }}
                  >
                    {facility.type}
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--gray-600)",
                      margin: "8px 0",
                    }}
                  >
                    📍 {facility.address}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--green-600)",
                      margin: "8px 0 0 0",
                      fontWeight: "500",
                    }}
                  >
                    📞 {facility.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rw-card">
            <h2>Vehicle Tracking</h2>
            <div
              style={{
                background: "rgba(249, 250, 251, 0.8)",
                borderRadius: "16px",
                padding: "48px 24px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed var(--gray-300)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: "16px",
                    filter: "grayscale(0.3)",
                  }}
                >
                  🚛
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                    margin: "0 0 8px 0",
                  }}
                >
                  Live Vehicle Tracking
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--gray-500)",
                    margin: "0",
                  }}
                >
                  Real-time GPS tracking integration coming soon
                </p>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <h3 style={{ marginBottom: "16px" }}>Quick Stats</h3>
              <div className="rw-grid rw-grid-3">
                <div className="rw-stat-card">
                  <div className="rw-stat-number">12</div>
                  <div className="rw-stat-label">Active Vehicles</div>
                </div>
                <div className="rw-stat-card">
                  <div className="rw-stat-number">8</div>
                  <div className="rw-stat-label">Facilities</div>
                </div>
                <div className="rw-stat-card">
                  <div className="rw-stat-number">95%</div>
                  <div className="rw-stat-label">Coverage</div>
                </div>
              </div>
            </div>
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
