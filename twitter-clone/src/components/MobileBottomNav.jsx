import React from 'react';
import { Home, Search, Bell, Mail } from 'lucide-react';

const MobileBottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-200 ${
              item.active 
                ? 'text-white' 
                : 'text-gray-500 hover:text-white hover:bg-gray-900'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;
