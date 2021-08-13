import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='82302f5a-ec40-43d1-a397-7a6a2551696e'
      userName='zephyrus21'
      userSecret='zephyrus21'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
