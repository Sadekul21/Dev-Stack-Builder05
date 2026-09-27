import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle p-0">
              <HiMenu className="text-2xl text-gray-700" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl w-52 border border-gray-100">
              <li><a href="#home" className="text-pink-600 font-medium">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              <FaCode />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Dev<span className="bg-gradient-to-br from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] bg-clip-text text-transparent">Stack</span>
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600 font-semibold">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition">Technologies</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-lg">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white bg-gradient-to-br from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};
