import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                  IM
                </div>
                <span className="text-xl font-bold">Interior Mandi</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Your trusted platform to compare interior design vendors, request structured quotes, and kickstart your dream space — all in one place.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Explore Vendors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Get a Quote</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Budget-Friendly Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track My Quote</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Modular Kitchen Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Full Home Renovation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Furniture Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Civil & False Ceiling Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interior Styling & Finishing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone size={16} className="text-gray-400 mr-3" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-gray-400 mr-3" />
                  <span className="text-gray-400">support@interiormandi.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Mon-Sat, 10 AM - 7 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Interior Mandi. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;