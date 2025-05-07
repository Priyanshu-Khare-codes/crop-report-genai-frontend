'use client'; // For Next.js App Router

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Fancy icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-5 bg-gradient-to-r from-green-500 via-green-600 to-green-700 shadow-lg font-work-sans sticky top-0 z-50 backdrop-blur-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="text-4xl font-josefin font-extrabold text-white tracking-wide transition-transform hover:scale-105 hover:text-green-200">
          Agro2Pro
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium text-lg font-mono">
          <Link href="/" className="hover:text-green-200 transition-colors transform hover:scale-105">Home</Link>
          <Link href="/about" className="hover:text-green-200 transition-colors transform hover:scale-105">About</Link>
          <Link href="/developers" className="hover:text-green-200 transition-colors transform hover:scale-105">Developers</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-4 bg-gradient-to-br from-green-500 via-green-600 to-green-700 p-6 rounded-lg text-white text-center gap-6 transform animate-slideUp">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-200 transition-colors transform hover:scale-105">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-200 transition-colors transform hover:scale-105">About</Link>
          <Link href="/developers" onClick={() => setIsOpen(false)} className="hover:text-green-200 transition-colors transform hover:scale-105">Developers</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
