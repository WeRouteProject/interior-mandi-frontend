import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Search, X, MapPin, Star, Clock, IndianRupee, CheckCircle, Camera } from 'lucide-react';

// Define VendorCard props interface
interface VendorCardProps {
  name: string;
  location: string;
  rating: number;
  projects: number;
  timeline: string;
  priceLevel: string;
  experience: string;
  isVerified?: boolean;
}

// VendorCard Component
const VendorCard: React.FC<VendorCardProps> = ({
  name,
  location,
  rating,
  projects,
  timeline,
  priceLevel,
  experience,
  isVerified = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          {/* Vendor Avatar */}
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              {isVerified && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
            </div>
            
            <div className="flex items-center space-x-4 mt-1">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{rating} Rating</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Camera className="h-4 w-4 mr-1" />
                <span className="text-sm">{projects} Projects</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Request Comparison
          </button>
          <button className="text-gray-600 hover:text-gray-800 font-medium">
            Details
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-6 text-sm text-gray-600">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>Timeline: {timeline}</span>
        </div>
        
        <div className="flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          <span>Price: {priceLevel}</span>
        </div>
        
        <div>
          <span>Experience: {experience}</span>
        </div>
      </div>
    </div>
  );
};

// VendorsList Component
const VendorsList: React.FC = () => {
  const vendors: VendorCardProps[] = [
    {
      name: "Homerd Interiors",
      location: "Delhi NCR",
      rating: 4.4,
      projects: 120,
      timeline: "45 Days",
      priceLevel: "Mid level",
      experience: "8 years",
      isVerified: true,
    },
    {
      name: "Homerd Interiors",
      location: "Delhi NCR",
      rating: 4.4,
      projects: 120,
      timeline: "45 Days",
      priceLevel: "Mid level",
      experience: "8 years",
      isVerified: true,
    },
    {
      name: "Homerd Interiors",
      location: "Delhi NCR",
      rating: 4.4,
      projects: 120,
      timeline: "45 Days",
      priceLevel: "Mid level",
      experience: "8 years",
      isVerified: true,
    },
  ];

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Vendors Found ({vendors.length + 9})
        </h2>
      </div>
      
      <div className="space-y-4">
        {vendors.map((vendor, index) => (
          <VendorCard key={index} {...vendor} />
        ))}
      </div>
    </div>
  );
};

// FilterSidebar Component
const FilterSidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState({
    suggested: true,
    propertyCategory: true,
    budget: true,
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState(['Top Rated Vendors']);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors">
          Apply
        </button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
              >
                {filter}
                <button
                  onClick={() => removeFilter(filter)}
                  className="ml-2 hover:text-purple-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Location */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Location</h4>
        <div className="relative">
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white">
            <option>Search City, State or Pincode</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
        <div className="mt-2">
          <span className="text-sm text-gray-600">50 m</span>
        </div>
      </div>

      {/* Suggested */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('suggested')}
          className="flex items-center justify-between w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Suggested (1)</h4>
          {openSections.suggested ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        
        {openSections.suggested && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-700">Verified License</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-700">Quickly Responds</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" defaultChecked />
              <span className="ml-2 text-sm text-gray-700">Top Rated Vendors</span>
            </label>
          </div>
        )}
      </div>

      {/* Property Category */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('propertyCategory')}
          className="flex items-center justify-between w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Property Category</h4>
          {openSections.propertyCategory ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        
        {openSections.propertyCategory && (
          <div className="mt-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>
            
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {[
                'Modern Design',
                'Furniture & Décor',
                'Painting & Polishing',
                'Custom Carpentry',
                'Space Planning',
                'Material & Finish Selection',
                'Civil Work & Renovation',
                'Flooring (Tiles, Wood, Vinyl, etc.)',
              ].map((category) => (
                <label key={category} className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  <span className="ml-2 text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Budget */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('budget')}
          className="flex items-center justify-between w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Budget</h4>
          {openSections.budget ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        
        {openSections.budget && (
          <div className="mt-3 space-y-2">
            {[
              'High-I want the best results',
              'Mid-to-high price',
              'Low-to-mid price',
              'Budget Friendly',
            ].map((option) => (
              <label key={option} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// HeroSection Component
const HeroSection: React.FC = () => {
  const [pincode, setPincode] = useState('');

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Lets find a professional for your<br />
            home remodelling project.
          </h1>
          
          {/* 3-Step Process */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <span className="ml-2 text-gray-700 font-medium">Enter your project location</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <span className="ml-2 text-gray-700 font-medium">Answer questions about your project</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <span className="ml-2 text-gray-700 font-medium">Get connected with pros for free</span>
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Search Form */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Where do you need home remodelling project?
              </h2>
              
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gray-400 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Furniture Image */}
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100">
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  {/* Stylized furniture illustration */}
                  <div className="relative">
                    {/* Couch */}
                    <div className="w-48 h-32 bg-pink-300 rounded-lg relative">
                      <div className="absolute -top-4 left-4 w-16 h-16 bg-yellow-400 rounded-sm"></div>
                      <div className="absolute top-2 right-4 w-12 h-12 bg-brown-600 rounded"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-pink-400 rounded-b-lg"></div>
                      {/* Legs */}
                      <div className="absolute -bottom-4 left-6 w-2 h-4 bg-amber-600 rounded-b"></div>
                      <div className="absolute -bottom-4 right-6 w-2 h-4 bg-amber-600 rounded-b"></div>
                    </div>
                    
                    {/* Side Table */}
                    <div className="absolute -left-16 top-8 w-12 h-16 bg-amber-200 rounded">
                      <div className="absolute -bottom-3 left-1 w-1 h-3 bg-amber-600"></div>
                      <div className="absolute -bottom-3 right-1 w-1 h-3 bg-amber-600"></div>
                      <div className="absolute top-2 left-2 w-8 h-4 bg-white rounded-full"></div>
                      <div className="absolute top-3 left-3 w-6 h-2 bg-blue-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const DashboardPostLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <FilterSidebar />
          <VendorsList />
        </div>
      </div>
      
    </div>
  );
};

export default DashboardPostLogin;