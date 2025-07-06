import React from 'react';
import TweetComposer from './TweetComposer';
import Tweet from './Tweet';
import { useTwitter } from '../context/TwitterContext';

const Feed = () => {
  const { tweets } = useTwitter();

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      {/* Header */}
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Home</h1>
      </div>

      {/* Tweet Composer */}
      <TweetComposer />

      {/* Tweet Feed */}
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
