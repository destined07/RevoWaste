import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="rw-header">
      <div className="rw-container">
        <div className="rw-brand">
          <img src="/logo.png" alt="RevoWaste logo" style={{width:56,height:56,borderRadius:8,objectFit:'cover'}} />
          <span>RevoWaste</span>
          <span className="rw-brand-badge">Clean India · Smart Waste</span>
        </div>
        <nav className="rw-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/report">Report Dump</NavLink>
          <NavLink to="/facilities">Facilities & Tracking</NavLink>
          <NavLink to="/plate-monitor">Plate Monitor</NavLink>
          <NavLink to="/attendance">Attendance</NavLink>
          <NavLink to="/incentives">Incentives & Fines</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
