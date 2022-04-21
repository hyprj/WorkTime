import classes from "./button.module.scss";

export const Button = ({ children, color }) => {
  color = `button--${color}`;
  
  return (
    <button className={`${classes.button} ${classes[color]}`}>
      {children}
    </button>
  );
};
