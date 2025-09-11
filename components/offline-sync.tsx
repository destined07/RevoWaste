"use client"

import { useState, useEffect } from "react"

interface QueuedItem {
  id: string
  type: "attendance" | "report" | "plate_detection"
  data: any
  timestamp: string
  retryCount: number
}

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(true)
  const [queuedItems, setQueuedItems] = useState<QueuedItem[]>([])
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    // Load queued items from localStorage
    const stored = localStorage.getItem("rw-offline-queue")
    if (stored) {
      setQueuedItems(JSON.parse(stored))
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  useEffect(() => {
    // Auto-sync when coming back online
    if (isOnline && queuedItems.length > 0 && !isSyncing) {
      syncQueuedItems()
    }
  }, [isOnline, queuedItems.length])

  const addToQueue = (type: QueuedItem["type"], data: any) => {
    const item: QueuedItem = {
      id: Date.now().toString(),
      type,
      data,
      timestamp: new Date().toISOString(),
      retryCount: 0,
    }

    const newQueue = [...queuedItems, item]
    setQueuedItems(newQueue)
    localStorage.setItem("rw-offline-queue", JSON.stringify(newQueue))

    // Try to sync immediately if online
    if (isOnline) {
      syncQueuedItems()
    }
  }

  const syncQueuedItems = async () => {
    if (isSyncing || queuedItems.length === 0) return

    setIsSyncing(true)
    const itemsToSync = [...queuedItems]
    const successfulItems: string[] = []

    for (const item of itemsToSync) {
      try {
        // Mock API call - in real app, this would sync to server
        await new Promise((resolve) => setTimeout(resolve, 500))

        console.log(`[v0] Synced ${item.type}:`, item.data)
        successfulItems.push(item.id)
      } catch (error) {
        console.error(`[v0] Failed to sync item ${item.id}:`, error)
        // Increment retry count
        item.retryCount++
      }
    }

    // Remove successfully synced items
    const remainingItems = queuedItems.filter((item) => !successfulItems.includes(item.id))
    setQueuedItems(remainingItems)
    localStorage.setItem("rw-offline-queue", JSON.stringify(remainingItems))

    setIsSyncing(false)
  }

  return {
    isOnline,
    queuedItems,
    isSyncing,
    addToQueue,
    syncQueuedItems,
  }
}

export function OfflineIndicator() {
  const { isOnline, queuedItems, isSyncing } = useOfflineSync()

  if (isOnline && queuedItems.length === 0) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: isOnline ? "var(--green-600)" : "var(--gray-600)",
        color: "white",
        padding: "12px 16px",
        borderRadius: "12px",
        fontSize: "0.875rem",
        fontWeight: "500",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {isSyncing ? (
        <>
          <div className="rw-spinner" style={{ width: "16px", height: "16px", borderWidth: "2px" }}></div>
          Syncing...
        </>
      ) : isOnline ? (
        <>
          ✓ Online
          {queuedItems.length > 0 && ` • ${queuedItems.length} queued`}
        </>
      ) : (
        <>
          ⚠ Offline
          {queuedItems.length > 0 && ` • ${queuedItems.length} queued`}
        </>
      )}
    </div>
  )
}
