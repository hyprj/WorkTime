import React from "react";

import classes from "./cards.module.scss";

export const Cards = ({ children }) => {
  return <div className={classes.cards}>{children}</div>;
};
