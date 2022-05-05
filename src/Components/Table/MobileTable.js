import React, { useContext } from "react";
import { AccessContext } from "../../context/AccessContext";

import classes from "./mobileTable.module.scss";

export const MobileTable = ({ data }) => {
  // console.log(data)
  const user = useContext(AccessContext);
  const employees = [data[user.userId]];
  const headData = ["", "1", "2", "3", "4", "5", "6", "7"];
  return (
    <table className={classes.table}>
      <tbody className={classes.tableBody}>
        {headData.map((item, index) => {
          return (
            <tr className={classes.tableRow}>
              <td className={classes.tableHeader}>{item}</td>
              <td className={classes.tableItem}>
                {index > 0 && employees[0].shifts[index - 1].text && (
                  <div
                    className={`${classes.tableTime} ${classes.tableTimeBlue}`}
                  >
                    {/* {bodyData[0].data[index - 1].text} */}
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
