const dataForBar = (data) => {};

const data = [
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
console.log(dataForBar(data));
