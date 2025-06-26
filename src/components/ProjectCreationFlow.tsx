import React, { useState } from 'react';
import { X, ArrowLeft, Upload, Image as ImageIcon, ChevronRight, CheckCircle, Wand2,Search} from 'lucide-react';

interface ProjectCreationFlowProps {
  onClose: () => void;
  onComplete: () => void;
}

type Step = 'purpose' | 'details' | 'layout' | 'category' | 'done';

export const ProjectCreationFlow: React.FC<ProjectCreationFlowProps> = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState<Step>('purpose');
  const [formData, setFormData] = useState({
    purposes: [] as string[],
    images: [] as string[],
    layout: '' as string,
    proceedType: '' as 'guided' | 'manual' | ''
  });

  const steps = [
    { id: 'purpose', label: 'Purpose' },
    { id: 'details', label: 'Details' },
    { id: 'layout', label: 'Layout' },
    { id: 'category', label: 'Category' },
    { id: 'done', label: 'Done' }
  ];

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  const handleNext = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as Step);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as Step);
    }
  };

  const handlePurposeToggle = (purpose: string) => {
    setFormData(prev => ({
      ...prev,
      purposes: prev.purposes.includes(purpose)
        ? prev.purposes.filter(p => p !== purpose)
        : [...prev.purposes, purpose]
    }));
  };

  const handleLayoutSelect = (layout: string) => {
    setFormData(prev => ({ ...prev, layout }));
  };

  const handleProceedTypeSelect = (type: 'guided' | 'manual') => {
    setFormData(prev => ({ ...prev, proceedType: type }));
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`text-sm font-semibold ${step.id === currentStep ? 'text-black' : 'text-gray-400'}`}
          >
            {step.label}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-6 h-0.5 mx-2 ${getCurrentStepIndex() > index ? 'bg-black' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'purpose':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">What is the purpose of this project?</h1>
            <p className="text-gray-600 mb-8">We need a bit of your professional data.</p>
            <div className="space-y-4">
              {["Home Remodelling", "Modular Furniture", "Remodel a few room", "Remodel one room", "Other"].map((purpose) => (
                <label
                  key={purpose}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600"
                    checked={formData.purposes.includes(purpose)}
                    onChange={() => handlePurposeToggle(purpose)}
                  />
                  <span className="ml-3 text-gray-900 text-sm">{purpose}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Do you have any reference images?</h1>
            <p className="text-gray-600 mb-8">It will help our vendor to propose a perfect quote.</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="p-6 border border-dashed border-gray-300 rounded-lg flex flex-col items-center hover:border-gray-400"
                >
                  <ImageIcon className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-gray-600 text-sm">Add Image</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'layout':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">What is your property layout?</h1>
            <p className="text-gray-600 mb-8">Choose your current layout.</p>
            <div className="grid grid-cols-3 gap-4">
              {["1RK", "1BHK", "2BHK", "3BHK", "House", "Other"].map((layout) => (
                <label
                  key={layout}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="layout"
                    value={layout}
                    className="w-4 h-4 text-indigo-600"
                    checked={formData.layout === layout}
                    onChange={() => handleLayoutSelect(layout)}
                  />
                  <span className="ml-3 text-gray-900 text-sm">{layout}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'category':
        return (
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How would you like to proceed?</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose your current layout to get the best experience tailored for your needs.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              {[
                {
                  id: 'guided',
                  title: 'Guide me with best options',
                  subtitle: 'Best for first time users',
                  description: 'Let our experts curate the top 3 vendors that perfectly match your requirement and budget.',
                  icon: () => <Wand2 className="text-white text-lg" />,
                  gradient: 'from-purple-500 to-pink-500',
                  bgGradient: 'from-purple-50 to-pink-50',
                  hoverGradient: 'hover:from-purple-100 hover:to-pink-100'
                },
                {
                  id: 'manual',
                  title: "I'll select manually",
                  subtitle: 'If you like control',
                  description: 'Browse all available vendors and handpicked up to 3 that you\'d like to compare.',
                  icon: () => <Search className="text-white text-lg"/>,
                  gradient: 'from-blue-500 to-cyan-500',
                  bgGradient: 'from-blue-50 to-cyan-50',
                  hoverGradient: 'hover:from-blue-100 hover:to-cyan-100'
                }
              ].map(({ id, title, subtitle, description, icon: Icon, gradient, bgGradient, hoverGradient }) => (
                <div
                  key={id}
                  onClick={() => handleProceedTypeSelect(id as 'guided' | 'manual')}
                  className={`
                    relative group cursor-pointer transition-all duration-300 ease-out transform
                    hover:scale-105 hover:-translate-y-2
                    ${formData.proceedType === id ? 'scale-105' : ''}
                  `}
                >
                  <div className={`
                    relative bg-gradient-to-br ${bgGradient} ${hoverGradient}
                    rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl
                    transition-all duration-300 backdrop-blur-sm
                    ${formData.proceedType === id ? 'ring-2 ring-purple-500 ring-offset-2' : ''}
                  `}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                    <div className="relative z-10">
                      <div className={`
                        w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl 
                        flex items-center justify-center mb-6 mx-auto
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <Icon />
                      </div>
                      <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-gray-700 mb-4">
                        {subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center">
                        {description}
                      </p>
                      <div className="mt-6 flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium mr-2">Select this option</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                    {formData.proceedType === id && (
                      <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {formData.proceedType && (
              <div className="text-center mt-12">
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Continue with {formData.proceedType === 'guided' ? 'Guide me with best options' : "I'll select manually"}
                </button>
              </div>
            )}
          </div>
        );

      case 'done':
        return (
          <div className="text-center mt-24">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Created!</h1>
            <p className="text-gray-600">Your project has been successfully created.</p>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'purpose':
        return formData.purposes.length > 0;
      case 'layout':
        return formData.layout !== '';
      case 'category':
        return formData.proceedType !== '';
      default:
        return true;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IM</span>
          </div>
        </div>
        {renderStepIndicator()}
        <div className="flex items-center space-x-4">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-sm">Close</button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              canProceed()
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentStep === 'done' ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>

      <div className="p-10 overflow-y-auto">
        {renderCurrentStep()}
      </div>
    </div>
  );
};