// config/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'wwmgfhbn',
  host: 'drona.db.elephantsql.com',
  database: 'wwmgfhbn',
  password: 'WeD-yvOM3STWhNY0ID27MskyS-T8W_aS',
  port: 5432,
});

module.exports = pool;
