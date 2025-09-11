import { useEffect, useState } from 'react';

type Checkin = { id: string; name: string; role: string; when: string; lat?: number; lng?: number };

export default function Attendance() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Citizen');
  const [checkins, setCheckins] = useState<Checkin[]>([]);
  const [coords, setCoords] = useState<{lat?: number; lng?: number}>({});

  useEffect(() => {
    const saved = localStorage.getItem('rw_checkins');
    if (saved) setCheckins(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('rw_checkins', JSON.stringify(checkins));
  }, [checkins]);

  function getLocation() {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(p => {
      setCoords({ lat: p.coords.latitude, lng: p.coords.longitude });
    }, () => alert('Unable to get location'));
  }

  function submit() {
    if (!name) return alert('Enter name');
    const c: Checkin = { id: crypto.randomUUID(), name, role, when: new Date().toISOString(), lat: coords.lat, lng: coords.lng };
    setCheckins([c, ...checkins]);
    setName('');
  }

  return (
    <div className="rw-grid cols-2">
      <div className="rw-card">
        <h2>Geo Attendance</h2>
        <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} style={{width:'100%',padding:10,margin:'8px 0'}} />
        <select value={role} onChange={e=>setRole(e.target.value)} style={{padding:10}}>
          <option>Citizen</option>
          <option>Waste Worker</option>
          <option>Green Champion</option>
          <option>Bulk Waste Generator</option>
        </select>
        <div style={{display:'flex',gap:12,marginTop:8,flexWrap:'wrap'}}>
          <button className="rw-button" onClick={getLocation}>Add Location</button>
          <button className="rw-button" onClick={submit}>Check In</button>
        </div>
        {coords.lat && <small>Meetup: {coords.lat?.toFixed(4)}, {coords.lng?.toFixed(4)}</small>}
      </div>
      <div className="rw-card">
        <h3>Attendance Log</h3>
        <ul>
          {checkins.map(c => (
            <li key={c.id} style={{margin:'8px 0'}}>
              <strong>{c.name}</strong> — {c.role} — {new Date(c.when).toLocaleString()} {c.lat && <>— 📍 {c.lat.toFixed(3)}, {c.lng?.toFixed(3)}</>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
