import React, { createContext } from "react";
import useQuiz from "../hooks/useQuiz";
import { IOption } from "../api/services/OpenTrivia";

interface IMainContext {
  categories: IOption[];
  setUrlQuiz: (value: string) => void;
}

const MainContext = createContext<IMainContext>({} as IMainContext);

const MainContextProvider: React.FC = ({ children }) => {
  // const { loading, categories, setUrlQuiz } = useQuiz();
  const categories = [{ id: 10, name: "Teste" }];

  const setUrlQuiz = (value: string) => {};

  return (
    <MainContext.Provider value={{ categories, setUrlQuiz }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
