import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", link: "#" },
    { name: "Service", link: "#" },
    { name: "Album", link: "#" },
    { name: "Stories", link: "#" },
    { name: "Blog", link: "#" },
  ];

  return (
    <nav className="w-full bg-black text-white py-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <div className="flex flex-col items-center space-x-2">
          <img src="logo1.png" alt="Logo" className="w-6 h-10" />
          <span className="font-bold text-lg">Tala Prattoy</span>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-sm hover:text-red-500 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-white text-red-600 text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item, index) => (
            <a key={index} href={item.link} className="block text-sm hover:text-red-500 transition">
              {item.name}
            </a>
          ))}
          <button className="w-full bg-white text-red-600 text-sm font-semibold py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
