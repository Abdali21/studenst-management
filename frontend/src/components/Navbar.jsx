import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex  items-start">
        {/* Home Link */}
        <div className="hidden md:flex">
          <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
