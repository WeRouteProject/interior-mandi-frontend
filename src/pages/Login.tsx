import React, { useState } from 'react';
import imageing from '../assets/Frame 1186.png'; // Adjust the path as necessary

function Login() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
        {/* Left side - Image */}
        <div style={{ width: '552px', height: '767px' }}>
          <img
            src={imageing}
            alt="Modern living room interior"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side - Form */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '752px',
            backgroundColor: '#F9F5F2',
            padding: '60px'
          }}
        >
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-1">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                Let's Build Beautiful<br />Together
              </h1>
            </div>

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              style={{ height: '48px' }}
            />

            {/* Phone Input */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              style={{ height: '48px' }}
            />

            {/* Continue Button */}
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-[12px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              style={{ height: '48px' }}
            >
              Continue with email
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#F9F5F2] text-gray-500">or</span>
              </div>
            </div>

            {/* Google Button */}
            <button
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[12px] hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              style={{ height: '48px' }}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                {/* Add correct Google path icons here */}
                <path fill="#4285F4" d="..." />
                <path fill="#34A853" d="..." />
                <path fill="#FBBC05" d="..." />
                <path fill="#EA4335" d="..." />
              </svg>
              <span className="text-gray-700 font-medium text-sm">Continue with Google</span>
            </button>

            {/* Terms */}
            <div className="text-center text-xs text-gray-500 mt-6">
              By clicking continue, you agree to our{' '}
              <a href="#" className="text-gray-700 hover:text-gray-900 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-gray-700 hover:text-gray-900 underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
