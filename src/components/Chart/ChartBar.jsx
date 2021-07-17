import React from "react";

const ChartBar = (props) => {
  return (
    <div>
      <div className="chartbar__inner">
        <div className="chartbar__fill"></div>
      </div>
      <div className="chartbar__label">
          {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
