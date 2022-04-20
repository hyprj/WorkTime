import classes from "./button.module.scss";
// import classes from "./button.module.css";

const Button = ({ onClick, children, type, color, className }) => {
  // color = `button${color}`;
  // const modifier = classes[color] || "";
  console.log(className)
  return (
    <button
      // className={`${classes.button} ${modifier}`}
      // className={className}
      className={className}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
