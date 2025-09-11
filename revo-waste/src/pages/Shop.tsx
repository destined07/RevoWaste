type Item = { id: string; name: string; price: number };

const items: Item[] = [
  { id: 'i1', name: '3-bin Dustbin Set (Dry/Wet/Hazardous)', price: 1499 },
  { id: 'i2', name: 'Home Composting Kit', price: 999 },
  { id: 'i3', name: 'Protective Gloves & Mask Set', price: 299 },
];

export default function Shop() {
  return (
    <div className="rw-grid cols-3">
      {items.map(i => (
        <div key={i.id} className="rw-card">
          <h3>{i.name}</h3>
          <div>₹ {i.price}</div>
          <button className="rw-button" onClick={() => alert('Added to cart (demo)')}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
