import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import MobileBottomNav from './MobileBottomNav';
import LandingPage from './LandingPage';
import { useTwitter } from '../context/TwitterContext';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, signIn } = useTwitter();

  if (!isAuthenticated) {
    return <LandingPage onSignIn={signIn} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-twitter mx-auto flex relative">
        {/* Left Sidebar - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block w-16 lg:w-64 xl:w-80 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen border-x border-gray-800 md:border-l-0">
          <Feed />
        </div>

        {/* Right Sidebar - Hidden on mobile and tablet, shown on desktop */}
        <div className="w-80 flex-shrink-0 hidden xl:block">
          <RightSidebar />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default Layout;
