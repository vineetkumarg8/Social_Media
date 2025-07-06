import React, { useState } from 'react';
import { X, Twitter } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, onSignIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    username: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - in a real app, this would call an API
    const userData = {
      name: formData.name || 'Demo User',
      username: formData.username || 'demouser',
      email: formData.email,
      avatar: null,
      verified: false
    };
    onSignIn(userData);
    onClose();
  };

  const handleGoogleSignIn = () => {
    // Mock Google Sign-in
    const userData = {
      name: 'Google User',
      username: 'googleuser',
      email: 'user@gmail.com',
      avatar: null,
      verified: true
    };
    onSignIn(userData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-gray-800 rounded-2xl w-full max-w-md p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 hover:bg-gray-900 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Twitter Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-10 h-10 bg-twitter-blue rounded-full flex items-center justify-center">
            <Twitter className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-8">
          {isSignUp ? 'Join Twitter today' : 'Sign in to Twitter'}
        </h2>

        {/* Google Sign-in Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-black font-bold py-3 px-4 rounded-full mb-4 hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <span>🔍</span>
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-800"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-800"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-transparent border border-gray-800 rounded-lg focus:border-twitter-blue focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-3 bg-transparent border border-gray-800 rounded-lg focus:border-twitter-blue focus:outline-none"
                required
              />
            </>
          )}
          
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 bg-transparent border border-gray-800 rounded-lg focus:border-twitter-blue focus:outline-none"
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 bg-transparent border border-gray-800 rounded-lg focus:border-twitter-blue focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full twitter-btn twitter-btn-primary py-3 text-lg font-bold rounded-full"
          >
            {isSignUp ? 'Sign up' : 'Sign in'}
          </button>
        </form>

        {/* Toggle Sign up/Sign in */}
        <div className="text-center mt-6">
          <span className="text-gray-500">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </span>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-twitter-blue hover:underline ml-2"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
