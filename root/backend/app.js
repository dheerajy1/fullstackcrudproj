require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.APP_PORT || 1000;

app.use(cors());

const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);


app.listen(port, () => {
  console.log(`Server is now live on the PORT : ${port}`);
});
