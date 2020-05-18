const getBarData = (data, settings) => {
  const generatedData = {};

  data.forEach((feedback) => {
    const virtueBucket = feedback.virtueBucket;

    if (virtueBucket in generatedData) {
      const sum = generatedData[virtueBucket].sum + feedback.rating;
      const count = generatedData[virtueBucket].count + 1;
      const average = Math.floor((sum / count) * 10) / 10;

      generatedData[virtueBucket] = { sum, count, average };
    } else {
      const sum = feedback.rating;
      generatedData[virtueBucket] = { sum, count: 1, average: sum };
    }
  });

  const plotData = [];
  for (const virtueBucket in generatedData) {
    const x = generatedData[virtueBucket].average;
    const y = virtueBucket;
    plotData.push({
      x: x,
      y: y,
    });
  }

  return plotData;
};

const getScatterData = (data, settings) => {
  const generatedData = {};

  const dataForUser = data.filter(
    (feedback) =>
      feedback.receiver === "Sara Barnes" &&
      feedback.createdAt.getFullYear() === settings.scatter[0]
  );

  dataForUser.forEach((feedback) => {
    const virtueBucket = feedback.virtueBucket;

    if (virtueBucket in generatedData) {
      const sum = generatedData[virtueBucket].sum + feedback.rating;
      const count = generatedData[virtueBucket].count + 1;
      const average = Math.floor((sum / count) * 10) / 10;

      generatedData[virtueBucket] = { sum, count, average };
    } else {
      const sum = feedback.rating;
      generatedData[virtueBucket] = { sum, count: 1, average: sum };
    }
  });

  const plotData = [];
  for (const virtueBucket in generatedData) {
    const x = virtueBucket;
    const y = generatedData[virtueBucket].average;
    plotData.push({
      x: x,
      y: y,
    });
  }
  console.log("plot", plotData)
  return plotData;
};

const getTimeLineData = (data, settings) => {
  const generatedData = {};

  const selectedVirtueBucket = settings.timeline[1];
  const selectedYear = settings.timeline[0];

  data.forEach((feedback) => {
    const { rating, createdAt, virtueBucket } = feedback;

    const date = `${createdAt.getMonth() + 1}/02/${createdAt.getFullYear()}`;
    if (date in generatedData && virtueBucket === selectedVirtueBucket) {
      const sum = generatedData[date].sum + rating;
      const count = generatedData[date].count + 1;
      const average = Math.floor((sum / count) * 10) / 10;

      generatedData[date] = { sum, count, average };
    } else if (
      createdAt.getFullYear() === selectedYear &&
      virtueBucket === selectedVirtueBucket
    ) {
      const sum = rating;
      generatedData[date] = { sum, count: 1, average: sum };
    }
  });

  const plotData = [];
  for (const date in generatedData) {
    const x = `${date}`;
    const y = generatedData[date].average;
    plotData.push({
      x,
      y,
    });
  }

  return plotData;
};

const getCandleData = (data, settings) => [
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

const getSwarmData = (data, settings) => {
  const generatedData = {};

  data.forEach((feedback) => {
    const { receiver, virtueBucket, rating } = feedback;

    if (virtueBucket in generatedData && receiver in generatedData) {
      const sum = generatedData[receiver].sum + rating;
      const count = generatedData[receiver].count + 1;
      const average = Math.floor((sum / count) * 10) / 10;

      generatedData[receiver] = { sum, count, average, virtueBucket };
    } else {
      const sum = rating;
      generatedData[receiver] = { sum, count: 1, average: sum, virtueBucket };
    }
  });

  const plotData = [];
  for (const name in generatedData) {
    const average = generatedData[name].average;
    const virtueBucket = generatedData[name].virtueBucket;
    plotData.push({
      name,
      val: average,
      virtueBucket,
    });
  }
  return plotData;
};

const getPieData = (data, settings) => {
  const generatedData = [];

  const dataForUser = data.filter(
    (feedback) =>
      feedback.receiver === "Sara Barnes" &&
      ((settings.pie[0] === "Positive" && feedback.rating >= 3) ||
        (settings.pie[0] === "Negative" && feedback.rating < 3)) &&
      feedback.virtueBucket === settings.pie[1]
  );

  dataForUser.forEach((feedback) => {
    const { virtue } = feedback;
    let count;

    const matchedData = generatedData.find(({ y }, index) => {
      let deletedItem;
      if (virtue === y) {
        deletedItem = generatedData.splice(index, 1);
      }

      return deletedItem;
    });

    if (matchedData) {
      count = matchedData.x + 1;
    } else {
      count = 1;
    }

    generatedData.push({ x: count, y: virtue });
  });

  return generatedData;
};

const getQuadrantData = (data, settings) => {
  const generatedData = {};

  const dataForSkillAndYear = data.filter(
    (feedback) =>
      feedback.virtueBucket === settings.quadrant[1] &&
      feedback.createdAt.getFullYear() === settings.quadrant[0]
  );

  dataForSkillAndYear.forEach((feedback) => {
    const { receiver, virtueBucket, rating } = feedback;

    if (receiver in generatedData) {
      const sum = generatedData[receiver].sum + rating;
      const count = generatedData[receiver].count + 1;
      const average = Math.floor((sum / count) * 10) / 10;

      generatedData[receiver] = { sum, count, average };
    } else {
      const sum = rating;
      generatedData[receiver] = { sum, count: 1, average: sum, virtueBucket };
    }
  });

  const plotData = [];
  for (const name in generatedData) {
    const average = generatedData[name].average;
    const count = generatedData[name].count;
    plotData.push({
      x: count,
      y: average,
      label: name,
    });
  }
  return plotData;
};

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
