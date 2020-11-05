require('dotenv').config();
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
const TOKEN = process.env.API_KEY;
console.log(TOKEN);

app.use(cors());
app.use(express.static("../client/dist")); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get("/prices/:currency", (req, res) => {
  axios.get(
    `https://api.nomics.com/v1/currencies/sparkline?key=33a1cc1d8e93e58d92d8fb2d0b8110f4&ids=${req.params.currency}&start=2018-04-14T00%3A00%3A00Z&end=2020-07-14T00%3A00%3A00Z`)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

// Listening for requests on the PORT
app.listen(PORT, () => {
  console.log("Serving up now at " + JSON.stringify(PORT));
});
