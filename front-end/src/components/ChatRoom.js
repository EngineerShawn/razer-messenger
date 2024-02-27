// src/components/ChatRoom.js

import React, { useState } from 'react';
import Message from './Message';
import SendMessageForm from './SendMessageForm';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { text }]);
  };

  return (
    <div className="chat-room">
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} />
        ))}
      </div>
      <SendMessageForm addMessage={addMessage} />
    </div>
  );
};

export default ChatRoom;
