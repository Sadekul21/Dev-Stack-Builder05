import React from 'react';
import { Navbar } from './components/Navbar';


export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-800">
      <Navbar />
     
    </div>
  );
};

export default App;
