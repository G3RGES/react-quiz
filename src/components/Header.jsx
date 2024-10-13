import React from "react";

import quizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="ReactQuiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
