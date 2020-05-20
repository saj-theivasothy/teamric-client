import React from "react";
import * as d3 from "d3";

import Axis from "./Base/Axis";
import Chart from "./Base/Chart";
import Circles from "./Base/Circles";
import { useChartDimensions } from "./Base/utils";

const ScatterChart = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 20,
  });

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAccessorScaled = (d) => xScale(xAccessor(d));
  const yAccessorScaled = (d) => yScale(yAccessor(d));
  const keyAccessor = (d, i) => i;

  return (
    <div className="Scatter" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimensions={dimensions}
          dimension="x"
          scale={xScale}
          label={xLabel}
          formatTick={d3.format(",")}
        />
        <Axis
          dimensions={dimensions}
          dimension="y"
          scale={yScale}
          label={yLabel}
          formatTick={d3.format(",")}
        />
        <Circles
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          radius={5}
        />
      </Chart>
    </div>
  );
};

export default ScatterChart;
