import React, { useEffect, useState, createRef } from "react";
import Grid from "@material-ui/core";
import Chart from "chart.js";

const TimeSeriesChart = (props) => {
  console.log(props);
  const chartRef = createRef();
  let shade = "#00ff88";

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      layout: {},
      data: {
        labels: props.data.timestamps,

        datasets: [
          {
            label: `${props.data.currency} Price`,
            data: props.data.prices,
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
          xAxes: [{
            ticks: {
                display: false //this will remove only the label
            }
        }],
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
