import React, { createContext } from "react";
import useQuiz from "../hooks/useQuiz";
import { IOption } from "../services/OpenTrivia/types";
import Loading from "../components/Loading";
import { IQuiz } from "../services/OpenTrivia/types";

interface IMainContext {
  loading: boolean;
  categories: IOption[];
  setUrlQuiz: (value: string) => void;
  quizQuestions: IQuiz[];
}

const MainContext = createContext<IMainContext>({} as IMainContext);

const MainContextProvider: React.FC = ({ children }) => {
  const { loading, categories, setUrlQuiz, quizQuestions } = useQuiz();

  return (
    <MainContext.Provider
      value={{ loading, categories, setUrlQuiz, quizQuestions }}
    >
      <Loading show={loading} />
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => React.useContext(MainContext);

export { MainContext, MainContextProvider, useMainContext };
