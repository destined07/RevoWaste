import { useEffect, useState } from 'react';

type Lesson = { id: string; title: string; points: string[] };

const lessons: Lesson[] = [
  { id: 'l1', title: 'Types of Waste', points: ['Dry, Wet, Domestic Hazardous', 'E-waste, sanitary waste tagging'] },
  { id: 'l2', title: 'Source Segregation', points: ['3-bin system distribution', 'No wet waste to collection vehicles'] },
  { id: 'l3', title: 'Home Composting', points: ['Starter kit usage', 'Curing & harvesting compost'] },
  { id: 'l4', title: 'Plastic Reuse', points: ['Refill, recycle drop-off', 'Avoid single-use'] },
];

export default function Training() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('rw_training');
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('rw_training', JSON.stringify(completed));
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / lessons.length) * 100);

  return (
    <div className="rw-grid">
      <div className="rw-card">
        <h2>Mandatory Training</h2>
        <p>Complete all modules to unlock incentives and compliance certificate.</p>
        <div style={{background:'#e6f5ee',borderRadius:8,padding:8,margin:'12px 0'}}>
          <div style={{width: '100%', background:'#d1e8de', height:10, borderRadius:8}}>
            <div style={{width:`${progress}%`, background:'var(--accent)', height:10, borderRadius:8}} />
          </div>
          <small>{progress}% completed</small>
        </div>
        <ul>
          {lessons.map(l => (
            <li key={l.id} style={{marginBottom:10}}>
              <label style={{display:'flex',gap:8,alignItems:'flex-start'}}>
                <input type="checkbox" checked={!!completed[l.id]} onChange={(e) => setCompleted({ ...completed, [l.id]: e.target.checked })} />
                <div>
                  <strong>{l.title}</strong>
                  <ul>
                    {l.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </label>
            </li>
          ))}
        </ul>
        {progress === 100 && (
          <button className="rw-button" onClick={() => window.print()}>Download Certificate (Print)</button>
        )}
      </div>
    </div>
  );
}
