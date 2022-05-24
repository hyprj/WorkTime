import React from "react";

import classes from "./section.module.scss";

export const Section = ({ title, children }) => {
  return (
    <div className={classes.section_container}>
      <div className={classes.section}>
        <h2 className={classes.section_title}>{title}</h2>
        <div className={classes.section_content}>{children}</div>
      </div>
    </div>
  );
};
