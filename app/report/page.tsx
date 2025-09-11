"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

type Report = { id: string; photo?: string; note: string; lat?: number; lng?: number; when: string }

export default function ReportDump() {
  const [reports, setReports] = useState<Report[]>([])
  const [note, setNote] = useState("")
  const [photo, setPhoto] = useState<string | undefined>()
  const [coords, setCoords] = useState<{ lat?: number; lng?: number }>({})

  useEffect(() => {
    const saved = localStorage.getItem("rw_reports")
    if (saved) setReports(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("rw_reports", JSON.stringify(reports))
  }, [reports])

  function getLocation() {
    if (!navigator.geolocation) return alert("Geolocation not supported")
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setCoords({ lat: p.coords.latitude, lng: p.coords.longitude })
      },
      () => alert("Unable to get location"),
    )
  }

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPhoto(reader.result as string)
    reader.readAsDataURL(file)
  }

  function submit() {
    if (!note && !photo) return alert("Add a note or photo")
    const r: Report = {
      id: crypto.randomUUID(),
      note,
      photo,
      lat: coords.lat,
      lng: coords.lng,
      when: new Date().toISOString(),
    }
    setReports([r, ...reports])
    setNote("")
    setPhoto(undefined)
    setCoords({})
  }

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
            <Link href="/report" className="active">
              Report Dump
            </Link>
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
          <h1 className="rw-page-title">Report Illegal Dumping</h1>
          <p className="rw-page-subtitle">
            Help keep your community clean by reporting illegal waste dumping with geo-tagged evidence
          </p>
        </div>

        <div className="rw-grid rw-grid-2">
          <div className="rw-card">
            <h2>Submit New Report</h2>

            <div style={{ marginBottom: "24px" }}>
              <input
                placeholder="Describe what you found and where..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="rw-input"
                style={{ marginBottom: "16px" }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onPhoto}
                  style={{
                    padding: "12px",
                    border: "2px dashed var(--gray-300)",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.875rem",
                  }}
                />

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button className="rw-btn rw-btn-secondary" onClick={getLocation}>
                    📍 Add Location
                  </button>
                  <button className="rw-btn rw-btn-primary" onClick={submit}>
                    📤 Submit Report
                  </button>
                </div>
              </div>
            </div>

            {coords.lat && (
              <div
                style={{
                  background: "rgba(34, 197, 94, 0.1)",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  color: "var(--green-700)",
                  marginBottom: "16px",
                }}
              >
                📍 Location captured: {coords.lat?.toFixed(4)}, {coords.lng?.toFixed(4)}
              </div>
            )}

            {photo && (
              <div style={{ marginTop: "16px" }}>
                <img
                  src={photo || "/placeholder.svg"}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
              </div>
            )}
          </div>

          <div className="rw-card">
            <h3>Recent Reports</h3>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              {reports.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "48px 0",
                    color: "var(--gray-500)",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📋</div>
                  <p>No reports yet. Submit your first report to help keep the community clean!</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      style={{
                        background: "rgba(255, 255, 255, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "12px",
                        padding: "16px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          color: "var(--gray-700)",
                          marginBottom: "8px",
                        }}
                      >
                        {new Date(report.when).toLocaleString()}
                      </div>
                      <div
                        style={{
                          color: "var(--gray-600)",
                          marginBottom: "8px",
                        }}
                      >
                        {report.note}
                      </div>
                      {report.lat && (
                        <div
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--green-600)",
                            marginBottom: "8px",
                          }}
                        >
                          📍 {report.lat.toFixed(4)}, {report.lng?.toFixed(4)}
                        </div>
                      )}
                      {report.photo && (
                        <img
                          src={report.photo || "/placeholder.svg"}
                          alt="Evidence"
                          style={{
                            maxWidth: "100%",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginTop: "8px",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
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
