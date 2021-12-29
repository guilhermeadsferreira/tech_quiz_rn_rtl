import axios from "../axios";

export interface IOption {
  id: number | string;
  name: string;
}

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
