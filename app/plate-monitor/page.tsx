"use client"

import type React from "react"

import { useState, useRef } from "react"
import Header from "../../components/header"

interface PlateDetection {
  id: string
  plateNumber: string
  confidence: number
  timestamp: string
  imageUrl?: string
  location?: { lat: number; lng: number }
  verified: boolean
}

export default function PlateMonitor() {
  const [detections, setDetections] = useState<PlateDetection[]>([
    {
      id: "1",
      plateNumber: "MH12AB1234",
      confidence: 0.95,
      timestamp: new Date(Date.now() - 120000).toISOString(),
      verified: true,
    },
    {
      id: "2",
      plateNumber: "DL01CD5678",
      confidence: 0.87,
      timestamp: new Date(Date.now() - 300000).toISOString(),
      verified: false,
    },
  ])

  const [isProcessing, setIsProcessing] = useState(false)
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [ocrResult, setOcrResult] = useState<string>("")
  const [manualPlate, setManualPlate] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsProcessing(true)
    const reader = new FileReader()

    reader.onload = async () => {
      const imageUrl = reader.result as string
      setCurrentImage(imageUrl)

      // Mock OCR processing - in real implementation, this would use Tesseract.js
      setTimeout(() => {
        const mockPlates = ["MH12XY9876", "KA05AB1234", "DL08CD5678", "TN09EF9012"]
        const randomPlate = mockPlates[Math.floor(Math.random() * mockPlates.length)]
        const confidence = 0.75 + Math.random() * 0.2 // Random confidence between 0.75-0.95

        setOcrResult(randomPlate)
        setIsProcessing(false)

        // Add to detections
        const newDetection: PlateDetection = {
          id: Date.now().toString(),
          plateNumber: randomPlate,
          confidence,
          timestamp: new Date().toISOString(),
          imageUrl,
          verified: confidence > 0.9,
        }

        setDetections((prev) => [newDetection, ...prev])
      }, 2000)
    }

    reader.readAsDataURL(file)
  }

  const handleManualEntry = () => {
    if (!manualPlate.trim()) return

    const newDetection: PlateDetection = {
      id: Date.now().toString(),
      plateNumber: manualPlate.toUpperCase(),
      confidence: 1.0, // Manual entry is 100% confident
      timestamp: new Date().toISOString(),
      verified: true,
    }

    setDetections((prev) => [newDetection, ...prev])
    setManualPlate("")
  }

  const verifyDetection = (id: string) => {
    setDetections((prev) =>
      prev.map((detection) => (detection.id === id ? { ...detection, verified: true } : detection)),
    )
  }

  return (
    <div className="rw-app">
      <div className="rw-bg-circles">
        <div className="rw-circle rw-circle-1"></div>
        <div className="rw-circle rw-circle-2"></div>
        <div className="rw-circle rw-circle-3"></div>
        <div className="rw-circle rw-circle-4"></div>
      </div>

      <Header />

      <main className="rw-main">
        <div className="rw-page-header">
          <h1 className="rw-page-title">AI Plate Monitor</h1>
          <p className="rw-page-subtitle">
            Advanced OCR system for automatic vehicle plate recognition with manual verification fallback
          </p>
        </div>

        <div className="rw-grid rw-grid-2">
          <section className="rw-card">
            <h2>Camera & OCR System</h2>

            <div className="rw-camera-container">
              {currentImage ? (
                <img
                  src={currentImage || "/placeholder.svg"}
                  alt="Captured vehicle"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div className="rw-camera-placeholder">
                  <div style={{ fontSize: "4rem", marginBottom: "16px" }}>📷</div>
                  <h3>AI Camera Feed</h3>
                  <p>Upload image or connect live camera for plate detection</p>
                </div>
              )}
            </div>

            <div className="rw-camera-controls">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <button
                className="rw-btn rw-btn-primary"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing}
              >
                📷 Upload Image
              </button>
              <button className="rw-btn rw-btn-secondary">🎥 Live Camera</button>
              <button
                className="rw-btn rw-btn-secondary"
                onClick={() => {
                  setCurrentImage(null)
                  setOcrResult("")
                }}
              >
                🗑️ Clear
              </button>
            </div>

            {isProcessing && (
              <div className="rw-loading-container" style={{ minHeight: "200px" }}>
                <div className="rw-spinner"></div>
                <div className="rw-loading-text">Processing OCR...</div>
                <div className="rw-loading-dots">
                  <div className="rw-loading-dot"></div>
                  <div className="rw-loading-dot"></div>
                  <div className="rw-loading-dot"></div>
                </div>
              </div>
            )}

            {ocrResult && !isProcessing && (
              <div className="rw-ocr-result">
                <h4 style={{ margin: "0 0 12px 0", color: "var(--green-700)" }}>🎯 OCR Detection Result</h4>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "var(--green-800)",
                    marginBottom: "8px",
                  }}
                >
                  {ocrResult}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--gray-600)" }}>
                  Confidence: {((0.75 + Math.random() * 0.2) * 100).toFixed(1)}%
                </div>
              </div>
            )}

            <div style={{ marginTop: "24px" }}>
              <h3>Manual Verification</h3>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <input
                  type="text"
                  placeholder="Enter plate number manually"
                  value={manualPlate}
                  onChange={(e) => setManualPlate(e.target.value)}
                  className="rw-input"
                  style={{ flex: 1, textTransform: "uppercase" }}
                />
                <button className="rw-btn rw-btn-primary" onClick={handleManualEntry}>
                  ✓ Add
                </button>
              </div>
            </div>
          </section>

          <section className="rw-card">
            <h2>Detection History</h2>

            <div className="rw-grid rw-grid-3" style={{ marginBottom: "24px" }}>
              <div className="rw-stat-card">
                <div className="rw-stat-number">{detections.length}</div>
                <div className="rw-stat-label">Total Detections</div>
              </div>
              <div className="rw-stat-card">
                <div className="rw-stat-number">{detections.filter((d) => d.verified).length}</div>
                <div className="rw-stat-label">Verified</div>
              </div>
              <div className="rw-stat-card">
                <div className="rw-stat-number">
                  {detections.length > 0
                    ? Math.round((detections.filter((d) => d.verified).length / detections.length) * 100)
                    : 0}
                  %
                </div>
                <div className="rw-stat-label">Accuracy</div>
              </div>
            </div>

            <div className="rw-plate-history">
              {detections.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "48px 0",
                    color: "var(--gray-500)",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
                  <p>No plate detections yet. Upload an image to start OCR processing.</p>
                </div>
              ) : (
                detections.map((detection) => (
                  <div key={detection.id} className="rw-plate-entry">
                    <div>
                      <div className="rw-plate-number">{detection.plateNumber}</div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: detection.verified ? "var(--green-600)" : "var(--gray-500)",
                          marginTop: "4px",
                        }}
                      >
                        {detection.verified ? "✓ Verified" : "⚠ Needs Verification"} • Confidence:{" "}
                        {(detection.confidence * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                      <div className="rw-plate-time">{new Date(detection.timestamp).toLocaleTimeString()}</div>
                      {!detection.verified && (
                        <button
                          className="rw-btn rw-btn-secondary"
                          style={{ fontSize: "0.75rem", padding: "6px 12px" }}
                          onClick={() => verifyDetection(detection.id)}
                        >
                          ✓ Verify
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
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
