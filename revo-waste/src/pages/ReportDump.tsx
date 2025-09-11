import { useEffect, useState } from 'react';

type Report = { id: string; photo?: string; note: string; lat?: number; lng?: number; when: string };

export default function ReportDump() {
  const [reports, setReports] = useState<Report[]>([]);
  const [note, setNote] = useState('');
  const [photo, setPhoto] = useState<string | undefined>();
  const [coords, setCoords] = useState<{lat?: number; lng?: number}>({});

  useEffect(() => {
    const saved = localStorage.getItem('rw_reports');
    if (saved) setReports(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('rw_reports', JSON.stringify(reports));
  }, [reports]);

  function getLocation() {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(p => {
      setCoords({ lat: p.coords.latitude, lng: p.coords.longitude });
    }, () => alert('Unable to get location'));
  }

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  }

  function submit() {
    if (!note && !photo) return alert('Add a note or photo');
    const r: Report = { id: crypto.randomUUID(), note, photo, lat: coords.lat, lng: coords.lng, when: new Date().toISOString() };
    setReports([r, ...reports]);
    setNote(''); setPhoto(undefined);
  }

  return (
    <div className="rw-grid">
      <div className="rw-card">
        <h2>Report Illegal Dumping</h2>
        <input placeholder="Note (what/where)" value={note} onChange={e=>setNote(e.target.value)} style={{width:'100%',padding:10,margin:'8px 0'}} />
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <input type="file" accept="image/*" onChange={onPhoto} />
          <button className="rw-button" onClick={getLocation}>Add Geotag</button>
          <button className="rw-button" onClick={submit}>Submit</button>
        </div>
        {coords.lat && <small>Location: {coords.lat?.toFixed(4)}, {coords.lng?.toFixed(4)}</small>}
      </div>
      <div className="rw-card">
        <h3>Recent Reports</h3>
        <ul>
          {reports.map(r => (
            <li key={r.id} style={{margin:'12px 0'}}>
              <div><strong>{new Date(r.when).toLocaleString()}</strong> — {r.note}</div>
              {r.lat && <div>📍 {r.lat.toFixed(4)}, {r.lng?.toFixed(4)}</div>}
              {r.photo && <img src={r.photo} alt="evidence" style={{maxWidth:240, borderRadius:8, marginTop:6}} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
