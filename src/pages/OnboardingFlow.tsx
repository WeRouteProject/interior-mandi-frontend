import React, { useState } from 'react';
import { UserType } from '../types';
import { AccountSetup } from '../components/AccountSetup';
import image from '../assets/left Image copy.png';

interface OnboardingFlowProps {
  onComplete: (userType: UserType) => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<'type-selection' | 'account-setup'>('type-selection');
  const [selectedType, setSelectedType] = useState<UserType | null>(null);

  const handleTypeSelect = (type: UserType) => {
    setSelectedType(type);
    setCurrentStep('account-setup');
  };

  const handleAccountSetupComplete = (userData: any) => {
    console.log('Account setup completed:', userData);
    if (selectedType) {
      onComplete(selectedType);
    }
  };

  const handleBack = () => {
    setCurrentStep('type-selection');
    setSelectedType(null);
  };

  if (currentStep === 'account-setup' && selectedType) {
    return (
      <AccountSetup
        userType={selectedType}
        onComplete={handleAccountSetupComplete}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5]">
      <div
        className="flex rounded-[24px] overflow-hidden shadow-lg"
        style={{
          width: '1400px',
          height: '767px',
          backgroundColor: '#fff'
        }}
      >
        {/* Left Side - Image */}
        <div style={{ width: '572px', height: '767px' }}>
          <img
            src={image}
            alt="Modern home interior"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Content */}
        <div
          style={{
            width: '828px',
            backgroundColor: '#F9F5F2',
            padding: '60px 60px',
            position: 'relative'
          }}
          className="flex items-center justify-center"
        >
          {/* Step indicator (top-right dot) */}
          <div className="absolute top-6 right-6">
            <div className="w-24 h-1 bg-gray-200 rounded-full relative">
              <div className="w-2 h-2 bg-indigo-600 rounded-full absolute -top-0.5 left-0.5"></div>
            </div>
          </div>

          {/* Form content */}
          <div className="w-full max-w-md text-center">
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-1">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              What describes you best?
            </h1>
            <p className="text-gray-600 mb-8">Choose your interest.</p>

          <div className="space-y-4">
  <button
    onClick={() => handleTypeSelect('vendor')}
    className={`w-full py-4 rounded-[12px] border text-center text-[16px] font-medium transition-all duration-200 ${
      selectedType === 'vendor'
        ? 'bg-[#F5EFFF] border-[#BBA5FF] text-gray-900'
        : 'bg-white border-[#E2E2E2] text-gray-800 hover:bg-[#F5EFFF] hover:border-[#BBA5FF]'
    }`}
  >
    Vendor
  </button>

  <button
    onClick={() => handleTypeSelect('property-owner')}
    className={`w-full py-4 rounded-[12px] border text-center text-[16px] font-medium transition-all duration-200 ${
      selectedType === 'property-owner'
        ? 'bg-[#F5EFFF] border-[#BBA5FF] text-gray-900'
        : 'bg-white border-[#E2E2E2] text-gray-800 hover:bg-[#F5EFFF] hover:border-[#BBA5FF]'
    }`}
  >
    Property Owner
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};
