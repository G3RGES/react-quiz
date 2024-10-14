import React from "react";

const Question = () => {
  return (
    <div id="question">
      <QuestionTimer
        //* keys can be used to reset the component
        // key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        // key={activeQuestionIndex}
        answerState={answerState}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswers={userAnswers[userAnswers.length - 1]}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
