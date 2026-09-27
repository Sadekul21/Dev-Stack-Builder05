import React from 'react';
import { FaStar, FaCheck } from 'react-icons/fa';
import type { Technology } from '../types/tech';

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, isAdded, onAddToStack }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-gray-50 border border-gray-100">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-500 border border-blue-100">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 font-medium">
          <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-gray-800">
            <FaStar className="text-amber-400" /> {tech.rating.toFixed(1)}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-[#0f172a] text-white hover:bg-black shadow-sm'
          }`}
        >
          {isAdded ? <><FaCheck /> Added to Stack</> : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};
