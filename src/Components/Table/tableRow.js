import React from "react";

import classes from "./table.module.scss";

export const TableRow = ({ empl, columns }) => {
  return (
    <tr key={empl.info.id}>
      {columns.map((col) => {
        return empl.data[col.name] ? (
          <td key={`${empl.info.id}${col.name}`}>{empl.data[col.name]}</td>
        ) : (
          <td key={`${empl.info.id}${col.name}`} />
        );
      })}
    </tr>
  );
};
