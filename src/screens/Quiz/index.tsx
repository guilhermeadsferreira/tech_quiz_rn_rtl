import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import TouchableOption from "../../components/TouchableOption";
import {
  PageContainer,
  QuestionIndicator,
  LivesText,
  WrapperHearts,
  Heart,
  Question,
  HeaderQuiz,
  WrapperQuestion,
} from "./styles";
import { useMainContext } from "../../contexts/MainContext";
import { maxLives } from "../../config";
import { mustShuffleAnswers } from "../../utils/mustShuffleAnswers";
import { mustGenerateRandomInt } from "../../utils/mustGenerateRandomInt";
import { IQuizProgress } from "./types";
import Answer from "./components/Answer";

//END GAME QUANDO VIDAS ACABAREM, USUÁRIO ERRAR 3 VEZES

const initialArrayWithLives = Array(maxLives)
  .fill("")
  .map((_) => {
    return {
      path: require("../../assets/images/heart-full.png"),
    };
  });

const Quiz: React.FC = () => {
  const navigation = useNavigation();
  const { quizQuestions } = useMainContext();
  const [quizProgress, setQuizProgress] = useState<IQuizProgress>(
    {} as IQuizProgress
  );
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [arrayWithLives, setArrayWithLives] = useState(initialArrayWithLives);

  useEffect(() => {
    if (quizQuestions[0]) {
      handleNextQuestion();
    }
  }, [quizQuestions]);

  const handleNextQuestion = useCallback(
    (
      indexCurrentQuestion = 1,
      numberOfCorrectAnswer = 0,
      numberOfLives = 3
    ) => {
      const randomInt = mustGenerateRandomInt(0, 3);

      const shuffleAnswers = mustShuffleAnswers(
        quizQuestions[indexCurrentQuestion - 1].incorrect_answers,
        quizQuestions[indexCurrentQuestion - 1].correct_answer,
        randomInt
      );

      const currentQuestions = {
        ...quizQuestions[indexCurrentQuestion - 1],
        answers: shuffleAnswers,
      };

      setQuizProgress({
        numberOfQuestions: quizQuestions.length,
        indexCurrentQuestion,
        numberOfCorrectAnswer,
        numberOfLives,
        currentQuestion: currentQuestions,
      });

      setChosenAnswer("");
    },
    [quizQuestions]
  );

  // useEffect(() => {
  //   if (quizProgress.numberOfLives === 0) {
  //     console.log("Acabou o jogo");
  //   }
  // }, [quizProgress.numberOfLives]);

  const handleLives = (currentNumberOfLives: number) => {
    const arrayWithLives = Array(maxLives)
      .fill("")
      .map((_, index) => {
        let path = require("../../assets/images/heart-empty.png");

        if (index < currentNumberOfLives) {
          path = require("../../assets/images/heart-full.png");
        }

        return { path };
      });

    console.log(arrayWithLives);

    setArrayWithLives(arrayWithLives);
  };

  return (
    <PageContainer>
      <HeaderQuiz>
        <QuestionIndicator>{`Question ${quizProgress?.indexCurrentQuestion} / ${quizProgress?.numberOfQuestions}`}</QuestionIndicator>
        <TouchableOption
          label="Reset Quiz"
          onPress={() =>
            navigation.dispatch(StackActions.replace("StartQuiz", {}))
          }
          marginTop={0}
          marginRight={0}
        />
      </HeaderQuiz>
      <LivesText>Lives</LivesText>
      <WrapperHearts>
        {arrayWithLives?.map((item, index) => (
          <Heart source={item.path} key={`index-${index}`} />
        ))}
      </WrapperHearts>
      {console.log(quizProgress?.currentQuestion?.correct_answer)}
      <WrapperQuestion>
        <Question>{quizProgress?.currentQuestion?.question}</Question>
        {quizProgress?.currentQuestion?.answers?.map((item) => (
          <Answer
            key={item}
            answer={item}
            handleChoiceAnswer={() => setChosenAnswer(item)}
            chosenAnswer={chosenAnswer}
            correctAnswer={quizProgress.currentQuestion.correct_answer}
            handleNextQuestion={() => {
              const {
                indexCurrentQuestion,
                numberOfQuestions,
                numberOfCorrectAnswer,
                numberOfLives,
                currentQuestion: { correct_answer },
              } = quizProgress;
              if (indexCurrentQuestion === numberOfQuestions) {
                return;
              }

              const isCorrectAnswer = item === correct_answer;

              const currentNumberOfLives = isCorrectAnswer
                ? numberOfLives
                : numberOfLives - 1;

              handleLives(currentNumberOfLives);

              if (currentNumberOfLives === 0) {
                console.log("Acabou o jogo");
                return;
              }

              const indexNextQuestion = indexCurrentQuestion + 1;
              const numberOfCorrectAnswers = isCorrectAnswer
                ? numberOfCorrectAnswer + 1
                : numberOfCorrectAnswer;

              handleNextQuestion(
                indexNextQuestion,
                numberOfCorrectAnswers,
                currentNumberOfLives
              );
            }}
            disabledTouchable={!!chosenAnswer}
          />
        ))}
      </WrapperQuestion>
    </PageContainer>
  );
};

export default Quiz;
