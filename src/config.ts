const maxLives = 3;

const maxQuestions = 10;

const BASE_URL = "https://opentdb.com";

const arrayNumberOfQuestions = Array(50)
  .fill("")
  .map((_, index) => ({
    id: index + 1,
    name: `${index + 1}`,
  }));

const arrayDifficulties = [
  {
    id: "easy",
    name: "Easy",
  },
  {
    id: "medium",
    name: "Medium",
  },
  {
    id: "hard",
    name: "Hard",
  },
];

const arrayTypes = [
  {
    id: "multiple",
    name: "Multiple Choice",
  },
  {
    id: "boolean",
    name: "True / False",
  },
];

const queryParams = ["amount", "category", "difficulty", "type"];

export {
  maxLives,
  maxQuestions,
  BASE_URL,
  arrayNumberOfQuestions,
  arrayDifficulties,
  arrayTypes,
  queryParams,
};
