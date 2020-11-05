const axios = require("axios");

const getCurrencyData = (currency) => {
  axios
    .get(`/prices/${currency}`)
    .then((response) => {
        return (response.data[0])})
    .catch((err) => console.error(err));
};

module.exports = {
  getCurrencyData,
};
