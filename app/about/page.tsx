"use client"

import Header from "../../components/header"
import { useState, useEffect } from "react"

export default function About() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
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
          <div className="rw-loading-container">
            <div className="rw-spinner"></div>
            <div className="rw-loading-text">Loading About Page...</div>
            <div className="rw-loading-dots">
              <div className="rw-loading-dot"></div>
              <div className="rw-loading-dot"></div>
              <div className="rw-loading-dot"></div>
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
          <h1 className="rw-page-title">About RevoWaste</h1>
          <p className="rw-page-subtitle">
            Revolutionizing waste management through technology and community engagement
          </p>
        </div>

        <div className="rw-grid rw-grid-2">
          <section className="rw-card">
            <h2>Our Mission</h2>
            <p>
              RevoWaste aims to transform India's waste management landscape by leveraging technology, community
              participation, and data-driven insights to create a cleaner, more sustainable future.
            </p>
            <h3>Key Objectives</h3>
            <ul>
              <li>Increase waste treatment efficiency from 54% to 90%</li>
              <li>Reduce illegal dumping through community monitoring</li>
              <li>Create economic opportunities in the circular economy</li>
              <li>Educate citizens about proper waste management</li>
            </ul>
          </section>

          <section className="rw-card">
            <h2>Smart India Hackathon 2024</h2>
            <p>
              This project was developed for the Smart India Hackathon 2024, addressing the critical challenge of waste
              management in urban India.
            </p>
            <div style={{ marginTop: "24px" }}>
              <h3>Problem Statement</h3>
              <p>
                India generates approximately 1.7 lakh tonnes of municipal solid waste daily, but only 54% receives
                scientific treatment. Our solution bridges this gap through technology-enabled monitoring, training, and
                incentive systems.
              </p>
            </div>
            <div style={{ marginTop: "24px" }}>
              <h3>Technology Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                <span
                  style={{
                    background: "var(--green-100)",
                    color: "var(--green-700)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  React
                </span>
                <span
                  style={{
                    background: "var(--green-100)",
                    color: "var(--green-700)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  Next.js
                </span>
                <span
                  style={{
                    background: "var(--green-100)",
                    color: "var(--green-700)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  TypeScript
                </span>
                <span
                  style={{
                    background: "var(--green-100)",
                    color: "var(--green-700)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  Geolocation API
                </span>
                <span
                  style={{
                    background: "var(--green-100)",
                    color: "var(--green-700)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  Machine Learning
                </span>
              </div>
            </div>
          </section>
        </div>

        <section className="rw-card" style={{ marginTop: "32px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px" }}>Expected Impact</h2>
          <div className="rw-grid rw-grid-4">
            <div className="rw-stat-card">
              <div className="rw-stat-number">90%</div>
              <div className="rw-stat-label">Waste Treatment Efficiency</div>
            </div>
            <div className="rw-stat-card">
              <div className="rw-stat-number">50%</div>
              <div className="rw-stat-label">Reduction in Illegal Dumping</div>
            </div>
            <div className="rw-stat-card">
              <div className="rw-stat-number">10K+</div>
              <div className="rw-stat-label">Citizens Trained</div>
            </div>
            <div className="rw-stat-card">
              <div className="rw-stat-number">₹5Cr</div>
              <div className="rw-stat-label">Economic Value Generated</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rw-footer">
        <div className="rw-footer-content">
          <p>© 2024 RevoWaste - Smart India Hackathon Project</p>
        </div>
      </footer>
    </div>
  )
}
