import axios from "../axios";
import { IOption, IQuiz } from "./types";

export const getTriviaCategories = async (): Promise<IOption[]> => {
  return axios
    .get("/api_category.php")
    .then((res) => {
      return res.data.trivia_categories;
    })
    .catch((err) => {
      return [];
    });
};

export const getQuiz = async (quizUrl: string): Promise<IQuiz[]> => {
  return axios
    .get(quizUrl)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      return [];
    });
};
