const getBarData = (data) => [
  { x: 6.8, y: "Cat 1" },
  { x: 8.8, y: "Cat 2" },
  { x: 7.8, y: "Cat 3" },
  { x: 3.1, y: "Cat 4" },
  { x: 3.7, y: "Cat 5" },
];

const getScatterData = () => [
  { x: 56.3, y: 20.4 },
  { x: 46.9, y: 24.4 },
  { x: 50.6, y: 19.4 },
  { x: 58.5, y: 22.5 },
  { x: 68.9, y: 24.6 },
];

const getTimeLineData = () => [
  { x: "02/04/2020", y: 61.1 },
  { x: "02/05/2020", y: 40.6 },
  { x: "02/06/2020", y: 52.0 },
  { x: "02/07/2020", y: 55.1 },
  { x: "02/08/2020", y: 76.1 },
];

const getCandleData = () => [
  {
    date: "02/04/2020",
    high: 46,
    low: 41,
  },
  {
    date: "02/05/2020",
    high: 39,
    low: 37,
  },
  {
    date: "02/06/2020",
    high: 43,
    low: 39,
  },
  {
    date: "2/07/2020",
    high: 52,
    low: 34,
  },
  {
    date: "2/08/2020",
    high: 33,
    low: 27,
  },
];

const getSwarmData = () => [
  { id: 1, name: "James", val: 3, attr: "Virtue1" },
  { id: 1, name: "James", val: 3, attr: "Virtue2" },
  { id: 2, name: "Janine", val: 5, attr: "Virtue1" },
  { id: 2, name: "Janine", val: 3, attr: "Virtue2" },
  { id: 3, name: "Chris", val: 3, attr: "Virtue1" },
  { id: 3, name: "Chris", val: 3, attr: "Virtue2" },
];

const getPieData = () => [
  { x: 30, y: "Reviewer 1" },
  { x: 25, y: "Reviewer 2" },
  { x: 15, y: "Reviewer 3" },
  { x: 10, y: "Reviewer 4" },
  { x: 20, y: "Others" },
];

const getQuadrantData = () => [
  { x: 0.28, y: 0.22, label: "Logan" },
  { x: 0.38, y: 0.23, label: "Michael" },
  { x: 0.21, y: 0.35, label: "Avery" },
  { x: 0.31, y: 0.46, label: "Carter" },
  { x: 0.36, y: 0.52, label: "Julian" },
  { x: 0.26, y: 0.64, label: "Riley" },
  { x: 0.62, y: 0.75, label: "Ryna" },
  { x: 0.61, y: 0.71, label: "Madison" },
  { x: 0.69, y: 0.7, label: "Hunter" },
  { x: 0.75, y: 0.64, label: "Landon" },
  { x: 0.62, y: 0.59, label: "Caleb" },
  { x: 0.68, y: 0.61, label: "Olivia" },
  { x: 0.58, y: 0.48, label: "Liam" },
];

const getRadarData = () => {};

export {
  getBarData,
  getScatterData,
  getTimeLineData,
  getCandleData,
  getSwarmData,
  getPieData,
  getQuadrantData,
  getRadarData,
};
