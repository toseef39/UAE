import React from "react";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="join" className="px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Join Dubai’s Most Exclusive Agent Group</h2>
      <div className="grid gap-6">
        <PricingCard title="VIP Access" price="AED 199/month" />
        <PricingCard title="Featured Listing" price="AED 75/post" />
        <PricingCard title="Lead Pack (10 leads)" price="AED 499" />
        <PricingCard title="WhatsApp Masterclass" price="AED 1,500" />
      </div>
      <div className="text-center mt-8">
        <a href="https://wa.me/923163180244" className="bg-green-500 text-white px-6 py-3 rounded font-semibold">Join on WhatsApp</a>
      </div>
    </section>
  );
}