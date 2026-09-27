import React from 'react';
import { FaCode } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] flex items-center justify-center text-white font-bold text-sm">
                <FaCode />
              </div>
              <span className="text-xl font-extrabold text-gray-900">
                Dev<span className="bg-gradient-to-br from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] bg-clip-text text-transparent">Stack</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
