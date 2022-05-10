import React from "react";

import classes from "./table.module.scss";

export const TableCell = (key, { children }) => {
  return <td key={key}>{children}</td>;
};
