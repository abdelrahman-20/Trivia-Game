import { useState } from "react";
import questions from "./questions.json";
import type { Questions } from "./Types";
import StatBar from "./components/StatBar";
import QuestionComponent from "./components/QuestionComponent";
import Reset from "./components/Reset";

function App() {
  const allQuestions = questions as Questions;
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [advance, setAdvance] = useState(false);

  const onSubmit = (correct: boolean) => {
    setAdvance(true);
    if (correct) setCorrectAnswers((prev) => prev + 1);
    else setIncorrectAnswers((prev) => prev + 1);
  };

  const reset = () => {
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCurrentQuestionIdx(0);
  };

  if (currentQuestionIdx >= allQuestions.questions.length) {
    return (
      <Reset
        totalQuestions={allQuestions.questions.length}
        correctQuestions={correctAnswers}
        onPress={reset}
      ></Reset>
    );
  }

  return (
    <div className="container">
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestions.questions.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      ></StatBar>

      <QuestionComponent
        question={allQuestions.questions[currentQuestionIdx]}
        onSubmit={onSubmit}
      ></QuestionComponent>

      {advance && (
        <button
          className="next-question"
          onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
        >
          Next Question ...
        </button>
      )}
    </div>
  );
}

export default App;
