import React from 'react';
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Twitter,
  LogOut
} from 'lucide-react';
import { useTwitter } from '../context/TwitterContext';

const Sidebar = () => {
  const { currentUser, signOut } = useTwitter();
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: MoreHorizontal, label: 'More' },
  ];

  return (
    <div className="fixed h-full w-16 lg:w-64 xl:w-80 p-2 lg:p-4">
      {/* Twitter Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-twitter-blue rounded-full flex items-center justify-center mx-auto lg:mx-0">
          <Twitter className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item justify-center lg:justify-start ${
              item.active ? 'font-bold' : 'font-normal'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xl hidden lg:block">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Tweet Button */}
      <div className="mt-8">
        <button className="twitter-btn twitter-btn-primary w-full lg:w-auto lg:px-8 py-3 text-lg font-bold rounded-full">
          <span className="hidden lg:block">Tweet</span>
          <span className="lg:hidden">+</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-4 left-2 right-2 lg:left-4 lg:right-4 space-y-2">
        <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors duration-200 cursor-pointer justify-center lg:justify-start">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
          <div className="hidden lg:block flex-1">
            <div className="font-bold">{currentUser?.name || 'User'}</div>
            <div className="text-gray-500">@{currentUser?.username || 'username'}</div>
          </div>
          <MoreHorizontal className="w-5 h-5 ml-auto hidden lg:block" />
        </div>

        {/* Sign Out Button */}
        <button
          onClick={signOut}
          className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors duration-200 cursor-pointer justify-center lg:justify-start w-full text-red-500"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-xl hidden lg:block">Sign out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
