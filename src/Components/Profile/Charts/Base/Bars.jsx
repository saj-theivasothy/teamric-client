import React, { Fragment } from "react";
import * as d3 from "d3";
import { accessedData } from "./utils";

const Bars = ({
  data,
  keyAccessor,
  xAccessor,
  yAccessor,
  widthAccessor,
  heightAccessor,
  ...props
}) => {
  return (
    <Fragment>
      {data.map((d, i) => (
        <rect
          {...props}
          className="Bars__rect"
          key={keyAccessor(d, i)}
          x={accessedData(xAccessor, d, i)}
          y={accessedData(yAccessor, d, i)}
          width={d3.max([accessedData(widthAccessor, d, i), 0])}
          height={d3.max([accessedData(heightAccessor, d, i), 0])}
        />
      ))}
    </Fragment>
  );
};

export default Bars;
