// frontend/src/App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ChatRoom from './components/ChatRoom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setLoggedIn(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async (username, password) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <>
          <Login handleLogin={handleLogin} />
          <Register handleRegister={handleRegister} />
        </>
      ) : (
        <ChatRoom token={token} />
      )}
    </div>
  );
}

export default App;
