import create from "zustand";
import { getQuiz, getTriviaCategories } from "../services/OpenTrivia";
import { IOption, IQuiz } from "../services/OpenTrivia/types";
import { useGlobalStore } from "./global";

interface IQuizStore {
  categories: IOption[];
  quizQuestions: IQuiz[];
  setQuizQuestions: (quizItems: IQuiz[]) => void;
  fetchCategories: () => void;
  fetchQuizQuestions: (urlQuiz: string) => void;
}

const setLoading = useGlobalStore.getState().setLoading;

const useQuizStore = create<IQuizStore>((set) => ({
  categories: [],
  fetchCategories: async () => {
    setLoading(true);
    const triviaCategories = await getTriviaCategories();
    set(() => ({
      categories: triviaCategories,
    }));
    setLoading(false);
  },
  fetchQuizQuestions: async (urlQuiz: string) => {
    setLoading(true);
    const response = await getQuiz(urlQuiz);
    set({ quizQuestions: response });
    setLoading(false);
  },
  quizQuestions: [],
  setQuizQuestions: (quizItems) => {
    set(() => ({
      quizQuestions: quizItems,
    }));
  },
}));

export { useQuizStore };
