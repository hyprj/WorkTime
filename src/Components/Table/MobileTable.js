import classes from "./mobileTable.module.scss";

export const MobileTable = ({ headData, bodyData, options }) => {
  // const createTable = () => {
    return (
      <>
        <table className={classes.table}>
          <tbody className={classes.tableBody}>
            {headData.map((item, index) => {
              return (
                <tr className={classes.tableRow}>
                  <td className={classes.tableHeader}>{item}</td>
                  <td className={classes.tableItem}>
                    {index > 0 && bodyData[0].data[index - 1].text && (
                      <div className={`${classes.tableTime} ${classes.tableTimeBlue}`}>
                        {bodyData[0].data[index - 1].text}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  // };

  // return createTable();
};
