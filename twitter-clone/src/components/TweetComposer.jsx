import React, { useState } from 'react';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';
import { useTwitter } from '../context/TwitterContext';

const TweetComposer = () => {
  const [tweetText, setTweetText] = useState('');
  const maxLength = 280;
  const { addTweet } = useTwitter();

  const handleTweet = () => {
    if (tweetText.trim()) {
      addTweet(tweetText);
      setTweetText('');
    }
  };

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex space-x-3">
        {/* User Avatar */}
        <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
        
        {/* Tweet Input */}
        <div className="flex-1">
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
            className="twitter-input min-h-[120px]"
            maxLength={maxLength}
          />
          
          {/* Tweet Options */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <Image className="w-5 h-5 text-twitter-blue cursor-pointer hover:bg-twitter-blue hover:bg-opacity-10 rounded-full p-1 w-8 h-8" />
              <Smile className="w-5 h-5 text-twitter-blue cursor-pointer hover:bg-twitter-blue hover:bg-opacity-10 rounded-full p-1 w-8 h-8" />
              <Calendar className="w-5 h-5 text-twitter-blue cursor-pointer hover:bg-twitter-blue hover:bg-opacity-10 rounded-full p-1 w-8 h-8" />
              <MapPin className="w-5 h-5 text-twitter-blue cursor-pointer hover:bg-twitter-blue hover:bg-opacity-10 rounded-full p-1 w-8 h-8" />
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Character Count */}
              <div className={`text-sm ${
                tweetText.length > maxLength * 0.8 
                  ? tweetText.length > maxLength 
                    ? 'text-red-500' 
                    : 'text-yellow-500'
                  : 'text-gray-500'
              }`}>
                {maxLength - tweetText.length}
              </div>
              
              {/* Tweet Button */}
              <button
                onClick={handleTweet}
                disabled={!tweetText.trim() || tweetText.length > maxLength}
                className={`twitter-btn px-6 py-2 rounded-full font-bold ${
                  !tweetText.trim() || tweetText.length > maxLength
                    ? 'bg-twitter-blue bg-opacity-50 text-white cursor-not-allowed'
                    : 'twitter-btn-primary'
                }`}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer;
