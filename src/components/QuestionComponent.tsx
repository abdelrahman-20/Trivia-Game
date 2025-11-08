import type { Question } from "../Types";
import Answers from "./Answers";

type props = {
  question: Question;
  onSubmit: (correct: boolean) => void;
};

const QuestionComponent = (props: props) => {
  return (
    <div className="questions">
      <h3>{props.question.question}</h3>
      <Answers questions={props.question} onSubmit={props.onSubmit} />
    </div>
  );
};

export default QuestionComponent;
