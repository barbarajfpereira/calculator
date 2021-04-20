import "./Display.css";

const Display = (props) => {
  const { formula, result } = props;

  return (
    <div className="display">
      <div className="formula">{formula}</div>
      <div className="result" id="display">
        {result}
      </div>
    </div>
  );
};

export default Display;
