import * as d3 from "d3";

import { randomAroundMean } from "./mathUtils";

const formatDate = d3.timeFormat("%m/%d/%Y");

const getBarData = (
  categories = ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"],
  count = categories.length
) => {
  return new Array(count).fill(0).map((d, i) => ({
    x: d3.randomUniform(1, 10)(),
    y: categories[i],
  }));
};

const getTimeLineData = (length = 100) => {
  const today = new Date();
  let measurement = randomAroundMean(70, 20);
  const firstDate = d3.timeDay.offset(today, -length);

  return new Array(length).fill(0).map((d, i) => {
    measurement += randomAroundMean(0, 2);
    return {
      x: formatDate(d3.timeDay.offset(firstDate, i)),
      y: measurement,
    };
  });
};

const getScatterData = (count = 100) =>
  new Array(count).fill(0).map((d, i) => ({
    x: randomAroundMean(70, 20),
    y: randomAroundMean(0.5, 0.1),
  }));

export { getBarData, getScatterData, getTimeLineData };
