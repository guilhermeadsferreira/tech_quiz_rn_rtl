import React, { useState } from "react";
import { getQuiz, getTriviaCategories } from "../services/OpenTrivia";
import { IOption, IQuiz } from "../services/OpenTrivia/types";

const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<IOption[]>([]);
  const [urlQuiz, setUrlQuiz] = useState("");
  const [quizQuestions, setQuizQuestions] = useState<IQuiz[]>([]);

  React.useEffect(() => {
    if (urlQuiz) {
      (async () => {
        setLoading(true);
        const response = await getQuiz(urlQuiz);
        setQuizQuestions(response);
        setLoading(false);
      })();
    }
  }, [urlQuiz]);

  React.useEffect(() => {
    let mounted = true;

    (async () => {
      if (mounted) {
        setLoading(true);
        const triviaCategories = await getTriviaCategories();
        setCategories(triviaCategories);
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { loading, categories, setUrlQuiz, quizQuestions };
};

export default useQuiz;
