import React, { useState } from 'react';
import whiteEllipse from '../assets/realistic-white-cloud-png.webp'; // Adjust the path if the image is in a different folder

import {
  Star,
  Plus,
  Home,
  Bed,
  UtensilsCrossed,
  Layers,
  Box,
  ChefHat,
  Palette,
  Sofa,
} from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: Home, label: 'Home Decor', color: 'bg-purple-500' },
    { icon: Bed, label: 'Bedroom', color: 'bg-orange-500' },
    { icon: UtensilsCrossed, label: 'Dining Hall', color: 'bg-teal-500' },
    { icon: Layers, label: 'False Ceiling', color: 'bg-purple-500' },
    { icon: Box, label: '3D Plans', color: 'bg-blue-500' },
    { icon: ChefHat, label: 'Modular Kitchen', color: 'bg-purple-500' },
    { icon: Palette, label: 'Full Home Renovation', color: 'bg-blue-500' },
    { icon: Sofa, label: 'Furniture', color: 'bg-purple-500' }
  ];

  const vendors = [
    {
      name: 'LuxedHaven Living',
      projects: '120 Projects',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300',
      badge: 'Popular'
    },
    {
      name: 'ModernMosaic',
      projects: '105 Projects',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300',
      badge: 'Modern'
    },
    {
      name: 'PureSpace Interiors',
      projects: '130 Projects',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=300',
      badge: 'Eco Friendly'
    },
    {
      name: 'Crafted Comfort',
      projects: '120 Projects',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=300',
      badge: 'Sustainable'
    },
    {
      name: 'Elemental Living',
      projects: '120 Projects',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=300',
      badge: 'Modern'
    }
  ];

  const packages = [
    {
      title: '1BHK Starter Interior Package',
      timeline: '2-3 weeks',
      addOns: 'Shoe rack',
      estimatedPrice: '₹1.8L - ₹2.2L',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Smart Living-Dining Combo',
      timeline: '3-4 weeks',
      addOns: 'Mirror decor',
      estimatedPrice: '₹2.5L - ₹3L',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Bedroom Comfort Essentials',
      timeline: '2-3 weeks',
      addOns: 'Wall-mounted shelf',
      estimatedPrice: '₹1.8L - ₹2.2L',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const scopeCategories = [
    {
      title: 'Kitchen Only',
      samples: '120 Samples',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Wardrobe & Storage',
      samples: '120 Samples',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Living + Dining Combo',
      samples: '120 Samples',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Bathroom Renovation',
      samples: '120 Samples',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Electrical & Plumbing Work',
      samples: '120 Samples',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Moving Image Grid */}

      <section className="relative bg-white overflow-hidden">
        <div className="w-full h-[600px] relative">
          {/* Moving Image Rows */}
          <div className="absolute inset-0 flex flex-col">
            {/* Row 1 - Moving Right */}
            <div className="h-[180px] flex animate-[slideRight_40s_linear_infinite] gap-4 py-2">
              {/* Original set */}
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              {/* Duplicates to ensure full coverage */}
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              {/* Additional duplicates for wider screens */}
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
            </div>

            {/* Row 2 - Moving Left */}
            <div className="h-[180px] flex animate-[slideLeft_40s_linear_infinite] gap-4 py-2">
              {/* Original set */}
              <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              {/* Duplicates to ensure full coverage */}
              <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              {/* Additional duplicates for wider screens */}
              <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
            </div>

            {/* Row 3 - Moving Right (unchanged) */}
            <div className="h-[180px] flex animate-[slideRight_55s_linear_infinite] gap-4 py-2">
              <img src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              {/* Duplicates to ensure full coverage */}
              <img src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />

              {/* Duplicate for seamless loop */}
              <img src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-80 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-64 object-cover rounded-lg flex-shrink-0 shadow-sm" />
              <img src="https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="h-full w-72 object-cover rounded-lg flex-shrink-0 shadow-sm" />
            </div>
          </div>

          {/* Gradient Overlays - Left and Right fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Center Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative text-center max-w-2xl px-4">
              {/* White ellipse image behind the text */}
              <img
                src={whiteEllipse}
                alt="White Ellipse Background"
                className="absolute z-0"
                style={{
                  top: '-90px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '700px',
                  height: '300px',

                }}
              />

              {/* Heading text */}
              <h1 className="relative text-4xl lg:text-5xl font-bold mb-8 leading-tight font-serif z-10 bg-gradient-to-b from-[#6547E8] via-[#6445EC] to-[#301C85] bg-clip-text text-transparent">
                Find it. Compare it.<br />
                <span className="text-5xl lg:text-5xl">
                  Love the deal.
                </span>
              </h1>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative z-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 px-6 py-4 pr-20 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-xl text-base bg-white/90 backdrop-blur-sm"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium text-sm shadow-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
    @keyframes slideRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    @keyframes slideLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
      </section>

      {/* Categories */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="flex h-9 items-center bg-gray-100 hover:bg-gray-100 transition-colors duration-200 rounded-full px-4 py-3 cursor-pointer group lg:flex-1 lg:justify-center">
                  <div className="w-8 h-7 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <IconComponent size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {category.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   

      {/* Top Vendors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Top Vendors Near You</h2>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {vendors.map((vendor, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden transition-shadow group">
                <div className="relative">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-40 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${vendor.badge === 'Popular' ? 'bg-yellow-100 text-yellow-600' :
                        vendor.badge === 'Modern' ? 'bg-green-100 text-green-600' :
                          vendor.badge === 'Eco Friendly' ? 'bg-blue-100 text-blue-600' :
                            'bg-pink-100 text-pink-600'
                      }`}>
                      {vendor.badge}
                    </span>
                  </div>
                  <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <Plus size={16} className="text-gray-600" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{vendor.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-600">{vendor.projects}</p>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-1">{vendor.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < Math.floor(vendor.rating) ? "currentColor" : "none"} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    

      {/* Budget-Friendly Packages */}
      <section className="py-16 bg-darkgrey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Budget-Friendly Packages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase">{pkg.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xs text-gray-600">Timeline</span>
                      <p className="text-sm font-medium text-gray-900">{pkg.timeline}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Add-ons</span>
                      <p className="text-sm font-medium text-gray-900">{pkg.addOns}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Estimated Price</span>
                      <p className="text-sm font-bold text-purple-600">{pkg.estimatedPrice}</p>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors text-sm">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Scope-Based Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Scope-Based Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {scopeCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                    <Plus size={16} className="text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.samples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;