const sql = require("mssql");

const sqlConfig = {
  server: process.env.MSSQL_HOST,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },

  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Trust self-signed certificatesclear
  },
  port: +process.env.MSSQL_PORT,
};

module.exports = { sql, sqlConfig };
