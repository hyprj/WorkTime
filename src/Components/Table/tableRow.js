import React, { Children } from "react";

import classes from "./table.module.scss";

export const TableRow = ({ empl, columns, children, onClick }) => {
  return (
    <>
      <tr
        key={empl.info.id}
        className={classes.table_row}
        onClick={() => onClick(empl)}
      >
        {columns.map((col) => {
          return empl.data[col.name] ? (
            <td
              className={`${classes.table_cell} ${classes.table_cell_data}`}
              key={`${empl.info.id}${col.name}`}
            >
              {empl.data[col.name].toString}
            </td>
          ) : (
            <td
              className={`${classes.table_cell} ${classes.table_cell_data}`}
              key={`${empl.info.id}${col.name}`}
            />
          );
        })}
      </tr>
      {children}
    </>
  );
};
