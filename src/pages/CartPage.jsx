import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function CartPage() {
  // Example cart items, replace with actual state/props as needed
  const cartItems = [
    {
      name: "Cinnamon Roll",
      variant: "Regular",
      quantity: 2,
      price: 3.5,
      image: "/images/pastries/cinnamon-roll.jpg",
    },
    {
      name: "Croissant",
      variant: "Large",
      quantity: 1,
      price: 4.0,
      image: "/images/pastries/croissant.jpg",
    },
  ];
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <HeaderComponent />
      <section className="w-full py-12 px-2 bg-gradient-to-br from-orange-50 to-white flex items-center justify-center min-h-[60vh]">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
          <h1 className="text-3xl font-bold text-orange-400 mb-6 text-center tracking-normal">
            Your Cart
          </h1>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <svg
                className="w-12 h-12 text-orange-200 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>
              <p className="text-base text-gray-400 text-center font-medium">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <div className="space-y-4 mb-6">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-orange-50 rounded-xl shadow p-3 border border-orange-100 hover:scale-[1.01] transition-transform duration-150"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow mr-3 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-orange-500 mb-1">
                      {item.name}
                    </h2>
                    <div className="flex gap-2 text-xs text-gray-500 mb-1">
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded font-medium">
                        {item.variant}
                      </span>
                      <span className="bg-orange-50 text-orange-500 px-2 py-1 rounded font-medium">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="text-base font-bold text-gray-600 ml-3">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between mt-6 border-t border-orange-100 pt-4">
            <span className="text-lg font-semibold text-orange-400">Total:</span>
            <span className="text-xl font-bold text-orange-500 tracking-normal">
              ${total.toFixed(2)}
            </span>
          </div>
          <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-orange-300 to-orange-400 text-white font-semibold shadow hover:from-orange-400 hover:to-orange-500 transition text-base tracking-wide flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z"
              />
            </svg>
            Checkout
          </button>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default CartPage;
