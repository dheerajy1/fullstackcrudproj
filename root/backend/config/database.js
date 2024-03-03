const { ConnectionPool } = require("mssql");

const pool = createPool({
  host: process.env.MSSQL_HOST,
  port: process.env.MSSQL_PORT,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  connectionLimit: 10,
});

module.exports = pool;