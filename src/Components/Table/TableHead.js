import React from "react";

import classes from "./table.module.scss";

export const TableHead = ({ children }) => {
  return <thead className={classes.table_head}>{children}</thead>;
};
