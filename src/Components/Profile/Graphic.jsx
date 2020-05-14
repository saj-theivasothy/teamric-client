import React, { useState, Fragment } from "react";
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

const Graphic = ({ type, xLabel, yLabel, title }) => {
  const [data, setData] = useState(getData());

  let graphic;
  if ((type = "bar")) {
    graphic = (
      <BarChart
        data={data.bar}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
        xLabel={xLabel}
        yLabel={yLabel}
      />
    );
  } else if ((type = "scatter")) {
    graphic = (
      <ScatterChart
        data={data.scatter}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
        xLabel="Hours Worked"
        yLabel="Performance Index"
      />
    );
  } else if ((type = "timeline")) {
    graphic = (
      <TimelineChart
        data={data.timeline}
        xAccessor={dateAccessor}
        yAccessor={yAccessor}
        xLabel="Date"
        yLabel="Performance Index"
      />
    );
  }

  return (
    <>
      <h1>{title}</h1>
      <div className="Graphic">{graphic}</div>
    </>
  );
};

export default Graphic;
