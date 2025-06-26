import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { VendorCard } from '../components/VendorCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { Vendor } from '../types';

const mockVendors: Vendor[] = [
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
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
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
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
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
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
  }
];

interface LandingPageProps {
  onVendorCompare?: () => void;
  onVendorSelect?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onVendorCompare, onVendorSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vendors] = useState<Vendor[]>(mockVendors);

  const handleLocationChange = (location: string) => {
    console.log('Location changed:', location);
  };

  const handleFiltersChange = (filters: any) => {
    console.log('Filters changed:', filters);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <FilterSidebar 
        onLocationChange={handleLocationChange}
        onFiltersChange={handleFiltersChange}
      />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
          <h1 className="text-3xl font-bold mb-6">Professional Remodelling Project.</h1>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">1</span>
              </div>
              <div>
                <p className="font-medium">Enter your project</p>
                <p className="text-sm opacity-90">location</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">2</span>
              </div>
              <div>
                <p className="font-medium">Answer questions</p>
                <p className="text-sm opacity-90">about your project</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">3</span>
              </div>
              <div>
                <p className="font-medium">Get connected with</p>
                <p className="text-sm opacity-90">pros for free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Vendors Near You</h2>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search Mandi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {vendors.map((vendor, index) => (
              <VendorCard 
                key={vendor.id}
                vendor={vendor}
                onRequestComparison={onVendorCompare || (() => console.log('Request comparison for', vendor.name))}
                onViewDetails={onVendorSelect || (() => console.log('View details for', vendor.name))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};