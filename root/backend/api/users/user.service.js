const { sql, sqlConfig } = require("../../config/database");

module.exports = {
  getUsers: (callBack) => {
    sql.connect(sqlConfig).then((pool) => {
      pool.query(
        `select [customer_id],[first_name],[last_name],[gender],[email],[number] from [customer]`,
        (error, results, fields) => {
          if (error) {
            console.log(`SERVER ERROR: Could not execute query`);
            callBack(error);
          }
          console.log(results);
          return callBack(null, results);
        }
      );
    });
  },
};
