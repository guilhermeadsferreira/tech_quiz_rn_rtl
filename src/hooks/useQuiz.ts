import React, { useState } from "react";
import { getTriviaCategories, IOption } from "../api/services/OpenTrivia";

const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<IOption[]>([]);
  const [urlQuiz, setUrlQuiz] = useState("");

  React.useEffect(() => {
    if (urlQuiz) {
      console.log("Request: ", urlQuiz);
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

  return { loading, categories, setUrlQuiz };
};

export default useQuiz;
