import React from 'react';
import { User, FileText, FolderOpen, Settings } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  user: { name: string; avatar: string };
  onNewQuote?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange, user, onNewQuote }) => {
  const menuItems = [
    { id: 'proposals', label: 'Proposals', icon: FileText },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNewQuote = () => {
    if (onNewQuote) {
      onNewQuote();
    } else {
      onPageChange('onboarding');
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IM</span>
          </div>
        </div>
      </div>

      {/* New Quote Button */}
      <div className="px-6 mb-8">
        <button 
          onClick={handleNewQuote}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
        >
          + New Quote
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile at Bottom */}
      <div className="p-6 border-t border-gray-200">
        <button 
          onClick={() => onPageChange('profile')}
          className="flex items-center space-x-3 w-full hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
        >
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium text-gray-700">{user.name}</span>
        </button>
      </div>
    </div>
  );
};