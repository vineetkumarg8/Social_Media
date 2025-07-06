import React from 'react';
import Layout from './components/Layout';
import { TwitterProvider } from './context/TwitterContext';

function App() {
  return (
    <TwitterProvider>
      <Layout />
    </TwitterProvider>
  );
}

export default App;
