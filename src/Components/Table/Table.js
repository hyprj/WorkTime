import React, { useContext } from "react";
import { AccessContext, useAccess } from "../../context/AccessContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MobileTable } from "./MobileTable";
import { FullTable } from "./FullTable";
import { TableRow } from "./tableRow";

import classes from "./table.module.scss";

export const Table = ({ columns, data, isEditable }) => {
  const windowSize = useWindowSize();

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.name}>{col?.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((empl) => (
          <TableRow key={empl.info.id} empl={empl} columns={columns} />
        ))}
      </tbody>
    </table>
  );
};
