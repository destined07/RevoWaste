import Header from "../../components/header"

export default function WasteInfoPage() {
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
          <h1 className="rw-page-title">Waste Management Information</h1>
          <p className="rw-page-subtitle">
            Learn about proper waste management practices and their environmental impact
          </p>
        </div>

        {/* Educational Video Section */}
        <div className="rw-card" style={{ marginBottom: "48px" }}>
          <h2 style={{ marginBottom: "24px", textAlign: "center" }}>Educational Video: Waste Management Practices</h2>
          <div className="rw-video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/lFTf4wh93Gc"
              title="Waste Management Educational Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px" }}
            ></iframe>
          </div>
        </div>

        <div className="rw-grid rw-grid-2">
          <div className="rw-card">
            <h2>Types of Waste</h2>
            <div className="rw-waste-types">
              <div className="rw-waste-type">
                <h3>Organic Waste</h3>
                <p>Food scraps, garden waste, and biodegradable materials that can be composted.</p>
              </div>
              <div className="rw-waste-type">
                <h3>Recyclable Waste</h3>
                <p>Paper, plastic, glass, and metal items that can be processed and reused.</p>
              </div>
              <div className="rw-waste-type">
                <h3>Hazardous Waste</h3>
                <p>Batteries, electronics, chemicals, and medical waste requiring special handling.</p>
              </div>
              <div className="rw-waste-type">
                <h3>Non-Recyclable Waste</h3>
                <p>Items that cannot be recycled and must be disposed of properly in landfills.</p>
              </div>
            </div>
          </div>

          <div className="rw-card">
            <h2>Best Practices</h2>
            <ul className="rw-practices-list">
              <li>
                <strong>Reduce:</strong> Minimize waste generation by buying only what you need
              </li>
              <li>
                <strong>Reuse:</strong> Find new purposes for items before discarding them
              </li>
              <li>
                <strong>Recycle:</strong> Sort materials properly for recycling programs
              </li>
              <li>
                <strong>Compost:</strong> Turn organic waste into nutrient-rich soil
              </li>
              <li>
                <strong>Proper Disposal:</strong> Use designated facilities for hazardous materials
              </li>
              <li>
                <strong>Education:</strong> Stay informed about local waste management guidelines
              </li>
            </ul>
          </div>
        </div>

        <div className="rw-grid rw-grid-3" style={{ marginTop: "48px" }}>
          <div className="rw-stat-card">
            <div className="rw-stat-number">3Rs</div>
            <div className="rw-stat-label">Reduce, Reuse, Recycle</div>
          </div>
          <div className="rw-stat-card">
            <div className="rw-stat-number">30%</div>
            <div className="rw-stat-label">Waste Reduction Possible</div>
          </div>
          <div className="rw-stat-card">
            <div className="rw-stat-number">365</div>
            <div className="rw-stat-label">Days to Make Impact</div>
          </div>
        </div>

        <div className="rw-card" style={{ marginTop: "48px" }}>
          <h2>Environmental Impact</h2>
          <div className="rw-grid rw-grid-2">
            <div>
              <h3>Negative Effects of Poor Waste Management</h3>
              <ul>
                <li>Soil and water contamination</li>
                <li>Air pollution from burning waste</li>
                <li>Greenhouse gas emissions</li>
                <li>Health risks to communities</li>
                <li>Loss of biodiversity</li>
              </ul>
            </div>
            <div>
              <h3>Benefits of Proper Waste Management</h3>
              <ul>
                <li>Cleaner environment and communities</li>
                <li>Resource conservation</li>
                <li>Economic opportunities through recycling</li>
                <li>Reduced carbon footprint</li>
                <li>Improved public health</li>
              </ul>
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
