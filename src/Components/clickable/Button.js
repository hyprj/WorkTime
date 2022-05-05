import React from "react";

import classes from "./button.module.scss";

export const Button = ({ children, color, size }) => {
  const colorClass = `button--${color}`;
  const sizeClass = `button--${size}`;

  return (
    <button
      className={`${classes.button} ${classes[colorClass]} ${classes[sizeClass]}`}
      type="button"
    >
      {children}
    </button>
  );
};
