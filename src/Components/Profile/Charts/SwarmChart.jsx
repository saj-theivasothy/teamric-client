import React from "react";
import * as d3 from "d3";

import Axis from "./Base/Axis";
import Chart from "./Base/Chart";
import Circles from "./Base/Circles";
import { useChartDimensions } from "./Base/utils";

const SwarmChart = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  });

  //   { id: 1, name: "James", virtues: { attr1: 3, attr2: 4 } },

  const virtues = Array.from(new Set(data.map((d) => yAccessor(d))));

  const xScale = d3
    .scaleLinear()
    .domain([1, 5])
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3
    .scalePoint()
    .domain(virtues)
    .range([dimensions.boundedHeight, 0])
    .padding(0.2);

  //   console.log(yScale("Virtue1"), "PIXEL");
  //   console.log(xScale(3.4), "HURTs");

  const simulation = d3
    .forceSimulation(data)
    .force(
      "x",
      d3
        .forceX(function (d) {
          return xScale(xAccessor(d));
        })
        .strength(1)
    )
    .force(
      "y",
      d3.forceY(function (d) {
        return yScale(yAccessor(d));
      })
    )
    .force("collide", d3.forceCollide(6))
    .stop();

  for (var i = 0; i < 120; ++i) simulation.tick();

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
          formatTick={function () {}}
          type="categorical"
        />
        <Circles
          data={data}
          keyAccessor={(d, i) => i}
          xAccessor={(d) => d.x}
          yAccessor={(d) => d.y}
          radius={5}
        />
      </Chart>
    </div>
  );
};

export default SwarmChart;
