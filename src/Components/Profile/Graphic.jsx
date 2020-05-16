import React, { useState, useEffect } from "react";
import "./styles.css";
import * as d3 from "d3";
import axios from "axios";

import { getFeedbacks } from "../Helpers/getters";
import { dataForBar } from "./utils/analyseData";

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

const getData = (data) => ({
  bar: getBarData(data),
  timeline: getTimeLineData(data),
  scatter: getScatterData(data),
  pie: getPieData(data),
  candle: getCandleData(data),
  quadrant: getQuadrantData(data),
  swarm: getSwarmData(data),
});

const Graphic = ({ type, xLabel, yLabel, title, feedbacks }) => {
  const [data, setData] = useState(getData(feedbacks));

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
