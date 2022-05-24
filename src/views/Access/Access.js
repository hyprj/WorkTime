import React from "react";

import classes from "./access.module.scss";

export const Access = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <div className={classes.login_content} />
        {children}
      </div>
    </div>
  );
};
