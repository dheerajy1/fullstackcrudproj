const { sql, sqlConfig } = require("../../config/database");

module.exports = {
  getUsers: (callBack) => {
    sql.query(
      sqlConfig,
      `select [customer_id],[first_name],[last_name],gender,email,number 
         from [customer] `,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
};
