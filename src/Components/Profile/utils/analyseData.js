const dataForBar = (data) => {
  if (data.length === 0) {
    return [];
  } else {
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
  }
};

const data = [
  {
    skillId: 8,
    rating: 1,
    description: "Adipisci dolore sit quiquia.",
    virtue: "Goal oriented",
    virtueBucket: "Execution",
  },
  {
    skillId: 33,
    rating: 1,
    description: "Magnam ut est consectetur magnam.",
    virtue: "Honesty",
    virtueBucket: "Justice",
  },
  {
    skillId: 17,
    rating: 5,
    description: "Sed tempora labore voluptatem dolorem.",
    virtue: "probing",
    virtueBucket: "Knowledge",
  },
  {
    skillId: 14,
    rating: 2,
    description: "Eius quaerat dolore velit dolorem.",
    virtue: "Detail oriented",
    virtueBucket: "Knowledge",
  },
  {
    skillId: 34,
    rating: 5,
    description: "Amet neque adipisci amet.",
    virtue: "Objective",
    virtueBucket: "Justice",
  },
  {
    skillId: 30,
    rating: 4,
    description: "Voluptatem aliquam labore non velit velit.",
    virtue: "Authenticity",
    virtueBucket: "Justice",
  },
  {
    skillId: 12,
    rating: 3,
    description: "Dolorem consectetur sed adipisci aliquam.",
    virtue: "Curiosity",
    virtueBucket: "Knowledge",
  },
  {
    skillId: 11,
    rating: 1,
    description: "Magnam etincidunt neque numquam non tempora.",
    virtue: "Prioritizing",
    virtueBucket: "Execution",
  },
  {
    skillId: 6,
    rating: 5,
    description: "Porro neque tempora tempora magnam numquam dolor magnam.",
    virtue: "Assertive",
    virtueBucket: "Execution",
  },
  {
    skillId: 17,
    rating: 5,
    description: "Eius sed dolorem labore.",
    virtue: "probing",
    virtueBucket: "Knowledge",
  },
  {
    skillId: 2,
    rating: 2,
    description: "Quisquam labore etincidunt porro quisquam.",
    virtue: "Time conscious",
    virtueBucket: "Execution",
  },
  {
    skillId: 23,
    rating: 2,
    description: "Dolore magnam adipisci consectetur sit.",
    virtue: "Critique",
    virtueBucket: "Courage",
  },
  {
    skillId: 5,
    rating: 1,
    description: "Numquam voluptatem amet ipsum consectetur tempora ut.",
    virtue: "motivating others",
    virtueBucket: "Execution",
  },
  {
    skillId: 35,
    rating: 4,
    description: "Neque sed aliquam dolorem voluptatem consectetur.",
    virtue: "Integrity",
    virtueBucket: "Justice",
  },
  {
    skillId: 5,
    rating: 4,
    description: "Magnam quaerat sit consectetur magnam aliquam quisquam amet.",
    virtue: "motivating others",
    virtueBucket: "Execution",
  },
  {
    skillId: 16,
    rating: 3,
    description: "Amet numquam neque labore.",
    virtue: "Research",
    virtueBucket: "Knowledge",
  },
  {
    skillId: 33,
    rating: 4,
    description: "Ut dolor ipsum aliquam quisquam dolor eius.",
    virtue: "Honesty",
    virtueBucket: "Justice",
  },
];

// console.log(dataForBar(data));

export { dataForBar };
