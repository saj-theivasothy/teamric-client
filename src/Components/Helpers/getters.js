const getFeedbacks = (surveys, virtues, virtueBuckets) => {
  const feedbacks = surveys.reduce((a, b) => {
    return a.concat(b.feedback);
  }, []);

  console.log(surveys);
  const newSurveys = [];

  feedbacks.forEach((survey) => {
    const virtue = virtues.find(({ id }) => id === survey.skillId);
    const virtueBucket = virtueBuckets.find(
      ({ id }) => id === virtue.virtue_bucket_id
    );

    const updatedSurvey = {
      ...survey,
      virtue: virtue.name,
      virtueBucket: virtueBucket.name,
    };

    newSurveys.push(updatedSurvey);
  });
  return newSurveys;
};

export { getFeedbacks };

const surveys = [
  {
    reviewerId: 27,
    receiverId: 84,
    createdAt: new Date("2019-10-17"),
    feedback: [
      { skillId: 8, rating: 1, description: "Adipisci dolore sit quiquia." },
      {
        skillId: 33,
        rating: 1,
        description: "Magnam ut est consectetur magnam.",
      },
      {
        skillId: 17,
        rating: 5,
        description: "Sed tempora labore voluptatem dolorem.",
      },
      {
        skillId: 14,
        rating: 2,
        description: "Eius quaerat dolore velit dolorem.",
      },
      { skillId: 34, rating: 5, description: "Amet neque adipisci amet." },
    ],
  },
  {
    reviewerId: 62,
    receiverId: 84,
    createdAt: new Date("2020-04-01"),
    feedback: [
      {
        skillId: 30,
        rating: 4,
        description: "Voluptatem aliquam labore non velit velit.",
      },
      {
        skillId: 12,
        rating: 3,
        description: "Dolorem consectetur sed adipisci aliquam.",
      },
      {
        skillId: 11,
        rating: 1,
        description: "Magnam etincidunt neque numquam non tempora.",
      },
      {
        skillId: 6,
        rating: 5,
        description: "Porro neque tempora tempora magnam numquam dolor magnam.",
      },
      { skillId: 17, rating: 5, description: "Eius sed dolorem labore." },
      {
        skillId: 2,
        rating: 2,
        description: "Quisquam labore etincidunt porro quisquam.",
      },
      {
        skillId: 23,
        rating: 2,
        description: "Dolore magnam adipisci consectetur sit.",
      },
      {
        skillId: 5,
        rating: 1,
        description: "Numquam voluptatem amet ipsum consectetur tempora ut.",
      },
    ],
  },
  {
    reviewerId: 41,
    receiverId: 10,
    createdAt: new Date("2017-08-19"),
    feedback: [
      {
        skillId: 35,
        rating: 4,
        description: "Neque sed aliquam dolorem voluptatem consectetur.",
      },
      {
        skillId: 5,
        rating: 4,
        description:
          "Magnam quaerat sit consectetur magnam aliquam quisquam amet.",
      },
      { skillId: 16, rating: 3, description: "Amet numquam neque labore." },
      {
        skillId: 33,
        rating: 4,
        description: "Ut dolor ipsum aliquam quisquam dolor eius.",
      },
    ],
  },
];

