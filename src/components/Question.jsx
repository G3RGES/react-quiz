import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";

const Question = ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });

  const handdleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswers: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswers: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswers) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <QuestionTimer
        //* keys can be used to reset the component

        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answerState={answerState}
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswers={answer.selectedAnswers}
        onSelect={handdleSelectAnswer}
      />
    </div>
  );
};

export default Question;
