import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechCard } from './components/TechCard';
import { YourStack } from './components/YourStack';
import type { Technology } from './types/tech';

export const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack((prev) => [...prev, tech]);
    }
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800">
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Explore the <span className="bg-gradient-to-br from-[#FF6B4A] via-[#E83E8C] to-[#8A2BE2] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-pink-500"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAddToStack={handleAddToStack}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
