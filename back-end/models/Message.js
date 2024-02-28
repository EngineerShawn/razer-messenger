// backend/models/Message.js

const pool = require('../config/db');

class Message {
  async createMessage(userId, text) {
    const query = 'INSERT INTO messages (user_id, text) VALUES ($1, $2) RETURNING *';
    const values = [userId, text];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.error('Error creating message:', err);
    }
  }

  async getAllMessages() {
    const query = 'SELECT * FROM messages';
    try {
      const { rows } = await pool.query(query);
      return rows;
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  }
}

module.exports = Message;
