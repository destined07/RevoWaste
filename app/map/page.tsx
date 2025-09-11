"use client"

import { useState, useEffect } from "react"
import Header from "../../components/header"

interface Vehicle {
  id: string
  plateNumber: string
  type: "collection" | "recycling" | "hazardous"
  lat: number
  lng: number
  status: "active" | "idle" | "maintenance"
  lastSeen: string
}

interface Facility {
  id: string
  name: string
  type: "recycling" | "treatment" | "disposal"
  lat: number
  lng: number
  capacity: number
  currentLoad: number
}

export default function MapPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  useEffect(() => {
    // Mock data for demonstration
    setVehicles([
      {
        id: "1",
        plateNumber: "MH12AB1234",
        type: "collection",
        lat: 19.076,
        lng: 72.8777,
        status: "active",
        lastSeen: new Date().toISOString(),
      },
      {
        id: "2",
        plateNumber: "MH12CD5678",
        type: "recycling",
        lat: 19.0896,
        lng: 72.8656,
        status: "idle",
        lastSeen: new Date(Date.now() - 300000).toISOString(),
      },
    ])

    setFacilities([
      {
        id: "1",
        name: "Central Recycling Plant",
        type: "recycling",
        lat: 19.0825,
        lng: 72.8417,
        capacity: 1000,
        currentLoad: 750,
      },
      {
        id: "2",
        name: "Waste Treatment Facility",
        type: "treatment",
        lat: 19.0644,
        lng: 72.8493,
        capacity: 500,
        currentLoad: 320,
      },
    ])
  }, [])

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
          <h1 className="rw-page-title">Live Vehicle & Facility Map</h1>
          <p className="rw-page-subtitle">Real-time tracking of waste collection vehicles and facility monitoring</p>
        </div>

        <div className="rw-grid rw-grid-2">
          <div className="rw-card">
            <h2>Interactive Map</h2>
            <div className="rw-map-container">
              <div className="rw-map-placeholder">
                <div className="rw-map-content">
                  <div className="rw-map-icon">🗺️</div>
                  <h3>Live Map View</h3>
                  <p>Interactive map with vehicle tracking would be integrated here using Leaflet/MapBox</p>

                  <div className="rw-map-legend">
                    <div className="rw-legend-item">
                      <span className="rw-legend-dot" style={{ background: "#22c55e" }}></span>
                      Active Vehicles
                    </div>
                    <div className="rw-legend-item">
                      <span className="rw-legend-dot" style={{ background: "#f59e0b" }}></span>
                      Idle Vehicles
                    </div>
                    <div className="rw-legend-item">
                      <span className="rw-legend-dot" style={{ background: "#3b82f6" }}></span>
                      Facilities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rw-card">
            <h2>Live Vehicle Status</h2>
            <div className="rw-vehicle-list">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`rw-vehicle-item ${selectedVehicle?.id === vehicle.id ? "selected" : ""}`}
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="rw-vehicle-header">
                    <span className="rw-vehicle-plate">{vehicle.plateNumber}</span>
                    <span className={`rw-vehicle-status ${vehicle.status}`}>{vehicle.status}</span>
                  </div>
                  <div className="rw-vehicle-details">
                    <span className="rw-vehicle-type">{vehicle.type}</span>
                    <span className="rw-vehicle-location">
                      📍 {vehicle.lat.toFixed(4)}, {vehicle.lng.toFixed(4)}
                    </span>
                  </div>
                  <div className="rw-vehicle-time">Last seen: {new Date(vehicle.lastSeen).toLocaleTimeString()}</div>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>Facilities Status</h3>
            <div className="rw-facility-list">
              {facilities.map((facility) => (
                <div key={facility.id} className="rw-facility-item">
                  <div className="rw-facility-header">
                    <span className="rw-facility-name">{facility.name}</span>
                    <span className="rw-facility-type">{facility.type}</span>
                  </div>
                  <div className="rw-facility-capacity">
                    <div className="rw-capacity-bar">
                      <div
                        className="rw-capacity-fill"
                        style={{ width: `${(facility.currentLoad / facility.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <span className="rw-capacity-text">
                      {facility.currentLoad}/{facility.capacity} tons
                    </span>
                  </div>
                </div>
              ))}
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
