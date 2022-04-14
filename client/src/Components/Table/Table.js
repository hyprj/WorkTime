import classes from "./table.module.scss";

const Table = ({ headData, bodyData }) => {
  return (
    <table className={classes.table}>
      <thead className={classes.tableHead}>
        <tr>
          {headData.map((item) => (
            <th
              className={`${classes.tableItem} ${classes.tableHeadItem}`}
              key={item}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.tableBody}>
        {bodyData.map((item) => (
          <tr className={classes.tableRow} key={item.id}>
            <td className={classes.tableItem}>{item.id}</td>
            {item.data.map((elem) => (
              <td className={classes.tableItem} key={`${item.id}${elem.day}`}>
                {elem?.text}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
