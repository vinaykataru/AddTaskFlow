const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'vinay',
  database: 'postgres' // connect to default db
});

client.connect();

client.query('CREATE DATABASE tasksdb', (err, res) => {
  if (err) {
    console.log('DB already exists or error:', err.message);
  } else {
    console.log('DB created');
  }
  client.end();
});