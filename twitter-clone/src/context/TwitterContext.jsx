import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  tweets: [
    {
      id: 1,
      user: {
        name: 'John Doe',
        username: 'johndoe',
        avatar: null,
        verified: false
      },
      content: 'Just built an amazing React app! The component architecture is so clean and maintainable. #React #WebDev',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      likes: 42,
      retweets: 12,
      comments: 8,
      liked: false,
      retweeted: false
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        username: 'janesmith',
        avatar: null,
        verified: true
      },
      content: 'Beautiful sunset today! Sometimes you need to step away from the code and appreciate nature. 🌅',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      likes: 128,
      retweets: 34,
      comments: 23,
      liked: true,
      retweeted: false
    },
    {
      id: 3,
      user: {
        name: 'Tech News',
        username: 'technews',
        avatar: null,
        verified: true
      },
      content: 'BREAKING: New JavaScript framework announced! It promises to revolutionize how we build web applications. What are your thoughts?',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      likes: 256,
      retweets: 89,
      comments: 67,
      liked: false,
      retweeted: true
    },
    {
      id: 4,
      user: {
        name: 'Sarah Wilson',
        username: 'sarahwilson',
        avatar: null,
        verified: false
      },
      content: 'Working on a new design system for our company. Consistency is key! 🎨 #DesignSystem #UX',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      likes: 89,
      retweets: 23,
      comments: 15,
      liked: false,
      retweeted: false
    },
    {
      id: 5,
      user: {
        name: 'Dev Community',
        username: 'devcommunity',
        avatar: null,
        verified: true
      },
      content: 'Remember: The best code is code that doesn\'t exist. Always question if you really need that feature before implementing it. 💭',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      likes: 445,
      retweets: 156,
      comments: 89,
      liked: true,
      retweeted: false
    }
  ],
  currentUser: null,
  isAuthenticated: false
};

// Action types
const ACTIONS = {
  LIKE_TWEET: 'LIKE_TWEET',
  RETWEET_TWEET: 'RETWEET_TWEET',
  ADD_TWEET: 'ADD_TWEET',
  ADD_COMMENT: 'ADD_COMMENT',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

// Reducer function
function twitterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LIKE_TWEET:
      return {
        ...state,
        tweets: state.tweets.map(tweet =>
          tweet.id === action.payload.tweetId
            ? {
                ...tweet,
                liked: !tweet.liked,
                likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1
              }
            : tweet
        )
      };

    case ACTIONS.RETWEET_TWEET:
      return {
        ...state,
        tweets: state.tweets.map(tweet =>
          tweet.id === action.payload.tweetId
            ? {
                ...tweet,
                retweeted: !tweet.retweeted,
                retweets: tweet.retweeted ? tweet.retweets - 1 : tweet.retweets + 1
              }
            : tweet
        )
      };

    case ACTIONS.ADD_TWEET:
      if (!state.isAuthenticated) return state;
      const newTweet = {
        id: Date.now(),
        user: state.currentUser,
        content: action.payload.content,
        timestamp: new Date(),
        likes: 0,
        retweets: 0,
        comments: 0,
        liked: false,
        retweeted: false
      };
      return {
        ...state,
        tweets: [newTweet, ...state.tweets]
      };

    case ACTIONS.SIGN_IN:
      return {
        ...state,
        currentUser: action.payload.user,
        isAuthenticated: true
      };

    case ACTIONS.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
}

// Create context
const TwitterContext = createContext();

// Context provider component
export function TwitterProvider({ children }) {
  const [state, dispatch] = useReducer(twitterReducer, initialState);

  const likeTweet = (tweetId) => {
    dispatch({ type: ACTIONS.LIKE_TWEET, payload: { tweetId } });
  };

  const retweetTweet = (tweetId) => {
    dispatch({ type: ACTIONS.RETWEET_TWEET, payload: { tweetId } });
  };

  const addTweet = (content) => {
    dispatch({ type: ACTIONS.ADD_TWEET, payload: { content } });
  };

  const signIn = (user) => {
    dispatch({ type: ACTIONS.SIGN_IN, payload: { user } });
  };

  const signOut = () => {
    dispatch({ type: ACTIONS.SIGN_OUT });
  };

  const value = {
    ...state,
    likeTweet,
    retweetTweet,
    addTweet,
    signIn,
    signOut
  };

  return (
    <TwitterContext.Provider value={value}>
      {children}
    </TwitterContext.Provider>
  );
}

// Custom hook to use the context
export function useTwitter() {
  const context = useContext(TwitterContext);
  if (!context) {
    throw new Error('useTwitter must be used within a TwitterProvider');
  }
  return context;
}
