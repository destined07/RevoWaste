"use client"

import Header from "../../components/header"
import { useState } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function Shop() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    { id: 1, name: "Recycled Notebooks", price: 45, icon: "📄", description: "Made from 100% recycled paper" },
    { id: 2, name: "Organic Compost", price: 120, icon: "🪴", description: "Premium quality compost from food waste" },
    {
      id: 3,
      name: "Recycled Plastic Bags",
      price: 25,
      icon: "♻️",
      description: "Durable bags made from recycled plastic",
    },
    {
      id: 4,
      name: "Eco-friendly Pens",
      price: 35,
      icon: "✏️",
      description: "Biodegradable pens from recycled materials",
    },
    { id: 5, name: "Bamboo Toothbrush", price: 60, icon: "🪥", description: "Sustainable bamboo toothbrush set" },
    { id: 6, name: "Recycled Paper Cups", price: 15, icon: "🥤", description: "Disposable cups from recycled paper" },
  ]

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { id: product.id, name: product.name, price: product.price, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
          }
          return item
        })
        .filter((item) => item.quantity > 0)
    })
  }

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0)
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="rw-app">
      {/* Background circles */}
      <div className="rw-bg-circles">
        <div className="rw-circle rw-circle-1"></div>
        <div className="rw-circle rw-circle-2"></div>
        <div className="rw-circle rw-circle-3"></div>
        <div className="rw-circle rw-circle-4"></div>
      </div>

      <Header />

      <main className="rw-main">
        <div className="rw-page-header">
          <h1 className="rw-page-title">Eco Shop</h1>
          <p className="rw-page-subtitle">Marketplace for recycled products and sustainable goods</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button className="rw-btn rw-btn-primary">All Products</button>
            <button className="rw-btn rw-btn-secondary">Recycled Paper</button>
            <button className="rw-btn rw-btn-secondary">Plastic Items</button>
            <button className="rw-btn rw-btn-secondary">Metal Scrap</button>
            <button className="rw-btn rw-btn-secondary">Organic Compost</button>
          </div>

          <button
            className="rw-btn rw-btn-primary"
            onClick={() => setShowCart(!showCart)}
            style={{ position: "relative" }}
          >
            🛒 Cart
            {getTotalItems() > 0 && <span className="rw-cart-badge">{getTotalItems()}</span>}
          </button>
        </div>

        {showCart && (
          <div className="rw-card" style={{ marginBottom: "32px" }}>
            <h3>Shopping Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="rw-cart-item">
                    <div>
                      <div style={{ fontWeight: "600" }}>{item.name}</div>
                      <div style={{ color: "var(--gray-600)", fontSize: "0.875rem" }}>₹{item.price} each</div>
                    </div>
                    <div className="rw-cart-controls">
                      <button className="rw-quantity-btn" onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span style={{ minWidth: "30px", textAlign: "center" }}>{item.quantity}</span>
                      <button className="rw-quantity-btn" onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                      <div style={{ fontWeight: "600", color: "var(--green-600)" }}>₹{item.price * item.quantity}</div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <span style={{ fontSize: "1.125rem", fontWeight: "700" }}>Total: ₹{getTotalPrice()}</span>
                  <button className="rw-btn rw-btn-primary">Checkout</button>
                </div>
              </>
            )}
          </div>
        )}

        <div className="rw-product-grid">
          {products.map((product) => (
            <div key={product.id} className="rw-product-card">
              <div className="rw-product-image">{product.icon}</div>
              <h3 className="rw-product-title">{product.name}</h3>
              <p style={{ color: "var(--gray-600)", fontSize: "0.875rem", marginBottom: "16px" }}>
                {product.description}
              </p>
              <div className="rw-product-price">₹{product.price}</div>
              <button className="rw-btn rw-btn-primary" style={{ width: "100%" }} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
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
