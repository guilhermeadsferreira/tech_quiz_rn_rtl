export interface IOption {
  id: number | string;
  name: string;
}

export interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
