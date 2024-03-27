const { getUsers } = require("./user.service");

module.exports = {
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        //res.status(500).send("SERVER ERROR:");
        return;
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
