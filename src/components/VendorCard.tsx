import React from 'react';
import { MapPin, Clock, DollarSign, Star, CheckCircle } from 'lucide-react';
import { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
  onRequestComparison?: () => void;
  onViewDetails?: () => void;
}

export const VendorCard: React.FC<VendorCardProps> = ({ 
  vendor, 
  onRequestComparison, 
  onViewDetails 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={vendor.avatar} 
              alt={vendor.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {vendor.verified && (
              <CheckCircle className="absolute -bottom-1 -right-1 w-4 h-4 text-green-500 fill-current" />
            )}
          </div>
          
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
              {vendor.verified && (
                <CheckCircle className="w-4 h-4 text-green-500 fill-current" />
              )}
            </div>
            
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-600">{vendor.location}</span>
            </div>
            
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{vendor.rating} Rating</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-xs text-blue-600 font-bold">{vendor.projects}</span>
                </div>
                <span className="text-sm text-gray-600">{vendor.projects} Projects</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 mt-3 text-sm text-gray-600">
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
          </div>
        </div>
        
        <div className="flex space-x-2">
          {onRequestComparison && (
            <button 
              onClick={onRequestComparison}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
              Request Comparison
            </button>
          )}
          
          {onViewDetails && (
            <button 
              onClick={onViewDetails}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};