import React from "react";

import classes from "./card.module.scss";

export const Card = ({ title, icon, children }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_icon}>
        <i className={icon} />
      </div>
      <div className={classes.card_content}>
        <h3 className={classes.card_title}>{title}</h3>
        <p className={classes.card_text}>{children}</p>
      </div>
    </div>
  );
};
