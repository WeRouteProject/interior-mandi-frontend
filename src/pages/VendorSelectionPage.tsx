import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { PaymentModal } from '../components/PaymentModal';

interface VendorSelectionPageProps {
  onClose: () => void;
}

export const VendorSelectionPage: React.FC<VendorSelectionPageProps> = ({ onClose }) => {
  const [selectedVendors, setSelectedVendors] = useState<string[]>(['1', '3']);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const mockVendors = [
    {
      id: '1',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      timeline: '45 Days',
      price: 'Mid level',
      experience: '8 years',
      verified: true,
      description: 'At Homerd Interiors, we\'re a family-run team with nearly two decades of hands-on experience, working seamlessly together to turn houses into beautiful, functional homes...',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1'
      ]
    },
    {
      id: '2',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      timeline: '45 Days',
      price: 'Mid level',
      experience: '8 years',
      verified: true,
      description: 'At Homerd Interiors, we\'re a family-run team with nearly two decades of hands-on experience, working seamlessly together to turn houses into beautiful, functional homes...',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1'
      ]
    },
    {
      id: '3',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      timeline: '45 Days',
      price: 'Mid level',
      experience: '8 years',
      verified: true,
      description: 'At Homerd Interiors, we\'re a family-run team with nearly two decades of hands-on experience, working seamlessly together to turn houses into beautiful, functional homes...',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1'
      ]
    },
    {
      id: '4',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      timeline: '45 Days',
      price: 'Mid level',
      experience: '8 years',
      verified: true,
      description: 'At Homerd Interiors, we\'re a family-run team with nearly two decades of hands-on experience, working seamlessly together to turn houses into beautiful, functional homes...',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1'
      ]
    },
    {
      id: '5',
      name: 'Homerd Interiors',
      location: 'Delhi NCR',
      rating: 4.4,
      projects: 120,
      timeline: '45 Days',
      price: 'Mid level',
      experience: '8 years',
      verified: true,
      description: 'At Homerd Interiors, we\'re a family-run team with nearly two decades of hands-on experience, working seamlessly together to turn houses into beautiful, functional homes...',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1'
      ]
    }
  ];

  const handleVendorSelect = (vendorId: string) => {
    setSelectedVendors(prev => {
      if (prev.includes(vendorId)) {
        return prev.filter(id => id !== vendorId);
      } else if (prev.length < 3) {
        return [...prev, vendorId];
      }
      return prev;
    });
  };

  const handleCompareSelected = () => {
    setShowPaymentModal(true);
  };

  const handlePayment = (paymentData: any) => {
    console.log('Payment processed:', paymentData);
    // Handle payment logic here
  };

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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Top Vendor Suggestions</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{selectedVendors.length}/3 Selected</span>
            <button 
              onClick={handleCompareSelected}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50"
              disabled={selectedVendors.length === 0}
            >
              Compare Selected
            </button>
          </div>
        </div>

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

        {/* Vendor List */}
        <div className="space-y-4">
          {mockVendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex space-x-2">
                  {vendor.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt="Interior design"
                      className="w-24 h-18 object-cover rounded-lg"
                    />
                  ))}
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
                    {vendor.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500 fill-current" />
                    )}
                  </div>

                  <div className="flex items-center space-x-1 mb-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">{vendor.location}</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-3 text-sm">
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

                  <div className="flex items-center space-x-6 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {vendor.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Price: {vendor.price}</span>
                    </div>
                    <span>Experience: {vendor.experience}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{vendor.description}</p>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <button
                    onClick={() => handleVendorSelect(vendor.id)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                      selectedVendors.includes(vendor.id)
                        ? 'bg-indigo-100 text-indigo-700 border border-indigo-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                    disabled={!selectedVendors.includes(vendor.id) && selectedVendors.length >= 3}
                  >
                    {selectedVendors.includes(vendor.id) && (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    <span>Select Vendor</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPayment={handlePayment}
      />
    </div>
  );
};