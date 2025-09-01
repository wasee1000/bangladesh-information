import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Users, Building, Camera, ChevronRight } from 'lucide-react';
import { divisions } from '../data/bangladesh-data';
import img from '../assets/bangladesh-hero (1).jpg';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Search for division or district name
  const filteredDivisions = divisions.filter(division => {
    const divisionMatch = division.name.toLowerCase().includes(searchTerm.toLowerCase());
    const districtMatch = division.districts.some(district =>
      district.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return divisionMatch || districtMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 opacity-90 bg-black"
          style={{
            backgroundImage: `url('https://i.ibb.co/LznNdTns/bangladesh-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-10 bg-green-500 rounded-sm"></div>
            <div className="w-16 h-10 bg-red-500 rounded-full"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Every Division & District <br />
            <span className="text-green-200">of Bangladesh</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Explore the rich history, vibrant culture, and diverse landscapes of all 64 districts
            across 8 divisions of our beautiful motherland.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by Division or District..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">8</h3>
              <p className="text-gray-600">Divisions</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">64</h3>
              <p className="text-gray-600">Districts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">165M+</h3>
              <p className="text-gray-600">Population</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Attractions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore All 8 Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each division offers unique culture, history, and natural beauty.
              Click on any division to discover its districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDivisions.map((division, index) => (
              <Link
                key={division.id}
                to={`/division/${division.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      index % 4 === 0 ? 'bg-green-100' :
                      index % 4 === 1 ? 'bg-red-100' :
                      index % 4 === 2 ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}>
                      <MapPin className={`h-6 w-6 ${
                        index % 4 === 0 ? 'text-green-600' :
                        index % 4 === 1 ? 'text-red-600' :
                        index % 4 === 2 ? 'text-blue-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {division.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {division.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{division.districts.length} Districts</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {searchTerm && filteredDivisions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No divisions found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Discover some of Bangladesh's most captivating districts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dhaka */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/15032824/pexels-photo-15032824.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dhaka"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Dhaka</h3>
                  <p className="text-green-200">Capital of Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Cox's Bazar */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/18625340/pexels-photo-18625340.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Cox's Bazar"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Cox's Bazar</h3>
                  <p className="text-green-200">World's Longest Beach</p>
                </div>
              </div>
            </div>

            {/* Sylhet */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sylhet"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sylhet</h3>
                  <p className="text-green-200">Tea Gardens & Hills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
