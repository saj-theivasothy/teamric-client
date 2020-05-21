const getFeedbacks = (surveys, virtues, virtueBuckets, employees) => {
  if (
    surveys.length === 0 ||
    virtues.length === 0 ||
    virtueBuckets.length === 0 ||
    employees.length === 0
  ) {
    return [];
  } else {
    const feedbacks = surveys.reduce((a, b) => {
      const reviewer = employees.find(({ id }) => id === b.reviewerId);
      const receiver = employees.find(({ id }) => id === b.receiverId);

      const date = new Date(b.createdAt);
      const details = {
        reviewer: reviewer.name,
        receiver: receiver.name,
        createdAt: date,
      };

      const updatedFeedback = [];
      b.feedback.forEach((feedback) => {
        updatedFeedback.push({ ...feedback, ...details });
      });
      return a.concat(...updatedFeedback);
    }, []);
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
    newSurveys.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    return newSurveys;
  }
};

const getResults = (surveys, employees, virtues) => {
  surveys.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const reducedSurveys = surveys.slice(0, 50);

  const feedbacks = reducedSurveys.reduce((a, b) => {
    const reviewer = employees.find(({ id }) => id === b.reviewerId);
    const receiver = employees.find(({ id }) => id === b.receiverId);

    const details = {
      reviewer: reviewer,
      receiver: receiver,
      createdAt: b.createdAt,
    };

    const updatedFeedback = [];
    b.feedback.forEach((feedback) => {
      const virtue = virtues.find(({ id, name }) => id === feedback.skillId);
      updatedFeedback.push({ ...feedback, name: virtue.name });
    });

    return a.concat({ feedback: updatedFeedback, ...details });
  }, []);

  return feedbacks;
};

const getUserFeedbacks = (
  employeeId,
  surveys,
  virtues,
  employees,
  virtueBuckets
) => {
  const dataForUser = surveys.filter(
    (survey) => survey.receiverId === employeeId
  );

  dataForUser.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const feedbacks = dataForUser.reduce((a, b) => {
    const reviewer = employees.find(({ id }) => id === b.reviewerId);
    // const receiver = employees.find(({ id }) => id === b.receiverId);

    const details = {
      reviewer: reviewer,
      // receiver: receiver,
      createdAt: b.createdAt,
    };

    const updatedFeedback = [];
    b.feedback.forEach((feedback) => {
      const virtue = virtues.find(({ id, name }) => id === feedback.skillId);
      const virtueBucket = virtueBuckets.find(
        ({ id }) => id === virtue.virtue_bucket_id
      );
      updatedFeedback.push({
        ...feedback,
        name: virtue.name,
        virtueBucket: virtueBucket.name,
      });
    });

    return a.concat({ feedback: updatedFeedback, ...details });
  }, []);

  return feedbacks;
};

const getAverageRatings = (feedbacks) => {
  const helper = {};

  const averageRatings = feedbacks.map(({ feedback }) => {
    feedback.forEach((data) => {
      const key = data.virtueBucket;

      helper[key] = helper[key] || {
        virtueBucket: key,
        sum: 0,
        count: 0,
        average: 0,
      };
      helper[key].sum += data.rating;
      helper[key].count++;

      const average = Math.round(helper[key].sum / helper[key].count);
      helper[key].average = average;
    });
  });

  return Object.values(helper);
};

const getTotalAverage = (data) => {
  const helper = { totalAverage: 0 };
  const key = "totalAverage";
  const totalRatings = data.reduce((acc, current) => {
    const currentRating = current.props.rating;
    helper[key] = helper[key] + currentRating;

    return acc.concat(helper[key]);
  }, []);
  helper[key] = helper[key] / data.length;

  return helper[key];
};
const employee = [84];

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

