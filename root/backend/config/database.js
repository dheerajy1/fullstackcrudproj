const { ConnectionPool } = require("mssql");

const pool = ConnectionPool({
  host: process.env.MSSQL_HOST,
  port: process.env.MSSQL_PORT,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  connectionLimit: 10,
});

module.exports = pool;

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