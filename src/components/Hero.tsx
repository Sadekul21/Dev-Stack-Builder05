import React from 'react';
// Direct banner-stack.png import kora hocche
import bannerImg from '../assets/banner-stack.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="py-12 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#technologies" className="bg-gradient-to-r from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition">
              Explore Technologies
            </a>
            <button className="bg-white border border-gray-200 text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Real Neon Banner Image (banner-stack.png) */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={bannerImg} 
            alt="DevStack Banner" 
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};
