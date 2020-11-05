import React, { useEffect, useState, createRef } from "react";
import Grid from "@material-ui/core";
import Chart from "chart.js";

const TimeSeriesChart = () => {
  const chartRef = createRef();
  let shade = "#00ff88";

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      layout: {},
      data: {
        labels: [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ],

        datasets: [
          {
            label: "BTC Price",
            data: [5000, 2000, 1569, 2265, 8566, 4432, 4400, 2051, 5900],
            //backgroundColor: [shade],
            borderColor: [shade],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <div className="py-5">
      <canvas id="LineChart" ref={chartRef} />
    </div>
  );
};

export default TimeSeriesChart;
