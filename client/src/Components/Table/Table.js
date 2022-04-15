import classes from "./table.module.scss";

const Table = ({ headData, bodyData, options }) => {
  const getTd = (position, elem) => {
    const { day } = elem;

    if (elem.text) {
      const color = options.find((elem) => elem.position === position).color;
      return (
        <td key={`${elem.id}${day}`} className={classes.tableItem}>
          <div className={`${classes.tableItemTime} ${classes[color]}`}>
            {elem.text}
          </div>
        </td>
      );
    }
    return <td className={classes.tableItem} key={`${elem.id}${day}`}></td>;
  };

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
            {item.data.map((elem) => getTd(item.position, elem))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
