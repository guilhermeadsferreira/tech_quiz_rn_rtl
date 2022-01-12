import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TouchableOption from "../../components/TouchableOption";
import { WrapperHearts, Heart, Question } from "./styles";
import { APP_PRIMARY_COLOR } from "../../config/theme";
import { useMainContext } from "../../contexts/MainContext";
import { maxLives } from "../../config";
import { mustShuffleAnswers } from "../../utils/mustShuffleAnswers";
import { mustGenerateRandomInt } from "../../utils/mustGenerateRandomInt";
import { IQuizProgress } from "./types";

const arrayWithLives = Array(maxLives)
  .fill("")
  .map((_, index) => index + 1);

const Quiz: React.FC = () => {
  const navigation = useNavigation();
  const { quizQuestions } = useMainContext();
  const [quizProgress, setQuizProgress] = useState<IQuizProgress>(
    {} as IQuizProgress
  );

  React.useEffect(() => {
    if (quizQuestions[0]) {
      const randomInt = mustGenerateRandomInt(0, 3);

      const shuffleAnswers = mustShuffleAnswers(
        quizQuestions[0].incorrect_answers,
        quizQuestions[0].correct_answer,
        randomInt
      );

      const currentQuestions = {
        ...quizQuestions[0],
        answers: shuffleAnswers,
      };

      setQuizProgress({
        numberOfQuestions: quizQuestions.length,
        indexCurrentQuestion: 1,
        numberOfCorrectAnswer: 0,
        numberOfLives: 3,
        currentQuestion: currentQuestions,
      });
    }
  }, [quizQuestions]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: APP_PRIMARY_COLOR }}>
      <TouchableOption label="Reset Quiz" onPress={() => navigation.goBack()} />
      <WrapperHearts>
        {arrayWithLives.map((_, index) => (
          <Heart
            source={require("../../assets/images/heart-full.png")}
            key={`index-${index}`}
          />
        ))}
      </WrapperHearts>
      <Question>{quizProgress?.currentQuestion?.question}</Question>
    </SafeAreaView>
  );
};

export default Quiz;
