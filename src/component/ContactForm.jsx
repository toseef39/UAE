import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-100 py-10 px-6">
      <h2 className="text-xl font-semibold mb-6 text-center">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 rounded border" />
        <input type="tel" placeholder="WhatsApp Number" className="w-full p-3 rounded border" />
        <select className="w-full p-3 rounded border">
          <option>Agent Type</option>
          <option>Sales</option>
          <option>Rental</option>
          <option>Off-Plan</option>
          <option>Other</option>
        </select>
        <input type="text" placeholder="Location + Budget" className="w-full p-3 rounded border" />
        <textarea placeholder="Notes" className="w-full p-3 rounded border"></textarea>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded font-semibold w-full">Submit</button>
      </form>
      <div className="text-center mt-4">
        <p>Email: info@dxbagentnetwork.com</p>
      </div>
    </section>
  );
}