const express = require("express");
const app = express();
const sql = require("mssql");

app.use(express.json());

const config = {
  user: "lol",
  password: "lol",
  server: "localhost", // You can use 'localhost\\instance' to connect to named instance
  database: "lol",

  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Trust self-signed certificatesclear
  },
};

async function connectToSql() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM customer");
    console.dir(result);
  } catch (err) {
    console.error(err);
  }
}

connectToSql();

const port = process.env.APP_PORT || 1000;

app.listen(port, () => {
  console.log(`Server is now live on the PORT : ${port}`);
});
