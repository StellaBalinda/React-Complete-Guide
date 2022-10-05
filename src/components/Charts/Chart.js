import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //a new array of values only from dataPoints will be returned
  const totalMaximum = Math.max(...dataPointValues); // use the spread operator to pull out all 12 elts as stand alone elt instead of array
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum} // biggest value accross the months
        />
      ))}
    </div>
  );
};

export default Chart;
