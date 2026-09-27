import React from 'react';
import logoImg from '../assets/logo-text.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 md:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <a href="#" className="flex items-center">
          <img src={logoImg} alt="DevStack Logo" className="h-8 md:h-9 object-contain" />
        </a>

        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600 font-semibold">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition">Technologies</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </div>

      
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-lg">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white bg-gradient-to-r from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};