const employees = [
  {
    id: 1,
    name: "Mary Tyler",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
    job_title: "Junior Backend Developer",
    email: "marytyler@email.com",
    username: "mary20787",
    password: "20787",
    isadmin: false,
  },
  {
    id: 2,
    name: "Sara Barnes",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Business Systems Analyst",
    email: "sarabarnes@email.com",
    username: "sara47718",
    password: "47718",
    isadmin: false,
  },
  {
    id: 3,
    name: "Lisa Hosler",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Senior Backend Developer",
    email: "lisahosler@email.com",
    username: "lisa33098",
    password: "33098",
    isadmin: false,
  },
  {
    id: 4,
    name: "Timothy Hatfield",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/malcolm-x-icon.png",
    job_title: "Systems Administrator",
    email: "timothyhatfield@email.com",
    username: "timothy67616",
    password: "67616",
    isadmin: false,
  },
  {
    id: 5,
    name: "James Vowles",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/malcolm-x-icon.png",
    job_title: "Junior Designer",
    email: "jamesvowles@email.com",
    username: "james85198",
    password: "85198",
    isadmin: false,
  },
  {
    id: 6,
    name: "Brenda Mckay",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "Information Architect",
    email: "brendamckay@email.com",
    username: "brenda76047",
    password: "76047",
    isadmin: false,
  },
  {
    id: 7,
    name: "Carlos Sellers",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "Accessibility Specialist",
    email: "carlossellers@email.com",
    username: "carlos11514",
    password: "11514",
    isadmin: false,
  },
  {
    id: 8,
    name: "Doris Weishaar",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/people/48/black-man-icon.png",
    job_title: "Digital Marketing Manager",
    email: "dorisweishaar@email.com",
    username: "doris58875",
    password: "58875",
    isadmin: false,
  },
  {
    id: 9,
    name: "Robert Fulmer",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10239-man-judge-medium-dark-skin-tone-icon.png",
    job_title: "Accessibility Specialist",
    email: "robertfulmer@email.com",
    username: "robert77946",
    password: "77946",
    isadmin: false,
  },
  {
    id: 10,
    name: "Peggy Hamilton",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Emo-Haircut-icon.png",
    job_title: "UX Designer",
    email: "peggyhamilton@email.com",
    username: "peggy50817",
    password: "50817",
    isadmin: false,
  },
  {
    id: 11,
    name: "Lyndsay Doney",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/girl-in-ballcap-icon.png",
    job_title: "Accessibility Specialist",
    email: "lyndsaydoney@email.com",
    username: "lyndsay70770",
    password: "70770",
    isadmin: false,
  },
  {
    id: 12,
    name: "Kris Dahl",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Hair-icon.png",
    job_title: "Senior Front-End Developer",
    email: "krisdahl@email.com",
    username: "kris20144",
    password: "20144",
    isadmin: false,
  },
  {
    id: 13,
    name: "Margaret Lajara",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/donald-trump-icon.png",
    job_title: "Senior Backend Developer",
    email: "margaretlajara@email.com",
    username: "margaret64085",
    password: "64085",
    isadmin: false,
  },
  {
    id: 14,
    name: "Melissa Mazza",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/dave-grohl-icon.png",
    job_title: "Junior Front-End Developer",
    email: "melissamazza@email.com",
    username: "melissa19999",
    password: "19999",
    isadmin: false,
  },
  {
    id: 15,
    name: "Penny Rados",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/cristiano-ronaldo-icon.png",
    job_title: "Senior Full-Stack Developer",
    email: "pennyrados@email.com",
    username: "penny16322",
    password: "16322",
    isadmin: false,
  },
  {
    id: 16,
    name: "Kevin Desantiago",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10303-man-office-worker-light-skin-tone-icon.png",
    job_title: "Digital Marketing Specialist",
    email: "kevindesantiago@email.com",
    username: "kevin6929",
    password: "6929",
    isadmin: false,
  },
  {
    id: 17,
    name: "Cynthia Knisely",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Information Architect",
    email: "cynthiaknisely@email.com",
    username: "cynthia43620",
    password: "43620",
    isadmin: false,
  },
  {
    id: 18,
    name: "Lillian Wright",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/people/48/black-man-icon.png",
    job_title: "UI Designer",
    email: "lillianwright@email.com",
    username: "lillian99758",
    password: "99758",
    isadmin: false,
  },
  {
    id: 19,
    name: "Shannon Burley",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/malcolm-x-icon.png",
    job_title: "Senior Designer",
    email: "shannonburley@email.com",
    username: "shannon69510",
    password: "69510",
    isadmin: false,
  },
  {
    id: 20,
    name: "Vincent Watkins",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "Systems Manager",
    email: "vincentwatkins@email.com",
    username: "vincent86254",
    password: "86254",
    isadmin: false,
  },
  {
    id: 21,
    name: "Bonita Whitacre",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10233-man-judge-light-skin-tone-icon.png",
    job_title: "Systems Administrator",
    email: "bonitawhitacre@email.com",
    username: "bonita9883",
    password: "9883",
    isadmin: false,
  },
  {
    id: 22,
    name: "Bret Davis",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Junior Backend Developer",
    email: "bretdavis@email.com",
    username: "bret29145",
    password: "29145",
    isadmin: false,
  },
  {
    id: 23,
    name: "Jodi Manship",
    avatar: "https://i.imgur.com/FK8V841.jpg",
    job_title: "Senior Front-End Developer",
    email: "jodimanship@email.com",
    username: "jodi28764",
    password: "28764",
    isadmin: false,
  },
  {
    id: 24,
    name: "Louisa Strapp",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-women/48/eyes-office-women-glasses-icon.png",
    job_title: "Junior Front-End Developer",
    email: "louisastrapp@email.com",
    username: "louisa24769",
    password: "24769",
    isadmin: false,
  },
  {
    id: 25,
    name: "Robert Smith",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "Senior Designer",
    email: "robertsmith@email.com",
    username: "robert76397",
    password: "76397",
    isadmin: false,
  },
  {
    id: 26,
    name: "Margie Slade",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10233-man-judge-light-skin-tone-icon.png",
    job_title: "Junior Designer",
    email: "margieslade@email.com",
    username: "margie12520",
    password: "12520",
    isadmin: false,
  },
  {
    id: 27,
    name: "Shawn Doyle",
    avatar:
      "http://icons.iconarchive.com/icons/iconshock/trendy-guys/48/andrew-icon.png",
    job_title: "UI Designer",
    email: "shawndoyle@email.com",
    username: "shawn57467",
    password: "57467",
    isadmin: false,
  },
  {
    id: 28,
    name: "Elizabeth Chandler",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Systems Manager",
    email: "elizabethchandler@email.com",
    username: "elizabeth62358",
    password: "62358",
    isadmin: false,
  },
  {
    id: 29,
    name: "Keith Whitney",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Emo-Haircut-icon.png",
    job_title: "Lead Developer",
    email: "keithwhitney@email.com",
    username: "keith29709",
    password: "29709",
    isadmin: false,
  },
  {
    id: 30,
    name: "Anita Wekenborg",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Goatee-Beard-icon.png",
    job_title: "Junior Designer",
    email: "anitawekenborg@email.com",
    username: "anita65866",
    password: "65866",
    isadmin: false,
  },
  {
    id: 31,
    name: "Wilhelmina Morquecho",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "UI Designer",
    email: "wilhelminamorquecho@email.com",
    username: "wilhelmina74058",
    password: "74058",
    isadmin: false,
  },
  {
    id: 32,
    name: "Vanessa Adams",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Business Systems Analyst",
    email: "vanessaadams@email.com",
    username: "vanessa88763",
    password: "88763",
    isadmin: false,
  },
  {
    id: 33,
    name: "Matthew Minert",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10309-woman-office-worker-light-skin-tone-icon.png",
    job_title: "Junior Full-Stack Developer",
    email: "matthewminert@email.com",
    username: "matthew21989",
    password: "21989",
    isadmin: false,
  },
  {
    id: 34,
    name: "Carla Clark",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Systems Administrator",
    email: "carlaclark@email.com",
    username: "carla7874",
    password: "7874",
    isadmin: false,
  },
  {
    id: 35,
    name: "Dennis Pickhardt",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Interaction Designer",
    email: "dennispickhardt@email.com",
    username: "dennis89864",
    password: "89864",
    isadmin: false,
  },
  {
    id: 36,
    name: "Amos Stanhope",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Business Systems Analyst",
    email: "amosstanhope@email.com",
    username: "amos93903",
    password: "93903",
    isadmin: false,
  },
  {
    id: 37,
    name: "Jody Romero",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/donald-trump-icon.png",
    job_title: "Digital Marketing Manager",
    email: "jodyromero@email.com",
    username: "jody48215",
    password: "48215",
    isadmin: false,
  },
  {
    id: 38,
    name: "Karen Williams",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "UI Designer",
    email: "karenwilliams@email.com",
    username: "karen17672",
    password: "17672",
    isadmin: false,
  },
  {
    id: 39,
    name: "Sandra Zapata",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
    job_title: "Senior Full-Stack Developer",
    email: "sandrazapata@email.com",
    username: "sandra76709",
    password: "76709",
    isadmin: false,
  },
  {
    id: 40,
    name: "Sharon Clarke",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/teenage-girl/48/girl-chuckle-icon.png",
    job_title: "Digital Marketing Specialist",
    email: "sharonclarke@email.com",
    username: "sharon65568",
    password: "65568",
    isadmin: false,
  },
  {
    id: 41,
    name: "Charles Moore",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Black-icon.png",
    job_title: "Systems Manager",
    email: "charlesmoore@email.com",
    username: "charles47791",
    password: "47791",
    isadmin: false,
  },
  {
    id: 42,
    name: "Linda Woods",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/people/48/black-man-icon.png",
    job_title: "Database Administrator",
    email: "lindawoods@email.com",
    username: "linda16882",
    password: "16882",
    isadmin: false,
  },
  {
    id: 43,
    name: "Joan Hernandez",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Goatee-Beard-icon.png",
    job_title: "Business Systems Analyst",
    email: "joanhernandez@email.com",
    username: "joan97914",
    password: "97914",
    isadmin: false,
  },
  {
    id: 44,
    name: "Keith Hobbs",
    avatar: "https://i.imgur.com/T2WwVfS.png",
    job_title: "Lead Developer",
    email: "keithhobbs@email.com",
    username: "keith74266",
    password: "74266",
    isadmin: false,
  },
  {
    id: 45,
    name: "Shannon Cauterucci",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10309-woman-office-worker-light-skin-tone-icon.png",
    job_title: "Senior Front-End Developer",
    email: "shannoncauterucci@email.com",
    username: "shannon40014",
    password: "40014",
    isadmin: false,
  },
  {
    id: 46,
    name: "Doug Bunnell",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10233-man-judge-light-skin-tone-icon.png",
    job_title: "Social Media Manager",
    email: "dougbunnell@email.com",
    username: "doug41550",
    password: "41550",
    isadmin: false,
  },
  {
    id: 47,
    name: "James Walters",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/andy-warhol-icon.png",
    job_title: "Database Administrator",
    email: "jameswalters@email.com",
    username: "james12721",
    password: "12721",
    isadmin: false,
  },
  {
    id: 48,
    name: "Debra Guereca",
    avatar:
      "http://icons.iconarchive.com/icons/iconshock/trendy-guys/48/andrew-icon.png",
    job_title: "Accessibility Specialist",
    email: "debraguereca@email.com",
    username: "debra8144",
    password: "8144",
    isadmin: false,
  },
  {
    id: 49,
    name: "Aldo Robertson",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-women/48/eyes-office-women-glasses-icon.png",
    job_title: "Junior Backend Developer",
    email: "aldorobertson@email.com",
    username: "aldo33043",
    password: "33043",
    isadmin: false,
  },
  {
    id: 50,
    name: "Yang Mann",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10239-man-judge-medium-dark-skin-tone-icon.png",
    job_title: "Senior Full-Stack Developer",
    email: "yangmann@email.com",
    username: "yang33154",
    password: "33154",
    isadmin: false,
  },
  {
    id: 51,
    name: "Janis Tocco",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Systems Manager",
    email: "janistocco@email.com",
    username: "janis81506",
    password: "81506",
    isadmin: false,
  },
  {
    id: 52,
    name: "Glenda Veazey",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/teenage-girl/48/girl-chuckle-icon.png",
    job_title: "Social Media Specialist",
    email: "glendaveazey@email.com",
    username: "glenda14974",
    password: "14974",
    isadmin: false,
  },
  {
    id: 53,
    name: "Ruth Bratt",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Senior Designer",
    email: "ruthbratt@email.com",
    username: "ruth39070",
    password: "39070",
    isadmin: false,
  },
  {
    id: 54,
    name: "Joann Wood",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-women/48/eyes-office-women-glasses-icon.png",
    job_title: "Digital Marketing Manager",
    email: "joannwood@email.com",
    username: "joann6766",
    password: "6766",
    isadmin: false,
  },
  {
    id: 55,
    name: "Peter Smith",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Hair-icon.png",
    job_title: "Systems Manager",
    email: "petersmith@email.com",
    username: "peter79032",
    password: "79032",
    isadmin: false,
  },
  {
    id: 56,
    name: "John Cooley",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Information Architect",
    email: "johncooley@email.com",
    username: "john39664",
    password: "39664",
    isadmin: false,
  },
  {
    id: 57,
    name: "Debra Black",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Goatee-Beard-icon.png",
    job_title: "Information Architect",
    email: "debrablack@email.com",
    username: "debra80475",
    password: "80475",
    isadmin: false,
  },
  {
    id: 58,
    name: "Larry Murray",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Systems Administrator",
    email: "larrymurray@email.com",
    username: "larry61995",
    password: "61995",
    isadmin: false,
  },
  {
    id: 59,
    name: "Richard Crews",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/dave-grohl-icon.png",
    job_title: "Digital Marketing Manager",
    email: "richardcrews@email.com",
    username: "richard52316",
    password: "52316",
    isadmin: false,
  },
  {
    id: 60,
    name: "Nikki Pacheco",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10239-man-judge-medium-dark-skin-tone-icon.png",
    job_title: "UI Designer",
    email: "nikkipacheco@email.com",
    username: "nikki9223",
    password: "9223",
    isadmin: false,
  },
  {
    id: 61,
    name: "Jeremy Glass",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/andy-warhol-icon.png",
    job_title: "Information Architect",
    email: "jeremyglass@email.com",
    username: "jeremy8338",
    password: "8338",
    isadmin: false,
  },
  {
    id: 62,
    name: "Marjorie Wakley",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10309-woman-office-worker-light-skin-tone-icon.png",
    job_title: "Lead Developer",
    email: "marjoriewakley@email.com",
    username: "marjorie13362",
    password: "13362",
    isadmin: false,
  },
  {
    id: 63,
    name: "Tommie Main",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10233-man-judge-light-skin-tone-icon.png",
    job_title: "Social Media Manager",
    email: "tommiemain@email.com",
    username: "tommie24827",
    password: "24827",
    isadmin: false,
  },
  {
    id: 64,
    name: "Steve Peller",
    avatar: "https://i.imgur.com/twYrpay.jpg",
    job_title: "Interaction Designer",
    email: "stevepeller@email.com",
    username: "steve692",
    password: "692",
    isadmin: false,
  },
  {
    id: 65,
    name: "Peggy Callicutt",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Senior Front-End Developer",
    email: "peggycallicutt@email.com",
    username: "peggy1690",
    password: "1690",
    isadmin: false,
  },
  {
    id: 66,
    name: "Louise Custer",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Junior Front-End Developer",
    email: "louisecuster@email.com",
    username: "louise71035",
    password: "71035",
    isadmin: false,
  },
  {
    id: 67,
    name: "Ronald Hebert",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Junior Full-Stack Developer",
    email: "ronaldhebert@email.com",
    username: "ronald65891",
    password: "65891",
    isadmin: false,
  },
  {
    id: 68,
    name: "Betty Groves",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/cristiano-ronaldo-icon.png",
    job_title: "Senior Backend Developer",
    email: "bettygroves@email.com",
    username: "betty83494",
    password: "83494",
    isadmin: false,
  },
  {
    id: 69,
    name: "Anna Sarni",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Information Architect",
    email: "annasarni@email.com",
    username: "anna7351",
    password: "7351",
    isadmin: false,
  },
  {
    id: 70,
    name: "Ines Toothman",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Emo-Haircut-icon.png",
    job_title: "Accessibility Specialist",
    email: "inestoothman@email.com",
    username: "ines27377",
    password: "27377",
    isadmin: false,
  },
  {
    id: 71,
    name: "Sherry Magno",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "UX Designer",
    email: "sherrymagno@email.com",
    username: "sherry32302",
    password: "32302",
    isadmin: false,
  },
  {
    id: 72,
    name: "Steven Harrell",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/girl-in-ballcap-icon.png",
    job_title: "Seo Consultant",
    email: "stevenharrell@email.com",
    username: "steven78754",
    password: "78754",
    isadmin: false,
  },
  {
    id: 73,
    name: "Gail Castro",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "Accessibility Specialist",
    email: "gailcastro@email.com",
    username: "gail16490",
    password: "16490",
    isadmin: false,
  },
  {
    id: 74,
    name: "Anne Riggs",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Black-icon.png",
    job_title: "Digital Marketing Manager",
    email: "anneriggs@email.com",
    username: "anne49565",
    password: "49565",
    isadmin: false,
  },
  {
    id: 75,
    name: "James Hillery",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Hair-icon.png",
    job_title: "Seo Consultant",
    email: "jameshillery@email.com",
    username: "james1807",
    password: "1807",
    isadmin: false,
  },
  {
    id: 76,
    name: "William Granthan",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Black-icon.png",
    job_title: "Database Administrator",
    email: "williamgranthan@email.com",
    username: "william10751",
    password: "10751",
    isadmin: false,
  },
  {
    id: 77,
    name: "Gary Bealer",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-women/48/eyes-office-women-glasses-icon.png",
    job_title: "Senior Designer",
    email: "garybealer@email.com",
    username: "gary36404",
    password: "36404",
    isadmin: false,
  },
  {
    id: 78,
    name: "Raymond Batten",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/girl-in-ballcap-icon.png",
    job_title: "Systems Engineer",
    email: "raymondbatten@email.com",
    username: "raymond55320",
    password: "55320",
    isadmin: false,
  },
  {
    id: 79,
    name: "Yvonne Hackett",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/people/48/black-man-icon.png",
    job_title: "Lead Developer",
    email: "yvonnehackett@email.com",
    username: "yvonne6244",
    password: "6244",
    isadmin: false,
  },
  {
    id: 80,
    name: "Duane Taylor",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Goatee-Beard-icon.png",
    job_title: "Business Systems Analyst",
    email: "duanetaylor@email.com",
    username: "duane51921",
    password: "51921",
    isadmin: false,
  },
  {
    id: 81,
    name: "Juan Harris",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10303-man-office-worker-light-skin-tone-icon.png",
    job_title: "UX Designer",
    email: "juanharris@email.com",
    username: "juan95630",
    password: "95630",
    isadmin: false,
  },
  {
    id: 82,
    name: "Benjamin Jones",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Social Media Specialist",
    email: "benjaminjones@email.com",
    username: "benjamin41333",
    password: "41333",
    isadmin: false,
  },
  {
    id: 83,
    name: "Harold Figaro",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-women/48/eyes-office-women-glasses-icon.png",
    job_title: "UI Designer",
    email: "haroldfigaro@email.com",
    username: "harold39322",
    password: "39322",
    isadmin: false,
  },
  {
    id: 84,
    name: "Sammie Johnson",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Senior Designer",
    email: "sammiejohnson@email.com",
    username: "sammie13730",
    password: "13730",
    isadmin: false,
  },
  {
    id: 85,
    name: "Frank Malinowski",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Grey-icon.png",
    job_title: "Database Manager",
    email: "frankmalinowski@email.com",
    username: "frank41270",
    password: "41270",
    isadmin: false,
  },
  {
    id: 86,
    name: "Ronald Szychowski",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10233-man-judge-light-skin-tone-icon.png",
    job_title: "Mobile Developer",
    email: "ronaldszychowski@email.com",
    username: "ronald73630",
    password: "73630",
    isadmin: false,
  },
  {
    id: 87,
    name: "Helen Waldrup",
    avatar: "https://i.imgur.com/twYrpay.jpg",
    job_title: "Information Architect",
    email: "helenwaldrup@email.com",
    username: "helen73389",
    password: "73389",
    isadmin: false,
  },
  {
    id: 88,
    name: "Margaret Cleary",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10233-man-judge-light-skin-tone-icon.png",
    job_title: "Systems Manager",
    email: "margaretcleary@email.com",
    username: "margaret19393",
    password: "19393",
    isadmin: false,
  },
  {
    id: 89,
    name: "Vida Mcgill",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-women/48/eyes-office-women-glasses-icon.png",
    job_title: "UX Designer",
    email: "vidamcgill@email.com",
    username: "vida69414",
    password: "69414",
    isadmin: false,
  },
  {
    id: 90,
    name: "Melvin Wallace",
    avatar: "https://i.imgur.com/T2WwVfS.png",
    job_title: "Senior Designer",
    email: "melvinwallace@email.com",
    username: "melvin50192",
    password: "50192",
    isadmin: false,
  },
  {
    id: 91,
    name: "Karisa Rodgers",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Goatee-Beard-icon.png",
    job_title: "Digital Marketing Specialist",
    email: "karisarodgers@email.com",
    username: "karisa17899",
    password: "17899",
    isadmin: false,
  },
  {
    id: 92,
    name: "Michael Jones",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/girl-in-ballcap-icon.png",
    job_title: "Database Manager",
    email: "michaeljones@email.com",
    username: "michael69115",
    password: "69115",
    isadmin: false,
  },
  {
    id: 93,
    name: "Troy Chapa",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/office-men/48/Man-Black-icon.png",
    job_title: "Systems Manager",
    email: "troychapa@email.com",
    username: "troy7001",
    password: "7001",
    isadmin: false,
  },
  {
    id: 94,
    name: "Carl Yang",
    avatar:
      "http://icons.iconarchive.com/icons/diversity-avatars/avatars/48/barack-obama-icon.png",
    job_title: "Web Analytics Developer",
    email: "carlyang@email.com",
    username: "carl96778",
    password: "96778",
    isadmin: false,
  },
  {
    id: 95,
    name: "Todd Alier",
    avatar:
      "http://icons.iconarchive.com/icons/dapino/teenage-girl/48/girl-chuckle-icon.png",
    job_title: "Seo Consultant",
    email: "toddalier@email.com",
    username: "todd84820",
    password: "84820",
    isadmin: false,
  },
  {
    id: 96,
    name: "Miguel Mcdonough",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Bow-Tie-icon.png",
    job_title: "Junior Front-End Developer",
    email: "miguelmcdonough@email.com",
    username: "miguel796",
    password: "796",
    isadmin: false,
  },
  {
    id: 97,
    name: "Myrtle Widger",
    avatar:
      "http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/48/10312-woman-office-worker-medium-dark-skin-tone-icon.png",
    job_title: "Junior Designer",
    email: "myrtlewidger@email.com",
    username: "myrtle71933",
    password: "71933",
    isadmin: false,
  },
  {
    id: 98,
    name: "Faye Knaff",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
    job_title: "Interaction Designer",
    email: "fayeknaff@email.com",
    username: "faye34346",
    password: "34346",
    isadmin: false,
  },
  {
    id: 99,
    name: "Gail Lopez",
    avatar: "https://i.imgur.com/LpaY82x.png",
    job_title: "Digital Marketing Manager",
    email: "gaillopez@email.com",
    username: "gail28650",
    password: "28650",
    isadmin: false,
  },
  {
    id: 100,
    name: "Mary Podbielski",
    avatar:
      "http://icons.iconarchive.com/icons/designbolts/free-male-avatars/48/Male-Avatar-Hair-icon.png",
    job_title: "Junior Backend Developer",
    email: "marypodbielski@email.com",
    username: "mary25415",
    password: "25415",
    isadmin: false,
  },
];

// const userFeedback = getUserFeedbacks(
//   employee[0],
//   surveys,
//   virtues,
//   employees,
//   virtueBuckets
// );
// getAverageRatings(userFeedback);
// console.log(getAverageRatings(userFeedback));

export {
  getFeedbacks,
  getResults,
  getUserFeedbacks,
  getAverageRatings,
  getTotalAverage,
};
