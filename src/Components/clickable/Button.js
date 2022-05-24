import React from "react";

import classes from "./button.module.scss";

export const Button = ({ children, color, size, type, onClick, disabled }) => {
  const colorClass = `button___${color}`;
  const sizeClass = `button___${size}`;
  const btnType = type || "button";
  const isDisabled = disabled || false;

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
