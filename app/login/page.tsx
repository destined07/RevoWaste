"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../components/auth-provider"
import Header from "../../components/header"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState("")
  const [role, setRole] = useState<"admin" | "green_champion" | "worker" | "citizen">("citizen")
  const { login, signup, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const success = isSignup ? await signup(email, password, name, role) : await login(email, password)

    if (success) {
      router.push("/")
    }
  }

  return (
    <div className="rw-app">
      <div className="rw-bg-circles">
        <div className="rw-circle rw-circle-1"></div>
        <div className="rw-circle rw-circle-2"></div>
        <div className="rw-circle rw-circle-3"></div>
        <div className="rw-circle rw-circle-4"></div>
      </div>

      <Header />

      <main className="rw-main">
        <div className="rw-page-header">
          <h1 className="rw-page-title">{isSignup ? "Join RevoWaste" : "Welcome Back"}</h1>
          <p className="rw-page-subtitle">
            {isSignup ? "Create your account to start managing waste smartly" : "Sign in to your RevoWaste account"}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rw-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rw-input"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rw-input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rw-input"
                  required
                />
              </div>

              {isSignup && (
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <select value={role} onChange={(e) => setRole(e.target.value as any)} className="rw-input rw-select">
                    <option value="citizen">Citizen</option>
                    <option value="worker">Worker</option>
                    <option value="green_champion">Green Champion</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              )}

              <button type="submit" disabled={isLoading} className="rw-btn rw-btn-primary w-full">
                {isLoading ? "Processing..." : isSignup ? "Create Account" : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
              </button>
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
