import React from "react";
import * as d3 from "d3";

import Axis from "./Base/Axis";
import Chart from "./Base/Chart";
import Bars from "./Base/Bars";
import { useChartDimensions } from "./Base/utils";

const BarChart = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  });

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xAccessor)])
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleBand()
    .domain(data.map(yAccessor))
    .range([0, dimensions.boundedHeight])
    .padding(0.1);

  console.log(dimensions, "dimensions");

  console.log(yScale.domain());
  console.log(yScale.range());

  console.log(dimensions.boundedHeight, "boundedHeight");

  console.log(yScale("Cat 1"));
  console.log(yScale("Cat 2"));

  // since we already specified padding

  const xAccessorScaled = (d) => xScale(0);
  const yAccessorScaled = (d) => yScale(yAccessor(d));

  console.log(yAccessorScaled, "yAccessorScaled");

  const widthAccessorScaled = (d) => xScale(xAccessor(d));
  const heightAccessorScaled = (d) => yScale.bandwidth();
  const keyAccessor = (d, i) => i;

  return (
    <div className="Histogram" ref={ref}>
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
          formatTick={function () {}}
          type="categorical"
        />
        <Bars
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          widthAccessor={widthAccessorScaled}
          heightAccessor={heightAccessorScaled}
        />
      </Chart>
    </div>
  );
};

export default BarChart;
