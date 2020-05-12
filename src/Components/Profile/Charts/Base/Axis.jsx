import React from "react";
import * as d3 from "d3";
import { useDimensionsContext } from "./Chart";

import { AxisHorizontal, AxisVertical } from "./Axes";

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
};

const Axis = ({ dimension, ...props }) => {
  const dimensions = useDimensionsContext();
  const Component = axisComponentsByDimension[dimension];
  if (!Component) return null;

  return <Component dimensions={dimensions} {...props} />;
};

export default Axis;
