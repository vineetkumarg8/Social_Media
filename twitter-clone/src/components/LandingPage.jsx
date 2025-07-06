import React, { useState } from 'react';
import { Twitter } from 'lucide-react';
import AuthModal from './AuthModal';

const LandingPage = ({ onSignIn }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="w-8 h-8 bg-twitter-blue rounded-full flex items-center justify-center">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="twitter-btn twitter-btn-secondary px-6 py-2 rounded-full"
          >
            Sign in
          </button>
        </header>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Happening now
            </h1>
            
            <h2 className="text-3xl lg:text-4xl font-bold">
              Join Twitter today.
            </h2>

            <div className="space-y-4 max-w-sm">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
              >
                <span>🔍</span>
                <span>Sign up with Google</span>
              </button>

              <div className="flex items-center">
                <div className="flex-1 border-t border-gray-800"></div>
                <span className="px-4 text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-800"></div>
              </div>

              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full twitter-btn twitter-btn-primary py-3 text-lg font-bold rounded-full"
              >
                Create account
              </button>

              <p className="text-xs text-gray-500">
                By signing up, you agree to the{' '}
                <a href="#" className="text-twitter-blue hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-twitter-blue hover:underline">
                  Privacy Policy
                </a>
                , including{' '}
                <a href="#" className="text-twitter-blue hover:underline">
                  Cookie Use
                </a>
                .
              </p>

              <div className="pt-8">
                <p className="text-lg font-bold mb-4">Already have an account?</p>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="w-full twitter-btn twitter-btn-secondary py-3 text-lg font-bold rounded-full"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-96 h-96 bg-twitter-blue rounded-full flex items-center justify-center opacity-20">
              <Twitter className="w-64 h-64 text-white" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-twitter-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Follow your interests</h3>
              <p className="text-gray-500">
                Hear about what matters to you and get more of what you love.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-twitter-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Hear what people are talking about</h3>
              <p className="text-gray-500">
                Join the conversation and connect with people worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-twitter-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Join the conversation</h3>
              <p className="text-gray-500">
                Share your thoughts and see what's happening around the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSignIn={onSignIn}
      />
    </div>
  );
};

export default LandingPage;
