import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';


export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800">
      <Navbar />
     <Hero />
    </div>
  );
};

export default App;
