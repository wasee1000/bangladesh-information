import React from 'react';
import { MapPin, Users, Globe, Heart, Building } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bangladesh</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Learn about our beautiful country, its rich heritage, and the purpose behind this exploration platform.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Bangladesh */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Bangladesh</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bangladesh, officially the People's Republic of Bangladesh, is a country in South Asia. 
                It is the eighth-most populous country in the world, with a population exceeding 165 million people. 
                Bangladesh shares land borders with India and Myanmar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The country is known for its rich cultural heritage, vibrant traditions, and natural beauty. 
                From the bustling capital city of Dhaka to the serene tea gardens of Sylhet, 
                Bangladesh offers a diverse range of experiences and landscapes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our nation is organized into 8 administrative divisions, each containing multiple districts 
                that showcase unique characteristics, from the mangrove forests of the Sundarbans 
                to the archaeological wonders of ancient Bengal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-gray-600">Divisions</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-red-600">64</div>
                <div className="text-gray-600">Districts</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">165M+</div>
                <div className="text-gray-600">Population</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600">147,570</div>
                <div className="text-gray-600">km² Area</div>
              </div>
            </div>
          </div>
        </section>

        {/* About This Platform */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About This Platform</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            This platform was created with love and dedication to showcase the incredible diversity 
            and beauty of Bangladesh. Our goal is to provide comprehensive information about every 
            district and division, making it easier for both locals and visitors to discover and 
            appreciate our rich heritage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To create a comprehensive digital guide that celebrates Bangladesh's cultural richness, 
                historical significance, and natural beauty while providing practical information 
                for travelers and researchers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Find</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Detailed district profiles with history and culture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tourism information and attractions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Economic and demographic data</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Essential contact information</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;