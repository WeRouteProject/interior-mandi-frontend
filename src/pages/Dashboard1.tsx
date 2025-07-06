import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Clock, Search, CheckCircle, Briefcase, Shield, Star, Users, Award, Home, Bath, Utensils, Bed, Sofa, Palette, Wrench, Quote, BarChart3, Eye, Calendar } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import whiteEllipse from '../assets/realistic-white-cloud-png.webp';
import pic1 from '../assets/dash1.png';
import pic2 from '../assets/dash2.png';
import pic3 from '../assets/dash3.png';
import testimonialImage from '../assets/Testimonial.png';
const HomePage = () => {

  const services = [
    { icon: Home, label: 'Home Decor', color: 'text-blue-600' },
    { icon: Bath, label: 'Bathroom', color: 'text-teal-600' },
    { icon: Utensils, label: 'Dining Hall', color: 'text-orange-600' },
    { icon: Bed, label: 'Bed Room', color: 'text-purple-600' },
    { icon: Sofa, label: 'Modular Kitchen', color: 'text-green-600' },
    { icon: Palette, label: 'Full Home Renovation', color: 'text-pink-600' },
    { icon: Wrench, label: 'Furniture', color: 'text-indigo-600' },
  ];

  const stats = [
    { value: '₹10L+', label: 'Savings per client' },
    { value: '189', label: 'Hours Saved' },
    { value: '4.8/5★', label: 'User Ratings' },
    { value: '75+', label: 'Partner Vendors' }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);



  return (
    <div>
      {/* Hero Section */}
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

      {/* Services Navigation */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex h-9 items-center bg-gray-100 hover:bg-gray-100 transition-colors duration-200 rounded-full px-4 py-3 cursor-pointer group lg:flex-1 lg:justify-center"
              >
                <div className={`w-8 h-7 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-4 h-4 ${service.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {/* ROW 1: Text Left | Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="w-full lg:w-1/2" data-aos="fade-up-right">
              <div className="max-w-[500px]">
                <h2 className="font-playfair font-bold text-[40px] leading-[46px] tracking-[-1px]">
                  Interior Proposals from Verified Vendors
                </h2>
                <p className="font-lato text-[16px] leading-[24px] mt-4">
                  Share your requirements once — receive curated quotes <br /> from verified interior vendors, ready to compare.
                </p>
                <div className="space-y-4 mt-6">
                  {["No hidden costs", "No chasing vendors", "Transparent Pricing", "Expert Execution"].map((item, i) => (
                    <div className="flex items-center" key={i}>
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-[186px] h-[37px] rounded-[12px] bg-indigo-600 text-white font-semibold mt-6 hover:bg-indigo-700 transition-colors">
                  Request Comparison
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2" data-aos="zoom-in-left">
              <div className="max-w-[500px] hover-rotate-z mx-auto">
                <img src={pic1} alt="Proposal" className="rounded-2xl shadow-xl w-full h-96 object-cover" />
              </div>
            </div>
          </div>

          {/* ROW 2: Image Left | Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 lg:order-1 transform rotate-3 hover:rotate-0 transition-transform duration-300" data-aos="flip-left">
              <div className="max-w-[500px] hover-rotate-z">
                <img src={pic2} alt="Workspace" className="rounded-2xl shadow-xl w-full h-96 object-cover" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 lg:order-2 flex lg:justify-end" data-aos="fade-up">
              <div className="max-w-[550px]">
                <h2 className="font-playfair font-bold text-[40px] leading-[46px] tracking-[-1px]">
                  Get hired for the work you love to do
                </h2>
                <p className="font-lato text-[16px] leading-[24px] mt-4">
                  We'll advertise your critical marketing team. Among the very best, so your business runs at its fullest, without having business opportunities left unconsulted.
                </p>
                <div className="space-y-4 mt-6">
                  {[
                    "Showcase Your Expertise",
                    "No Bidding Wars, Just Real Work",
                    "Pay-Free on Delivery, We Handle the Rest"
                  ].map((item, i) => (
                    <div className="flex items-center" key={i}>
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-[186px] h-[37px] rounded-[12px] bg-indigo-600 text-white font-semibold mt-6 hover:bg-indigo-700 transition-colors">
                  Start Advertising
                </button>
              </div>
            </div>
          </div>

          {/* ROW 3: Text Left | Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="w-full lg:w-1/2" data-aos="fade-up-right" data-aos-delay="100">
              <div className="max-w-[500px]">
                <h2 className="font-playfair font-bold text-[40px] leading-[46px] tracking-[-1px] mb-6">
                  Transparent Project Tracking
                </h2>
                <p className="font-lato text-[16px] leading-[24px] text-gray-600 mb-8">
                  Track each step of your project from quote to completion.
                </p>
                <div className="space-y-4 mb-6">
                  {["Payment stages", "Timeline updates"].map((item, i) => (
                    <div className="flex items-center" key={i}>
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-[186px] h-[37px] rounded-[12px] bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                  Track Your Project
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 " data-aos="zoom-in" data-aos-delay="200">
              <div className="max-w-[500px] hover-rotate-z mx-auto">
                <img src={pic3} alt="Tracking" className=" hover-tilt rounded-2xl shadow-xl w-full h-96 object-cover" />
              </div>
            </div>
          </div>

        </div>

        <style>{`
  .hover-rotate-z {
  perspective: 1000px;
}

.hover-rotate-z img {
  transform: rotateZ(0deg);
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.hover-rotate-z:hover img {
  transform: rotateZ(5deg);
}

  `}</style>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-[35px] leading-[46px] tracking-[-1px]">
              Reducing complexity and delivering<br />
              meaningful outcomes
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[rgb(83,56,200)] mb-2">
                  {stat.value}
                </div>
                <div className="text-rgba(52, 51, 48, 1) font-arimo-hebrew-subset">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white relative w-[1280px] h-[500px] mx-auto rounded-[20px] overflow-hidden shadow-lg">
  {/* Background Image with Left Gradient Overlay */}
  
  <div className="absolute inset-0">
    <img
      src={testimonialImage}
      alt="Living room interior"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 h-full flex items-center px-10 my-20">
    <div className="max-w-xl text-white space-y-3">
      
      <h2 className="text-3xl font-bold leading-snug pb-0">
        Living Rooms That <br /> Make a Statement
      </h2>
      <p className="text-small text-gray-100 pt-2">
        Set the tone for your home with sleek TV units, feature walls, <br />and versatile seating plans.
      </p>
      <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
        Explore
      </button>
    </div>
  </div>

  {/* Bottom Navigation */}
  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-white text-xs">
    {/* Left */}
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div>
        <div className="font-medium">Kitchen</div>
        <div className="underline text-[11px]">120 Samples</div>
      </div>
    </div>

    {/* Right */}
    <div className="flex items-center space-x-2">
      <div className="text-right">
        <div className="font-medium">Wardrobe & Storage</div>
        <div className="underline text-[11px]">120 Samples</div>
      </div>
      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="bg-white py-16 my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-8 text-black-600 mx-auto mb-8" />
          <blockquote className="text-2xl lg:text-2xl font-lato italic text-gray-900 mb-2">
           We love Interior Mandi! It makes the experience as a pro convenient and straightforward. Clients love it too! <br />
              </blockquote>
          <div className="text-gray-600 font-lato">
            David James | Homerd Furninshing
          </div>
        </div>
      </section>



    </div>
  );
};

export default HomePage;