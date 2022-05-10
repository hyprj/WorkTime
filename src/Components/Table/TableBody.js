import React from "react";

import classes from "./table.module.scss";

export const TableBody = ({ children }) => {
  return <tbody className={classes.table_body}>{children}</tbody>;
};
