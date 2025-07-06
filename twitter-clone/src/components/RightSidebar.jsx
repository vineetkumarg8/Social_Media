import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

const RightSidebar = () => {
  const trendingTopics = [
    { category: 'Technology', topic: 'React 19', tweets: '45.2K' },
    { category: 'Programming', topic: 'JavaScript', tweets: '128K' },
    { category: 'Trending in Tech', topic: 'AI Development', tweets: '89.1K' },
    { category: 'Web Development', topic: 'Tailwind CSS', tweets: '23.7K' },
    { category: 'Trending', topic: 'Open Source', tweets: '67.3K' },
  ];

  const whoToFollow = [
    { name: 'React', username: 'reactjs', verified: true },
    { name: 'Tailwind CSS', username: 'tailwindcss', verified: true },
    { name: 'Vercel', username: 'vercel', verified: true },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Search Bar */}
      <div className="sticky top-0 bg-black pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-twitter-blue"
          />
        </div>
      </div>

      {/* What's Happening */}
      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">What's happening</h2>
        </div>
        <div>
          {trendingTopics.map((trend, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer border-b border-gray-800 last:border-b-0"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{trend.category}</p>
                  <p className="font-bold text-white">{trend.topic}</p>
                  <p className="text-gray-500 text-sm">{trend.tweets} Tweets</p>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-500 hover:text-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button className="text-twitter-blue hover:underline">Show more</button>
        </div>
      </div>

      {/* Who to Follow */}
      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Who to follow</h2>
        </div>
        <div>
          {whoToFollow.map((user, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer border-b border-gray-800 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-white">{user.name}</span>
                      {user.verified && (
                        <div className="w-4 h-4 bg-twitter-blue rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <span className="text-gray-500">@{user.username}</span>
                  </div>
                </div>
                <button className="twitter-btn twitter-btn-secondary px-4 py-1 text-sm">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button className="text-twitter-blue hover:underline">Show more</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-gray-500 text-sm space-y-2 px-4">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Ads info</a>
          <a href="#" className="hover:underline">More</a>
        </div>
        <div>© 2024 Twitter Clone</div>
      </div>
    </div>
  );
};

export default RightSidebar;