const virtues = [
  {
    id: 1,
    virtue_bucket_id: 1,
    name: "Fearless agility",
    description: null,
  },
  {
    id: 2,
    virtue_bucket_id: 1,
    name: "Time conscious",
    description: null,
  },
  {
    id: 3,
    virtue_bucket_id: 1,
    name: "Pushing through",
    description: null,
  },
  {
    id: 4,
    virtue_bucket_id: 1,
    name: "Defiance",
    description: null,
  },
  {
    id: 5,
    virtue_bucket_id: 1,
    name: "motivating others",
    description: null,
  },
  {
    id: 6,
    virtue_bucket_id: 1,
    name: "Assertive",
    description: null,
  },
  {
    id: 7,
    virtue_bucket_id: 1,
    name: "Perceiving the problem",
    description: null,
  },
  {
    id: 8,
    virtue_bucket_id: 1,
    name: "Goal oriented",
    description: null,
  },
  {
    id: 9,
    virtue_bucket_id: 1,
    name: "Clear vision",
    description: null,
  },
  {
    id: 10,
    virtue_bucket_id: 1,
    name: "Practical",
    description: null,
  },
  {
    id: 11,
    virtue_bucket_id: 1,
    name: "Prioritizing",
    description: null,
  },
  {
    id: 12,
    virtue_bucket_id: 2,
    name: "Curiosity",
    description: null,
  },
  {
    id: 13,
    virtue_bucket_id: 2,
    name: "Analytical",
    description: null,
  },
  {
    id: 14,
    virtue_bucket_id: 2,
    name: "Detail oriented",
    description: null,
  },
  {
    id: 15,
    virtue_bucket_id: 2,
    name: "Strategic",
    description: null,
  },
  {
    id: 16,
    virtue_bucket_id: 2,
    name: "Research",
    description: null,
  },
  {
    id: 17,
    virtue_bucket_id: 2,
    name: "probing",
    description: null,
  },
  {
    id: 18,
    virtue_bucket_id: 2,
    name: "Precise",
    description: null,
  },
  {
    id: 19,
    virtue_bucket_id: 3,
    name: "Bravery",
    description: null,
  },
  {
    id: 20,
    virtue_bucket_id: 3,
    name: "Persistence",
    description: null,
  },
  {
    id: 21,
    virtue_bucket_id: 3,
    name: "Persevering",
    description: null,
  },
  {
    id: 22,
    virtue_bucket_id: 3,
    name: "Vitality",
    description: null,
  },
  {
    id: 23,
    virtue_bucket_id: 3,
    name: "Critique",
    description: null,
  },
  {
    id: 24,
    virtue_bucket_id: 4,
    name: "Social intelligence",
    description: null,
  },
  {
    id: 25,
    virtue_bucket_id: 4,
    name: "Delegating",
    description: null,
  },
  {
    id: 26,
    virtue_bucket_id: 4,
    name: "Conflict resolving",
    description: null,
  },
  {
    id: 27,
    virtue_bucket_id: 4,
    name: "Trustworthy",
    description: null,
  },
  {
    id: 28,
    virtue_bucket_id: 4,
    name: "Cultural intelligence",
    description: null,
  },
  {
    id: 29,
    virtue_bucket_id: 4,
    name: "Good listener",
    description: null,
  },
  {
    id: 30,
    virtue_bucket_id: 5,
    name: "Authenticity",
    description: null,
  },
  {
    id: 31,
    virtue_bucket_id: 5,
    name: "Fairness",
    description: null,
  },
  {
    id: 32,
    virtue_bucket_id: 5,
    name: "Responsible",
    description: null,
  },
  {
    id: 33,
    virtue_bucket_id: 5,
    name: "Honesty",
    description: null,
  },
  {
    id: 34,
    virtue_bucket_id: 5,
    name: "Objective",
    description: null,
  },
  {
    id: 35,
    virtue_bucket_id: 5,
    name: "Integrity",
    description: null,
  },
  {
    id: 36,
    virtue_bucket_id: 5,
    name: "Radically transparent",
    description: null,
  },
  {
    id: 37,
    virtue_bucket_id: 5,
    name: "Believable",
    description: null,
  },
  {
    id: 38,
    virtue_bucket_id: 6,
    name: "Creativity",
    description: null,
  },
  {
    id: 39,
    virtue_bucket_id: 6,
    name: "Appreciation",
    description: null,
  },
  {
    id: 40,
    virtue_bucket_id: 6,
    name: "Optimism",
    description: null,
  },
  {
    id: 41,
    virtue_bucket_id: 6,
    name: "Determinism",
    description: null,
  },
  {
    id: 42,
    virtue_bucket_id: 6,
    name: "Motivating",
    description: null,
  },
  {
    id: 43,
    virtue_bucket_id: 6,
    name: "Visionary",
    description: null,
  },
  {
    id: 44,
    virtue_bucket_id: 7,
    name: "Merciful",
    description: null,
  },
  {
    id: 45,
    virtue_bucket_id: 7,
    name: "Humble",
    description: null,
  },
  {
    id: 46,
    virtue_bucket_id: 7,
    name: "Prudence",
    description: null,
  },
  {
    id: 47,
    virtue_bucket_id: 7,
    name: "Self-regulating",
    description: null,
  },
  {
    id: 48,
    virtue_bucket_id: 7,
    name: "Self-aware",
    description: null,
  },
  {
    id: 49,
    virtue_bucket_id: 7,
    name: "Steadiness",
    description: null,
  },
  {
    id: 50,
    virtue_bucket_id: 7,
    name: "Composed",
    description: null,
  },
  {
    id: 51,
    virtue_bucket_id: 7,
    name: "Reflective",
    description: null,
  },
  {
    id: 52,
    virtue_bucket_id: 7,
    name: "Stable mind",
    description: null,
  },
];

const virtueBuckets = [
  {
    id: 1,
    name: "Execution",
    img:
      "https://raw.githubusercontent.com/icncsx/teamric-client/8ab74201d314b719932d24569488f986d36e2e3b/public/execution.svg",
  },
  {
    id: 2,
    name: "Knowledge",
    img:
      "https://raw.githubusercontent.com/icncsx/teamric-client/8ab74201d314b719932d24569488f986d36e2e3b/public/knowledge.svg",
  },
  {
    id: 3,
    name: "Courage",
    img: "https://image.flaticon.com/icons/svg/1454/1454657.svg",
  },
  {
    id: 4,
    name: "Humanity",
    img:
      "https://raw.githubusercontent.com/icncsx/teamric-client/8ab74201d314b719932d24569488f986d36e2e3b/public/humanity.svg",
  },
  {
    id: 5,
    name: "Justice",
    img:
      "https://raw.githubusercontent.com/icncsx/teamric-client/8ab74201d314b719932d24569488f986d36e2e3b/public/justice.svg",
  },
  {
    id: 6,
    name: "Transcendence",
    img:
      "https://raw.githubusercontent.com/icncsx/teamric-client/8ab74201d314b719932d24569488f986d36e2e3b/public/transcendence.svg",
  },
  {
    id: 7,
    name: "Temperance",
    img:
      "https://raw.githubusercontent.com/icncsx/teamric-client/8ab74201d314b719932d24569488f986d36e2e3b/public/temperance.svg",
  },
];

// console.log(getFeedbacks(surveys, virtues, virtueBuckets));
