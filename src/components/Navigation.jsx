import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-green-700" />
            <span className="text-xl font-bold text-gray-900">Explore Bangladesh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/divisions"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/divisions') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Divisions
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-green-700 bg-green-50' 
                  : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-green-700 bg-green-50' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/divisions"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/divisions') 
                    ? 'text-green-700 bg-green-50' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Divisions
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-green-700 bg-green-50' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-green-700 bg-green-50' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;