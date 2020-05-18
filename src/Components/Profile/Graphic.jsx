import React, { useState, useEffect } from "react";
import "./styles.css";
import * as d3 from "d3";
import axios from "axios";

import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import TimelineChart from "./Charts/TimelineChart";
import ScatterChart from "./Charts/ScatterChart";
import CandleChart from "./Charts/CandleChart";
import QuadrantChart from "./Charts/Quadrant";
import SwarmChart from "./Charts/SwarmChart";

import {
  getBarData,
  getScatterData,
  getTimeLineData,
  getPieData,
  getCandleData,
  getQuadrantData,
  getSwarmData,
} from "./utils/generateData";

const parseDate = d3.timeParse("%m/%d/%Y");

const getData = (data, settings) => ({
  bar: getBarData(data, settings),
  timeline: getTimeLineData(data, settings),
  scatter: getScatterData(data, settings),
  pie: getPieData(data, settings),
  candle: getCandleData(data, settings),
  quadrant: getQuadrantData(data, settings),
  swarm: getSwarmData(data, settings),
});

const Graphic = ({ type, xLabel, yLabel, title, feedbacks, settings }) => {
  const [data, setData] = useState(getData(feedbacks, settings));

  useEffect(() => {
    setData(getData(feedbacks, settings));
  }, [settings]);

  const mapper = {
    bar: (
      <BarChart
        data={data.bar}
        xAccessor={(d) => d.x}
        yAccessor={(d) => d.y}
        xLabel="X"
        yLabel="Y"
      />
    ),
    scatter: (
      <ScatterChart
        data={data.scatter}
        xAccessor={(d) => d.x}
        yAccessor={(d) => d.y}
        xLabel="X"
        yLabel="Y"
      />
    ),
    timeline: (
      <TimelineChart
        data={data.timeline}
        xAccessor={(d) => parseDate(d.x)}
        yAccessor={(d) => d.y}
        xLabel="X"
        yLabel="Y"
      />
    ),
    pie: (
      <PieChart data={data.pie} xAccessor={(d) => d.x} yAccessor={(d) => d.y} />
    ),
    candle: (
      <CandleChart
        data={data.candle}
        xAccessor={(d) => parseDate(d.date)}
        yLowAccessor={(d) => d.low}
        yHighAccessor={(d) => d.high}
        xLabel="X"
        yLabel="Y"
      />
    ),
    quadrant: (
      <QuadrantChart
        data={data.quadrant}
        xAccessor={(d) => d.x}
        yAccessor={(d) => d.y}
        xLabel="X"
        yLabel="Y"
      />
    ),
    swarm: (
      <SwarmChart
        xAccessor={(d) => d.val}
        yAccessor={(d) => d.attr}
        data={data.swarm}
        xLabel="X"
        yLabel="Y"
      />
    ),
  };

  const graphic = mapper[type];

  return (
    <>
      <h1 className="chart_h1">{title}</h1>
      {graphic}
    </>
  );
};

export default Graphic;
