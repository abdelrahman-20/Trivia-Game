import { useEffect, useState } from "react";
import type { Question } from "../Types";
import Answer from "./Answer";

type props = {
  questions: Question;
  onSubmit: (correct: boolean) => void;
};

const Answers = (props: props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [props.questions]);

  const onPress = (idx: number) => {
    setShowAnswer(true);
    props.onSubmit(props.questions.correctAnswerIdx === idx);
  };

  return (
    <div className="answers">
      {props.questions.choices.map((choice, idx) => {
        let color = "";
        if (showAnswer && props.questions.correctAnswerIdx === idx)
          color = "green";
        else if (showAnswer) color = "red";

        return (
          <Answer
            text={choice}
            onPress={() => onPress(idx)}
            color={color}
            disabled={showAnswer}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default Answers;
