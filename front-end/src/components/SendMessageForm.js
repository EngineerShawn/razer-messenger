// src/components/SendMessageForm.js

import React, { useState } from 'react';

const SendMessageForm = ({ addMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(inputText);
    setInputText('');
  };

  return (
    <form className="send-message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessageForm;
