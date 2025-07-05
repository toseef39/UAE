import React, { useState } from "react";
import { Menu, X } from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-[#D4AF37] tracking-wide">
          DXB Agent <span className="text-black">Network</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-800 font-medium hover:text-[#D4AF37] transition">Home</a>
          <a href="#join" className="text-gray-800 font-medium hover:text-[#D4AF37] transition">Join VIP</a>
          <a href="#contact" className="text-gray-800 font-medium hover:text-[#D4AF37] transition">Contact</a>
        </nav>

        <button
          className="md:hidden text-[#D4AF37]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white border-t pt-4">
          <a href="#home" className="block text-gray-800 font-medium px-4" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#join" className="block text-gray-800 font-medium px-4" onClick={() => setIsOpen(false)}>Join VIP</a>
          <a href="#contact" className="block text-gray-800 font-medium px-4" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
