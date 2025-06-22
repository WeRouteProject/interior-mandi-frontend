import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../pages/Login'; // Assuming you have some styles for the header

const Header: React.FC = () => {
  const location = useLocation();
  useAuth();

  return (
    <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                IM
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-purple-600 font-medium transition-colors">
                Discover
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 font-medium transition-colors">
                How to use
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 font-medium transition-colors">
                About Us
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <button onClick={() => window.location.href='/login'} className="text-gray-600 hover:text-purple-600 font-medium transition-colors border border-gray-300 px-4 py-2 rounded-lg text-sm">
                Sign in
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all text-sm">
                Get free Quote
              </button>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;