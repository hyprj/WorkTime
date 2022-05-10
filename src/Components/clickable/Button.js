import React from "react";

import classes from "./button.module.scss";

export const Button = ({ children, color, size, type, onClick, disabled }) => {
  const colorClass = `button--${color}`;
  const sizeClass = `button--${size}`;
  const btnType = type || "button";
  const isDisabled = disabled || false;

  // console.log(disabled, isDisabled);

  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${classes[colorClass]} ${classes[sizeClass]}`}
      type={btnType}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
