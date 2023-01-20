import { ButtonVariants } from '../../../component-library/components/Buttons/Button';

export enum QuizStage {
  introduction = 'introduction',
  questionOne = 'question-one',
  wrongAnswerQuestionOne = 'wrong-answer-question-one',
  rightAnswerQuestionOne = 'right-answer-question-one',
  questionTwo = 'question-two',
  wrongAnswerQuestionTwo = 'wrong-answer-question-two',
  rightAnswerQuestionTwo = 'right-answer-question-two',
}

export interface IQuizInformationProps {
  title: {
    content: string;
    style?: any;
  };
  buttons: {
    onPress: () => void;
    label: string;
    variant: ButtonVariants;
  }[];
  dismiss: () => void;
  header?: string;
  content?: string;
  icon?: any;
}

export interface Question {
  content: string;
  answers: Answer[];
}

export interface Answer {
  content: string;
  correct: boolean;
}
