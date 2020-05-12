import React, { useState } from "react";
import "./styles.css";
import * as d3 from "d3";

import BarChart from "./Charts/BarChart";
import TimelineChart from "./Charts/TimelineChart";
import ScatterChart from "./Charts/ScatterChart";

import {
  getBarData,
  getScatterData,
  getTimeLineData,
} from "./utils/generateData";

const xAccessor = (d) => d.x;
const yAccessor = (d) => d.y;

const parseDate = d3.timeParse("%m/%d/%Y");
const dateAccessor = (d) => parseDate(xAccessor(d));

const getData = () => ({
  bar: getBarData(),
  timeline: getTimeLineData(),
  scatter: getScatterData(),
});

const Graphics = (props) => {
  const [data, setData] = useState(getData());

  return (
    <>
      <h1>Chart</h1>
      <div className="App__charts">
        <BarChart
          data={data.bar}
          xAccessor={xAccessor}
          yAccessor={yAccessor}
          xLabel="Time Spent"
          yLabel="Categories"
        />

        <TimelineChart
          data={data.timeline}
          xAccessor={dateAccessor}
          yAccessor={yAccessor}
          xLabel="Date"
          yLabel="Performance Index"
        />

        <ScatterChart
          data={data.scatter}
          xAccessor={xAccessor}
          yAccessor={yAccessor}
          xLabel="Hours Worked"
          yLabel="Performance Index"
        />
      </div>
    </>
  );
};

export default Graphics;
