"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  role: "admin" | "green_champion" | "worker" | "citizen"
  name: string
  points: number
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string, role: User["role"]) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("rw-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    // Mock authentication - in real app, this would call an API
    const mockUser: User = {
      id: "1",
      email,
      role: email.includes("admin") ? "admin" : "citizen",
      name: email.split("@")[0],
      points: 100,
    }

    setUser(mockUser)
    localStorage.setItem("rw-user", JSON.stringify(mockUser))
    setIsLoading(false)
    return true
  }

  const signup = async (email: string, password: string, name: string, role: User["role"]): Promise<boolean> => {
    setIsLoading(true)
    // Mock signup
    const newUser: User = {
      id: Date.now().toString(),
      email,
      role,
      name,
      points: 0,
    }

    setUser(newUser)
    localStorage.setItem("rw-user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("rw-user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
