import React, { createContext, useEffect } from "react";
import Loading from "../components/Loading";
import shallow from "zustand/shallow";
import { useQuizStore } from "../stores/quiz";
import { useGlobalStore } from "../stores/global";

interface IMainContext {
  loading: boolean;
}

const MainContext = createContext<IMainContext>({} as IMainContext);

const MainContextProvider: React.FC = ({ children }) => {
  const loading = useGlobalStore((state) => state.loading);
  const [fetchCategories] = useQuizStore(
    (state) => [state.fetchCategories],
    shallow
  );

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchCategories();
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <MainContext.Provider value={{ loading }}>
      <Loading show={loading} />
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => React.useContext(MainContext);

export { MainContext, MainContextProvider, useMainContext };
