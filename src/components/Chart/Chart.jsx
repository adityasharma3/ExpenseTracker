import React from "react";
import Chartbar from "./ChartBar";

const Chart = (props) => {
  return (
    <div>
      {props.datapoints.map((datapont) => (
        <ChartBar
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
