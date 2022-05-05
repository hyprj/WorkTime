import React from "react";

import classes from "./card.module.scss";

export const Card = ({ title, children }) => {
  return (
    <div className={classes.item}>
      <p className={classes.title}>{title}</p>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
