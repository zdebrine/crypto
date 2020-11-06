import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

const CurrencyStats = ({ currencies, view, setView }) => {
  const changeView = (e) => {
    setView(e.target.innerText);
  };
  return (
    <div className="stats">
      <Grid item xs={12}>
        <h2>{view}</h2>
      </Grid>
      {currencies.map((currency) => (
        <Grid item xs={12}>
          <h3 onClick={changeView}>{currency}</h3>
        </Grid>
      ))}
    </div>
  );
};

export default CurrencyStats;
