import React from "react";
import * as d3 from "d3";

import Chart from "./Base/Chart";
import { useChartDimensions } from "./Base/utils";

const BarChart = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 77,
  });

  const pie = d3.pie().value(function (d) {
    return +xAccessor(d);
  });

  const modData = pie(data);

  const arc = d3
    .arc()
    .outerRadius(dimensions.boundedWidth / 3)
    .innerRadius(0);

  return (
    <div className="Pie" ref={ref}>
      <Chart dimensions={dimensions}>
        <React.Fragment>
          {modData.map((d, i) => (
            <g
              transform={`translate(${dimensions.boundedWidth / 2},${
                dimensions.boundedHeight / 2
              })`}
            >
              <path
                d={arc(d)}
                fill="#9980fa"
                strokeWidth="1.5px"
                stroke="white"
              />

              <text
                style={{ textAnchor: "middle", fill: "black" }}
                transform={`translate(${arc.centroid(d)})`}
              >
                {d.data.x}
              </text>

              <text
                style={{ textAnchor: "middle", fill: "#95a5a6" }}
                transform={`translate(${arc.centroid(d)[0] * 2.7 + 10}, ${
                  arc.centroid(d)[1] * 2.3 + 5
                })`}
              >
                {d.data.y}
              </text>
            </g>
          ))}
        </React.Fragment>
      </Chart>
    </div>
  );
};

export default BarChart;
