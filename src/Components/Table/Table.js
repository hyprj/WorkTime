import React, { useContext, useMemo } from "react";
import { AccessContext, useAccess } from "../../context/AccessContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MobileTable } from "./MobileTable";
import { FullTable } from "./FullTable";
import { TableRow } from "./tableRow";
import { Modal } from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";

import classes from "./table.module.scss";

export const Table = ({ columns, data, isEditable, onRowClick }) => {
  return (
    <table className={classes.table}>
      <thead className={classes.table_head}>
        <tr className={classes.table_headRow}>
          {columns.map((col) => (
            <th
              key={col.name}
              className={`${classes.table_cell} ${classes.table_headCell}`}
            >
              {col?.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.table_body}>
        {data.map((empl) => (
          <TableRow
            key={empl.info.id}
            empl={empl}
            columns={columns}
            onClick={onRowClick}
          />
        ))}
      </tbody>
    </table>
  );
};
