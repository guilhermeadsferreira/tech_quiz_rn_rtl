import { IQuiz } from "../../services/OpenTrivia/types";

interface ICurrentQuestion extends IQuiz {
  answers: string[];
}

export interface IQuizProgress {
  numberOfQuestions: number;
  indexCurrentQuestion: number;
  numberOfCorrectAnswer: number;
  numberOfLives: number;
  currentQuestion: ICurrentQuestion;
}
