import React from 'react';
import { MapPin, Plus } from 'lucide-react';
import { User } from '../types';

interface ProfilePageProps {
  user: User;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className="flex-1 bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Profile Info */}
        <div className="absolute bottom-6 left-6">
          <div className="flex items-end space-x-4">
            <img 
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div className="text-white mb-2">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                {user.verified && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>{user.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          <button className="pb-3 border-b-2 border-indigo-600 text-indigo-600 font-medium">
            About
          </button>
          <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium">
            Makeover
          </button>
          <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium">
            Feedback
          </button>
        </div>

        {/* About Section */}
        <div className="max-w-4xl">
          <p className="text-gray-700 leading-relaxed mb-8">
            {user.bio}
          </p>

          {/* Makeover Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Makeover</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Create a Service</h3>
                  <p className="text-gray-600 mb-4">
                    Make your vision come to life. Give us a chance to remodel your home.
                  </p>
                  
                  <div className="flex space-x-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                      🏠 Home Remodelling
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      🎨 Decor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};