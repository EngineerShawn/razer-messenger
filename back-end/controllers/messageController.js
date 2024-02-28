// backend/controllers/messageController.js

const Message = require('../models/Message');

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.getAllMessages();
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error getting messages:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createMessage = async (req, res) => {
  const { userId, text } = req.body;
  try {
    const newMessage = await Message.createMessage(userId, text);
    res.status(201).json({ message: 'Message created successfully', message: newMessage });
  } catch (err) {
    console.error('Error creating message:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllMessages, createMessage };
