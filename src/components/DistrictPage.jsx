import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Users, DollarSign, GraduationCap, 
  Camera, Phone, Building, TrendingUp, Calendar,
  Mountain, Waves, TreePine, Thermometer
} from 'lucide-react';
import { districts, sampleDistricts, divisions } from '../data/bangladesh-data';

const DistrictPage = () => {
  const { districtId } = useParams();
  const district = [...districts, ...sampleDistricts].find(d => d.id === districtId);

  if (!district) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">District Not Found</h1>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const division = divisions.find(d => d.id === district.division);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to={`/division/${district.division}`} 
            className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {division?.name}
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{district.name}</h1>
              <p className="text-xl text-green-100 mt-2">{division?.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* History Section */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">History</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{district.history}</p>
            </section>

            {/* Population Section */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Population</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {(district.population.current / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-gray-600">Total Population</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {district.population.growth}
                  </div>
                  <div className="text-gray-600">Growth Rate</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {Math.round((district.population.urban / district.population.current) * 100)}%
                  </div>
                  <div className="text-gray-600">Urban Population</div>
                </div>
              </div>
            </section>

            {/* Geography & Climate */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mountain className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Geography & Climate</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Building className="h-5 w-5 text-gray-600 mr-2" />
                    Area & Location
                  </h3>
                  <p className="text-gray-700 mb-4">Total Area: {district.geography.area} km²</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Waves className="h-4 w-4 text-blue-500 mr-2" />
                    Major Rivers
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {district.geography.rivers.map((river, index) => (
                      <li key={index}>{river}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Thermometer className="h-5 w-5 text-orange-500 mr-2" />
                    Climate
                  </h3>
                  <p className="text-gray-700">{district.geography.climate}</p>
                </div>
              </div>
            </section>

            {/* Economy & Education */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Economy & Education</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Major Industries</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {district.economy.industries.map((industry, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Agriculture</h3>
                  <div className="flex flex-wrap gap-2">
                    {district.economy.agriculture.map((crop, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
                    Education
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {district.economy.literacyRate}%
                    </div>
                    <div className="text-gray-600">Literacy Rate</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tourism & Culture */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tourism & Culture</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tourist Attractions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.tourism.attractions.map((attraction, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <Camera className="h-4 w-4 text-purple-500" />
                        <span>{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Cuisine</h3>
                  <div className="flex flex-wrap gap-2">
                    {district.tourism.localFood.map((food, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                      >
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Festivals</h3>
                  <div className="flex flex-wrap gap-2">
                    {district.tourism.festivals.map((festival, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                      >
                        {festival}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-semibold text-gray-900">Deputy Commissioner (DC)</div>
                  <div className="text-green-600">{district.contacts.dc}</div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold text-gray-900">Superintendent of Police (SP)</div>
                  <div className="text-blue-600">{district.contacts.sp}</div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-semibold text-gray-900">District Hospital</div>
                  <div className="text-red-600">{district.contacts.hospital}</div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-semibold text-gray-900">Tourist Information</div>
                  <div className="text-purple-600">{district.contacts.tourist}</div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-red-800 mb-2">Emergency Numbers</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">National Emergency:</span>
                      <span className="font-semibold text-red-600">999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Fire Service:</span>
                      <span className="font-semibold text-red-600">16163</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Area</span>
                  <span className="font-semibold">{district.geography.area} km²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Population</span>
                  <span className="font-semibold">{(district.population.current / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Literacy Rate</span>
                  <span className="font-semibold">{district.economy.literacyRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Growth Rate</span>
                  <span className="font-semibold text-green-600">{district.population.growth}</span>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Famous Landmarks</h3>
              </div>
              
              <div className="space-y-3">
                {district.landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    <span className="text-gray-700">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictPage;