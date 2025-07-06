import React from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, CheckCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useTwitter } from '../context/TwitterContext';

const Tweet = ({ tweet }) => {
  const { likeTweet, retweetTweet } = useTwitter();

  const handleLike = () => {
    likeTweet(tweet.id);
  };

  const handleRetweet = () => {
    retweetTweet(tweet.id);
  };

  const formatTimestamp = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-950 transition-colors duration-200 cursor-pointer">
      <div className="flex space-x-3">
        {/* User Avatar */}
        <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
        
        {/* Tweet Content */}
        <div className="flex-1 min-w-0">
          {/* User Info */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-bold text-white hover:underline">
              {tweet.user.name}
            </span>
            {tweet.user.verified && (
              <CheckCircle className="w-4 h-4 text-twitter-blue fill-current" />
            )}
            <span className="text-gray-500">@{tweet.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{formatTimestamp(tweet.timestamp)}</span>
            <div className="ml-auto">
              <MoreHorizontal className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          {/* Tweet Text */}
          <div className="text-white mb-3 leading-normal">
            {tweet.content}
          </div>
          
          {/* Tweet Actions */}
          <div className="flex items-center justify-between max-w-md">
            {/* Comment */}
            <div className="tweet-action-btn group">
              <div className="p-2 rounded-full group-hover:bg-twitter-blue group-hover:bg-opacity-10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm">{tweet.comments}</span>
            </div>
            
            {/* Retweet */}
            <div
              className={`tweet-action-btn group ${tweet.retweeted ? 'text-green-500' : ''}`}
              onClick={handleRetweet}
            >
              <div className="p-2 rounded-full group-hover:bg-green-500 group-hover:bg-opacity-10">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span className="text-sm">{tweet.retweets}</span>
            </div>

            {/* Like */}
            <div
              className={`tweet-action-btn group ${tweet.liked ? 'text-red-500' : ''}`}
              onClick={handleLike}
            >
              <div className="p-2 rounded-full group-hover:bg-red-500 group-hover:bg-opacity-10">
                <Heart className={`w-5 h-5 ${tweet.liked ? 'fill-current' : ''}`} />
              </div>
              <span className="text-sm">{tweet.likes}</span>
            </div>
            
            {/* Share */}
            <div className="tweet-action-btn group">
              <div className="p-2 rounded-full group-hover:bg-twitter-blue group-hover:bg-opacity-10">
                <Share className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
