import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FilterSidebarProps {
  onLocationChange: (location: string) => void;
  onFiltersChange: (filters: any) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  onLocationChange, 
  onFiltersChange 
}) => {
  const [expandedSections, setExpandedSections] = useState({
    suggested: true,
    category: true,
    budget: true
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    suggested: [] as string[],
    category: [] as string[],
    budget: [] as string[]
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (section: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = {
        ...prev,
        [section]: prev[section].includes(value)
          ? prev[section].filter(item => item !== value)
          : [...prev[section], value]
      };
      onFiltersChange(newFilters);
      return newFilters;
    });
  };

  const suggestedFilters = [
    'Verified License',
    'Quickly Responds',
    'Top Rated Vendors'
  ];

  const categoryFilters = [
    'Modern Design',
    'Furniture & Décor',
    'Painting & Polishing',
    'Custom Carpentry',
    'Space Planning',
    'Material & Finish Selection',
    'Civil Work & Renovation',
    'Flooring (Tiles, Wood, Vinyl, etc.)'
  ];

  const budgetFilters = [
    'High-I want the best results',
    'Mid-to-high price',
    'Low-to-mid price',
    'Budget Friendly'
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>
      
      {/* Location Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select 
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="50m">50 m</option>
          <option value="100m">100 m</option>
          <option value="500m">500 m</option>
          <option value="1km">1 km</option>
        </select>
      </div>

      {/* Suggested Filters */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('suggested')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Suggested (1)</span>
          {expandedSections.suggested ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.suggested && (
          <div className="space-y-2">
            {suggestedFilters.map((filter) => (
              <label key={filter} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={selectedFilters.suggested.includes(filter)}
                  onChange={() => handleFilterChange('suggested', filter)}
                />
                <span className="text-sm text-gray-700">{filter}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Property Category */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Property Category</span>
          {expandedSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.category && (
          <div className="mb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        )}
        
        {expandedSections.category && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categoryFilters
              .filter(filter => filter.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((filter) => (
                <label key={filter} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={selectedFilters.category.includes(filter)}
                    onChange={() => handleFilterChange('category', filter)}
                  />
                  <span className="text-sm text-gray-700">{filter}</span>
                </label>
              ))}
          </div>
        )}
      </div>

      {/* Budget */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('budget')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Budget</span>
          {expandedSections.budget ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.budget && (
          <div className="space-y-2">
            {budgetFilters.map((filter) => (
              <label key={filter} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={selectedFilters.budget.includes(filter)}
                  onChange={() => handleFilterChange('budget', filter)}
                />
                <span className="text-sm text-gray-700">{filter}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};