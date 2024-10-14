import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";

const Question = ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswers) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

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
      //* FOR SOME REASON THE TIMER ISN'T AFFECTED BY THE if() CONDITION SO I HAVE TO HARDCODE THEM HERE
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1000);
    }, 2000);
  };

  let answerState = "";

  if (answer.selectedAnswers && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswers) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswers === "" ? onSkipAnswer : null}
        mode={answerState}
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
