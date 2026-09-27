import React from 'react';
import { IoClose } from 'react-icons/io5';
import type { Technology } from '../types/tech';

interface YourStackProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

export const YourStack: React.FC<YourStackProps> = ({ stack, onRemoveFromStack, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-gray-900">Your Stack</h2>
        <p className="text-sm font-medium text-gray-400 mt-1">
          {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-100 rounded-2xl py-12 px-4 text-center">
          <p className="text-gray-400 font-medium text-sm">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 p-1.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <span className="text-[11px] text-gray-400 font-medium">{item.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-gray-400 hover:text-red-500 p-1.5 transition text-lg"
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-3 rounded-xl border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};
