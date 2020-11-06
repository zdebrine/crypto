import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import TimeSeriesCard from "./components/TimeSeriesCard.jsx";
import CurrencyStats from "./components/CurrencyStats.jsx";

const App = () => {
  const [currencies, setCurrencies] = useState(['BTC', 'ETH', 'DOGE']);
  const [view, setView] = useState('ETH');

  /* useEffect(() => {
    let currentView = currencies.findIndex(current => current === view);
    let newCurrencies = currencies.splice(currentView, 1);
    setCurrencies(newCurrencies);
  }, [view]) */

  return (
    <body>
      <h1>{view}</h1>
      <Grid container direction="row">
        <Grid item xs={12} md={8}>
          <TimeSeriesCard currencies={currencies} view={view} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CurrencyStats currencies={currencies} view={view} setView={setView}/>
        </Grid>
      </Grid>
    </body>
  );
};

export default App;
