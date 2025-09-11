import { useState } from 'react';

type Entry = { id: string; plate: string; photo?: string; at: string; status: 'AT_FACILITY'|'OFF_ROUTE' };

export default function PlateMonitor() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [plate, setPlate] = useState('');
  const [photo, setPhoto] = useState<string | undefined>();

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  }

  function mockRecognize(input: string) {
    const cleaned = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
    // Simple heuristic to simulate AI validation
    const good = /[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}/.test(cleaned);
    return {normalized: cleaned, valid: good};
  }

  function submit() {
    const { normalized, valid } = mockRecognize(plate);
    if (!normalized) return alert('Enter a plate number');
    const status = valid ? 'AT_FACILITY' : 'OFF_ROUTE';
    setEntries([{ id: crypto.randomUUID(), plate: normalized, photo, at: new Date().toISOString(), status }, ...entries]);
    setPlate(''); setPhoto(undefined);
  }

  return (
    <div className="rw-grid">
      <div className="rw-card">
        <h2>AI Plate Monitoring (Prototype)</h2>
        <p>Upload a vehicle photo and enter plate number to validate disposal events at facilities.</p>
        <input placeholder="e.g., KA01 AB 1234" value={plate} onChange={e=>setPlate(e.target.value)} style={{width:'100%',padding:10,margin:'8px 0'}} />
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <input type="file" accept="image/*" onChange={onPhoto} />
          <button className="rw-button" onClick={submit}>Record Event</button>
        </div>
      </div>
      <div className="rw-card">
        <h3>Recent Events</h3>
        <ul>
          {entries.map(e => (
            <li key={e.id} style={{margin:'12px 0'}}>
              <strong>{e.plate}</strong> — {new Date(e.at).toLocaleString()} — {e.status === 'AT_FACILITY' ? '✅ At facility' : '⚠️ Off-route'}
              {e.photo && <div><img src={e.photo} alt="vehicle" style={{maxWidth:240,borderRadius:8,marginTop:6}} /></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
