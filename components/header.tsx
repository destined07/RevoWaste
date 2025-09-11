"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useAuth } from "./auth-provider"
import { Settings, User } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`rw-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="rw-header-content">
        <div className="rw-header-top">
          <div className="rw-brand">
            <img src="/logo.png" alt="RevoWaste logo" />
            <div className="rw-brand-text">
              <div className="rw-brand-name">RevoWaste</div>
              <div className="rw-brand-tagline">Clean India · Smart Waste</div>
            </div>
          </div>

          <div className="rw-header-actions">
            {/* Profile Avatar */}
            <div className="rw-profile-avatar">
              {user ? (
                <div className="rw-user-avatar">
                  <div className="rw-avatar-circle">{user.name ? user.name.charAt(0).toUpperCase() : "U"}</div>
                  <span className="rw-user-name-small">{user.name}</span>
                </div>
              ) : (
                <div className="rw-user-avatar">
                  <div className="rw-avatar-circle rw-avatar-anonymous">
                    <User size={16} />
                  </div>
                  <span className="rw-user-name-small">Guest</span>
                </div>
              )}
            </div>

            {/* Settings Icon */}
            <button className="rw-settings-btn">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <nav className="rw-nav">
          <Link href="/">Home</Link>
          <Link href="/training">Training</Link>
          <Link href="/report">Report Dump</Link>
          <Link href="/facilities">Facilities & Tracking</Link>
          <Link href="/plate-monitor">Plate Monitor</Link>
          <Link href="/attendance">Attendance</Link>
          <Link href="/incentives">Incentives & Fines</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/waste-info">Waste Info</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="rw-auth-section-mobile">
          {user ? (
            <div className="rw-user-menu">
              <div className="rw-user-info">
                <span className="rw-user-role">{user.role}</span>
                <span className="rw-user-points">{user.points} pts</span>
              </div>
              <button onClick={logout} className="rw-btn rw-btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="rw-btn rw-btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
