import React from "react";
import * as d3 from "d3";

import Chart from "./Base/Chart";
import Line from "./Base/Line";

import Axis from "./Base/Axis";

import { useChartDimensions } from "./Base/utils";

const TimelineChart = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  const [ref, dimensions] = useChartDimensions();

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAccessorScaled = (d) => xScale(xAccessor(d));
  const yAccessorScaled = (d) => yScale(yAccessor(d));
  const y0AccessorScaled = yScale(yScale.domain()[0]);

  return (
    <div className="Timeline" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimension="x"
          scale={xScale}
          formatTick={d3.timeFormat("%-b %-d")}
          label={xLabel}
        />
        <Axis
          dimension="y"
          scale={yScale}
          label={yLabel}
          formatTick={d3.format(",")}
        />
        <Line
          type="area"
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          y0Accessor={y0AccessorScaled}
        />
        <Line
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
        />
      </Chart>
    </div>
  );
};

export default TimelineChart;
