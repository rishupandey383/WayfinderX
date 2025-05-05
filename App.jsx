import React from 'react';
import reactLogo from './assets/react.svg'; // adjust the path if needed

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src={reactLogo} alt="React Logo" className="w-24 h-24 mb-4 animate-spin-slow" />
      <h1 className="text-3xl font-bold text-blue-600">WayfinderX.</h1>
      <p className="text-sm text-gray-600">Powered by React</p>
    </div>
  );
};

export default App;
