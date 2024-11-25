import React from 'react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">U2</span>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-black">Home</a>
        <a href="#" className="text-gray-700 hover:text-black">Find Work</a>
        <a href="#" className="text-gray-700 hover:text-black">Category</a>
      </div>
      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
        Get Started
      </button>
    </nav>
  );
}