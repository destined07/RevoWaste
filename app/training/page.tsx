"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Lesson = { id: string; title: string; points: string[] }

const lessons: Lesson[] = [
  { id: "l1", title: "Types of Waste", points: ["Dry, Wet, Domestic Hazardous", "E-waste, sanitary waste tagging"] },
  {
    id: "l2",
    title: "Source Segregation",
    points: ["3-bin system distribution", "No wet waste to collection vehicles"],
  },
  { id: "l3", title: "Home Composting", points: ["Starter kit usage", "Curing & harvesting compost"] },
  { id: "l4", title: "Plastic Reuse", points: ["Refill, recycle drop-off", "Avoid single-use"] },
]

export default function Training() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem("rw_training")
    if (saved) setCompleted(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("rw_training", JSON.stringify(completed))
  }, [completed])

  const progress = Math.round((Object.values(completed).filter(Boolean).length / lessons.length) * 100)

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
            <Link href="/training" className="active">
              Training
            </Link>
            <Link href="/report">Report Dump</Link>
            <Link href="/facilities">Facilities & Tracking</Link>
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
          <h1 className="rw-page-title">Mandatory Training</h1>
          <p className="rw-page-subtitle">
            Complete all modules to unlock incentives and receive your compliance certificate
          </p>
        </div>

        <div className="rw-card">
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.5)",
                  height: "12px",
                  borderRadius: "6px",
                  marginBottom: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, var(--green-600), var(--green-700))",
                    height: "100%",
                    borderRadius: "6px",
                    width: `${progress}%`,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "var(--green-700)",
                }}
              >
                {progress}% completed
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.2s ease",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={!!completed[lesson.id]}
                    onChange={(e) => setCompleted({ ...completed, [lesson.id]: e.target.checked })}
                    style={{
                      marginTop: "4px",
                      width: "20px",
                      height: "20px",
                      accentColor: "var(--green-600)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "var(--gray-900)",
                        marginBottom: "8px",
                      }}
                    >
                      {lesson.title}
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {lesson.points.map((point) => (
                        <li
                          key={point}
                          style={{
                            color: "var(--gray-600)",
                            fontSize: "0.875rem",
                            margin: "4px 0",
                            paddingLeft: "16px",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: "0",
                              color: "var(--green-600)",
                            }}
                          >
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>
              </div>
            ))}
          </div>

          {progress === 100 && (
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <button
                className="rw-btn rw-btn-primary"
                onClick={() => window.print()}
                style={{ fontSize: "1rem", padding: "16px 32px" }}
              >
                🎓 Download Certificate
              </button>
            </div>
          )}
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
