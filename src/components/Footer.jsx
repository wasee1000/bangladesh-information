import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-red-500 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Explore Bangladesh</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the beauty, culture, and heritage of all 64 districts across 8 divisions of Bangladesh. 
              Your comprehensive guide to exploring our beloved motherland.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-5 bg-green-600 rounded-sm"></div>
              <div className="w-8 h-5 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Colors of Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/divisions" className="hover:text-green-400 transition-colors">All Divisions</a></li>
              <li><a href="/about" className="hover:text-green-400 transition-colors">About Bangladesh</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: 999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Fire Service: 16163</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Tourist Helpline: 16216</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Explore Bangladesh. Made with 💚 for our beautiful motherland.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;