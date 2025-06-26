import React from 'react';
import { Search, Bookmark, MapPin, Star, Clock, DollarSign } from 'lucide-react';

interface VendorComparisonReportProps {
  onClose: () => void;
}

export const VendorComparisonReport: React.FC<VendorComparisonReportProps> = ({ onClose }) => {
  const mockVendors = [
    {
      id: '1',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      estimatedCost: '₹4,00,000',
      price: 'Mid level',
      timeline: '45 Days',
      experience: '8 years',
      verified: true,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: '2',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      estimatedCost: '₹4,00,000',
      price: 'Mid level',
      timeline: '45 Days',
      experience: '8 years',
      verified: true,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: '3',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      estimatedCost: '₹4,00,000',
      price: 'Mid level',
      timeline: '45 Days',
      experience: '8 years',
      verified: true,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IM</span>
            </div>
            <span className="text-gray-600">Explore</span>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search Mandi..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Vendor Comparison Report</h1>

        {/* Request Summary */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="text-sm text-gray-500 w-24">Your Request</div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">What is the purpose of this project?</h3>
                  <p className="text-gray-600">Home Remodelling, Remodelling a few room, Remodel a room</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">What is your property layout ?</h3>
                  <p className="text-gray-600">House</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={vendor.image} 
                  alt="Interior design"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <Bookmark className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  Vendor
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
                  {vendor.verified && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-600">{vendor.location}</span>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{vendor.rating} Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-bold">{vendor.projects}</span>
                    </div>
                    <span>{vendor.projects} Projects</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Estimated Cost</span>
                    <span className="font-semibold text-gray-900">{vendor.estimatedCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">{vendor.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timeline</span>
                    <span>{vendor.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span>{vendor.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects</span>
                    <span>{vendor.projects}+</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all">
                    Get Quote
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};