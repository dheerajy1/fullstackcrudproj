const sql = require("msnodesqlv8");

const sqlConfig = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  server: process.env.MSSQL_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    Trusted_Connection: "Yes",
    Driver: "SQL Server Native Client 11.0", // change to true for local dev / self-signed certs
  },
  port: process.env.MSSQL_PORT,
};

module.exports = { sql, sqlConfig };

/*
// config for your database
var config = {
    user: 'sa',
    password: 'mypassword',
    server: 'localhost', 
    database: 'SchoolDB' 
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select * from Student', function (err, recordset) {

        if (err) console.log(err)

        // send records as a response
        res.send(recordset);

    });
});
*/
