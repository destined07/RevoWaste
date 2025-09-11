import { useEffect, useState } from 'react';

type Facility = { id: string; name: string; type: string; lat: number; lng: number };
type Vehicle = { id: string; plate: string; lat: number; lng: number, lastPing: string };

const demoFacilities: Facility[] = [
  { id: 'f1', name: 'Biomethanization Plant', type: 'Biogas', lat: 12.9716, lng: 77.5946 },
  { id: 'f2', name: 'W-to-E Plant', type: 'WtE', lat: 28.6139, lng: 77.2090 },
  { id: 'f3', name: 'Plastic Recycling Centre', type: 'Recycling', lat: 19.0760, lng: 72.8777 },
];

export default function Facilities() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const base: Vehicle[] = [
      { id: 'v1', plate: 'KA01 AB 1234', lat: 12.974, lng: 77.6, lastPing: new Date().toISOString() },
      { id: 'v2', plate: 'DL03 CD 5678', lat: 28.61, lng: 77.21, lastPing: new Date().toISOString() },
    ];
    setVehicles(base);
    const t = setInterval(() => {
      setVehicles(vs => vs.map(v => ({...v, lat: v.lat + (Math.random()-0.5)*0.01, lng: v.lng + (Math.random()-0.5)*0.01, lastPing: new Date().toISOString()})));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rw-grid cols-2">
      <div className="rw-card">
        <h2>Facilities</h2>
        <ul>
          {demoFacilities.map(f => (
            <li key={f.id} style={{margin:'8px 0'}}>
              <strong>{f.name}</strong> — {f.type} — 📍 {f.lat.toFixed(3)}, {f.lng.toFixed(3)}
            </li>
          ))}
        </ul>
      </div>
      <div className="rw-card">
        <h2>Vehicle Tracking</h2>
        <ul>
          {vehicles.map(v => (
            <li key={v.id} style={{margin:'8px 0'}}>
              <strong>{v.plate}</strong> — 📡 {new Date(v.lastPing).toLocaleTimeString()} — 📍 {v.lat.toFixed(3)}, {v.lng.toFixed(3)}
            </li>
          ))}
        </ul>
        <small>Map placeholder — integrate MapLibre/Leaflet later.</small>
      </div>
    </div>
  );
}
