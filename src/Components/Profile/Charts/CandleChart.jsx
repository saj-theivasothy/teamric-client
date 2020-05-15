import React from "react";
import * as d3 from "d3";

import Axis from "./Base/Axis";
import Chart from "./Base/Chart";
import Line from "./Base/Line";
import Circles from "./Base/Circles";
import { useChartDimensions } from "./Base/utils";

const CandleChart = ({
  data,
  xAccessor,
  yLowAccessor,
  yHighAccessor,
  xLabel,
  yLabel,
}) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  });

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);

  const yMax = d3.max(data.map((d) => d.high));
  const yMin = d3.min(data.map((d) => d.low));
  const yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAccessorScaled = (d) => xScale(xAccessor(d));

  const yAverageAccessor = (d) => (yLowAccessor(d) + yHighAccessor(d)) / 2;
  const yAverageAccessorScaled = (d) => yScale(yAverageAccessor(d));

  return (
    <div className="Candle" ref={ref}>
      <Chart dimensions={dimensions}>
        <Axis
          dimension="x"
          scale={xScale}
          formatTick={d3.timeFormat("%-b %-d")}
          label={xLabel}
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
          keyAccessor={(d, i) => i}
          xAccessor={xAccessorScaled}
          yAccessor={yAverageAccessorScaled}
          radius={5}
        />
        <React.Fragment>
          {data.map((d, i) => (
            <line
              x1={xAccessorScaled(d)}
              x2={xAccessorScaled(d)}
              y1={yScale(d.low)}
              y2={yScale(d.high)}
              stroke="purple"
              strokeWidth="1"
            />
          ))}
        </React.Fragment>
      </Chart>
    </div>
  );
};

export default CandleChart;
