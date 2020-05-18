import React from "react";
import * as d3 from "d3";

import Chart from "./Base/Chart";
import { useChartDimensions } from "./Base/utils";

const cfg = {
  radius: 5,
  // height of container
  factor: 1,
  //  scale factor how big does the whole ting become
  factorLegend: 0.95,
  // affects the label position of each axis
  levels: 5,
  // how many polygon levels to create
  maxValue: 5.0,
  radians: 2 * Math.PI,
  opacityArea: 0.5,
  //  resting state opacity
  ToRight: 0,
  // scale labels how much right from the center
  TranslateX: 100,
  TranslateY: 100,
  ExtraWidthX: 0,
  ExtraWidthY: 0,
  color: d3
    .scaleOrdinal()
    .range(["#6F257F", "#CA0D59", "#0894A1", "#F2B134", "#47AB6C"]),
};

const RadarChart = ({ data }) => {
  const [ref, dimensions] = useChartDimensions({
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
  });

  const minDim = Math.min(dimensions.boundedHeight, dimensions.boundedWidth);

  const squareDim = {
    boundedWidth: minDim,
    boundedHeight: minDim,
  };

  const virtueList = Object.keys(data[0]).filter((x) => x !== "name");
  const numVirtues = virtueList.length;
  const radius =
    cfg.factor *
    Math.min(squareDim.boundedWidth / 2, squareDim.boundedHeight / 2);
  //   const format = d3.format("%");

  const outlines = [];
  const units = [];
  for (let j = 0; j < cfg.levels; j++) {
    const levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);

    units.push({
      transform: `translate(${squareDim.boundedWidth / 2 - levelFactor + 5}, ${
        squareDim.boundedHeight / 2 - levelFactor
      })`,
      x: levelFactor * (1 - cfg.factor * Math.sin(0)),
      y: levelFactor * (1 - cfg.factor * Math.cos(0)) - 2,
      textContent: j + 1,
    });

    outlines.push(
      virtueList.map((d, i) => {
        return {
          transform: `translate(${squareDim.boundedWidth / 2 - levelFactor}, ${
            squareDim.boundedHeight / 2 - levelFactor
          })`,
          x1:
            levelFactor *
            (1 - cfg.factor * Math.sin((i * cfg.radians) / numVirtues)),
          y1:
            levelFactor *
            (1 - cfg.factor * Math.cos((i * cfg.radians) / numVirtues)),
          x2:
            levelFactor *
            (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / numVirtues)),
          y2:
            levelFactor *
            (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / numVirtues)),
        };
      })
    );
  }

  const axisLines = [];
  const axisLabels = [];

  console.log(numVirtues, "num");

  virtueList.forEach((d, i) => {
    axisLines.push({
      x1: squareDim.boundedWidth / 2,
      y1: squareDim.boundedHeight / 2,
      x2:
        (squareDim.boundedWidth / 2) *
        (1 - cfg.factor * Math.sin((i * cfg.radians) / numVirtues)),
      y2:
        (squareDim.boundedHeight / 2) *
        (1 - cfg.factor * Math.cos((i * cfg.radians) / numVirtues)),
    });
    axisLabels.push({
      x:
        (squareDim.boundedWidth / 2) *
          (1 - cfg.factorLegend * Math.sin((i * cfg.radians) / numVirtues)) -
        60 * Math.sin((i * cfg.radians) / numVirtues),
      y:
        (squareDim.boundedHeight / 2) *
          (1 - Math.cos((i * cfg.radians) / numVirtues)) -
        20 * Math.cos((i * cfg.radians) / numVirtues),
      dy: "1.5em",
      textAnchor: "middle",
      transform: `translate(${0},${-10})`,
      content: d,
    });
  });

  const axisG = virtueList.map((_, i) => {
    return (
      <>
        <g className="axisG">
          <line
            {...axisLines[i]}
            style={{ strokeWidth: "1px", stroke: "grey" }}
          />
          <text {...axisLabels[i]} style={{ fontSize: "11px" }}>
            {axisLabels[i].content}
          </text>
        </g>
      </>
    );
  });

  const polygonCoords = data.map((person, personIDX) => {
    // iterate through the virtue list
    const polygonCoords = [];
    virtueList.forEach((virtue, i) => {
      polygonCoords.push([
        (squareDim.boundedWidth / 2) *
          (1 -
            (parseFloat(Math.max(person[virtue], 0)) / cfg.maxValue) *
              cfg.factor *
              Math.sin((i * cfg.radians) / numVirtues)),

        (squareDim.boundedHeight / 2) *
          (1 -
            (parseFloat(Math.max(person[virtue], 0)) / cfg.maxValue) *
              cfg.factor *
              Math.cos((i * cfg.radians) / numVirtues)),
      ]);
    });
    let coordStr = "";

    polygonCoords.push(polygonCoords[0]);
    for (let pti = 0; pti < polygonCoords.length; pti++) {
      coordStr += polygonCoords[pti][0] + "," + polygonCoords[pti][1] + " ";
    }

    const color = cfg.color(personIDX);

    return {
      ...person,
      coordStr,
      color,
    };
  });

  console.log(polygonCoords, "YO MAINE");

  const polygonG = polygonCoords.map((person, i) => {
    return (
      <>
        <g className="polygon">
          <polygon
            points={person.coordStr}
            style={{
              strokeWidth: "1px",
              stroke: person.color,
              fill: person.color,
              opacity: cfg.opacityArea,
            }}
          />
        </g>
      </>
    );
  });

  const outlineG = outlines.map((lineGroup, groupIdx) => {
    return (
      <>
        <g className="hexlines">
          {lineGroup.map((d, i) => {
            return (
              <line
                {...d}
                style={{
                  strokeWidth: "1px",
                  stroke: "grey",
                  opacity: 0.3,
                }}
              />
            );
          })}
        </g>
      </>
    );
  });

  const unitG = units.map((d, i) => {
    const { textContent, ...loc } = d;
    return (
      <text
        {...loc}
        className="legend"
        style={{ fill: "black", fontSize: "8px" }}
      >
        {textContent}
      </text>
    );
  });

  //   <div className="Candle" ref={ref}>
  //   <Chart dimensions={dimensions}>

  return (
    <div className="Radar" ref={ref}>
      <Chart dimensions={dimensions}>
        {outlineG}
        {unitG}
        {axisG}
        {polygonG}
      </Chart>
    </div>
  );
};

export default RadarChart;
