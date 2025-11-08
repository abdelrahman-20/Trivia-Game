type props = {
  currentQuestion: number;
  totalQuestions: number;
  correct: number;
  incorrect: number;
};

const StatBar = (props: props) => {
  return (
    <div className="stat-bar">
      <p>
        Questions: {props.currentQuestion} / {props.totalQuestions}
      </p>
      <p>Correct: {props.correct} </p>
      <p>Incorrect: {props.incorrect} </p>
    </div>
  );
};

export default StatBar;
