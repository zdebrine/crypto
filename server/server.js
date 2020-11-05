require('dotenv').config();
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
const TOKEN = process.env.TOKEN;
console.log(TOKEN);

app.use(cors());
app.use(express.static("../client/dist")); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get("/prices/:currency", (req, res) => {
  axios.get(
    `https://api.nomics.com/v1/currencies/sparkline?key=${TOKEN}&ids=${req.params.currency}&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z`)
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

// Listening for requests on the PORT
app.listen(PORT, () => {
  console.log("Serving up now at " + JSON.stringify(PORT));
});
