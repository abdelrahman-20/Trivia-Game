type props = {
  totalQuestions: number;
  correctQuestions: number;
  onPress: () => void;
};

const Reset = (props: props) => {
  return (
    <div>
      <h1>
        Your Score : {props.correctQuestions} / {props.totalQuestions}
      </h1>
      <button className="reset-btn" onClick={props.onPress}>
        Click To Try Again
      </button>
    </div>
  );
};

export default Reset;
