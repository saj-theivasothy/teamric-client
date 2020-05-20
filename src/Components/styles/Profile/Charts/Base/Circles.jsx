import React from "react";
import Circle from "./Circle";

const Circles = ({
  data,
  keyAccessor,
  xAccessor,
  yAccessor,
  radius,
  ...props
}) => (
  <React.Fragment>
    {data.map((d, i) => (
      <Circle
        className="Circles__circle"
        key={keyAccessor(d, i)}
        cx={xAccessor(d, i)}
        cy={yAccessor(d, i)}
        r={typeof radius == "function" ? radius(d) : radius}
        {...props}
      />
    ))}
  </React.Fragment>
);

export default Circles;
