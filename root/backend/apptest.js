require("dotenv").config();

const express = require("express");
const app = express();
const sql = require("mssql");

app.use(express.json());

const sqlConfig = {
  server: "localhost", // You can use 'localhost\\instance' to connect to named instance
  database: "lol",
  user: "lol",
  password: "lol",
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Trust self-signed certificatesclear
  },
};
/*
async function connectToSql() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query("SELECT * FROM customer");
    console.dir(result);
  } catch (err) {
    console.error(err);
  }
}

connectToSql();

*/

const router = require("express").Router();

let getUsers = async (req, res) => {
  sql.connect(sqlConfig)
    .then(sqlconnect => {
      console.log("Connected to the database");
      sqlconnect.request();
      return sqlconnect.query(`select [customer_id], [first_name], [last_name], [gender], [email], [number] from [customer]`);
    })
    .then(results => {
      console.log(results);
      res.status(200).json({
        success: 1,
        data: results.recordset,
      });
    })
    .catch(err => {
      if (err) {
        console.error(err);
        res.status(500).send("SERVER ERROR: Could not connect to database or execute query");
      }
    });
};


const userRouter = router.get("/", getUsers);
app.use("/api/users", userRouter);



const port = process.env.APP_PORT || 1000;

app.listen(port, () => {
  console.log(`Server is now live on the PORT : ${port}`);
});
console.log(2);
