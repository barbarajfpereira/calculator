import "./Button.css";

const Button = (props) => {
  const { id, label, className, handleClick } = props;

  return (
    <button id={id} onClick={handleClick} className={`button ${className}`}>
      {label}
    </button>
  );
};

export default Button;
