const pg = require('pg');

const pool = new pg.Pool({
user: 'postgres',
password: 'password',
host: 'localhost',
port: 5433,
database: 'postgres',
ssl: false
});

module.exports = pool;