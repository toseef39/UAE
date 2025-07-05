import React from "react";
import Feature from "./Feature";
import { FaKey, FaRegEnvelope, FaBullhorn, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-6 max-w-4xl mx-auto py-12" id="about">
      <h2 className="text-2xl font-bold mb-4 text-center">What is DXB Agent Network?</h2>
      <p className="text-center mb-8 text-gray-700">
        We’re a WhatsApp-based real estate network for Dubai agents focused on verified leads,
        daily listings, training, and visibility.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Feature icon={FaKey} color="yellow-500" text="VIP WhatsApp Access" />
        <Feature icon={FaRegEnvelope} color="blue-500" text="Verified Buyer & Seller Leads" />
        <Feature icon={FaBullhorn} color="red-500" text="Featured Listing Posts" />
        <Feature icon={FaGraduationCap} color="green-600" text="Agent Education & Masterclass" />
      </div>
    </section>
  );
}
