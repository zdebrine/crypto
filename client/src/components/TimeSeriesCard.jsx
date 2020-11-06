import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
// import { getCurrencyData } from '../../lib/routes.js';
import axios from "axios";
import TimeSeriesChart from "./TimeSeriesChart.jsx";

const TimeSeriesCard = ({ currencies, view }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/prices/${view}`)
      .then((response) => setData(response.data[0]))
      .catch((err) => console.error(err));
  }, [view]);

  return (
    <div>
      <TimeSeriesChart data={data} />
    </div>
  );
};

export default TimeSeriesCard;
