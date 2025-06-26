import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { UserType } from '../types';
import image from '../assets/left Image copy.png';

interface AccountSetupProps {
  userType: UserType;
  onComplete: (userData: any) => void;
  onBack: () => void;
}

export const AccountSetup: React.FC<AccountSetupProps> = ({ userType, onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5]">
      <div
        className="flex rounded-[24px] overflow-hidden shadow-lg"
        style={{
          width: '1304px',
          height: '767px',
          backgroundColor: '#fff'
        }}
      >
        {/* Left Side - Image */}
        <div style={{ width: '552px', height: '767px' }}>
          <img
            src={image}
            alt="Modern home interior"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Form */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '752px',
            backgroundColor: '#F9F5F2',
            padding: '60px'
          }}
        >
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="w-24 h-1 bg-gray-200 rounded-full relative">
                <div className="w-2 h-2 bg-indigo-600 rounded-full absolute -top-0.5 left-0.5"></div>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-1">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Let's set up your account.
              </h1>
              <p className="text-gray-600">We'll use this info to customize your experience.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="James"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="abc@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Your business number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Short Bio (optional)</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Add your brief description."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
                <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-6 h-9 items-center rounded-[12px] font-medium transition-all duration-200 ${
                  isFormValid
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                >
                Proceed
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
