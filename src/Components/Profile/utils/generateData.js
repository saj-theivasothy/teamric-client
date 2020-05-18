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
  const dataForUser = data.filter(
    (feedback) => feedback.receiver === settings.pie[0]
  );

  let generatedData = Object.values(
    dataForUser.reduce((feedback, { reviewer }) => {
      feedback[reviewer] = feedback[reviewer] || { x: 0, y: reviewer };
      feedback[reviewer].x++;
      return feedback;
    }, {})
  );

  let sum = 0;
  const total = dataForUser.length;

  const filteredData = generatedData.filter((data) => {
    if (data.x > 5) {
      data.x = Math.round((data.x / total) * 100);
      return data;
    } else {
      sum += data.x;
    }
  });

  const sumPercentage = Math.round((sum / total) * 100);
  filteredData.push({ x: sumPercentage, y: "Other" });
  return filteredData;
};

const getQuadrantData = (data, settings) => {
  const dataForYear = data.filter(
    (feedback) => feedback.createdAt.getFullYear() === settings.quadrant[0]
  );

  const generatedData = {};
  const result = dataForYear.reduce((a, b) => {
    let key = b.receiver;
    let axis;
    if (
      b.virtueBucket === "Humanity" ||
      b.virtueBucket === "Transcendence" ||
      b.virtueBucket === "Temperence" ||
      b.virtueBucket === "Justice"
    ) {
      key += `-Humanity-Transcendence-Temperence-Justice`;
      axis = "x";
    } else {
      key += `-Knowledge-Execution-Courage`;
      axis = "y";
    }

    if (!generatedData[key]) {
      const {
        createdAt,
        description,
        rating,
        reviewer,
        skillId,
        virtue,
        ...obj
      } = b;
      obj["sum"] = b.rating;
      obj["count"] = 1;
      obj["average"] = b.rating;
      obj["axis"] = axis;
      generatedData[key] = obj;
      a.push(generatedData[key]);
    } else {
      generatedData[key].sum += b.rating;
      generatedData[key].count += 1;
      const average =
        Math.floor((generatedData[key].sum / generatedData[key].count) * 10) /
        10;
      generatedData[key].average = average;
    }
    return a;
  }, []);

  const helper = {};
  const updatedResult = result.reduce((a, { receiver }, index) => {
    if (!helper[receiver]) {
      helper[receiver] = [result[index]];
      a.push(helper[receiver]);
    } else {
      helper[receiver].push(result[index]);
    }

    return a;
  }, []);

  console.log(updatedResult);
  const plotData = [];
  let xAverage = 0;
  let yAverage = 0;

  for (const key in updatedResult) {
    if (updatedResult[key].length === 2) {
      if (updatedResult[key][0].axis === "x") {
        xAverage = updatedResult[key][0].average;
        yAverage = updatedResult[key][1].average;
      } else {
        xAverage = updatedResult[key][1].average;
        yAverage = updatedResult[key][0].average;
      }
    } else {
      if (updatedResult[key][0].axis === "x") {
        xAverage = updatedResult[key][0].average;
      } else {
        yAverage = updatedResult[key][0].average;
      }
    }

    plotData.push({
      x: xAverage,
      y: yAverage,
      label: updatedResult[key][0].receiver,
    });
  }

  plotData.sort((a, b) => a.label.localeCompare(b.label));
  console.log(plotData);
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
