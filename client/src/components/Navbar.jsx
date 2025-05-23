import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 text-white px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold">HandyNest</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/services" className="hover:text-gray-300 transition">Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
