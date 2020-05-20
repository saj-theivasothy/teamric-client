import * as d3 from "d3";

const randomAroundMean = (mean, deviation) =>
  mean + boxMullerRandom() * deviation;

const boxMullerRandom = () =>
  Math.sqrt(-2.0 * Math.log(Math.random())) *
  Math.cos(2.0 * Math.PI * Math.random());

export { randomAroundMean, boxMullerRandom };
