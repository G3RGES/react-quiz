import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswers,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer
        //* keys can be used to reset the component

        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answerState={answerState}
        answers={answers}
        selectedAnswers={selectedAnswers}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
