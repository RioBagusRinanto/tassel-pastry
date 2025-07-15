import React from 'react'
import { useNavigate } from 'react-router-dom'

function CheckoutPage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/') // Redirect to pastries list (home)
  }

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-orange-50 to-white flex items-center justify-center min-h-[60vh]">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
        <h1 className="text-3xl font-bold text-orange-500 mb-8 text-center">Checkout</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-orange-500 mb-2">Full Name</label>
            <input type="text" className="w-full border-2 border-orange-100 rounded-xl px-4 py-2" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-orange-500 mb-2">Email</label>
            <input type="email" className="w-full border-2 border-orange-100 rounded-xl px-4 py-2" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-orange-500 mb-2">Phone Number</label>
            <input type="tel" className="w-full border-2 border-orange-100 rounded-xl px-4 py-2" placeholder="+1 234 567 890" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-orange-500 mb-2">Delivery Address</label>
            <textarea className="w-full border-2 border-orange-100 rounded-xl px-4 py-2" rows={3} placeholder="Street, City, ZIP" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-orange-500 mb-2">Payment Method</label>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer bg-orange-50 px-4 py-2 rounded-xl shadow hover:bg-orange-100 transition">
                <input type="radio" name="payment" value="bank" className="accent-orange-500" defaultChecked />
                <span className="text-orange-500 font-semibold">Bank Transfer</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer bg-orange-50 px-4 py-2 rounded-xl shadow hover:bg-orange-100 transition">
                <input type="radio" name="payment" value="cod" className="accent-orange-500" />
                <span className="text-orange-500 font-semibold">Cash on Delivery</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer bg-orange-50 px-4 py-2 rounded-xl shadow hover:bg-orange-100 transition">
                <input type="radio" name="payment" value="qris" className="accent-orange-500" />
                <span className="text-orange-500 font-semibold">QRIS</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer bg-orange-50 px-4 py-2 rounded-xl shadow hover:bg-orange-100 transition">
                <input type="radio" name="payment" value="ewallet" className="accent-orange-500" />
                <span className="text-orange-500 font-semibold">E-Wallet</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold shadow-lg hover:from-orange-500 hover:to-orange-600 transition text-lg tracking-wide">Place Order</button>
        </form>
      </div>
    </section>
  )
}

export default CheckoutPage