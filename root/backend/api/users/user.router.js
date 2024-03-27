const router = require("express").Router();

const { getUsers } = require("./user.controller");

router.get("/", getUsers);


module.exports = router