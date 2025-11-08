type props = {
  onPress: () => void;
  text: string;
  color?: string;
  disabled?: boolean;
};

const Answer = (props: props) => {
  const style = props.color ? { color: props.color } : {};

  return (
    <>
      <button
        className="answer-btn"
        onClick={props.onPress}
        disabled={props.disabled}
      >
        <span style={style}>{props.text}</span>
      </button>
    </>
  );
};

export default Answer;
