import React from "react";
import * as d3 from "d3";

import Axis from "./Base/Axis";
import Chart from "./Base/Chart";
import Circles from "./Base/Circles";
import { useChartDimensions } from "./Base/utils";

const QuadrantChart = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
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

  const arrowColor = "#a9355a";

  return (
    <div className="Quadrant" ref={ref}>
      <Chart dimensions={dimensions}>
        <defs>
          <marker
            id="arrow"
            refX="4"
            refY="4"
            markerWidth="30"
            markerHeight="30"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path
              d="M 0,0 8,4 0,8 3,4"
              style={{ fill: "rgb(169, 53, 90)" }}
            ></path>
          </marker>
        </defs>
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
        {/* <rect
          x={0}
          y={0}
          width={dimensions.boundedWidth}
          height={dimensions.boundedHeight}
          fill="grey"
          opacity="0.2"
        /> */}

        <line
          x1="0"
          y1={dimensions.boundedHeight}
          x2="0"
          y2={dimensions.boundedHeight - 50}
          strokeWidth="1"
          stroke="#a9355a"
          markerEnd="url(#arrow)"
        />

        <line
          x1={0}
          y1={dimensions.boundedHeight}
          x2={50}
          y2={dimensions.boundedHeight}
          strokeWidth="1"
          stroke="#a9355a"
          markerEnd="url(#arrow)"
        />

        <rect
          x={dimensions.boundedWidth / 2}
          y={0}
          width={dimensions.boundedWidth / 2}
          height={dimensions.boundedHeight / 2}
          fill="#9980fa"
          opacity="0.2"
        />

        <text
          textAnchor="middle"
          dominantBaseline="central"
          x={dimensions.boundedWidth - 50}
          y={50}
          style={{ fill: "#FFBCBC" }}
        >
          Leader
        </text>
        <text
          textAnchor="middle"
          dominantBaseline="central"
          x={50}
          y={50}
          style={{ fill: "#FFBCBC" }}
        >
          Executor
        </text>

        <text
          textAnchor="middle"
          dominantBaseline="central"
          x={50}
          y={dimensions.boundedHeight - 50}
          style={{ fill: "#FFBCBC" }}
        >
          Novice
        </text>

        <text
          textAnchor="middle"
          dominantBaseline="central"
          x={dimensions.boundedWidth - 50}
          y={dimensions.boundedHeight - 50}
          style={{ fill: "#FFBCBC" }}
        >
          Analyst
        </text>
        <Circles
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          radius={4}
        />
        <line
          x1={dimensions.boundedWidth / 2}
          x2={dimensions.boundedWidth / 2}
          y1={0}
          y2={dimensions.boundedHeight}
          strokeWidth="1"
          strokeDasharray="2"
          stroke="#f6bbbc"
        />
        <line
          x1={0}
          x2={dimensions.boundedWidth}
          y1={dimensions.boundedHeight / 2}
          y2={dimensions.boundedHeight / 2}
          strokeWidth="1"
          strokeDasharray="2"
          stroke="#f6bbbc"
        />
      </Chart>
    </div>
  );
};

export default QuadrantChart;
