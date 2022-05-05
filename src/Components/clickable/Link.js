import React from "react";

import classes from "./button.module.scss";

export const Button = ({ children, color, size, background }) => {
  const colorClass = `button--${color}`;
  const sizeClass = `button--${size}`;
  // if (!background) background = `${classes["button--bgLess"]}`
  // const backgroundClass = background ? `${classes["button--bgLess"]}` : "";

  return (
    <button
      type="button"
      className={`${classes.button} ${classes[colorClass]} ${classes[sizeClass]}`}
    >
      {children}
    </button>
  );
};
