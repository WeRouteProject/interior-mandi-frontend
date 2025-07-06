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
    contact: '', 
    email: '',
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

  const isFormValid = formData.name.trim() && formData.contact.trim();

  return (
    <div className="flex items-start justify-center bg-white py-8 min-h-[600px] px-8">
      <div
        className="flex rounded-[24px] overflow-hidden "
        style={{
          width: '1400px',
          height: '670px',
          backgroundColor: '#fff'
        }}
      >
        {/* Left Side - Image */}
        <div style={{ width: '500px', height: '670px' }} className="rounded-[24px] overflow-hidden">
          <img
            src={image}
            alt="Modern home interior"
            className="object-cover w-full h-full rounded-[24px]"
          />
        </div>

        {/* Right Side - Form */}
        <div
          className="flex items-center justify-center rounded-[24px] ml-3"
          style={{
            width: '1000px',
            height: '670px',
            backgroundColor: '#F9F5F2',
            padding: '40px'
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
              <div className="w-16 h-1 bg-gray-200 rounded-full relative">
                <div className="w-2 h-2 bg-indigo-600 rounded-full absolute -top-0.5 left-0.5"></div>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-1">
                <span className="text-white font-bold text-base">I</span>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">M</span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Let's set up your account.
              </h1>
              <p className="text-gray-600 text-sm">We'll use this info to customize your experience.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
  {/* Name */}
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-1">Full Name</label>
    <input
      type="text"
      value={formData.name}
      onChange={(e) => handleInputChange('name', e.target.value)}
      placeholder="Enter your name"
      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors duration-200"
      required
    />
  </div>

  {/* Contact (Email or Phone) */}
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-1">Contact Details</label>
    <input
      type="tel"
      value={formData.contact}
      onChange={(e) => handleInputChange('contact', e.target.value)}
      placeholder="e.g., +1-234-567-890"
      className="w-full h-[40px] px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors duration-200"
      required
    />
  </div>

   <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-1">Contact Details</label>
    <input
      type="Email"
      value={formData.email}
      onChange={(e) => handleInputChange('email', e.target.value)}
      placeholder="e.g., email@example.com"
      className="w-full h-[40px] px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors duration-200"
      required
    />
  </div>

  {/* Bio */}
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-800 mb-1">About You (optional)</label>
    <textarea
      value={formData.bio}
      onChange={(e) => handleInputChange('bio', e.target.value)}
      placeholder="Tell us a bit about yourself."
      rows={4}
      className="w-full  h-[40px] px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors duration-200 resize-none"
    />
  </div>

  {/* Submit */}
  <div className="flex justify-center ">
  <button
    type="submit"
    disabled={!isFormValid}
    style={{
      width: '100px',
      height: '40px',
      borderWidth: '2px',
      borderRadius: '12px',
      paddingRight: '12px',
      paddingLeft: '12px'
    }}
    className={`w-full  font-semibold text-lg transition-all duration-200 ${
      isFormValid
        ? 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700'
        : 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'
    }`}
  >
    Continue
  </button>
  </div>
</form>
          </div>
        </div>
      </div>
    </div>
  );
};