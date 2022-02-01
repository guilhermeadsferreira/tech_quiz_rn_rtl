import React, { useState } from "react";
import { Touchable, AnswerText } from "./styles";

interface IAnswer {
  answer: string;
  chosenAnswer: string;
  handleChoiceAnswer: () => void;
  correctAnswer: string;
  handleNextQuestion: () => void;
  disabledTouchable: boolean;
}

const Answer: React.FC<IAnswer> = ({
  answer,
  chosenAnswer,
  handleChoiceAnswer,
  correctAnswer,
  handleNextQuestion,
  disabledTouchable,
}) => {
  const [touchableBorderColor, setTouchableBorderColor] = useState("white");

  return (
    <Touchable
      onPress={() => {
        handleChoiceAnswer();
        setTouchableBorderColor(answer === correctAnswer ? "green" : "red");

        setTimeout(() => {
          handleNextQuestion();
        }, 2000);
      }}
      disabled={disabledTouchable}
      borderColor={touchableBorderColor}
    >
      <AnswerText>{answer}</AnswerText>
    </Touchable>
  );
};

export default Answer;
