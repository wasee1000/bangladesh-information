import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Building, ArrowLeft, ChevronRight } from 'lucide-react';
import { divisions, districts, sampleDistricts } from '../data/bangladesh-data';

const DivisionPage = () => {
  const { divisionId } = useParams();
  const division = divisions.find(d => d.id === divisionId);

  if (!division) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Division Not Found</h1>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Get districts for this division (combining actual data with samples)
  const divisionDistricts = [...districts, ...sampleDistricts].filter(d => d.division === division.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Homepage
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{division.name}</h1>
              <p className="text-xl text-green-100 mt-2">{division.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-8 text-green-100">
            <div className="flex items-center space-x-2">
              <Building className="h-5 w-5" />
              <span>{division.districts.length} Districts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Population varies by district</span>
            </div>
          </div>
        </div>
      </div>

      {/* Districts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Districts in {division.name}
          </h2>
          <p className="text-lg text-gray-600">
            Explore detailed information about each district including history, culture, economy, and tourism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {division.districts.map((districtId, index) => {
            const districtData = divisionDistricts.find(d => d.id === districtId);
            
            return (
              <div
                key={districtId}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {districtData ? (
                  <Link to={`/district/${districtId}`} className="block">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          index % 3 === 0 ? 'bg-green-100' :
                          index % 3 === 1 ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          <MapPin className={`h-5 w-5 ${
                            index % 3 === 0 ? 'text-green-600' :
                            index % 3 === 1 ? 'text-red-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {districtData.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {districtData.history.substring(0, 120)}...
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{(districtData.population.current / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{districtData.geography.area} km²</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                      {districtId.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    
                    <p className="text-gray-500 text-sm">
                      Detailed information coming soon...
                    </p>
                    
                    <div className="mt-4 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full inline-block">
                      Information pending
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DivisionPage;