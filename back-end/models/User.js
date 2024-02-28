// backend/models/User.js

const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class User {
  async createUser(username, password) {
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
    const values = [username, password];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.error('Error creating user:', err);
    }
  }

  async findUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.error('Error finding user by username:', err);
    }
  }
}

module.exports = User;
