import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core";
// import { getCurrencyData } from '../../lib/routes.js';
import axios from 'axios';
import TimeSeriesChart from "./TimeSeriesChart.jsx";

const TimeSeriesCard = () => {

    const [currency, setCurrency] = useState('BTC');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(
            `/prices/${currency}`)
            .then((response) => setData(response.data[0]))
            .catch((err) => console.error(err));
      }, []);

  return (
    <div>
      <TimeSeriesChart data={data} />
    </div>
  );
};

export default TimeSeriesCard;
