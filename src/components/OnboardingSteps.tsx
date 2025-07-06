import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, Plus, Minus, MapPin } from 'lucide-react';
import image from '../assets/p.jpg'
import logo from '../assets/transparent logo.png';
import { useNavigate } from 'react-router-dom';

// Types for form data
interface FormData {
    customScope: string | number | readonly string[] | undefined;
    // Step 0: Interest
    userType: string;

    // Step 1: Profile
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    location: string;

    // Step 2: Property Type
    propertyType: string;
    customPropertyType: string;

    // Step 3: Scope of Work
    scopeOfWork: string[];

    // Step 4: Style Preference
    preferredStyle: string;

    // Step 4.1: Reference Links
    referenceLinks: string[];

    // Step 5: Property Details
    propertySize: string;
    bedrooms: number;
    bathrooms: number;
    balconies: number;
    projectGoals: string;

    // Step 6: Budget & Timeline
    budget: string;
    customBudget: string;
    startDate: string;
    endDate: string;
    confirmationAccepted: boolean;
}

interface OnboardingProps {
    onComplete?: (data: FormData) => void;
    onStepChange?: (step: number) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete, onStepChange }) => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        customScope: '',
        userType: '',
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        location: '',
        propertyType: '',
        customPropertyType: '',
        scopeOfWork: [],
        preferredStyle: '',
        referenceLinks: [''],
        propertySize: '',
        bedrooms: 1,
        bathrooms: 1,
        balconies: 0,
        projectGoals: '',
        budget: '',
        customBudget: '',
        startDate: '',
        endDate: '',
        confirmationAccepted: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    // Load progress from localStorage on component mount
    useEffect(() => {
        const savedProgress = localStorage.getItem('onboarding-progress');
        if (savedProgress) {
            try {
                const parsed = JSON.parse(savedProgress);
                setFormData(parsed.formData);
                setCurrentStep(parsed.currentStep);
            } catch (error) {
                console.error('Error loading saved progress:', error);
            }
        }
    }, []);

    // Save progress to localStorage whenever formData or currentStep changes
    useEffect(() => {
        localStorage.setItem('onboarding-progress', JSON.stringify({
            formData,
            currentStep
        }));
        onStepChange?.(currentStep);
    }, [formData, currentStep, onStepChange]);

    const totalSteps = 8;

    const stepTitles = [
        'What describes you best?',
        'Set up your profile to begin.',
        'Let\'s start with your space.',
        'Let\'s start with your space.',
        'Let\'s start with your space.',
        'Let\'s start with your space.',
        'We\'re almost there -',
        'Just one last thing...',
        'And its DONE!!'
    ];

    const stepSubtitles = [
        'Choose you interest.',
        '',
        '1. Please select your property type',
        '2. What is the Scope of Work? (Select all that apply)',
        '3. What is your Preferred Style?',
        '4. Please provide any reference links (if applicable)',
        '5. Tell us about your property details',
        '6. What is your budget and timeline?',
        'Thank you for your patience and inputs & Welcome to Interior Mandi'
    ];

    const propertyTypes = [
        'Residential',
        'Commercial',
        'Office',
        'Retail',
        'Hospitality',
        'Other'
    ];

    const scopeOptions = [
        'Full Home Interior',
        'Modular Kitchen',
        'Wardrobes',
        'False Ceiling',
        'Lighting Design',
        'Civil Work',
        'Electrical / Plumbing',
        'Painting/Wall Finishes',
        'Furniture Design',
        'Decor & Styling',
        '3D Visualization',
        'Turnkey Project',
        'Consultation Only',
        'Other'
    ];

    const styleOptions = [
        { id: 'modern', label: 'Modern', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'boho', label: 'Boho', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'classic', label: 'Classic', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'other', label: 'Other', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ];

    const budgetOptions = [
        'Under ₹5 Lakhs',
        '₹5-10 Lakhs',
        '₹10-15 Lakhs',
        '₹15-25 Lakhs',
        '₹25+ Lakhs',
        'Custom'
    ];

    // Validation functions
    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        switch (step) {

            case 1:
                if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
                if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email address is required';
                if (formData.emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
                    newErrors.emailAddress = 'Please enter a valid email address';
                }
                break;
            case 2:
                if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
                if (formData.propertyType === 'Other' && !formData.customPropertyType.trim()) {
                    newErrors.customPropertyType = 'Please specify the property type';
                }
                break;
            case 3:
                if (formData.scopeOfWork.length === 0) newErrors.scopeOfWork = 'Please select at least one scope of work';
                break;
            case 4:
                if (!formData.preferredStyle) newErrors.preferredStyle = 'Please select a preferred style';
                break;
            case 6:
                if (!formData.propertySize.trim()) newErrors.propertySize = 'Property size is required';
                break;
            case 7:
                if (!formData.budget) newErrors.budget = 'Please select a budget range';
                if (formData.budget === 'Custom' && !formData.customBudget.trim()) {
                    newErrors.customBudget = 'Please specify your budget';
                }
                if (!formData.confirmationAccepted) newErrors.confirmationAccepted = 'Please confirm the information is accurate';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps - 1) {
                setCurrentStep(currentStep + 1);
            } else if (currentStep === totalSteps - 1) {
                // On step 7, just move to step 8
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleInputChange = (field: keyof FormData, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleScopeToggle = (scope: string) => {
        setFormData(prev => ({
            ...prev,
            scopeOfWork: prev.scopeOfWork.includes(scope)
                ? prev.scopeOfWork.filter(s => s !== scope)
                : [...prev.scopeOfWork, scope]
        }));
    };

    const handleReferenceLinksChange = (index: number, value: string) => {
        setFormData(prev => ({
            ...prev,
            referenceLinks: prev.referenceLinks.map((link, i) => i === index ? value : link)
        }));
    };

    const addReferenceLink = () => {
        setFormData(prev => ({
            ...prev,
            referenceLinks: [...prev.referenceLinks, '']
        }));
    };

    const handleCounterChange = (field: 'bedrooms' | 'bathrooms' | 'balconies', increment: boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: increment ? prev[field] + 1 : Math.max(0, prev[field] - 1)
        }));
    };
    // ProgressIndicator component
    const ProgressIndicator = () => (
        <div className="flex space-x-2">
            {Array.from({ length: totalSteps - 1 }, (_, i) => (
                <div
                    key={i}
                    className={`h-2 w-8 rounded-full transition-colors duration-300 ${i < currentStep ? 'bg-emerald-600' : 'bg-gray-300'}`}
                />
            ))}
        </div>
    );

    // NavigationHeader component
    const NavigationHeader = () => {
        if (currentStep === 0 || currentStep === 8) return null;

        return (
            <div className="flex items-center">
                <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ChevronLeft size={20} />
                    <span className="text-sm">
                        {currentStep === 1 ? '' :
                            currentStep === 2 ? 'Project Type' :
                                currentStep === 3 ? 'Basic Details' :
                                    currentStep === 4 ? 'Basic Details' :
                                        currentStep === 5 ? 'Basic Details' :
                                            currentStep === 6 ? 'Basic Details' : 'Property Details'}
                    </span>
                </button>
                <div className="text-sm text-gray-500">
                    {currentStep === 7 ? 'Timeline & Budget' :
                        currentStep === 6 ? 'Timeline & Budget' : 'Property Details'}
                    <ChevronRight size={16} className="inline ml-1" />
                </div>
            </div>
        );
    };
    // Step 0: Choose Interest
    const renderStep0 = () => (
        <div className="text-center space-y-8">
            <div className="space-y-6">

                <div
                    className={`w-80 mx-auto p-4 border-2 border-gray-400 rounded-xl cursor-pointer transition-all ${formData.userType === 'Partner'
                        ? 'border-emerald-600 bg-white'
                        : 'border-transparent bg-white text-gray-600'
                        } hover:bg-green-200 hover:border-green-500`}
                    onClick={() => {
                        handleInputChange('userType', 'Partner');
                        handleNext();
                    }}
                >
                    <span className="text-lg font-medium" >Partner</span>
                </div>

                <div
                    className={`w-80 mx-auto p-4 border-2 border-gray-400 rounded-xl cursor-pointer transition-all ${formData.userType === 'Property Owner'
                        ? 'border-emerald-600 bg-white'
                        : 'border-transparent bg-white text-gray-600'
                        } hover:bg-green-200 hover:border-green-500`}
                    onClick={() => {
                        handleInputChange('userType', 'Property Owner');
                        handleNext();
                    }}
                >
                    <span className="text-lg font-medium" style={{ fontFamily: 'EB Garamond' }}>Property Owner</span>
                </div>
            </div>

            {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
        </div>
    );

    // Step 1: Profile Setup
    const renderStep1 = () => (
        <div className="space-y-6 justify-center items-center flex flex-col">
            <div >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-[400px] px-4 py-3  rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="James"
                    style={{ borderRadius: '15px', fontFamily: 'EB Garamond' }}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className=" w-[400px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your business number"
                    style={{ borderRadius: '15px' }}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    className={`w-[400px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="abc@gmail.com"
                    style={{ borderRadius: '15px' }}
                />
                {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                </label>
                <div className="relative">
                    <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-[400px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
                        placeholder="Select Address"
                        style={{ borderRadius: '15px' }}
                    />
                    <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
            </div>
        </div>
    );

    // Step 2: Property Type
    const renderStep2 = () => (

        <div className="space-y-6 text-center">

            <div className="space-y-4">
                {propertyTypes.map((type) => (
                    <label key={type} className="flex items-center cursor-pointer">
                        <span
                            className={`flex items-center w-full p-3 rounded-lg border-2 transition-all ${formData.propertyType === type
                                ? 'border-emerald-600 bg-gray-100'
                                : 'border-transparent bg-white'
                                }`}
                        >
                            <input
                                type="radio"
                                name="propertyType"
                                value={type}
                                checked={formData.propertyType === type}
                                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                                className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
                            />
                            <span className="ml-3 text-gray-700">{type}</span>
                        </span>
                    </label>
                ))}
            </div>

            {formData.propertyType === 'Other' && (
                <div>
                    <input
                        type="text"
                        value={formData.customPropertyType}
                        onChange={(e) => handleInputChange('customPropertyType', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.customPropertyType
                            ? 'border-red-500'
                            : 'border-emerald-600 bg-gray-100'
                            }`}
                        placeholder="Add text"
                    />
                    {errors.customPropertyType && <p className="text-red-500 text-sm mt-1">{errors.customPropertyType}</p>}
                </div>
            )}

            {errors.propertyType && <p className="text-red-500 text-sm">{errors.propertyType}</p>}
        </div>
    );
    // Step 3: Scope of Work
    const renderStep3 = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                {scopeOptions.map((scope) => (
                    <label key={scope} className="flex items-center cursor-pointer">
                        <span
                            className={`flex items-center w-full p-2 rounded-lg border-2 transition-all ${formData.scopeOfWork.includes(scope)
                                ? 'border-emerald-600 bg-green-100'
                                : 'border-transparent bg-white'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.scopeOfWork.includes(scope)}
                                onChange={() => handleScopeToggle(scope)}
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                            />
                            <span className="ml-2 text-gray-700 text-sm">{scope}</span>
                        </span>
                    </label>
                ))}
            </div>

            {formData.scopeOfWork.includes('Other') && (
                <div>
                    <input
                        type="text"
                        value={formData.customScope}
                        onChange={(e) => handleInputChange('customScope', e.target.value)}
                        className="w-full px-4 py-2 border-2 rounded-lg border-emerald-600 bg-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Please specify"
                    />
                    {errors.customScope && <p className="text-red-500 text-sm mt-1">{errors.customScope}</p>}
                </div>
            )}

            {errors.scopeOfWork && <p className="text-red-500 text-sm">{errors.scopeOfWork}</p>}
        </div>
    );

    // Step 4: Style Preference
    const renderStep4 = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                {styleOptions.map((style) => (
                    <div
                        key={style.id}
                        className={`relative cursor-pointer rounded-lg border-2 transition-all ${formData.preferredStyle === style.id
                            ? 'border-emerald-500 ring-2 ring-emerald-200'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        onClick={() => handleInputChange('preferredStyle', style.id)}
                    >
                        <img
                            src={style.image}
                            alt={style.label}
                            className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="p-4 text-center">
                            <span className="text-gray-700 font-medium">{style.label}</span>
                            {formData.preferredStyle === style.id && (
                                <Check className="absolute top-2 right-2 text-emerald-600 bg-white rounded-full p-1" size={20} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {errors.preferredStyle && <p className="text-red-500 text-sm">{errors.preferredStyle}</p>}
        </div>
    );

    // Step 5: Reference Links
    const renderStep5 = () => (
        <div className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-gray-700 font-medium">Reference Links</h3>
                {formData.referenceLinks.map((link, index) => (
                    <input
                        key={index}
                        type="url"
                        value={link}
                        onChange={(e) => handleReferenceLinksChange(index, e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="add link"
                        style={{ borderRadius: '15px' }}
                    />
                ))}
                <button
                    type="button"
                    onClick={addReferenceLink}
                    className="text-blue-500 hover:text-blue-600 text-sm flex items-center space-x-1"
                >
                    <Plus size={16} />
                    <span>Add More</span>
                </button>
            </div>
        </div>
    );

    // Step 6: Property Details
    const renderStep6 = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" >
                    Property Type
                </label>
                <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    style={{ borderRadius: '15px' }}
                >
                    <option value="">eg. flat/villa</option>
                    {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size (in sq. ft.)
                </label>
                <input
                    type="text"
                    value={formData.propertySize}
                    onChange={(e) => handleInputChange('propertySize', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${errors.propertySize ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="eg. 400sqft"
                    style={{ borderRadius: '15px' }}
                />
                {errors.propertySize && <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                    Property Rooms
                </label>
                <div className="space-y-3 border border-gray-300 rounded-lg p-4">
                    {[
                        { label: 'Bedrooms', field: 'bedrooms' as const },
                        { label: 'Bathrooms', field: 'bathrooms' as const },
                        { label: 'Balconies / Outdoor Area', field: 'balconies' as const }
                    ].map(({ label, field }) => (
                        <div key={field} className="flex items-center justify-between">
                            <span className="text-gray-700">{label}</span>
                            <div className="flex items-center space-x-3">
                                <button
                                    type="button"
                                    onClick={() => handleCounterChange(field, false)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-8 text-center">{formData[field]}</span>
                                <button
                                    type="button"
                                    onClick={() => handleCounterChange(field, true)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you hope to achieve with this project?
                </label>
                <textarea
                    value={formData.projectGoals}
                    onChange={(e) => handleInputChange('projectGoals', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    placeholder="Add few words"
                />
            </div>
        </div>
    );

    // Step 7: Budget & Timeline
    const renderStep7 = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                    Your Budget
                </label>
                <div className="grid grid-cols-2 gap-4">
                    {budgetOptions.map((budget) => (
                        <label key={budget} className="flex items-center space-x-3 cursor-pointer">
                            <span
                                className={`flex items-center w-full p-2 rounded-lg border-2 transition-all ${formData.budget === budget
                                    ? 'border-emerald-600 bg-gray-100'
                                    : 'border-transparent bg-white'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="budget"
                                    value={budget}
                                    checked={formData.budget === budget}
                                    onChange={(e) => handleInputChange('budget', e.target.value)}
                                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                                />
                                <span className="ml-2 text-gray-700">{budget}</span>
                            </span>
                        </label>
                    ))}
                </div>

                {formData.budget === 'Custom' && (
                    <div className="mt-4">
                        <input
                            type="text"
                            value={formData.customBudget}
                            onChange={(e) => handleInputChange('customBudget', e.target.value)}
                            className="w-full px-4 py-2 border-2 rounded-lg border-emerald-600 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Enter your budget"
                        />
                        {errors.customBudget && <p className="text-red-500 text-sm mt-1">{errors.customBudget}</p>}
                    </div>
                )}

                {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                    Timeline
                </label>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                        className="w-full px-4 py-2 border-2 rounded-lg border-emerald-600 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                        className="w-full px-4 py-2 border-2 rounded-lg border-emerald-600 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="End Date"
                    />
                </div>
            </div>

            <div className="flex items-start space-x-3">
                <span
                    className={`flex items-center p-2 rounded-lg border-2 transition-all ${formData.confirmationAccepted
                        ? 'border-emerald-600 bg-white'
                        : 'border-transparent bg-white'
                        }`}
                >
                    <input
                        type="checkbox"
                        id="confirmation"
                        checked={formData.confirmationAccepted}
                        onChange={(e) => handleInputChange('confirmationAccepted', e.target.checked)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded mt-1"
                    />
                </span>
                <label htmlFor="confirmation" className="text-sm text-gray-700">
                    I confirm the above information is accurate and can be used for design and costing purposes.
                </label>
            </div>

            {errors.confirmationAccepted && <p className="text-red-500 text-sm">{errors.confirmationAccepted}</p>}

        </div>
    );
    // Step 8: Completion
    const renderStep8 = () => (
        <div className="text-center space-y-8">
            <div className="space-y-4 pt-1">
            </div>

            <button
                onClick={() => onComplete?.(formData)}
                className="w-[150px] bg-[#004D3B] text-white py-1 px-3 font-medium hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                style={{ borderRadius: '100px' }}
            >
                Go to Dashboard
            </button>
        </div>
    );

    const getCurrentStepContent = () => {
        switch (currentStep) {
            case 0: return renderStep0();
            case 1: return renderStep1();
            case 2: return renderStep2();
            case 3: return renderStep3();
            case 4: return renderStep4();
            case 5: return renderStep5();
            case 6: return renderStep6();
            case 7: return renderStep7();
            case 8: return renderStep8();
            default: return null;
        }
    };

    const getCompletedSteps = () => {
        const completed = [];
        if (currentStep > 2) completed.push('1. Property Type');
        if (currentStep > 3) completed.push('2. Scope of Work');
        if (currentStep > 4) completed.push('3. What is your Preferred Style?');
        return completed;
    };

    // Special layout for step 0 and completion step
    if (currentStep === 0 || currentStep === 8) {
        return (
            <div className="flex items-start justify-center bg-white py-8 min-h-[600px] px-8">
                {/* Left side - Image */}
                <div className="flex rounded-[24px] overflow-hidden"
                    style={{
                        width: '1400px',
                        height: '600px',
                        backgroundColor: '#fff',
                    }}>
                    <div style={{ width: '500px', height: '600px' }} className="rounded-[24px] overflow-hidden">
                        <img
                            src={image}
                            alt="Modern home interior"
                            className="object-cover w-full h-full rounded-[24px]"
                        />
                    </div>
                    {/* Right side - Form */}
                    <div
                        style={{
                            width: '900px',
                            height: '600px',
                            backgroundColor: '#F9F5F2',
                            padding: '40px',
                        }}
                        className="flex items-center justify-center rounded-[24px] ml-3"
                    >
                        <div className="max-w-md w-full items-center justify-center">

                            <div className="flex justify-center mb-8">
                                <img src={logo} alt="Logo" className="h-20" />
                            </div>
                            <div className="mb-5 text-center">
                                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'EB Garamond' }}>
                                    {stepTitles[currentStep]}
                                </h1>
                                {stepSubtitles[currentStep] && (
                                    <p className="text-gray-600 mb-6" style={{ fontFamily: 'Arimo Hebrew Subset' }}>{stepSubtitles[currentStep]}</p>
                                )}
                            </div>

                            <div className="mb-8">
                                {getCurrentStepContent()}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }

    return (
        <div className="flex items-start justify-center bg-white py-8 min-h-[600px] px-8">
            {/* Left side - Image */}
            <div className="flex rounded-[24px] overflow-hidden relative"
                style={{
                    width: '1400px',
                    height: '600px',
                    backgroundColor: '#fff',
                }}>
                <div style={{ width: '500px', height: '600px', position: 'relative' }} className="rounded-[24px] overflow-hidden">
                    <img
                        src={image}
                        alt="Modern home interior"
                        className="object-cover w-full h-full rounded-[24px]"

                    />
                    <div className="absolute top-4 right-4" style={{ paddingRight: '350px' }}>
                        <img src={logo} alt="Logo" className="h-20" />
                    </div>
                </div>


                {/* Right side - Form */}
                <div
                    style={{
                        width: '900px',
                        height: '600px',
                        backgroundColor: '#F9F5F2',
                        padding: '40px',
                        overflowY: 'auto',
                    }}
                    className="flex items-start justify-center rounded-[24px] ml-3"
                >
                    <div className="w-full">
                        {/* Header and Progress Indicator Row */}
                        <div className="flex items-center justify-between mb-8 w-full">
                            <div className="pl-4">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentStep === 0}
                                    className={`flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <ChevronLeft size={20} />
                                    <span className="text-sm">
                                        {currentStep === 1 ? '' :
                                            currentStep === 2 ? 'Project Type' :
                                                currentStep === 3 ? 'Basic Details' :
                                                    currentStep === 4 ? 'Basic Details' :
                                                        currentStep === 5 ? 'Basic Details' :
                                                            currentStep === 6 ? 'Basic Details' : 'Property Details'}
                                    </span>
                                </button>
                            </div>
                            <ProgressIndicator />
                            <div className="pr-4">
                                <div className="text-sm text-gray-500">
                                    {currentStep === 7 ? 'Timeline & Budget' :
                                        currentStep === 6 ? 'Timeline & Budget' : 'Property Details'}
                                    <ChevronRight size={16} className="inline ml-1" />
                                </div>
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="max-w-md mx-auto">
                            <div className="mb-8 ">
                                <h1 className="text-2xl text-center lg:text-3xl font-bold text-gray-900 mb-10">
                                    {stepTitles[currentStep]}
                                </h1>

                                {/* Show completed steps */}
                                {getCompletedSteps().length > 0 && (
                                    <div className="mb-6">
                                        {getCompletedSteps().map((step, index) => (
                                            <span key={index} className="flex items-center justify-between w-full p-2 bg-green-100 text-green-800 rounded-lg mb-3">
                                                <span className="text-sm">{step}</span>
                                                <span className="flex items-center">
                                                    <Check size={12} className="mr-1 border-1 rounded " />
                                                </span>
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {stepSubtitles[currentStep] && (
                                    <p className="text-gray-600 " style={{ marginBottom: '-1.05rem' }}>{stepSubtitles[currentStep]}</p>
                                )}

                            </div>
                            <div className="mb-8">
                                {getCurrentStepContent()}
                            </div>


                            <div className="flex justify-center">
                                <button
                                    onClick={handleNext}
                                    className="w-[150px] bg-[#004D3B] text-white py-2 px-3 font-medium hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    style={{ borderRadius: '100px' }}
                                >
                                    {currentStep === 7 ? 'Submit' : 'Proceed'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;