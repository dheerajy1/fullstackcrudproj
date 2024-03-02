const express = require("express");
const app = express();

require("dotenv").config();


app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: 'This is rest API, Working'
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running");
});
