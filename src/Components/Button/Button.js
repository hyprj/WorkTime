import classes from "./button.module.scss";

const Button = ({ onClick, children, type, color }) => {
  const modifier = classes[color] || "";
  return (
    <button
      className={`${classes.button} ${modifier}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
