import React from "react";

export default function PricingCard({ title, price }) {
  return (
    <div className="border rounded p-6 text-center shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xl font-bold text-[#D4AF37]">{price}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded">Buy Now</button>
    </div>
  );
}