import React from "react";
import Grid from "@material-ui/core/Grid";
import TimeSeriesCard from "./components/TimeSeriesCard.jsx";

const App = () => {
  return (
    <body>
      <h1>BTC</h1>
      <Grid container direction="row">
        <Grid item xs={12} md={8}>
          <TimeSeriesCard />
        </Grid>
      </Grid>
    </body>
  );
};

export default App;
