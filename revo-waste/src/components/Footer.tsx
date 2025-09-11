export default function Footer() {
  return (
    <footer className="rw-footer">
      <div className="rw-container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
        <div>
          © {new Date().getFullYear()} RevoWaste • Built for decentralised waste management
        </div>
        <div>
          <a href="mailto:support@revowaste.in" style={{color:'white'}}>support@revowaste.in</a>
        </div>
      </div>
    </footer>
  );
}
